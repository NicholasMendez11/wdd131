// Temple Album JavaScript Functionality

// Footer date functions (reused from getdates.js)
function setCurrentYear() {
    const currentYear = new Date().getFullYear();
    const currentYearElement = document.getElementById('currentyear');
    
    if (currentYearElement) {
        currentYearElement.textContent = currentYear;
    }
}

function setLastModified() {
    const lastModifiedElement = document.getElementById('lastModified');
    
    if (lastModifiedElement) {
        const lastModifiedDate = document.lastModified;
        lastModifiedElement.textContent = `Last modified: ${lastModifiedDate}`;
    }
}

// I want it to do cool hamburger menu animation
function initializeHamburgerMenu() {
    const menuToggle = document.getElementById('menu-toggle');
    const navMenu = document.querySelector('.nav-menu');
    
    if (menuToggle && navMenu) {
        menuToggle.addEventListener('click', function() {
            menuToggle.classList.toggle('active');
            navMenu.classList.toggle('active');
            const isExpanded = navMenu.classList.contains('active');
            menuToggle.setAttribute('aria-expanded', isExpanded);
        });

        document.addEventListener('click', function(event) {
            const isClickInsideNav = navMenu.contains(event.target);
            const isClickOnToggle = menuToggle.contains(event.target);            
            if (!isClickInsideNav && !isClickOnToggle && navMenu.classList.contains('active')) {
                menuToggle.classList.remove('active');
                navMenu.classList.remove('active');
                menuToggle.setAttribute('aria-expanded', 'false');
            }
        });

        document.addEventListener('keydown', function(event) {
            if (event.key === 'Escape' && navMenu.classList.contains('active')) {
                menuToggle.classList.remove('active');
                navMenu.classList.remove('active');
                menuToggle.setAttribute('aria-expanded', 'false');
                menuToggle.focus();
            }
        });

        const navLinks = navMenu.querySelectorAll('.nav-link');
        navLinks.forEach(link => {
            link.addEventListener('click', function() {
                if (window.innerWidth < 768) {
                    menuToggle.classList.remove('active');
                    navMenu.classList.remove('active');
                    menuToggle.setAttribute('aria-expanded', 'false');
                }
            });
        });
    }
}

function initializeTempleFiltering() {
    const navLinks = document.querySelectorAll('.nav-link');
    const templeCards = document.querySelectorAll('.temple-card');
    navLinks.forEach(link => {
        link.addEventListener('click', function(event) {
            event.preventDefault();
            navLinks.forEach(navLink => navLink.classList.remove('active'));
            this.classList.add('active');
            const filter = this.getAttribute('data-filter');
            
            templeCards.forEach(card => {
                if (!filter) {
                    card.classList.remove('hidden');
                } else {
                    const category = card.getAttribute('data-category');
                    if (category === filter) {
                        card.classList.remove('hidden');
                    } else {
                        card.classList.add('hidden');
                    }
                }
            });
            
            const mainHeading = document.querySelector('main h1');
            if (mainHeading) {
                switch(filter) {
                    case 'old':
                        mainHeading.textContent = 'Historic Temples';
                        break;
                    case 'new':
                        mainHeading.textContent = 'Modern Temples';
                        break;
                    case 'large':
                        mainHeading.textContent = 'Large Temples';
                        break;
                    case 'small':
                        mainHeading.textContent = 'Small Temples';
                        break;
                    default:
                        mainHeading.textContent = 'Sacred Temples Around the World';
                }
            }
        });
    });
}

function initializeImageLoading() {
    const images = document.querySelectorAll('img[loading="lazy"]');
    images.forEach(img => {
        img.addEventListener('load', function() {
            this.classList.add('loaded');
        });
        
        img.addEventListener('error', function() {
            this.alt = 'Temple image not available';
            this.style.background = 'var(--background-light)';
        });
    });
}

function initializeSmoothScrolling() {
    const internalLinks = document.querySelectorAll('a[href^="#"]');
    internalLinks.forEach(link => {
        link.addEventListener('click', function(event) {
            event.preventDefault();
            const targetId = this.getAttribute('href').substring(1);
            const targetElement = document.getElementById(targetId);
            if (targetElement) {
                targetElement.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
}

function initializeKeyboardNavigation() {
    const templeCards = document.querySelectorAll('.temple-card');
    templeCards.forEach(card => {
        card.setAttribute('tabindex', '0');
        card.addEventListener('keydown', function(event) {
            if (event.key === 'Enter' || event.key === ' ') {
                event.preventDefault();
                const img = this.querySelector('img');
                if (img) {
                    img.focus();
                }
            }
        });
    });
}

function initializeApp() {
    setCurrentYear();
    setLastModified();
    initializeHamburgerMenu();
    initializeTempleFiltering();
    initializeImageLoading();
    initializeSmoothScrolling();
    initializeKeyboardNavigation();
}

document.addEventListener('DOMContentLoaded', initializeApp);
window.addEventListener('resize', function() {
    const menuToggle = document.getElementById('menu-toggle');
    const navMenu = document.querySelector('.nav-menu');
    
    if (window.innerWidth >= 768 && navMenu && navMenu.classList.contains('active')) {
        menuToggle.classList.remove('active');
        navMenu.classList.remove('active');
        menuToggle.setAttribute('aria-expanded', 'false');
    }
});

if (typeof module !== 'undefined' && module.exports) {
    module.exports = {
        setCurrentYear,
        setLastModified,
        initializeHamburgerMenu,
        initializeTempleFiltering,
        initializeApp
    };
}
