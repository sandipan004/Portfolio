/* ==========================================
   Portfolio JavaScript - Sandipan Dafadar
   Interactive Features & Animations
   ========================================== */

 // Custom Cursor
        const cursor = document.querySelector('.cursor');
        const cursorFollower = document.querySelector('.cursor-follower');

        document.addEventListener('mousemove', (e) => {
            cursor.style.transform = `translate(${e.clientX - 10}px, ${e.clientY - 10}px)`;
            cursorFollower.style.transform = `translate(${e.clientX - 4}px, ${e.clientY - 4}px)`;
        });

        // Smooth Scroll
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function (e) {
                e.preventDefault();
                const target = document.querySelector(this.getAttribute('href'));
                if (target) {
                    target.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start'
                    });
                }
            });
        });

        // Hide scroll indicator on scroll
        window.addEventListener('scroll', () => {
            const scrollIndicator = document.querySelector('.scroll-indicator');
            if (window.scrollY > 100) {
                scrollIndicator.style.opacity = '0';
            } else {
                scrollIndicator.style.opacity = '1';
            }
        });


// === Mobile Menu Toggle ===
const mobileMenuToggle = document.getElementById('mobileMenuToggle');
const navLinks = document.getElementById('navLinks');

if (mobileMenuToggle) {
    mobileMenuToggle.addEventListener('click', () => {
        mobileMenuToggle.classList.toggle('active');
        navLinks.classList.toggle('active');
    });
}

// Close mobile menu when clicking outside
document.addEventListener('click', (e) => {
    if (!e.target.closest('nav') && navLinks.classList.contains('active')) {
        navLinks.classList.remove('active');
        mobileMenuToggle.classList.remove('active');
    }
});

// === Active Navigation Link on Scroll ===
const sections = document.querySelectorAll('section[id]');
const navLinksAll = document.querySelectorAll('.nav-link');

function highlightNavigation() {
    const scrollY = window.pageYOffset;
    
    sections.forEach(section => {
        const sectionHeight = section.offsetHeight;
        const sectionTop = section.offsetTop - 100;
        const sectionId = section.getAttribute('id');
        
        if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
            navLinksAll.forEach(link => {
                link.classList.remove('active');
                if (link.getAttribute('href') === `#${sectionId}`) {
                    link.classList.add('active');
                }
            });
        }
    });
}

window.addEventListener('scroll', highlightNavigation);

// === Scroll to Top Button ===
const scrollToTopBtn = document.getElementById('scrollToTop');

window.addEventListener('scroll', () => {
    if (window.pageYOffset > 300) {
        scrollToTopBtn.classList.add('visible');
    } else {
        scrollToTopBtn.classList.remove('visible');
    }
});

scrollToTopBtn.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});

// === Intersection Observer for Fade-in Animations ===
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            // Optional: Unobserve after animation
            // observer.unobserve(entry.target);
        }
    });
}, observerOptions);

// Observe all fade-in elements
document.querySelectorAll('.fade-in').forEach(el => {
    observer.observe(el);
});

// === Parallax Effect on Hero ===
window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;
    const hero = document.querySelector('.hero');
    
    if (hero && scrolled < window.innerHeight) {
        hero.style.transform = `translateY(${scrolled * 0.5}px)`;
        hero.style.opacity = 1 - scrolled / 700;
    }
});

// === Typing Effect for Hero Subtitle (Optional Enhancement) ===
function typeWriter(element, text, speed = 50) {
    let i = 0;
    element.textContent = '';
    
    function type() {
        if (i < text.length) {
            element.textContent += text.charAt(i);
            i++;
            setTimeout(type, speed);
        }
    }
    
    type();
}

// Uncomment to enable typing effect
// window.addEventListener('load', () => {
//     const subtitle = document.querySelector('.subtitle');
//     const originalText = subtitle.textContent;
//     typeWriter(subtitle, originalText, 50);
// });

// === Navbar Background on Scroll ===
const navbar = document.querySelector('nav');
let lastScroll = 0;

window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;
    
    if (currentScroll > 50) {
        navbar.style.background = 'rgba(10, 22, 40, 0.95)';
        navbar.style.boxShadow = '0 5px 20px rgba(0, 0, 0, 0.3)';
    } else {
        navbar.style.background = 'rgba(10, 22, 40, 0.7)';
        navbar.style.boxShadow = 'none';
    }
    
    // Optional: Hide navbar on scroll down, show on scroll up
    // if (currentScroll > lastScroll && currentScroll > 100) {
    //     navbar.style.transform = 'translateY(-100%)';
    // } else {
    //     navbar.style.transform = 'translateY(0)';
    // }
    
    lastScroll = currentScroll;
});

// === Skill Cards Stagger Animation ===
const skillCards = document.querySelectorAll('.skill-card');
skillCards.forEach((card, index) => {
    card.style.animationDelay = `${index * 0.1}s`;
});

// === Project Cards Stagger Animation ===
const projectCards = document.querySelectorAll('.project-card');
projectCards.forEach((card, index) => {
    card.style.animationDelay = `${index * 0.15}s`;
});

// === Certification Cards Stagger Animation ===
const certCards = document.querySelectorAll('.certification-card');
certCards.forEach((card, index) => {
    card.style.animationDelay = `${index * 0.1}s`;
});

// === Experience Timeline Animation ===
const experienceItems = document.querySelectorAll('.experience-item');
experienceItems.forEach((item, index) => {
    item.style.animationDelay = `${index * 0.2}s`;
});

// === Dynamic Year in Footer ===
window.addEventListener('load', () => {
    const footer = document.querySelector('.footer-content p');
    if (footer) {
        const currentYear = new Date().getFullYear();
        footer.innerHTML = footer.innerHTML.replace('2024', currentYear);
    }
});

// === Console Easter Egg ===
console.log('%c👋 Hello, Developer!', 'color: #14b8a6; font-size: 24px; font-weight: bold;');
console.log('%cLooking for something? Check out the code on GitHub!', 'color: #cbd5e1; font-size: 14px;');
console.log('%c🚀 Built with passion by Srijan Das', 'color: #22d3ee; font-size: 12px;');

// === Performance Optimization: Lazy Load Images ===
if ('IntersectionObserver' in window) {
    const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                if (img.dataset.src) {
                    img.src = img.dataset.src;
                    img.removeAttribute('data-src');
                    observer.unobserve(img);
                }
            }
        });
    });
    
    // Observe all images with data-src attribute
    document.querySelectorAll('img[data-src]').forEach(img => {
        imageObserver.observe(img);
    });
}

// === Add Cursor Trail Effect (Optional) ===
function createCursorTrail() {
    const coords = { x: 0, y: 0 };
    const circles = document.querySelectorAll('.cursor-circle');
    
    if (circles.length === 0) return; // Only if cursor circles exist in HTML
    
    circles.forEach((circle, index) => {
        circle.x = 0;
        circle.y = 0;
    });
    
    window.addEventListener('mousemove', (e) => {
        coords.x = e.clientX;
        coords.y = e.clientY;
    });
    
    function animateCircles() {
        let x = coords.x;
        let y = coords.y;
        
        circles.forEach((circle, index) => {
            circle.style.left = x - 12 + 'px';
            circle.style.top = y - 12 + 'px';
            circle.style.transform = `scale(${(circles.length - index) / circles.length})`;
            
            circle.x = x;
            circle.y = y;
            
            const nextCircle = circles[index + 1] || circles[0];
            x += (nextCircle.x - x) * 0.3;
            y += (nextCircle.y - y) * 0.3;
        });
        
        requestAnimationFrame(animateCircles);
    }
    
    animateCircles();
}

// Uncomment to enable cursor trail (requires adding cursor-circle elements to HTML)
// createCursorTrail();

// === Form Validation (if contact form is added) ===
function validateContactForm(formId) {
    const form = document.getElementById(formId);
    
    if (!form) return;
    
    form.addEventListener('submit', (e) => {
        e.preventDefault();
        
        const name = form.querySelector('input[name="name"]').value.trim();
        const email = form.querySelector('input[name="email"]').value.trim();
        const message = form.querySelector('textarea[name="message"]').value.trim();
        
        // Basic validation
        if (!name || !email || !message) {
            alert('Please fill in all fields');
            return;
        }
        
        // Email validation
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            alert('Please enter a valid email address');
            return;
        }
        
        // If validation passes
        console.log('Form submitted:', { name, email, message });
        alert('Thank you for your message! I will get back to you soon.');
        form.reset();
    });
}

// === Analytics Event Tracking (Optional) ===
function trackEvent(category, action, label) {
    // Google Analytics event tracking
    if (typeof gtag !== 'undefined') {
        gtag('event', action, {
            'event_category': category,
            'event_label': label
        });
    }
    
    // Console log for development
    console.log(`Event: ${category} - ${action} - ${label}`);
}

// Track important interactions
document.querySelectorAll('.project-link').forEach(link => {
    link.addEventListener('click', () => {
        trackEvent('Projects', 'Click', link.textContent);
    });
});

document.querySelectorAll('.social-link').forEach(link => {
    link.addEventListener('click', () => {
        trackEvent('Social', 'Click', link.getAttribute('aria-label'));
    });
});

document.querySelector('.cta-button')?.addEventListener('click', () => {
    trackEvent('CTA', 'Download', 'Resume');
});

// === Preloader (Optional) ===
window.addEventListener('load', () => {
    const preloader = document.getElementById('preloader');
    if (preloader) {
        setTimeout(() => {
            preloader.style.opacity = '0';
            setTimeout(() => {
                preloader.style.display = 'none';
            }, 300);
        }, 500);
    }
});

// === Theme Toggle (Optional - for dark/light mode) ===
function initThemeToggle() {
    const themeToggle = document.getElementById('themeToggle');
    if (!themeToggle) return;
    
    const currentTheme = localStorage.getItem('theme') || 'dark';
    document.documentElement.setAttribute('data-theme', currentTheme);
    
    themeToggle.addEventListener('click', () => {
        const theme = document.documentElement.getAttribute('data-theme');
        const newTheme = theme === 'dark' ? 'light' : 'dark';
        
        document.documentElement.setAttribute('data-theme', newTheme);
        localStorage.setItem('theme', newTheme);
    });
}

// Uncomment to enable theme toggle (requires adding toggle button to HTML)
// initThemeToggle();

// === Initialize Everything ===
document.addEventListener('DOMContentLoaded', () => {
    console.log('Portfolio loaded successfully! 🚀');
    
    // Add any initialization code here
    highlightNavigation();
    
    // Smooth scroll to section if hash is present in URL
    if (window.location.hash) {
        setTimeout(() => {
            const target = document.querySelector(window.location.hash);
            if (target) {
                const navHeight = document.querySelector('nav').offsetHeight;
                window.scrollTo({
                    top: target.offsetTop - navHeight,
                    behavior: 'smooth'
                });
            }
        }, 100);
    }
});

// === Handle Resize Events ===
let resizeTimer;
window.addEventListener('resize', () => {
    clearTimeout(resizeTimer);
    resizeTimer = setTimeout(() => {
        // Close mobile menu on resize to desktop
        if (window.innerWidth > 768) {
            navLinks.classList.remove('active');
            mobileMenuToggle.classList.remove('active');
        }
    }, 250);
});

// === Keyboard Navigation Enhancement ===
document.addEventListener('keydown', (e) => {
    // ESC key closes mobile menu
    if (e.key === 'Escape' && navLinks.classList.contains('active')) {
        navLinks.classList.remove('active');
        mobileMenuToggle.classList.remove('active');
    }
    
    // Ctrl/Cmd + K for search (if implemented)
    if ((e.ctrlKey || e.metaKey) && e.key === 'k') {
        e.preventDefault();
        // Implement search functionality here
        console.log('Search triggered');
    }
});

// === Performance Monitoring ===
if ('PerformanceObserver' in window) {
    const perfObserver = new PerformanceObserver((list) => {
        for (const entry of list.getEntries()) {
            if (entry.entryType === 'navigation') {
                console.log(`Page load time: ${entry.loadEventEnd - entry.startTime}ms`);
            }
        }
    });
    
    perfObserver.observe({ entryTypes: ['navigation'] });
}

// === Export functions for external use (if needed) ===
window.portfolioUtils = {
    trackEvent,
    highlightNavigation,
    scrollToTop: () => scrollToTopBtn.click()
};
