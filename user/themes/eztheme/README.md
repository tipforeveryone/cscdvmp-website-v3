# EzTheme

Grav 2.0/PHP 8.3 port of the old Grav 1.7 `eznotary` theme, done for pixel parity with the client's
existing site. This is a straight port of the theme's templates, SASS/CSS, JS, and blueprints — not a
redesign.

## What's ported

- All page templates (`default`, `article`, `article-list`, `home`, `member`, `members`, `content-page`,
  `lienhe`, `dangxaydung`, `baotri`, `block-content`, `error`), their `templates/partials/` and
  `templates/modular/` includes, and the `block-content`/`member`/`modular/slider` blueprints.
- `css/site.css` — carried over as the already-compiled, verified-current stylesheet from the 1.7 theme.
  `sass/site.sass` (single 2,600+ line indented-syntax file, no `@import` splitting) is included as the
  maintainable source. There's no committed build pipeline for it (the original theme had none either —
  just a metadata-only `package.json`); if you need to edit and recompile it:
  ```
  npm i -D sass
  npx sass sass/site.sass css/site.css
  ```
- `js/site.js` — vanilla ES6, no build step, carried over unchanged.
- `images/` — slider images, avatar placeholder, and the `hoidoan/` (professional-association) logos.

## Status

- **Page content**: migrated — `user/pages/{vi,en,tutorial}` now hold the real site content (see the
  `simple-multi-language-site` plugin's config for the vi/en setup). `baotri/` was intentionally not
  migrated (superseded by eznotary2's own `.upgrading` maintenance-mode mechanism in `index.php`).
- **`tip_visitor_gadget()`** / `tip_visitor_gadget_available` (from the `visitor-gadget` plugin, now ported —
  `user/plugins/visitor-gadget`) is wired back up in `templates/partials/footer.html.twig`.
- **`pml_edit_button()`** / `ipeb-editable` (from the `in-place-edit-button` plugin, now ported —
  `user/plugins/in-place-edit-button`) is wired back up in every template that used it in the 1.7 original:
  `article.html.twig`, `content-page.html.twig`, `member.html.twig`, `members.html.twig`,
  `partials/article-grid.html.twig`, and `modular/{dichvucotloi,tamnhinsumenh,doingu,quytrinh,kienthucphaply}.html.twig`.
- **`blueprints/modular/slider.yaml`** is a known pre-existing quirk carried over as-is: it's disconnected
  from `templates/partials/slider.html.twig`, which hardcodes 3 slide images rather than reading
  `page.header.slides`. Not something this port silently "fixed" — same behavior as the 1.7 original.

## SMLS integration

`eztheme.php`'s `onTwigInitialized()` registers safe no-op fallbacks for the `smls_*` functions
(language switcher, current-language detection, etc.), gated behind `Utils::isAdminPlugin()` and the
`plugins.simple-multi-language-site.enabled` config flag — the same pattern documented in the SMLS
plugin's own README (`user/plugins/simple-multi-language-site/README.md`). When SMLS is enabled, its own
real functions take over automatically.

## Requirements

- The `pagination` plugin (official `getgrav/grav-plugin-pagination`) — `article-list.html.twig` depends
  on its `partials/pagination.html.twig`.
- The `visitor-gadget` and `in-place-edit-button` plugins — the theme calls their Twig functions
  (`tip_visitor_gadget()`, `pml_edit_button()`) unconditionally in several templates; unlike `smls_*`
  (which has a real on/off config toggle plugins are expected to flip at runtime, so the theme registers
  safe no-op fallbacks for it), these two are treated as hard companion plugins that must stay installed
  and enabled, the same way `pagination` is — removing either would throw "Unknown function" at Twig
  compile time.
