/* =============================================
   PRODUTOS PAGE — SCRIPTS
   ============================================= */

document.addEventListener('DOMContentLoaded', () => {
  // --- Sidebar Category Toggle ---
  const categoryBtns = document.querySelectorAll('.sidebar__category-btn');
  categoryBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      const parent = btn.closest('.sidebar__category');
      parent.classList.toggle('open');
    });
  });

  // --- Cart State (with LocalStorage) ---
  const cartItemsList = document.querySelector('.cart__items');
  const cartBadge = document.querySelector('.cart__badge');
  const cartTotalValue = document.querySelector('.cart__total-value');
  const checkoutBtn = document.querySelector('.cart__checkout-btn');
  const cartEmptyMsg = document.querySelector('.cart__empty');

  // Load cart from localStorage
  let cart = JSON.parse(localStorage.getItem('aquaimperial_cart') || '[]');

  function saveCart() {
    localStorage.setItem('aquaimperial_cart', JSON.stringify(cart));
  }

  function updateCart() {
    // Update items list
    cartItemsList.innerHTML = '';
    cart.forEach((item, index) => {
      const li = document.createElement('li');
      li.className = 'cart__item';
      li.innerHTML = `
        <span class="cart__item-name">${item.name}</span>
        <span class="cart__item-price">R$ ${item.price.toFixed(2)}</span>
        <button class="cart__item-remove" data-index="${index}" title="Remover" aria-label="Remover ${item.name} do carrinho">&times;</button>
      `;
      cartItemsList.appendChild(li);
    });

    // Update total
    const total = cart.reduce((sum, item) => sum + item.price, 0);
    cartTotalValue.textContent = `R$ ${total.toFixed(2)}`;

    // Update badge with aria
    cartBadge.textContent = cart.length;

    // Toggle empty message
    if (cartEmptyMsg) {
      cartEmptyMsg.style.display = cart.length === 0 ? 'block' : 'none';
    }

    // Toggle checkout button
    checkoutBtn.disabled = cart.length === 0;

    // Save to localStorage
    saveCart();

    // Add remove event listeners
    document.querySelectorAll('.cart__item-remove').forEach(btn => {
      btn.addEventListener('click', () => {
        const index = parseInt(btn.dataset.index);
        const removedName = cart[index].name;
        cart.splice(index, 1);
        updateCart();
        showToast(`${removedName} removido do carrinho`, 'info');
      });
    });
  }

  // --- Add to Cart ---
  const addToCartBtns = document.querySelectorAll('.product-card__btn');
  addToCartBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      const card = btn.closest('.product-card');
      const name = card.dataset.name;
      const price = parseFloat(card.dataset.price);

      cart.push({ name, price });
      updateCart();

      // Toast notification
      showToast(`${name} adicionado ao carrinho!`, 'success');

      // Visual feedback on button
      btn.classList.add('added');
      const originalText = btn.innerHTML;
      btn.innerHTML = `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M20 6L9 17l-5-5"/></svg> Adicionado!`;

      setTimeout(() => {
        btn.classList.remove('added');
        btn.innerHTML = originalText;
      }, 1200);
    });
  });

  // --- Checkout ---
  checkoutBtn.addEventListener('click', () => {
    if (cart.length === 0) return;

    const total = cart.reduce((sum, item) => sum + item.price, 0);
    showToast(`Compra finalizada! Total: R$ ${total.toFixed(2)}`, 'success');
    cart = [];
    updateCart();
  });

  // Initialize cart on load
  updateCart();
});
