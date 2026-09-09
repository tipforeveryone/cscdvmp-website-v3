<?php
namespace Grav\Theme;

use Grav\Common\Grav;
use Grav\Common\Theme;

class EzTheme extends Theme
{
    /**
     * User-Agent của các bot AI đã biết (huấn luyện model / trả lời có
     * trích dẫn web) — dùng để chặn CỨNG (403) trang có header.private:
     * true, vì phần lớn các bot này KHÔNG tôn trọng thẻ <meta
     * name="robots"> (đó là quy ước dành cho search-engine index, không
     * phải "đồng ý crawl để train"), chỉ tôn trọng robots.txt một cách tự
     * nguyện (và không phải bot nào cũng tuân thủ) — nên phải chặn ở tầng
     * request mới thực sự ngăn được việc "bị crawl". Danh sách không thể
     * đầy đủ tuyệt đối (bot giả UA thì vô phương), chỉ chặn được các bot
     * trung thực khai đúng danh tính.
     */
    private const AI_BOT_USER_AGENTS = [
        'GPTBot', 'ChatGPT-User', 'OAI-SearchBot',           // OpenAI
        'ClaudeBot', 'Claude-Web', 'anthropic-ai',           // Anthropic
        'Google-Extended',                                    // Google Gemini/Bard training (khác Googlebot Search)
        'Applebot-Extended',                                  // Apple Intelligence training (khác Applebot Search)
        'CCBot',                                              // Common Crawl (nguồn train của nhiều model)
        'PerplexityBot', 'Perplexity-User',                  // Perplexity
        'Bytespider',                                         // ByteDance/TikTok
        'Amazonbot',                                          // Amazon
        'Diffbot',
        'FacebookBot', 'Meta-ExternalAgent', 'meta-externalfetcher', // Meta
        'YouBot',                                             // You.com
        'cohere-ai', 'cohere-training-data-crawler',         // Cohere
        'Omgili', 'Omgilibot',
        'Timpibot', 'ImagesiftBot',
    ];

    public static function getSubscribedEvents()
    {
        return [
            'onThemeInitialized'    => ['onThemeInitialized', 0],
            'onTwigLoader'          => ['onTwigLoader', 0],
            'onTwigInitialized'     => ['onTwigInitialized', 0],
            'onPageInitialized'     => ['onPageInitialized', 0],
        ];
    }

    public function onThemeInitialized()
    {
        // Theme initialization
    }

    /**
     * Trang publish nhưng có frontmatter `private: true` (quy ước đã có
     * sẵn của site, xem blog.html.twig/home-blog.html.twig — dùng để ẩn
     * khỏi danh sách blog) thì KHÔNG được crawl bởi search engine hay AI:
     * - Search engine (Google/Bing...): gửi X-Robots-Tag noindex — đây là
     *   tín hiệu "đừng index", không chặn truy cập (đúng chuẩn SEO, tránh
     *   chặn cứng Googlebot trông như cloaking). Thẻ <meta robots> tương
     *   ứng nằm ở partials/base.html.twig (do template gọi trực tiếp,
     *   theo đúng pattern sog_tags() của plugin simple-opengraph-info).
     * - Bot AI đã biết danh tính (AI_BOT_USER_AGENTS ở trên): chặn CỨNG
     *   403 ngay tại đây — xem giải thích ở khai báo hằng số phía trên vì
     *   sao meta/X-Robots-Tag không đủ với nhóm này.
     *
     * Bỏ qua hoàn toàn trong Admin (Utils::isAdminPlugin()) để không chặn
     * chính người biên tập xem/sửa trang private.
     */
    public function onPageInitialized(): void
    {
        if (\Grav\Common\Utils::isAdminPlugin()) {
            return;
        }

        $page = $this->grav['page'] ?? null;
        // "?? false" bắt buộc: page.header() có thể trả về stdClass CHƯA
        // từng khai báo field "private" (khác Data object có __get an
        // toàn), truy cập property trực tiếp trên stdClass không tồn tại
        // ném E_WARNING (PHP 8) -> Whoops biến thành exception khi debug
        // bật. Twig (page.header.private) không bị vì dùng PropertyAccess
        // riêng, trả null lặng lẽ khi thiếu — chỉ code PHP thô ở đây cần "??".
        if (!$page || !($page->header()->private ?? false)) {
            return;
        }

        header('X-Robots-Tag: noindex, nofollow, noarchive, noimageindex', true);

        $userAgent = $_SERVER['HTTP_USER_AGENT'] ?? '';
        if ($userAgent === '') {
            return;
        }
        foreach (self::AI_BOT_USER_AGENTS as $bot) {
            if (stripos($userAgent, $bot) !== false) {
                header('HTTP/1.1 403 Forbidden');
                header('X-Robots-Tag: noindex, nofollow', true);
                die('Forbidden');
            }
        }
    }

    /**
     * Fallback cho các hàm smls_* (đa ngôn ngữ) mà theme gọi trong
     * partials/header.html.twig, partials/base.html.twig, article-list.html.twig.
     * Bình thường các hàm này do plugin "Simple Multi Language Site" đăng ký.
     *
     * Không dùng $twig->getFunction()/hasFunction() để "kiểm tra rồi mới thêm"
     * — gọi getFunction() ép Twig chốt (finalize) danh sách extension ngay
     * lúc đó, nên nếu plugin addFunction() SAU khi theme đã gọi getFunction(),
     * Twig ném lỗi "extensions have already been initialized". Thay vào đó
     * kiểm tra thẳng config bật/tắt của plugin — nếu đang bật thì coi như nó
     * sẽ tự đăng ký hàm thật, theme không đụng vào; nếu tắt/chưa cài, theme
     * tự đăng ký fallback tái hiện đúng hành vi cũ (chỉ vi/en, suy theo path)
     * để không bị lỗi Twig "Unknown function" và vỡ toàn site.
     */
    public function onTwigInitialized(): void
    {
        // Chỉ theme frontend (header/base/article-list) gọi smls_* — Admin dùng
        // theme riêng của nó, không cần các hàm này. Bỏ qua hẳn trong Admin để
        // không có nguy cơ đụng độ thời điểm khởi tạo Twig extension của Admin
        // (Admin có thể tự init/finalize Twig sớm hơn frontend trong 1 số case,
        // và addFunction() sau khi đã finalize sẽ ném lỗi "extensions have
        // already been initialized" — từng gặp lỗi này 1 lần, xem README của
        // plugin SMLS).
        if (\Grav\Common\Utils::isAdminPlugin()) {
            return;
        }

        $pluginEnabled = (bool) $this->grav['config']->get('plugins.simple-multi-language-site.enabled', false);
        if ($pluginEnabled) {
            return;
        }

        $twig = $this->grav['twig']->twig();

        $twig->addFunction(new \Twig\TwigFunction('smls_languages', function (): array {
            return [];
        }));

        $twig->addFunction(new \Twig\TwigFunction('smls_default_language', function (): string {
            return 'en';
        }));

        $twig->addFunction(new \Twig\TwigFunction('smls_current_language', function ($page = null): string {
            $route = $page ? '/' . ltrim((string) $page->route(), '/') : '';

            return ($route === '/vi' || strpos($route, '/vi/') === 0) ? 'vi' : 'en';
        }));

        $twig->addFunction(new \Twig\TwigFunction('smls_root_path', function (string $code): string {
            return $code === 'vi' ? '/vi' : '/en';
        }));

        $twig->addFunction(new \Twig\TwigFunction('smls_switch_route', function ($page = null, string $targetCode = ''): ?string {
            return null;
        }));

        $twig->addFunction(new \Twig\TwigFunction('smls_switcher_display', function (): string {
            return 'text';
        }));
    }

    // Add images to twig template paths to allow inclusion of SVG files
    public function onTwigLoader()
    {
        $theme_paths = Grav::instance()['locator']->findResources('theme://images');
        foreach($theme_paths as $images_path) {
            $this->grav['twig']->addPath($images_path, 'images');
        }
    }
}
