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

function initializeDates() {
    setCurrentYear();
    setLastModified();
}

initializeDates();

document.addEventListener('DOMContentLoaded', function() {
    if (document.readyState === 'loading') {
        initializeDates();
    }
});