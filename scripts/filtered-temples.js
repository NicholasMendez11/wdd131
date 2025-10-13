const temples = [
  {
    templeName: "Aba Nigeria",
    location: "Aba, Nigeria",
    dedicated: "2005, August, 7",
    area: 11500,
    imageUrl: "https://churchofjesuschristtemples.org/assets/img/temples/accra-ghana-temple/accra-ghana-temple-13760-main.jpg"
  },
  {
    templeName: "Manti Utah",
    location: "Manti, Utah, United States",
    dedicated: "1888, May, 21",
    area: 74792,
    imageUrl: "https://churchofjesuschristtemples.org/assets/img/temples/manti-utah-temple/manti-utah-temple-40551-main.jpg"
  },
  {
    templeName: "Payson Utah",
    location: "Payson, Utah, United States",
    dedicated: "2015, June, 7",
    area: 96630,
    imageUrl: "https://churchofjesuschrist.org/imgs/7b998062094c11eca393eeeeac1e50df07c8fd34/full/640%2C/0/default"
  },
  {
    templeName: "Yigo Guam",
    location: "Yigo, Guam",
    dedicated: "2020, May, 2",
    area: 6861,
    imageUrl: "https://www.churchofjesuschrist.org/imgs/9f541175bcfc11eca77eeeeeac1ea52488fbff2f/full/640%2C/0/default"
  },
  {
    templeName: "Washington D.C.",
    location: "Kensington, Maryland, United States",
    dedicated: "1974, November, 19",
    area: 156558,
    imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/washington-dc/400x250/washington_dc_temple-exterior-2.jpeg"
  },
  {
    templeName: "Lima Perú",
    location: "Lima, Perú",
    dedicated: "1986, January, 10",
    area: 9600,
    imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/lima-peru/400x250/lima-peru-temple-evening-1075606-wallpaper.jpg"
  },
  {
    templeName: "Mexico City Mexico",
    location: "Mexico City, Mexico",
    dedicated: "1983, December, 2",
    area: 116642,
    imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/mexico-city-mexico/400x250/mexico-city-temple-exterior-1518361-wallpaper.jpg"
  },
  {
    templeName: "Salt Lake Temple",
    location: "Salt Lake City, Utah, United States",
    dedicated: "1893, April, 6",
    area: 253015,
    imageUrl: "https://www.churchofjesuschrist.org/imgs/92c33bcbf9cf85483e008d6871f8ced5f6d7b661/full/640%2C/0/default"
  },
  {
    templeName: "Rome Italy",
    location: "Rome, Italy",
    dedicated: "2019, March, 10",
    area: 41010,
    imageUrl: "https://www.churchofjesuschrist.org/imgs/17e2c70d687fffedfe115197e57fa8f5d1d369bb/full/640%2C/0/default"
  },
  {
    templeName: "Provo City Center",
    location: "Provo, Utah, United States",
    dedicated: "2016, March, 20",
    area: 85084,
    imageUrl: "https://www.churchofjesuschrist.org/imgs/e97d43cdfab131f3ffac633cd7c952de861d51c8/full/640%2C/0/default"
  },
  {
    templeName: "Santo Domingo",
    location: "Santo Domingo, Dominican Republic",
    dedicated: "2000, Sep, 17",
    area: 85084,
    imageUrl: "https://www.churchofjesuschrist.org/imgs/bd7519e3369d1f82b7470f7d16f1ab92504246b1/full/640%2C/0/default"
  },
  {
    templeName: "San Juan Puerto Rico",
    location: "San Juan, Puerto Rico",
    dedicated: "2023, Jan, 15",
    area: 6861,
    imageUrl: "https://www.churchofjesuschrist.org/imgs/b8e8764466cb11eda40eeeeeac1ead22054ff7fc/full/640%2C/0/default"
  }
];

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

function createTempleCard(temple) {
    return `
        <figure class="temple-card">
            <img src="${temple.imageUrl}" 
                 alt="${temple.templeName}" 
                 loading="lazy"
                 width="400" 
                 height="250">
            <figcaption>
                <h3>${temple.templeName}</h3>
                <p><strong>Location:</strong> ${temple.location}</p>
                <p><strong>Dedicated:</strong> ${temple.dedicated}</p>
                <p><strong>Area:</strong> ${temple.area.toLocaleString()} sq ft</p>
            </figcaption>
        </figure>
    `;
}

function displayTemples(templeArray) {
    const gallery = document.getElementById('temple-gallery');
    if (gallery) {
        gallery.innerHTML = templeArray.map(temple => createTempleCard(temple)).join('');
    }
}

function filterTemples(criteria) {
    let filteredTemples = [];
    
    switch(criteria) {
        case 'old':
            filteredTemples = temples.filter(temple => {
                const year = parseInt(temple.dedicated.split(',')[0]);
                return year < 1900;
            });
            break;
        case 'new':
            filteredTemples = temples.filter(temple => {
                const year = parseInt(temple.dedicated.split(',')[0]);
                return year > 2000;
            });
            break;
        case 'large':
            filteredTemples = temples.filter(temple => temple.area > 90000);
            break;
        case 'small':
            filteredTemples = temples.filter(temple => temple.area < 10000);
            break;
        default:
            filteredTemples = temples;
    }
    
    return filteredTemples;
}

function updatePageHeading(filter) {
    const mainHeading = document.querySelector('main h1');
    if (mainHeading) {
        switch(filter) {
            case 'old':
                mainHeading.textContent = 'Historic Temples (Built Before 1900)';
                break;
            case 'new':
                mainHeading.textContent = 'Modern Temples (Built After 2000)';
                break;
            case 'large':
                mainHeading.textContent = 'Large Temples (Over 90,000 sq ft)';
                break;
            case 'small':
                mainHeading.textContent = 'Small Temples (Under 10,000 sq ft)';
                break;
            default:
                mainHeading.textContent = 'Sacred Temples Around the World';
        }
    }
}

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
    
    navLinks.forEach(link => {
        link.addEventListener('click', function(event) {
            event.preventDefault();
            
            navLinks.forEach(navLink => navLink.classList.remove('active'));
            this.classList.add('active');
            const filter = this.getAttribute('data-filter') || 'home';
            const filteredTemples = filterTemples(filter);
            displayTemples(filteredTemples);
            updatePageHeading(filter);
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

function initializeApp() {
    setCurrentYear();
    setLastModified();
    initializeHamburgerMenu();
    initializeTempleFiltering();
    displayTemples(temples);
    setTimeout(initializeImageLoading, 100);
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
        temples,
        createTempleCard,
        displayTemples,
        filterTemples,
        setCurrentYear,
        setLastModified,
        initializeApp
    };
}