const recipes = [
    {
        id: 1,
        name: "Keto Avocado Breakfast Bowl",
        category: "breakfast",
        cookTime: "10 mins",
        servings: 2,
        image: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=800&h=600&fit=crop",
        description: "Start your day with healthy fats and protein in this delicious bowl"
    },
    {
        id: 2,
        name: "Bacon-Wrapped Chicken",
        category: "dinner",
        cookTime: "25 mins",
        servings: 4,
        image: "https://images.unsplash.com/photo-1532550907401-a500c9a57435?w=800&h=600&fit=crop",
        description: "Juicy chicken breast wrapped in crispy bacon for the perfect keto meal"
    },
    {
        id: 3,
        name: "Cauliflower Fried Rice",
        category: "lunch",
        cookTime: "15 mins",
        servings: 4,
        image: "https://images.unsplash.com/photo-1512058564366-18510be2db19?w=800&h=600&fit=crop",
        description: "Low-carb alternative to traditional fried rice with all the flavor"
    },
    {
        id: 4,
        name: "Cheese Crisps",
        category: "snacks",
        cookTime: "5 mins",
        servings: 2,
        image: "https://images.unsplash.com/photo-1486297678162-eb2a19b0a32d?w=800&h=600&fit=crop",
        description: "Crispy, crunchy cheese chips perfect for snacking"
    },
    {
        id: 5,
        name: "Keto Eggs Benedict",
        category: "breakfast",
        cookTime: "20 mins",
        servings: 2,
        image: "https://images.unsplash.com/photo-1608039755401-742074f0548d?w=800&h=600&fit=crop",
        description: "Classic brunch dish made keto-friendly without the English muffin"
    },
    {
        id: 6,
        name: "Zucchini Noodles with Pesto",
        category: "lunch",
        cookTime: "15 mins",
        servings: 3,
        image: "https://images.unsplash.com/photo-1621996346565-e3dbc646d9a9?w=800&h=600&fit=crop",
        description: "Fresh and flavorful pasta alternative that's ready in minutes"
    },
    {
        id: 7,
        name: "Grilled Salmon with Asparagus",
        category: "dinner",
        cookTime: "20 mins",
        servings: 2,
        image: "https://images.unsplash.com/photo-1467003909585-2f8a72700288?w=800&h=600&fit=crop",
        description: "Omega-3 rich salmon paired with tender roasted asparagus"
    },
    {
        id: 8,
        name: "Fat Bombs",
        category: "snacks",
        cookTime: "30 mins",
        servings: 12,
        image: "https://images.unsplash.com/photo-1481391319762-47dff72954d9?w=800&h=600&fit=crop",
        description: "Sweet treats packed with healthy fats to keep you satisfied"
    },
    {
        id: 9,
        name: "Keto Beef Stir-Fry",
        category: "dinner",
        cookTime: "20 mins",
        servings: 4,
        image: "https://images.unsplash.com/photo-1603133872878-684f208fb84b?w=800&h=600&fit=crop",
        description: "Quick and easy weeknight dinner loaded with vegetables"
    }
];

const tips = [
    {
        id: 1,
        title: "Stay Hydrated",
        content: "Drink plenty of water throughout the day. Keto has a diuretic effect, so hydration is crucial for feeling your best."
    },
    {
        id: 2,
        title: "Plan Your Meals",
        content: "Meal prep on weekends to make weekday eating effortless. Having keto meals ready helps you stay on track."
    },
    {
        id: 3,
        title: "Track Your Macros",
        content: "Use an app to track your daily carb, protein, and fat intake, especially when starting out."
    },
    {
        id: 4,
        title: "Don't Fear Fat",
        content: "Remember, fat is your primary fuel source on keto. Include healthy fats with every meal to stay satisfied."
    }
];

const faqs = [
    {
        id: 1,
        question: "Is the keto diet safe for everyone?",
        answer: "While keto is generally safe for most people, it's always recommended to consult with a healthcare provider before starting any new diet, especially if you have existing health conditions or take medications."
    },
    {
        id: 2,
        question: "What is the 'keto flu' and how long does it last?",
        answer: "The 'keto flu' refers to flu-like symptoms some people experience when transitioning to keto. It typically includes fatigue, headaches, and irritability, and usually lasts 3-7 days. Stay hydrated and ensure adequate electrolyte intake to minimize symptoms."
    },
    {
        id: 3,
        question: "Can I eat out while on keto?",
        answer: "Absolutely! Most restaurants are accommodating. Choose protein-based dishes with vegetables, ask for no bread or starch sides, and request sauces on the side. Burgers without buns, grilled meats, and salads are great options."
    },
    {
        id: 4,
        question: "How much weight can I expect to lose on keto?",
        answer: "Weight loss varies by individual. Many people see rapid initial weight loss (mostly water weight) in the first week, then 1-2 pounds per week after that. Consistency and proper macro tracking are key to success."
    },
    {
        id: 5,
        question: "Do I need to count calories on keto?",
        answer: "While keto naturally helps regulate appetite, some people find calorie counting helpful for weight loss. Focus first on keeping carbs low and listening to your hunger cues. If you hit a plateau, you might consider tracking calories."
    }
];

function displayRecipes(recipeArray) {
    const recipesGrid = document.getElementById('recipes-grid');
    if (!recipesGrid) return;

    if (recipeArray.length === 0) {
        recipesGrid.innerHTML = `<p style="grid-column: 1/-1; text-align: center; color: #666;">No recipes found in this category.</p>`;
        return;
    }

    const recipesHTML = recipeArray.map(recipe => `
        <article class="recipe-card">
            <img src="${recipe.image}" alt="${recipe.name}" loading="lazy">
            <div class="recipe-info">
                <span class="recipe-category">${recipe.category}</span>
                <h3>${recipe.name}</h3>
                <p>${recipe.description}</p>
                <div class="recipe-meta">
                    <span>⏱️ ${recipe.cookTime}</span>
                    <span>🍽️ ${recipe.servings} servings</span>
                </div>
            </div>
        </article>
    `).join('');

    recipesGrid.innerHTML = recipesHTML;
}

function filterRecipes(category) {
    if (category === 'all') {
        displayRecipes(recipes);
    } else {
        const filtered = recipes.filter(recipe => recipe.category === category);
        displayRecipes(filtered);
    }
    
    localStorage.setItem('lastRecipeFilter', category);
}

function displayFeaturedRecipes() {
    const featuredContainer = document.getElementById('featured-recipes');
    if (!featuredContainer) return;

    const featured = recipes.filter(recipe => 
        recipe.category === 'breakfast' || recipe.category === 'dinner'
    ).slice(0, 3);

    const featuredHTML = featured.map(recipe => `
        <article class="recipe-card">
            <img src="${recipe.image}" alt="${recipe.name}" loading="lazy">
            <div class="recipe-info">
                <span class="recipe-category">${recipe.category}</span>
                <h3>${recipe.name}</h3>
                <p>${recipe.description}</p>
                <div class="recipe-meta">
                    <span>⏱️ ${recipe.cookTime}</span>
                    <span>🍽️ ${recipe.servings} servings</span>
                </div>
            </div>
        </article>
    `).join('');

    featuredContainer.innerHTML = featuredHTML;
}

function displayTips() {
    const tipsContainer = document.getElementById('tips-container');
    if (!tipsContainer) return;

    const tipsHTML = tips.map(tip => `
        <div class="tip-card">
            <h4>${tip.title}</h4>
            <p>${tip.content}</p>
        </div>
    `).join('');

    tipsContainer.innerHTML = tipsHTML;
}

function displayFAQs() {
    const faqContainer = document.getElementById('faq-container');
    if (!faqContainer) return;

    const faqsHTML = faqs.map(faq => `
        <div class="faq-item" data-faq-id="${faq.id}">
            <button class="faq-question">
                ${faq.question}
                <span class="faq-icon">▼</span>
            </button>
            <div class="faq-answer">
                <p>${faq.answer}</p>
            </div>
        </div>
    `).join('');

    faqContainer.innerHTML = faqsHTML;

    const faqQuestions = faqContainer.querySelectorAll('.faq-question');
    faqQuestions.forEach(button => {
        button.addEventListener('click', toggleFAQ);
    });
}

function toggleFAQ(event) {
    const button = event.currentTarget;
    const answer = button.nextElementSibling;
    const icon = button.querySelector('.faq-icon');

    answer.classList.toggle('active');
    icon.classList.toggle('active');
}

function setupHamburgerMenu() {
    const hamburger = document.getElementById('hamburger');
    const nav = document.getElementById('nav-menu');

    if (hamburger && nav) {
        hamburger.addEventListener('click', () => {
            hamburger.classList.toggle('active');
            nav.classList.toggle('active');
        });
    }
}

function setupRecipeFilters() {
    const filterButtons = document.querySelectorAll('.filter-btn');
    
    if (filterButtons.length === 0) return;

    const savedFilter = localStorage.getItem('lastRecipeFilter') || 'all';
    filterRecipes(savedFilter);

    filterButtons.forEach(button => {
        if (button.dataset.category === savedFilter) {
            button.classList.add('active');
        }

        button.addEventListener('click', (event) => {
            filterButtons.forEach(btn => btn.classList.remove('active'));
            event.currentTarget.classList.add('active');
            
            const category = event.currentTarget.dataset.category;
            filterRecipes(category);
        });
    });
}

function handleNewsletterSubmit(event) {
    event.preventDefault();

    const emailInput = document.getElementById('newsletter-email');
    const message = document.getElementById('newsletter-message');

    if (!emailInput || !message) return;

    const email = emailInput.value.trim();

    if (email && email.includes('@')) {
        const subscribers = JSON.parse(localStorage.getItem('newsletterSubscribers') || '[]');
        
        if (subscribers.includes(email)) {
            message.textContent = 'You are already subscribed!';
            message.style.color = '#FF8C00';
        } else {
            subscribers.push(email);
            localStorage.setItem('newsletterSubscribers', JSON.stringify(subscribers));
            
            message.textContent = 'Thank you for subscribing! Check your email for confirmation.';
            message.style.color = '#2D5016';
            emailInput.value = '';
        }
    } else {
        message.textContent = 'Please enter a valid email address.';
        message.style.color = '#D32F2F';
    }

    setTimeout(() => {
        message.textContent = '';
    }, 5000);
}

function handleContactFormSubmit(event) {
    event.preventDefault();

    const form = document.getElementById('contact-form');
    const message = document.getElementById('form-message');

    if (!form || !message) return;

    const formData = {
        name: document.getElementById('name').value.trim(),
        email: document.getElementById('email').value.trim(),
        subject: document.getElementById('subject').value,
        message: document.getElementById('message').value.trim(),
        subscribe: document.getElementById('subscribe').checked,
        timestamp: new Date().toISOString()
    };

    if (formData.name.length < 3) {
        showFormMessage('Name must be at least 3 characters long.', 'error');
        return;
    }

    if (!formData.email.includes('@')) {
        showFormMessage('Please enter a valid email address.', 'error');
        return;
    }

    if (!formData.subject) {
        showFormMessage('Please select a subject.', 'error');
        return;
    }

    if (formData.message.length < 10) {
        showFormMessage('Message must be at least 10 characters long.', 'error');
        return;
    }

    const submissions = JSON.parse(localStorage.getItem('contactSubmissions') || '[]');
    submissions.push(formData);
    localStorage.setItem('contactSubmissions', JSON.stringify(submissions));

    if (formData.subscribe) {
        const subscribers = JSON.parse(localStorage.getItem('newsletterSubscribers') || '[]');
        if (!subscribers.includes(formData.email)) {
            subscribers.push(formData.email);
            localStorage.setItem('newsletterSubscribers', JSON.stringify(subscribers));
        }
    }

    showFormMessage('Thank you for your message! We will get back to you soon.', 'success');
    form.reset();
    
    displaySubmissions();
}

function showFormMessage(text, type) {
    const message = document.getElementById('form-message');
    if (!message) return;

    message.textContent = text;
    message.className = `form-message ${type}`;

    setTimeout(() => {
        message.className = 'form-message';
    }, 5000);
}

function displaySubmissions() {
    const submissionsList = document.getElementById('submissions-list');
    const submissionsCount = document.getElementById('submissions-count');

    if (!submissionsList || !submissionsCount) return;

    const submissions = JSON.parse(localStorage.getItem('contactSubmissions') || '[]');
    
    if (submissions.length === 0) {
        submissionsCount.textContent = 'No submissions yet.';
        submissionsList.innerHTML = '';
        return;
    }

    submissionsCount.textContent = `Total submissions: ${submissions.length}`;

    const recentSubmissions = submissions.slice(-5).reverse();

    const submissionsHTML = recentSubmissions.map(submission => {
        const date = new Date(submission.timestamp);
        const formattedDate = `${date.toLocaleDateString()} at ${date.toLocaleTimeString()}`;

        return `
            <div class="submission-item">
                <div class="submission-header">
                    <span class="submission-name">${submission.name}</span>
                    <span class="submission-date">${formattedDate}</span>
                </div>
                <span class="submission-subject">${submission.subject}</span>
                <p class="submission-message">${submission.message}</p>
            </div>
        `;
    }).join('');

    submissionsList.innerHTML = submissionsHTML;
}

function updateFooterDates() {
    const currentYearElement = document.getElementById('currentYear');
    const lastModifiedElement = document.getElementById('lastModified');

    if (currentYearElement) {
        currentYearElement.textContent = new Date().getFullYear();
    }

    if (lastModifiedElement) {
        lastModifiedElement.textContent = document.lastModified;
    }
}

function initializePage() {
    updateFooterDates();
    setupHamburgerMenu();
    displayFeaturedRecipes();
    displayTips();
    displayFAQs();
    setupRecipeFilters();
    displaySubmissions();

    const newsletterForm = document.getElementById('newsletter-form');
    if (newsletterForm) {
        newsletterForm.addEventListener('submit', handleNewsletterSubmit);
    }

    const contactForm = document.getElementById('contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', handleContactFormSubmit);
    }
}

if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initializePage);
} else {
    initializePage();
}

