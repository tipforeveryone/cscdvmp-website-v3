/**
 * Phuong Mai Law Theme JavaScript
 * Main theme functionality
 */

document.addEventListener('DOMContentLoaded', function() {
    // Initialize slider
    initializeSlider();

    // Initialize menu functionality
    initializeMenu();

    // Initialize progress/quy trình steps
    initializeProgressSteps();

    // Ease-in items from below when their section scrolls into view
    initScrollReveal('.quytrinh', '.quytrinh__step');
    initScrollReveal('.dichvucotloi', '.dichvucotloi__panel');

    // Shrink header on scroll

    // Add smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            const target = document.querySelector(this.getAttribute('href'));
            if (target && this.getAttribute('href') !== '#') {
                e.preventDefault();
                target.scrollIntoView({ behavior: 'smooth' });
            }
        });
    });

    // Tab ở khối "Game features"
    initGameFeatureTabs();

    // Slideshow ảnh trong các panel của khối "Game features"
    initGalleries();

    // Mục lục (TOC) bên trái nội dung bài viết wiki
    initWikiToc();

    // Initialize responsive behavior
    initializeResponsive();
});

/**
 * Mục lục bài viết wiki: dựng từ các thẻ h2/h3 thật có trong .wiki-article.
 * Chỉ hiện khối này (bật layout 2 cột qua class .has-toc trên .wiki-body) khi
 * bài viết có từ 2 đề mục trở lên — bài ngắn không cần mục lục.
 */
function initWikiToc() {
    const body = document.querySelector('.wiki-body');
    if (!body) return;

    const article = body.querySelector('.wiki-article');
    const toc = body.querySelector('.wiki-toc');
    const nav = toc ? toc.querySelector('.wiki-toc__nav') : null;
    if (!article || !toc || !nav) return;

    const headings = Array.from(article.querySelectorAll('h2, h3'));
    if (headings.length < 2) return;

    const usedIds = new Set();
    const slugify = (text) => {
        let slug = text
            .toString()
            .normalize('NFD').replace(/[\u0300-\u036f]/g, '')
            .replace(/đ/gi, 'd')
            .toLowerCase()
            .trim()
            .replace(/[^a-z0-9]+/g, '-')
            .replace(/^-+|-+$/g, '');
        if (!slug) slug = 'section';
        let unique = slug;
        let n = 2;
        while (usedIds.has(unique)) {
            unique = `${slug}-${n}`;
            n += 1;
        }
        usedIds.add(unique);
        return unique;
    };

    const rootList = document.createElement('ul');
    let currentTopList = rootList;

    headings.forEach((heading) => {
        if (!heading.id) heading.id = slugify(heading.textContent);

        const li = document.createElement('li');
        const a = document.createElement('a');
        a.href = `#${heading.id}`;
        a.textContent = heading.textContent;
        li.appendChild(a);

        if (heading.tagName === 'H3') {
            let sublist = currentTopList.lastElementChild
                ? currentTopList.lastElementChild.querySelector('ul')
                : null;
            if (!sublist && currentTopList.lastElementChild) {
                sublist = document.createElement('ul');
                currentTopList.lastElementChild.appendChild(sublist);
            }
            (sublist || rootList).appendChild(li);
        } else {
            rootList.appendChild(li);
            currentTopList = rootList;
        }
    });

    nav.appendChild(rootList);
    toc.hidden = false;
    // Bài có mục lục thì nới rộng khung nội dung lên bằng chiều ngang chung của
    // trang (giống trang gốc wiki) thay vì giữ khổ đọc hẹp 860px — 2 cột TOC +
    // bài viết cần nhiều chỗ hơn để không bị bóp chật. CSS (.wiki-body.has-toc)
    // tự lo việc bỏ max-width, chỉ cần gắn class ở đây.
    body.classList.add('has-toc');

    const links = Array.from(nav.querySelectorAll('a'));
    if (!links.length || !('IntersectionObserver' in window)) return;

    const setActive = (id) => {
        links.forEach((a) => a.classList.toggle('is-active', a.getAttribute('href') === `#${id}`));
    };

    const observer = new IntersectionObserver((entries) => {
        const visible = entries.filter((e) => e.isIntersecting);
        if (visible.length) setActive(visible[0].target.id);
    }, { rootMargin: '-100px 0px -70% 0px' });

    headings.forEach((h) => observer.observe(h));
}

/**
 * Tab: dải đề mục nằm ngang phía trên, bấm vào thì panel tương ứng hiện ở khối bên dưới.
 *
 * Markup mặc định (khi chưa có JS) để mọi panel cùng hiển thị, nên bước đầu
 * tiên là đánh dấu container bằng .is-enhanced — CSS chỉ ẩn panel không active
 * khi có class đó. Nhờ vậy nếu JS lỗi hoặc bị chặn, nội dung vẫn đọc được đầy đủ.
 */
function initGameFeatureTabs() {
    document.querySelectorAll('[data-cscd-tabs]').forEach(function (root) {
        const tabs = Array.prototype.slice.call(root.querySelectorAll('.cscd-tab'));
        const panels = Array.prototype.slice.call(root.querySelectorAll('.cscd-tabpanel'));

        if (tabs.length === 0 || tabs.length !== panels.length) {
            return;
        }

        root.classList.add('is-enhanced');

        function select(index, moveFocus) {
            tabs.forEach(function (tab, i) {
                const active = i === index;
                tab.classList.toggle('is-active', active);
                tab.setAttribute('aria-selected', active ? 'true' : 'false');
                tab.tabIndex = active ? 0 : -1;
                panels[i].classList.toggle('is-active', active);
            });

            if (moveFocus) {
                tabs[index].focus();
            }
        }

        tabs.forEach(function (tab, i) {
            tab.addEventListener('click', function () {
                select(i, false);
            });

            // Điều hướng bàn phím theo chuẩn WAI-ARIA cho tablist
            tab.addEventListener('keydown', function (e) {
                let next = null;

                if (e.key === 'ArrowDown' || e.key === 'ArrowRight') {
                    next = (i + 1) % tabs.length;
                } else if (e.key === 'ArrowUp' || e.key === 'ArrowLeft') {
                    next = (i - 1 + tabs.length) % tabs.length;
                } else if (e.key === 'Home') {
                    next = 0;
                } else if (e.key === 'End') {
                    next = tabs.length - 1;
                }

                if (next !== null) {
                    e.preventDefault();
                    select(next, true);
                }
            });
        });

        select(0, false);
    });
}

/**
 * Slideshow: ảnh lớn ở trên, dải thumbnail ngang ở dưới có hai mũi tên cuộn.
 *
 * Mũi tên cuộn dải thumbnail (không đổi ảnh lớn) — đúng với ý "bấm để hiện thêm
 * các ảnh khác". Nếu tất cả thumbnail đã nằm vừa trong khung thì không có gì để
 * cuộn, lúc đó ẩn hẳn hai mũi tên thay vì để chúng mờ và bấm không ăn.
 */
function initGalleries() {
    document.querySelectorAll('[data-cscd-gallery]').forEach(function (gallery) {
        const stage = gallery.querySelector('[data-cscd-gallery-stage]');
        const strip = gallery.querySelector('[data-cscd-gallery-thumbs]');
        const thumbs = Array.prototype.slice.call(gallery.querySelectorAll('.cscd-gallery__thumb'));
        const arrows = Array.prototype.slice.call(gallery.querySelectorAll('[data-cscd-gallery-arrow]'));

        if (!stage || !strip || thumbs.length === 0) {
            return;
        }

        // Đổi ảnh lớn khi bấm thumbnail
        thumbs.forEach(function (thumb) {
            thumb.addEventListener('click', function () {
                const src = thumb.getAttribute('data-cscd-gallery-src');
                if (!src || src === stage.getAttribute('src')) {
                    return;
                }

                stage.classList.add('is-swapping');

                // Chỉ đổi src sau khi ảnh mới tải xong, tránh nháy trắng giữa hai ảnh
                const preload = new Image();
                preload.onload = function () {
                    stage.setAttribute('src', src);
                    stage.classList.remove('is-swapping');
                };
                preload.onerror = function () {
                    stage.classList.remove('is-swapping');
                };
                preload.src = src;

                thumbs.forEach(function (other) {
                    const active = other === thumb;
                    other.classList.toggle('is-active', active);
                    other.setAttribute('aria-current', active ? 'true' : 'false');
                });
            });
        });

        function updateArrows() {
            // Sai số 2px cho phần lẻ khi trình duyệt làm tròn chiều rộng
            const scrollable = strip.scrollWidth - strip.clientWidth > 2;
            gallery.classList.toggle('has-overflow', scrollable);

            if (!scrollable) {
                return;
            }

            arrows.forEach(function (arrow) {
                const dir = parseInt(arrow.getAttribute('data-cscd-gallery-arrow'), 10);
                const atStart = strip.scrollLeft <= 2;
                const atEnd = strip.scrollLeft >= strip.scrollWidth - strip.clientWidth - 2;
                arrow.disabled = dir < 0 ? atStart : atEnd;
            });
        }

        arrows.forEach(function (arrow) {
            arrow.addEventListener('click', function () {
                const dir = parseInt(arrow.getAttribute('data-cscd-gallery-arrow'), 10);
                strip.scrollBy({ left: dir * strip.clientWidth * 0.8, behavior: 'smooth' });
            });
        });

        strip.addEventListener('scroll', updateArrows);
        window.addEventListener('resize', updateArrows);
        window.addEventListener('load', updateArrows);
        updateArrows();
    });
}

/**
 * Slider Class
 */
class HeroSlider {
    constructor(sliderElement) {
        this.slider = sliderElement;
        this.track = this.slider.querySelector('#sliderTrack');
        this.slides = this.track.querySelectorAll('.slide');
        this.prevBtn = this.slider.querySelector('#sliderPrev');
        this.nextBtn = this.slider.querySelector('#sliderNext');
        this.pagingDots = this.slider.querySelectorAll('.paging-dot');
        
        this.currentSlide = 0;
        this.totalSlides = this.slides.length;
        this.autoPlayInterval = null;
        this.autoPlayDelay = 3000; // 3 seconds
        this.transitionDuration = 800; // 0.8 seconds (matching CSS)
        
        this.init();
    }
    
    init() {
        this.slides.forEach((slide, i) => {
            slide.style.opacity = i === 0 ? '1' : '0';
        });
        this.attachEventListeners();
        this.startAutoPlay();
    }

    attachEventListeners() {
        this.prevBtn.addEventListener('click', () => this.goToPreviousSlide());
        this.nextBtn.addEventListener('click', () => this.goToNextSlide());
        this.pagingDots.forEach((dot, index) => {
            dot.addEventListener('click', () => this.goToSlide(index));
        });
        this.slider.addEventListener('mouseenter', () => this.stopAutoPlay());
        this.slider.addEventListener('mouseleave', () => this.startAutoPlay());
    }

    updateSliderPosition() {
        this.slides.forEach((slide, i) => {
            slide.style.opacity = i === this.currentSlide ? '1' : '0';
        });
        this.updatePagingDots();
    }

    updatePagingDots() {
        this.pagingDots.forEach((dot, index) => {
            dot.classList.toggle('active', index === this.currentSlide);
        });
    }

    goToSlide(index) {
        if (index >= 0 && index < this.totalSlides) {
            this.currentSlide = index;
            this.updateSliderPosition();
            this.resetAutoPlay();
        }
    }

    goToNextSlide() {
        this.currentSlide = (this.currentSlide + 1) % this.totalSlides;
        this.updateSliderPosition();
        this.resetAutoPlay();
    }

    goToPreviousSlide() {
        this.currentSlide = (this.currentSlide - 1 + this.totalSlides) % this.totalSlides;
        this.updateSliderPosition();
        this.resetAutoPlay();
    }
    
    startAutoPlay() {
        this.autoPlayInterval = setInterval(() => {
            this.goToNextSlide();
        }, this.autoPlayDelay);
    }
    
    stopAutoPlay() {
        if (this.autoPlayInterval) {
            clearInterval(this.autoPlayInterval);
        }
    }
    
    resetAutoPlay() {
        this.stopAutoPlay();
        this.startAutoPlay();
    }
}

/**
 * Initialize slider
 */
function initializeSlider() {
    const sliderElement = document.getElementById('heroSlider');
    if (sliderElement) {
        new HeroSlider(sliderElement);
    }
}

/**
 * Progress Steps Class (khối "Quy trình")
 */
class ProgressSteps {
    constructor(sectionElement) {
        this.section = sectionElement;
        this.stepWraps = this.section.querySelectorAll('.quytrinh__step');
        this.panels = this.section.querySelectorAll('.quytrinh__panel');
        this.currentStep = 1;
        this.fadeDuration = 300; // matches CSS transition on .quytrinh__panel

        this.init();
    }

    init() {
        this.stepWraps.forEach((wrap, index) => {
            const circle = wrap.querySelector('.quytrinh__circle');
            circle.addEventListener('click', () => this.goToStep(index + 1));
        });
    }

    goToStep(step) {
        if (step === this.currentStep || !this.panels[step - 1]) {
            return;
        }

        const oldPanel = this.panels[this.currentStep - 1];
        const newPanel = this.panels[step - 1];

        this.stepWraps.forEach((wrap, index) => {
            wrap.classList.toggle('active', index === step - 1);
        });

        oldPanel.style.opacity = '0';

        setTimeout(() => {
            oldPanel.classList.remove('active');
            newPanel.classList.add('active');
            newPanel.style.opacity = '0';

            requestAnimationFrame(() => {
                newPanel.style.opacity = '1';
            });
        }, this.fadeDuration);

        this.currentStep = step;
    }
}

/**
 * Initialize progress steps
 */
function initializeProgressSteps() {
    const section = document.querySelector('.quytrinh');
    if (section) {
        new ProgressSteps(section);
    }
}

/**
 * Ease-in items from below when their parent section scrolls into view.
 * Stagger timing between items is handled in CSS (transition-delay).
 */
function initScrollReveal(sectionSelector, itemSelector) {
    const section = document.querySelector(sectionSelector);
    if (!section) {
        return;
    }

    const items = section.querySelectorAll(itemSelector);
    if (!items.length) {
        return;
    }

    if (!('IntersectionObserver' in window)) {
        items.forEach((item) => item.classList.add('is-visible'));
        return;
    }

    const observer = new IntersectionObserver((entries, obs) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                items.forEach((item) => item.classList.add('is-visible'));
                obs.disconnect();
            }
        });
    }, { threshold: 0.3 });

    observer.observe(section);
}

/**
 * Initialize menu functionality
 */
function initializeMenu() {
    const menuToggle = document.getElementById('menuToggle');
    const mainNav = document.getElementById('mainNav');
    const submenuItems = document.querySelectorAll('.has-submenu');
    
    // Hamburger menu toggle
    if (menuToggle) {
        menuToggle.addEventListener('click', function(e) {
            e.preventDefault();
            this.classList.toggle('active');
            mainNav.classList.toggle('active');
        });
    }
    
    // Close menu when clicking outside
    document.addEventListener('click', function(e) {
        if (mainNav && menuToggle && !mainNav.contains(e.target) && !menuToggle.contains(e.target)) {
            menuToggle.classList.remove('active');
            mainNav.classList.remove('active');
        }
    });
    
    // Handle submenu clicks on mobile/tablet — trên desktop submenu đã tự mở
    // bằng CSS :hover (xem .has-submenu:hover .submenu), nên KHÔNG chặn click
    // ở đó nữa; nếu không, link cha có url thật (vd "Tổng quan" -> #about-cscd)
    // sẽ không bao giờ điều hướng được vì preventDefault() chạy vô điều kiện.
    submenuItems.forEach(item => {
        const link = item.querySelector('.menu-link');
        // Mục cha không có link thật (Download, Ủng hộ Dev) là <span>, không
        // phải <a> — bấm vào đó chỉ có ý nghĩa mở submenu nên vẫn toggle luôn
        // trên cả desktop, không cần đợi cỡ màn hình.
        const isSpanOnly = link.tagName === 'SPAN';

        link.addEventListener('click', function(e) {
            if (!isSpanOnly && window.innerWidth > 768) return;
            e.preventDefault();
            const isActive = item.classList.contains('active');
            // Close all other open submenus
            submenuItems.forEach(i => i.classList.remove('active'));
            if (!isActive) item.classList.add('active');
        });
    });

    // Close submenus when clicking outside
    document.addEventListener('click', function(e) {
        if (!e.target.closest('.has-submenu')) {
            submenuItems.forEach(item => item.classList.remove('active'));
        }
    });

    // Close submenus when screen is resized to desktop
    window.addEventListener('resize', function() {
        if (window.innerWidth > 768) {
            submenuItems.forEach(item => {
                item.classList.remove('active');
            });
            menuToggle.classList.remove('active');
            mainNav.classList.remove('active');
        }
    });
}


/**
 * Initialize responsive features
 */
function initializeResponsive() {
    // Add responsive behavior here
    
    // Adjust navigation on window resize
    const header = document.querySelector('header');
    
    window.addEventListener('resize', function() {
        // Handle any responsive adjustments needed
    });
}

/**
 * Utility function to add active class to current navigation item
 */
function highlightCurrentNav() {
    const currentLocation = location.pathname;
    const menuItems = document.querySelectorAll('.menu-link');
    
    menuItems.forEach(item => {
        if (item.getAttribute('href') === currentLocation) {
            item.classList.add('active');
        }
    });
}

// Call the function on page load
highlightCurrentNav();
