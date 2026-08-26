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

    // Initialize responsive behavior
    initializeResponsive();
});

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
    
    // Handle submenu clicks on mobile/tablet
    submenuItems.forEach(item => {
        const link = item.querySelector('.menu-link');
        
        link.addEventListener('click', function(e) {
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
