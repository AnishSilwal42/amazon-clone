let cart = [];
let totalPrice = 0;

function addToCart(productName, price) {
  cart.push({ productName, price });
  totalPrice += price;
  
  // Update cart button
  document.getElementById('cart-button').textContent = `Cart (${cart.length})`;

  // Update cart modal
  updateCartModal();
}

function updateCartModal() {
  const cartItemsList = document.getElementById('cart-items-list');
  const totalPriceElement = document.getElementById('total-price');
  
  // Clear the cart items list
  cartItemsList.innerHTML = '';

  // Display cart items
  cart.forEach(item => {
    const listItem = document.createElement('li');
    listItem.textContent = `${item.productName} - $${item.price}`;
    cartItemsList.appendChild(listItem);
  });

  // Update total price
  totalPriceElement.textContent = totalPrice;
}

function checkout() {
  alert('Proceeding to checkout...');
  cart = [];
  totalPrice = 0;
  document.getElementById('cart-button').textContent = `Cart (0)`;
  closeCart();
}

function closeCart() {
  document.getElementById('cart-modal').style.display = 'none';
}

document.getElementById('cart-button').addEventListener('click', function() {
  document.getElementById('cart-modal').style.display = 'flex';
});
