<?php
namespace Grav\Theme;

use Grav\Common\Grav;
use Grav\Common\Theme;

class EzTheme extends Theme
{
    public static function getSubscribedEvents()
    {
        return [
            'onThemeInitialized'    => ['onThemeInitialized', 0],
            'onTwigLoader'          => ['onTwigLoader', 0],
            'onTwigInitialized'     => ['onTwigInitialized', 0],
        ];
    }

    public function onThemeInitialized()
    {
        // Theme initialization
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
