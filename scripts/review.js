function updateReviewCounter() {
    try {
        let reviewCount = localStorage.getItem('reviewCount');
        
        if (reviewCount === null || reviewCount === undefined) {
            reviewCount = 0;
        } else {
            reviewCount = parseInt(reviewCount, 10);
            
            if (isNaN(reviewCount) || reviewCount < 0) {
                reviewCount = 0;
            }
        }
        
        reviewCount++;
        
        localStorage.setItem('reviewCount', reviewCount.toString());
        
        const counterElement = document.getElementById('reviewCount');
        if (counterElement) {
            counterElement.textContent = reviewCount;
        }
        
        return reviewCount;
    } catch (error) {
        console.error('Error updating review counter:', error);
        
        const counterElement = document.getElementById('reviewCount');
        if (counterElement) {
            counterElement.textContent = '1';
        }
        return 1;
    }
}

function displayReviewSummary() {
    try {
        const urlParams = new URLSearchParams(window.location.search);
        const summaryElement = document.getElementById('reviewSummary');
        
        if (!summaryElement) return;
        
        const productName = urlParams.get('productName');
        const rating = urlParams.get('rating');
        
        if (productName && rating) {
            const ratingNum = parseInt(rating, 10);
            
            if (ratingNum >= 1 && ratingNum <= 5) {
                const stars = '★'.repeat(ratingNum);
                const productNameDecoded = decodeURIComponent(productName);
                summaryElement.innerHTML = `You rated <strong>${productNameDecoded}</strong>: <span style="color:#f59e0b">${stars}</span>`;
            }
        }
    } catch (error) {
        console.error('Error displaying review summary:', error);
    }
}

document.addEventListener('DOMContentLoaded', function() {
    updateReviewCounter();
    displayReviewSummary();
    
    const currentYear = new Date().getFullYear();
    const yearElement = document.getElementById('currentYear');
    if (yearElement) {
        yearElement.textContent = currentYear;
    }
});

