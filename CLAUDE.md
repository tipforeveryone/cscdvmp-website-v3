# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## What this is

This repo is a **Grav CMS** (flat-file PHP CMS, no database required) installation, running under **DDEV**
(project name `eznotary2`, PHP 8.3, nginx-fpm — see `.ddev/config.yaml`). Grav core lives in `system/`;
site content, config, and plugins live in `user/`.

The substantial custom application code is the **`api` plugin** (`user/plugins/api/`) — a full headless
REST API for Grav (`/api/v1/...`) built for AI agents, MCP servers, and a decoupled "admin-next" frontend.
It effectively supersedes the legacy `admin` (admin-classic) plugin for programmatic/agent-driven use.
**Read `user/plugins/api/README.md` before working on API behavior** — it documents auth, permissions,
config diffing, page-level ACLs, webhooks, events, and more in detail not repeated here.

Installed plugins (`user/plugins/`): `api` (custom, see above), `admin` (stock admin-classic UI),
`login`, `flex-objects`, `form`, `email`, `shortcode-core`, `problems`, `error`, `github-markdown-alerts`.
Only `problems`, `error`, `github-markdown-alerts`, and the `quark2` theme are tracked as external git
deps (see `.dependencies`); `admin`, `api`, `login`, `flex-objects`, `form`, `email` are vendored directly
into `user/plugins/`.

## Commands

Run these from the repo root (or `ddev exec ...` / `ddev ssh` if working through DDEV containers).

### Grav core

```bash
composer install                    # install PHP deps (also runs bin/grav install on fresh project-create)
bin/grav install                    # install/update plugin & theme dependencies declared in .dependencies
bin/gpm index                       # list available GPM packages
bin/gpm install <plugin/theme>      # install a plugin/theme
bin/gpm update / bin/gpm selfupgrade
bin/grav server                     # run local dev server (Symfony local server)
bin/grav clear-cache
```

### Tests (Grav core)

```bash
composer test                                          # run full Codeception unit suite
composer test tests/unit/Grav/Common/AssetsTest.php     # run a single test file
composer test-windows                                   # Windows equivalent
```

### Static analysis (Grav core)

```bash
composer phpstan             # level 2, system/src
composer phpstan-framework   # level 6, stricter, Framework/Events/Installer only
composer phpstan-plugins     # level 1, user/plugins
```

### `api` plugin (the custom REST API — most day-to-day work happens here)

The plugin has its own composer/PHPUnit setup, independent of the Grav-core test suite:

```bash
cd user/plugins/api
composer install
composer test                              # vendor/bin/phpunit — unit tests, excludes 'integration' group
vendor/bin/phpunit tests/Unit/PageAclTest.php   # run a single test
vendor/bin/phpunit --group integration     # integration tests (need a real Grav install; YAML-dependent)
```

Most unit tests use lightweight stubs (`tests/Stubs/GravStubs.php`) and don't need a booted Grav instance;
YAML-dependent tests (config diffing, page header merging, API key storage) do — the bootstrap
auto-detects the hosting Grav install, or point it at one with `GRAV_ROOT=/path/to/grav composer test`.

Postman/Newman collection (`grav-api.postman_collection.json`) for endpoint-level testing:

```bash
cd user/plugins/api
npm install
npm run test:api            # ./tests/newman/run.sh
npm run test:api:verbose
```

### CLI: generating API keys (needed to exercise the API manually)

```bash
bin/plugin api keys:generate --user=admin --name="My Key"
bin/plugin api keys:list --user=admin
bin/plugin api keys:revoke --user=admin [key-id]
```

## Architecture

### Grav core request lifecycle

Everything boots through `index.php` → `Grav\Common\Grav::instance()` → `$grav->process()`.
`Grav` (`system/src/Grav/Common/Grav.php`) is a Pimple-based DI container (via `GravTrait`); almost every
subsystem is resolved as a container service (`$grav['config']`, `$grav['page']`, `$grav['uri']`, etc.),
registered by the `Service\*ServiceProvider` classes in `system/src/Grav/Common/Service/`.

`process()` runs an ordered pipeline of **Processors** (`system/src/Grav/Common/Processors/`), each
implementing `ProcessorInterface` and firing lifecycle events (`Processors/Events/`) that plugins hook
into: `Initialize → Plugins → Pages → Themes → Twig → Assets → Backups → Scheduler → Tasks → Request →
Debugger → Render`. Plugin/theme event subscriptions (`onPluginsInitialized`, `onPagesInitialized`,
`onThemeInitialized`, etc.) are the primary extension point — see any `*.php` plugin main class's
`getSubscribedEvents()`.

Key core concepts, each with its own subtree under `system/src/Grav/Common/`:
- **Pages** (`Page/`) — flat-file content tree, one folder per page under `user/pages/`, Markdown +
  YAML frontmatter, resolved via blueprints for the field schema.
- **Flex** (`Flex/`) — newer generic object/collection framework layered on top of Pages/Users/Accounts;
  the `api` plugin's `FlexBackend` uses this for its accounts/pages backend.
  `user/data/flex/` holds Flex-backed data.
  Note: `now.json` is a legacy Vercel/Zeit `now` deployment config — unrelated to Grav's Flex system despite the naming similarity.
- **Data/Blueprints** (`Data/`, `system/blueprints/`, `Common/Data`) — YAML schema-driven forms/config,
  with `extends@`/`import@` inheritance resolution (the `api` plugin exposes this over HTTP at
  `/blueprints/*`).
- **Config** (`Config/`) — layered YAML config: core defaults (`system/config/`) → environment
  overrides (`user/env/<name>/config/`) → site config (`user/config/`) → plugin/theme config.
  `.env` files (see `.env.example`) can inject/override config values without touching YAML.
- **Console** (`Console/`) — Symfony Console commands backing `bin/grav` (`Cli/`) and `bin/gpm` (`Gpm/`),
  plus the `bin/plugin` command loader that plugins hook into via their own `cli/` classes (this is how
  `api keys:generate` etc. are wired up).

### The `api` plugin (`user/plugins/api/`)

Structure (see `classes/Api/`):
- `ApiRouter.php` / `ApiRouteCollector.php` — FastRoute-based dispatcher; plugins can register their own
  routes via the `onApiRegisterRoutes` event.
- `Auth/` — three interchangeable authenticators (API key, JWT, session-passthrough), tried in order.
- `Middleware/` — CORS, auth, rate limiting, method override (`X-HTTP-Method-Override`), JSON body parsing,
  demo-mode write lock.
- `Controllers/` — one per resource (Pages, Media, Users, Config, GPM, Scheduler, Webhooks, Dashboard,
  Blueprints, Auth, System...); all extend `AbstractApiController`.
- `Serializers/` — resource → JSON shape.
- `Webhooks/` — outbound event notification system (HMAC-signed deliveries, retry/backoff, auto-disable).
- `Audit/`, `Popularity/`, `Demo/` — audit logging, page-view tracking, and a resettable demo-mode sandbox.
- `PageAcl.php` / `PermissionResolver.php` — resolves Grav ACL permissions plus **page-level** permission
  overrides declared in page frontmatter (`permissions:` block) — see README's "Page-level permissions"
  section for the grant/deny resolution order (page rules can both widen and narrow the account-wide
  `api.pages.*` permission for that subtree).
- `admin-next/` (here and in `flex-objects/`) — JS web components contributed to the decoupled admin
  frontend via `onApiSidebarItems` / `onApiPluginPageInfo` events, served through the API rather than
  admin-classic's server-rendered Twig UI.

The API fires both its own `onApi*` events and the legacy `onAdmin*` events that admin-classic plugins
expect (in that order: `onApiBefore* → onAdmin* → onApiAfter*`), so third-party plugins written against
admin-classic (SEO Magic, Auto Date, etc.) work unmodified against API-driven changes.

Config lives in `user/plugins/api/api.yaml` (site overrides in `user/config/plugins/api.yaml`); secrets
(JWT signing key) are auto-generated into `user/config/plugins/api-private.php`, mirroring how Grav core
keeps `security-private.php` out of the main config tree.

### Custom `index.php` behavior (deviates from stock Grav)

This `index.php` has site-specific additions on top of stock Grav bootstrap:
- Detects the Symfony local server / PHP built-in server (`cli-server` SAPI) instead of requiring
  `system/router.php` when the request clearly came from `bin/grav server`.
- Serves static assets for plugin-bundled SPAs directly (bypassing Grav bootstrap) via a
  `user/config/plugin-asset-map.php` route-prefix → disk-path map, with strict path-containment checks
  (guards against a `GHSA-4v9q-p283-qc2m`-style prefix-matching traversal).
- Supports a `.upgrading` maintenance-mode flag file (auto-expires after 5 minutes) that serves a 503
  during core upgrades.

### Testing layout

- `tests/unit`, `tests/functional`, `tests/acceptance`, `tests/conformance` — Grav core (Codeception).
- `tests/fake/` — fixture "fake sites" (`simple-site`, `nested-site`, `single-pages`, etc.) used as test
  fixtures for page-system tests.
- `tests/phpstan/` — PHPStan config + stub classes.
- `user/plugins/api/tests/` — plugin-local PHPUnit suite, independent of the above (`Unit/`, `Integration/`,
  `Stubs/`, plus a `newman/` Postman-based endpoint test runner).
