document.addEventListener('DOMContentLoaded', () => {
    // Add hover effect to navigation links
    const navLinks = document.querySelectorAll('nav ul li a');
    navLinks.forEach(link => {
        link.addEventListener('mouseover', () => {
            link.style.color = '#FFD700';
        });
        link.addEventListener('mouseout', () => {
            link.style.color = 'white';
        });
    });

    // Example of dynamic content loading (for demonstration)
    if (document.querySelector('.product-list')) {
        const products = [
            { name: 'Product 1', description: 'Description of Product 1', image: 'product1.jpg' },
            { name: 'Product 2', description: 'Description of Product 2', image: 'product2.jpg' },
            // Add more products as needed
        ];

        const productList = document.querySelector('.product-list');
        products.forEach(product => {
            const productItem = document.createElement('div');
            productItem.className = 'product-item';
            productItem.innerHTML = `
                <img src="${product.image}" alt="${product.name}">
                <h2>${product.name}</h2>
                <p>${product.description}</p>
            `;
            productList.appendChild(productItem);
        });
    }

    // Example of modal popup for custom design page
    if (document.querySelector('.custom-design-btn')) {
        const customBtn = document.querySelector('.custom-design-btn');
        const modal = document.querySelector('.custom-modal');
        const closeModal = document.querySelector('.close-modal');

        customBtn.addEventListener('click', () => {
            modal.style.display = 'block';
        });

        closeModal.addEventListener('click', () => {
            modal.style.display = 'none';
        });

        window.addEventListener('click', (e) => {
            if (e.target === modal) {
                modal.style.display = 'none';
            }
        });
    }
});