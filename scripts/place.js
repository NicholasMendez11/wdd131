function calculateWindChill(temperature, windSpeed) {
    return 13.12 + 0.6215 * temperature - 11.37 * Math.pow(windSpeed, 0.16) + 0.3965 * temperature * Math.pow(windSpeed, 0.16);
}

function displayWindChill() {
    const temperature = 28;
    const windSpeed = 15;
    const windChillElement = document.getElementById('windchill');
    
    if (windChillElement) {
        if (temperature <= 10 && windSpeed > 4.8) {
            const windChill = calculateWindChill(temperature, windSpeed);
            windChillElement.textContent = `${Math.round(windChill)}°C`;
        } else {
            windChillElement.textContent = 'N/A';
        }
    }
}

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

function initializePage() {
    setCurrentYear();
    setLastModified();
    displayWindChill();
}

document.addEventListener('DOMContentLoaded', initializePage);
