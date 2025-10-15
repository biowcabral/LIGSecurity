// ===== MAIN JAVASCRIPT FILE =====

// ===== UTILITY FUNCTIONS =====
const $ = (selector) => document.querySelector(selector);
const $$ = (selector) => document.querySelectorAll(selector);

const debounce = (func, wait) => {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
};

const throttle = (func, limit) => {
    let inThrottle;
    return function() {
        const args = arguments;
        const context = this;
        if (!inThrottle) {
            func.apply(context, args);
            inThrottle = true;
            setTimeout(() => inThrottle = false, limit);
        }
    }
};

// ===== INTERSECTION OBSERVER FOR ANIMATIONS =====
class AnimationObserver {
    constructor() {
        this.observer = new IntersectionObserver(
            (entries) => this.handleIntersection(entries),
            {
                threshold: 0.1,
                rootMargin: '0px 0px -50px 0px'
            }
        );
        this.init();
    }

    init() {
        const animatedElements = $$('[data-animate]');
        animatedElements.forEach(el => this.observer.observe(el));
        
        // Auto-add animation classes to common elements
        $$('.hero__title, .hero__description, .hero__actions').forEach((el, index) => {
            el.setAttribute('data-animate', 'fadeInUp');
            el.style.animationDelay = `${index * 0.3}s`;
            this.observer.observe(el);
        });
        
        $$('.stat').forEach((el, index) => {
            el.setAttribute('data-animate', 'fadeInUp');
            el.style.animationDelay = `${index * 0.2}s`;
            this.observer.observe(el);
        });
    }

    handleIntersection(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const element = entry.target;
                const animation = element.getAttribute('data-animate');
                element.style.opacity = '1';
                element.style.animation = `${animation} 1s ease forwards`;
                this.observer.unobserve(element);
            }
        });
    }
}

// ===== NAVIGATION =====
class Navigation {
    constructor() {
        this.header = $('#header');
        this.navToggle = $('#nav-toggle');
        this.navMenu = $('#nav-menu');
        this.navLinks = $$('.nav__link');
        this.sections = $$('section[id]');
        
        this.init();
    }

    init() {
        this.handleScroll();
        this.handleMobileMenu();
        this.handleSmoothScroll();
        this.handleActiveSection();
        
        window.addEventListener('scroll', throttle(() => this.handleScroll(), 100));
        window.addEventListener('scroll', throttle(() => this.handleActiveSection(), 100));
    }

    handleScroll() {
        if (window.scrollY > 50) {
            this.header.classList.add('scrolled');
        } else {
            this.header.classList.remove('scrolled');
        }
    }

    handleMobileMenu() {
        this.navToggle?.addEventListener('click', () => {
            this.navMenu.classList.toggle('active');
            const icon = this.navToggle.querySelector('i');
            icon.className = this.navMenu.classList.contains('active') 
                ? 'fas fa-times' 
                : 'fas fa-bars';
        });

        // Close menu when clicking on links
        this.navLinks.forEach(link => {
            link.addEventListener('click', () => {
                this.navMenu.classList.remove('active');
                const icon = this.navToggle?.querySelector('i');
                if (icon) icon.className = 'fas fa-bars';
            });
        });
    }

    handleSmoothScroll() {
        this.navLinks.forEach(link => {
            link.addEventListener('click', (e) => {
                e.preventDefault();
                const targetId = link.getAttribute('href');
                const targetSection = $(targetId);
                
                if (targetSection) {
                    const offsetTop = targetSection.offsetTop - 70;
                    window.scrollTo({
                        top: offsetTop,
                        behavior: 'smooth'
                    });
                }
            });
        });
    }

    handleActiveSection() {
        let current = '';
        
        this.sections.forEach(section => {
            const sectionTop = section.offsetTop - 100;
            const sectionHeight = section.clientHeight;
            
            if (window.scrollY >= sectionTop && window.scrollY < sectionTop + sectionHeight) {
                current = section.getAttribute('id');
            }
        });

        this.navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === `#${current}`) {
                link.classList.add('active');
            }
        });
    }
}

// ===== STATISTICS COUNTER =====
class StatsCounter {
    constructor() {
        this.stats = $$('.stat__number');
        this.hasAnimated = false;
        this.init();
    }

    init() {
        const observer = new IntersectionObserver(
            (entries) => this.handleIntersection(entries),
            { threshold: 0.5 }
        );

        this.stats.forEach(stat => observer.observe(stat));
    }

    handleIntersection(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting && !this.hasAnimated) {
                this.animateCounters();
                this.hasAnimated = true;
            }
        });
    }

    animateCounters() {
        this.stats.forEach(stat => {
            const target = parseInt(stat.getAttribute('data-target'));
            const increment = target / 100;
            let current = 0;

            const timer = setInterval(() => {
                current += increment;
                if (current >= target) {
                    stat.textContent = target + (stat.textContent.includes('%') ? '%' : '+');
                    clearInterval(timer);
                } else {
                    stat.textContent = Math.floor(current);
                }
            }, 20);
        });
    }
}

// ===== CONTACT FORM =====
class ContactForm {
    constructor() {
        this.form = $('#contact-form');
        this.init();
    }

    init() {
        if (!this.form) return;
        
        this.form.addEventListener('submit', (e) => this.handleSubmit(e));
        
        // Add input validation
        const inputs = this.form.querySelectorAll('input, textarea, select');
        inputs.forEach(input => {
            input.addEventListener('blur', () => this.validateInput(input));
            input.addEventListener('input', () => this.clearErrors(input));
        });
    }

    handleSubmit(e) {
        e.preventDefault();
        
        if (this.validateForm()) {
            this.showSuccess();
            this.form.reset();
        }
    }

    validateForm() {
        const inputs = this.form.querySelectorAll('input[required], textarea[required], select[required]');
        let isValid = true;
        
        inputs.forEach(input => {
            if (!this.validateInput(input)) {
                isValid = false;
            }
        });
        
        return isValid;
    }

    validateInput(input) {
        const value = input.value.trim();
        const type = input.type;
        let isValid = true;
        let message = '';

        // Required validation
        if (input.hasAttribute('required') && !value) {
            isValid = false;
            message = 'Este campo é obrigatório';
        }
        
        // Email validation
        else if (type === 'email' && value) {
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailRegex.test(value)) {
                isValid = false;
                message = 'Digite um email válido';
            }
        }
        
        // Phone validation
        else if (type === 'tel' && value) {
            const phoneRegex = /^[\d\s\-\(\)]+$/;
            if (!phoneRegex.test(value) || value.length < 10) {
                isValid = false;
                message = 'Digite um telefone válido';
            }
        }

        this.showInputError(input, isValid, message);
        return isValid;
    }

    showInputError(input, isValid, message) {
        const formGroup = input.closest('.form-group');
        let errorElement = formGroup.querySelector('.error-message');
        
        if (!isValid) {
            input.style.borderColor = 'var(--danger-color)';
            
            if (!errorElement) {
                errorElement = document.createElement('span');
                errorElement.className = 'error-message';
                errorElement.style.cssText = 'color: var(--danger-color); font-size: var(--font-size-sm); margin-top: var(--space-1); display: block;';
                formGroup.appendChild(errorElement);
            }
            errorElement.textContent = message;
        } else {
            input.style.borderColor = '';
            if (errorElement) {
                errorElement.remove();
            }
        }
    }

    clearErrors(input) {
        input.style.borderColor = '';
        const formGroup = input.closest('.form-group');
        const errorElement = formGroup.querySelector('.error-message');
        if (errorElement) {
            errorElement.remove();
        }
    }

    showSuccess() {
        // Create success message
        const successDiv = document.createElement('div');
        successDiv.innerHTML = `
            <div style="
                background: var(--success-color);
                color: var(--white);
                padding: var(--space-4);
                border-radius: var(--radius-lg);
                margin-bottom: var(--space-4);
                display: flex;
                align-items: center;
                gap: var(--space-2);
            ">
                <i class="fas fa-check-circle"></i>
                <span>Mensagem enviada com sucesso! Entraremos em contato em breve.</span>
            </div>
        `;
        
        this.form.insertBefore(successDiv.firstElementChild, this.form.firstChild);
        
        // Remove success message after 5 seconds
        setTimeout(() => {
            const successMessage = this.form.querySelector('[style*="success-color"]');
            if (successMessage) {
                successMessage.remove();
            }
        }, 5000);
    }
}

// ===== BACK TO TOP BUTTON =====
class BackToTop {
    constructor() {
        this.button = $('#back-to-top');
        this.init();
    }

    init() {
        if (!this.button) return;

        window.addEventListener('scroll', throttle(() => this.handleScroll(), 100));
        this.button.addEventListener('click', () => this.scrollToTop());
    }

    handleScroll() {
        if (window.scrollY > 300) {
            this.button.classList.add('visible');
        } else {
            this.button.classList.remove('visible');
        }
    }

    scrollToTop() {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    }
}

// ===== LAZY LOADING FOR IMAGES =====
class LazyLoader {
    constructor() {
        this.images = $$('img[data-src]');
        this.init();
    }

    init() {
        if ('IntersectionObserver' in window) {
            const imageObserver = new IntersectionObserver(
                (entries) => this.handleIntersection(entries),
                { rootMargin: '50px 0px' }
            );

            this.images.forEach(img => imageObserver.observe(img));
        } else {
            // Fallback for older browsers
            this.images.forEach(img => this.loadImage(img));
        }
    }

    handleIntersection(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                this.loadImage(entry.target);
                entry.target.observer?.unobserve(entry.target);
            }
        });
    }

    loadImage(img) {
        const src = img.getAttribute('data-src');
        if (src) {
            img.src = src;
            img.removeAttribute('data-src');
            img.classList.add('loaded');
        }
    }
}

// ===== PERFORMANCE OPTIMIZATIONS =====
class PerformanceOptimizer {
    constructor() {
        this.init();
    }

    init() {
        // Preload critical resources
        this.preloadCriticalImages();
        
        // Optimize scroll performance
        this.optimizeScrollPerformance();
        
        // Add loading states
        this.addLoadingStates();
    }

    preloadCriticalImages() {
        const criticalImages = [
            './images/WhatsApp Image 2025-10-15 at 11.05.25.jpeg'
        ];

        criticalImages.forEach(src => {
            const link = document.createElement('link');
            link.rel = 'preload';
            link.as = 'image';
            link.href = src;
            document.head.appendChild(link);
        });
    }

    optimizeScrollPerformance() {
        // Add passive event listeners
        const passiveSupported = this.supportsPassive();
        
        if (passiveSupported) {
            document.addEventListener('scroll', () => {}, { passive: true });
            document.addEventListener('touchstart', () => {}, { passive: true });
        }
    }

    supportsPassive() {
        let passiveSupported = false;
        try {
            const options = {
                get passive() {
                    passiveSupported = true;
                    return false;
                }
            };
            window.addEventListener('test', null, options);
            window.removeEventListener('test', null, options);
        } catch (err) {
            passiveSupported = false;
        }
        return passiveSupported;
    }

    addLoadingStates() {
        // Add loading class to body
        document.body.classList.add('loading');
        
        window.addEventListener('load', () => {
            document.body.classList.remove('loading');
            document.body.classList.add('loaded');
        });
    }
}

// ===== ACCESSIBILITY ENHANCEMENTS =====
class AccessibilityEnhancer {
    constructor() {
        this.init();
    }

    init() {
        this.addKeyboardNavigation();
        this.addAriaLabels();
        this.addFocusManagement();
        this.addReducedMotionSupport();
    }

    addKeyboardNavigation() {
        // Escape key to close mobile menu
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape') {
                const navMenu = $('#nav-menu');
                if (navMenu?.classList.contains('active')) {
                    navMenu.classList.remove('active');
                    const navToggle = $('#nav-toggle');
                    navToggle?.focus();
                }
            }
        });
    }

    addAriaLabels() {
        // Add missing aria-labels
        const navToggle = $('#nav-toggle');
        if (navToggle && !navToggle.getAttribute('aria-label')) {
            navToggle.setAttribute('aria-label', 'Toggle navigation menu');
        }

        // Add aria-expanded to nav toggle
        if (navToggle) {
            navToggle.setAttribute('aria-expanded', 'false');
            
            navToggle.addEventListener('click', () => {
                const isExpanded = $('#nav-menu')?.classList.contains('active');
                navToggle.setAttribute('aria-expanded', isExpanded);
            });
        }
    }

    addFocusManagement() {
        // Trap focus in mobile menu when open
        const navMenu = $('#nav-menu');
        const focusableElements = 'a[href], button, textarea, input[type="text"], input[type="radio"], input[type="checkbox"], select';
        
        if (navMenu) {
            navMenu.addEventListener('keydown', (e) => {
                if (e.key === 'Tab' && navMenu.classList.contains('active')) {
                    const focusableContent = navMenu.querySelectorAll(focusableElements);
                    const firstFocusable = focusableContent[0];
                    const lastFocusable = focusableContent[focusableContent.length - 1];

                    if (e.shiftKey) {
                        if (document.activeElement === firstFocusable) {
                            lastFocusable.focus();
                            e.preventDefault();
                        }
                    } else {
                        if (document.activeElement === lastFocusable) {
                            firstFocusable.focus();
                            e.preventDefault();
                        }
                    }
                }
            });
        }
    }

    addReducedMotionSupport() {
        // Check for reduced motion preference
        const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
        
        if (prefersReducedMotion.matches) {
            document.documentElement.style.setProperty('--transition-fast', '0s');
            document.documentElement.style.setProperty('--transition-base', '0s');
            document.documentElement.style.setProperty('--transition-slow', '0s');
        }
    }
}

// ===== INITIALIZATION =====
class App {
    constructor() {
        this.init();
    }

    init() {
        // Wait for DOM to be ready
        if (document.readyState === 'loading') {
            document.addEventListener('DOMContentLoaded', () => this.initializeApp());
        } else {
            this.initializeApp();
        }
    }

    initializeApp() {
        try {
            // Initialize all components
            new PerformanceOptimizer();
            new Navigation();
            new AnimationObserver();
            new StatsCounter();
            new ContactForm();
            new BackToTop();
            new LazyLoader();
            new AccessibilityEnhancer();
            
            console.log('✅ LIG Security website initialized successfully');
        } catch (error) {
            console.error('❌ Error initializing website:', error);
        }
    }
}

// ===== START APPLICATION =====
const app = new App();