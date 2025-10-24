/**
 * Developer Portfolio - JavaScript
 * Author: Hasan Bayraktar
 * Handles smo            element.innerHTML = currentLang === 'de' ? germanText : englishText;
        } else if (germanText.includes('&copy;') || englishText.includes('&copy;')) {
            // Handle HTML entities
            element.innerHTML = currentLang === 'de' ? germanText : englishText;
        } else {
            // Use textContent for plain text
            element.textContent = currentLang === 'de' ? germanText : englishText;
        }
    });
}

// Initial translation on page load
translatePage(); animations, interactions, and language switching
 */

// =====================
// Set Dark Theme as Default
// =====================
const html = document.documentElement;
html.setAttribute('data-theme', 'dark');

// =====================
// Language Switcher
// =====================
const languageToggle = document.getElementById('language-toggle');
const mobileLanguageToggle = document.getElementById('mobile-language-toggle');

// Check for saved language preference or default to 'de'
let currentLang = localStorage.getItem('language') || 'de';
html.setAttribute('lang', currentLang);
updateLanguageDisplay();

// Language toggle handler for both buttons
function handleLanguageToggle() {
    currentLang = currentLang === 'de' ? 'en' : 'de';
    html.setAttribute('lang', currentLang);
    localStorage.setItem('language', currentLang);
    updateLanguageDisplay();
    translatePage();
}

if (languageToggle) {
    languageToggle.addEventListener('click', handleLanguageToggle);
}

if (mobileLanguageToggle) {
    mobileLanguageToggle.addEventListener('click', handleLanguageToggle);
}

function updateLanguageDisplay() {
    // Update both desktop and mobile language toggles
    const allLangDe = document.querySelectorAll('.lang-de');
    const allLangEn = document.querySelectorAll('.lang-en');
    
    if (currentLang === 'de') {
        allLangDe.forEach(el => el.style.display = 'inline');
        allLangEn.forEach(el => el.style.display = 'none');
    } else {
        allLangDe.forEach(el => el.style.display = 'none');
        allLangEn.forEach(el => el.style.display = 'inline');
    }
}

function translatePage() {
    // Translate all elements with data-de and data-en attributes
    const translatableElements = document.querySelectorAll('[data-de][data-en]');
    
    translatableElements.forEach(element => {
        const germanText = element.getAttribute('data-de');
        const englishText = element.getAttribute('data-en');
        
        // Skip if element has children that need special handling
        if (element.classList.contains('btn') || element.tagName === 'A' && element.querySelector('svg')) {
            // For buttons with icons, only update the text span
            const textSpan = element.querySelector('span');
            if (textSpan && textSpan.hasAttribute('data-de')) {
                textSpan.textContent = currentLang === 'de' ? textSpan.getAttribute('data-de') : textSpan.getAttribute('data-en');
            }
            return;
        }
        
        // Handle elements with inline links (like OSAH)
        if (element.innerHTML.includes('inline-link') || element.innerHTML.includes('osah-watches')) {
            const link = '<a href="https://www.osah-watches.com" target="_blank" rel="noopener noreferrer" class="inline-link">OSAH</a>';
            element.innerHTML = (currentLang === 'de' ? germanText : englishText).replace('OSAH', link);
            return;
        }
        
        // Check if the text contains HTML tags (like <span class='highlight'>)
        const hasHtmlTags = /<[^>]+>/.test(germanText) || /<[^>]+>/.test(englishText);
        
        if (hasHtmlTags) {
            // Use innerHTML for content with HTML tags
            element.innerHTML = currentLang === 'de' ? germanText : englishText;
        } else if (germanText.includes('&copy;') || englishText.includes('&copy;')) {
            // Handle HTML entities
            element.innerHTML = currentLang === 'de' ? germanText : englishText;
        } else {
            // Use textContent for plain text
            element.textContent = currentLang === 'de' ? germanText : englishText;
        }
    });
}

// Initialize translation on page load
translatePage();

// =====================
// Mobile Menu Toggle
// =====================
const mobileMenuToggle = document.getElementById('mobile-menu-toggle');
const navRight = document.getElementById('nav-right');

if (mobileMenuToggle && navRight) {
    mobileMenuToggle.addEventListener('click', () => {
        mobileMenuToggle.classList.toggle('active');
        navRight.classList.toggle('active');
    });
    
    // Close menu when clicking on a nav link
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            mobileMenuToggle.classList.remove('active');
            navRight.classList.remove('active');
        });
    });
    
    // Close menu when clicking outside
    document.addEventListener('click', (e) => {
        if (!navRight.contains(e.target) && !mobileMenuToggle.contains(e.target)) {
            mobileMenuToggle.classList.remove('active');
            navRight.classList.remove('active');
        }
    });
}

// =====================
// Smooth Scrolling & Active Nav Links
// =====================
const navLinks = document.querySelectorAll('.nav-link');
const sections = document.querySelectorAll('.section, .hero');

// Update active nav link on scroll
function updateActiveLink() {
    let current = '';
    
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        
        if (window.pageYOffset >= sectionTop - 100) {
            current = section.getAttribute('id');
        }
    });
    
    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${current}`) {
            link.classList.add('active');
        }
    });
}

// Add scroll event listener with throttling for performance
let scrollTimeout;
window.addEventListener('scroll', () => {
    if (scrollTimeout) {
        window.cancelAnimationFrame(scrollTimeout);
    }
    
    scrollTimeout = window.requestAnimationFrame(() => {
        updateActiveLink();
        handleNavbarScroll();
    });
});

// Smooth scroll to section on nav link click
navLinks.forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        const targetId = link.getAttribute('href');
        const targetSection = document.querySelector(targetId);
        
        if (targetSection) {
            const offsetTop = targetSection.offsetTop - 70; // Account for fixed navbar
            window.scrollTo({
                top: offsetTop,
                behavior: 'smooth'
            });
        }
    });
});

// =====================
// Navbar Scroll Effect
// =====================
const navbar = document.getElementById('navbar');

function handleNavbarScroll() {
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
}

// =====================
// Contact Form Handling - REMOVED
// =====================
// Form functionality removed as requested
// Contact now uses simple mailto link

// =====================
// Scroll Animations (Intersection Observer)
// =====================
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observe elements for scroll animations
const animateOnScroll = document.querySelectorAll('.project-card, .timeline-item, .skill-category');
animateOnScroll.forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(30px)';
    el.style.transition = 'opacity 0.6s ease-out, transform 0.6s ease-out';
    observer.observe(el);
});

// =====================
// Project Card Image Handling
// =====================
// Add placeholder images for projects (if actual images don't exist)
document.addEventListener('DOMContentLoaded', () => {
    const projectImages = document.querySelectorAll('.project-image img');
    
    projectImages.forEach((img, index) => {
        img.addEventListener('error', function() {
            // Replace with gradient placeholder if image fails to load
            this.parentElement.style.background = `linear-gradient(135deg, 
                ${getRandomColor()} 0%, 
                ${getRandomColor()} 100%)`;
            this.style.display = 'none';
        });
    });
});

// Helper function to generate random colors for placeholders
function getRandomColor() {
    const colors = [
        '#3b82f6', '#8b5cf6', '#10b981', '#f59e0b', 
        '#ef4444', '#06b6d4', '#84cc16', '#ec4899'
    ];
    return colors[Math.floor(Math.random() * colors.length)];
}

// =====================
// Performance: Lazy Loading for Images
// =====================
if ('loading' in HTMLImageElement.prototype) {
    // Browser supports native lazy loading
    const images = document.querySelectorAll('img[loading="lazy"]');
    images.forEach(img => {
        img.src = img.src;
    });
} else {
    // Fallback for browsers that don't support lazy loading
    const script = document.createElement('script');
    script.src = 'https://cdnjs.cloudflare.com/ajax/libs/lazysizes/5.3.2/lazysizes.min.js';
    document.body.appendChild(script);
}

// =====================
// Accessibility: Skip to Content
// =====================
document.addEventListener('keydown', (e) => {
    // Press 'Tab' on page load to show skip link
    if (e.key === 'Tab') {
        document.body.classList.add('user-is-tabbing');
    }
});

// =====================
// Easter Egg: Konami Code
// =====================
let konamiCode = [];
const konamiSequence = ['ArrowUp', 'ArrowUp', 'ArrowDown', 'ArrowDown', 'ArrowLeft', 'ArrowRight', 'ArrowLeft', 'ArrowRight', 'b', 'a'];

document.addEventListener('keydown', (e) => {
    konamiCode.push(e.key);
    konamiCode = konamiCode.slice(-10);
    
    if (konamiCode.join('') === konamiSequence.join('')) {
        activateEasterEgg();
    }
});

function activateEasterEgg() {
    // Add a fun animation or message
    document.body.style.animation = 'rainbow 2s linear infinite';
    
    // Create style for rainbow animation if it doesn't exist
    if (!document.getElementById('easter-egg-style')) {
        const style = document.createElement('style');
        style.id = 'easter-egg-style';
        style.textContent = `
            @keyframes rainbow {
                0% { filter: hue-rotate(0deg); }
                100% { filter: hue-rotate(360deg); }
            }
        `;
        document.head.appendChild(style);
    }
    
    // Show a fun message
    const message = document.createElement('div');
    message.textContent = '🎉 You found the easter egg! 🎉';
    message.style.cssText = `
        position: fixed;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
        color: white;
        padding: 2rem 3rem;
        border-radius: 1rem;
        font-size: 1.5rem;
        font-weight: bold;
        z-index: 10000;
        box-shadow: 0 20px 40px rgba(0, 0, 0, 0.3);
        animation: bounce 0.5s ease-out;
    `;
    
    document.body.appendChild(message);
    
    // Remove after 3 seconds
    setTimeout(() => {
        message.remove();
        document.body.style.animation = '';
    }, 3000);
}

// =====================
// Console Message for Developers
// =====================
console.log(
    '%c👋 Hi there, Developer!',
    'font-size: 20px; font-weight: bold; color: #3b82f6;'
);
console.log(
    '%cLooking for something? Check out the source code on GitHub!',
    'font-size: 14px; color: #6b7280;'
);
console.log(
    '%c🚀 Built with vanilla JavaScript, no frameworks needed!',
    'font-size: 14px; color: #10b981;'
);

// =====================
// Initialize on Load
// =====================
window.addEventListener('load', () => {
    // Update active nav link
    updateActiveLink();
    
    // Handle initial navbar state
    handleNavbarScroll();
    
    // Log performance metrics (optional)
    if (window.performance && window.performance.timing) {
        const perfData = window.performance.timing;
        const pageLoadTime = perfData.loadEventEnd - perfData.navigationStart;
        console.log(`⚡ Page loaded in ${pageLoadTime}ms`);
    }
});

// =====================
// Service Worker Registration (for PWA support)
// =====================
if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
        // Uncomment when you have a service worker file
        // navigator.serviceWorker.register('/service-worker.js')
        //     .then(registration => {
        //         console.log('Service Worker registered:', registration);
        //     })
        //     .catch(error => {
        //         console.log('Service Worker registration failed:', error);
        //     });
    });
}
