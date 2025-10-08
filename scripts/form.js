const products = [
  { id: "pc-1001", name: "NVIDIA GeForce RTX 4070 GPU", averagerating: 4.7 },
  { id: "pc-1002", name: "AMD Ryzen 7 7800X3D CPU", averagerating: 4.9 },
  { id: "pc-1003", name: "Samsung 970 EVO Plus 1TB NVMe SSD", averagerating: 4.8 },
  { id: "pc-1004", name: "Corsair Vengeance 32GB DDR5 RAM", averagerating: 4.6 },
  { id: "pc-1005", name: "ASUS TUF Gaming B650 Motherboard", averagerating: 4.5 },
  { id: "pc-1006", name: "Noctua NH-D15 CPU Cooler", averagerating: 4.9 }
];

function populateProductSelect() {
    const selectElement = document.getElementById('productName');
    products.forEach(product => {
        const option = document.createElement('option');
        option.value = product.name;
        option.textContent = product.name;
        selectElement.appendChild(option);
    });
}

document.addEventListener('DOMContentLoaded', function() {
    populateProductSelect();
    const today = new Date().toISOString().split('T')[0];
    document.getElementById('installDate').setAttribute('max', today);
    
    const currentYear = new Date().getFullYear();
    const yearElement = document.getElementById('currentYear');
    if (yearElement) {
        yearElement.textContent = currentYear;
    }
});

