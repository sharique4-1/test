const products = [
  { id: 1, name: "T-shirt", price: 10 },
  { id: 2, name: "Jeans", price: 25 },
  { id: 3, name: "Shoes", price: 40 },
  { id: 4, name: "Cap", price: 5 },
  { id: 5, name: "Jacket", price: 60 }
];

let cart = [];

const productList = document.getElementById('product-list');
const cartCount = document.getElementById('cart-count');
const cartModal = document.getElementById('cart-modal');
const cartItems = document.getElementById('cart-items');
const cartTotal = document.getElementById('cart-total');

function renderProducts() {
  products.forEach(p => {
    const div = document.createElement('div');
    div.className = 'product';
    div.innerHTML = `
      <h3>${p.name}</h3>
      <p>$${p.price}</p>
      <button onclick="addToCart(${p.id})">Add to Cart</button>
    `;
    productList.appendChild(div);
  });
}

function addToCart(id) {
  const product = products.find(p => p.id === id);
  cart.push(product);
  updateCartUI();
}

function updateCartUI() {
  cartCount.innerText = cart.length;
}

document.getElementById('cart-btn').addEventListener('click', () => {
  showCart();
});

function showCart() {
  cartModal.classList.remove('hidden');
  cartItems.innerHTML = '';
  let total = 0;
  cart.forEach((item, index) => {
    const li = document.createElement('li');
    li.textContent = `${item.name} - $${item.price}`;
    cartItems.appendChild(li);
    total += item.price;
  });
  cartTotal.innerText = total;
}

function closeCart() {
  cartModal.classList.add('hidden');
}

renderProducts();
