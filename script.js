let cart = JSON.parse(localStorage.getItem('cart')) || [];
const cartCountElement = document.getElementById('cart-count');

updateCartCount();

document.querySelectorAll('.add-to-cart').forEach(button => {
    button.addEventListener('click', () => {
        const product = button.parentElement;
        const name = product.dataset.name;
        const price = parseFloat(product.dataset.price);

        cart.push({ name, price });
        localStorage.setItem('cart', JSON.stringify(cart)); // Save cart to local storage
        updateCartCount();
        alert(`Added ${name} to cart for $${price}`);
    });
});

function updateCartCount() {
    cartCountElement.textContent = cart.length;
}

// Function to show cart details
function showCart() {
    const cartDiv = document.createElement('div');
    cartDiv.id = 'cart';
    cartDiv.innerHTML = '<h2>Your Cart</h2>';

    if (cart.length === 0) {
        cartDiv.innerHTML += '<p>Your cart is empty.</p>';
    } else {
        cart.forEach(item => {
            cartDiv.innerHTML += `<p>${item.name} - $${item.price}</p>`;
        });
    }

    document.body.appendChild(cartDiv);
    cartDiv.style.display = 'block';
}

// Show cart when clicking on cart link
document.querySelector('nav ul li:last-child a').addEventListener('click', (event) => {
    event.preventDefault();
    showCart();
});

