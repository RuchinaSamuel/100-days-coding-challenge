// Get cart items from localStorage or initialize empty
let cart = JSON.parse(localStorage.getItem('cart')) || [];

// Elements
const cartItemsContainer = document.getElementById('cartItems');
const cartTotal = document.getElementById('cartTotal');

// Render cart items
function renderCart() {
  cartItemsContainer.innerHTML = '';

  let total = 0;

  cart.forEach((item, index) => {
    total += item.price * item.quantity;

    const div = document.createElement('div');
    div.className = "flex justify-between items-center bg-white p-4 rounded shadow";

    div.innerHTML = `
      <div class="flex items-center gap-4">
        <img src="${item.image}" class="w-16 h-16 rounded">
        <div>
          <h3 class="font-semibold">${item.name}</h3>
          <p class="text-gray-500">N${item.price}</p>
          <div class="flex items-center gap-2 mt-2">
            <button onclick="changeQuantity(${index}, -1)" class="border px-2 rounded">-</button>
            <span>${item.quantity}</span>
            <button onclick="changeQuantity(${index}, 1)" class="border px-2 rounded">+</button>
          </div>
        </div>
      </div>
      <button onclick="removeItem(${index})" class="text-red-500 hover:text-red-700">Remove</button>
    `;

    cartItemsContainer.appendChild(div);
  });

  cartTotal.textContent = `N${total.toLocaleString()}`;
}

// Change quantity
function changeQuantity(index, delta) {
  cart[index].quantity += delta;

  if (cart[index].quantity <= 0) {
    cart.splice(index, 1);
  }

  saveCart();
}

// Remove item
function removeItem(index) {
  cart.splice(index, 1);
  saveCart();
}

// Save and re-render
function saveCart() {
  localStorage.setItem('cart', JSON.stringify(cart));
  renderCart();
}

// Initial render
renderCart();
