<template>
  <div class="cart-container">
    <h1 class="cart-title">
      Твојата кошничка <span>({{ cart.totalItems }} производи)</span>
    </h1>

    <div v-if="cart.items.length === 0" class="empty-cart">
      <p>Кошничката е моментално празна.</p>
      <router-link to="/products" class="btn-primary">Види производи</router-link>
    </div>

    <div v-else class="cart-layout">
      <div class="cart-items">
        <div v-for="item in cart.items" :key="item.id" class="cart-item">
          <div class="item-image">
            <img :src="item.img" :alt="item.name" />
          </div>

          <div class="item-details">
            <h3>{{ item.name }}</h3>
            <p class="item-price">{{ item.price }} ден.</p>
          </div>

          <div class="item-actions">
            <div class="qty-selector">
              <button @click="item.qty > 1 ? item.qty-- : null" @click.stop="update(item)">
                -
              </button>
              <input
                type="number"
                v-model.number="item.qty"
                @change="update(item)"
                min="1"
                readonly
              />
              <button @click="item.qty++" @click.stop="update(item)">+</button>
            </div>
            <button class="btn-remove" @click="remove(item.id)">
              <i class="trash-icon">🗑</i> Избриши
            </button>
          </div>
        </div>
      </div>

      <div class="cart-summary">
        <h2>Преглед на нарачка</h2>
        <div class="summary-row">
          <span>Производи:</span>
          <span>{{ cart.totalPrice }} ден.</span>
        </div>
        <div class="summary-row">
          <span>Достава:</span>
          <span class="free">Бесплатна</span>
        </div>
        <hr />
        <div class="summary-row total">
          <span>Вкупно:</span>
          <span>{{ cart.totalPrice }} ден.</span>
        </div>
        <button class="btn-checkout" @click="checkout">Комплетирај нарачка</button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { useCartStore } from '@/stores/cart'
const cart = useCartStore()

function remove(id) {
  cart.removeFromCart(id)
}
function update(item) {
  cart.updateQty(item.id, item.qty)
}
function checkout() {
  // повик кон backend за плаќање/нарачка, потоа:
  cart.clearCart()
}
</script>
<style scoped>
.cart-container {
  max-width: 1100px;
  margin: 40px auto;
  padding: 20px;
  font-family: 'Inter', sans-serif;
}

.cart-title {
  font-size: 2rem;
  margin-bottom: 30px;
  border-bottom: 2px solid #f1f1f1;
  padding-bottom: 10px;
}

.cart-layout {
  display: grid;
  grid-template-columns: 2fr 1fr;
  gap: 30px;
}

/* Стил за секој производ */
.cart-item {
  display: flex;
  align-items: center;
  background: white;
  padding: 20px;
  border-radius: 12px;
  margin-bottom: 15px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.05);
  transition: transform 0.2s;
}

.item-image img {
  width: 100px;
  height: 100px;
  object-fit: contain;
  margin-right: 20px;
}

.item-details h3 {
  font-size: 1.1rem;
  margin: 0 0 5px 0;
}

.item-price {
  font-weight: bold;
  color: #e91e63; /* GlowCare розова боја */
}

/* Копчиња за количина */
.item-actions {
  margin-left: auto;
  text-align: right;
}

.qty-selector {
  display: flex;
  align-items: center;
  border: 1px solid #ddd;
  border-radius: 8px;
  overflow: hidden;
  margin-bottom: 10px;
}

.qty-selector button {
  padding: 5px 12px;
  background: #f8f8f8;
  border: none;
  cursor: pointer;
}

.qty-selector input {
  width: 40px;
  text-align: center;
  border: none;
  font-weight: bold;
}

.btn-remove {
  background: none;
  border: none;
  color: #ff4d4d;
  cursor: pointer;
  font-size: 0.9rem;
}

/* Summary Box */
.cart-summary {
  background: #fdf2f5;
  padding: 25px;
  border-radius: 15px;
  height: fit-content;
  position: sticky;
  top: 20px;
}

.summary-row {
  display: flex;
  justify-content: space-between;
  margin: 15px 0;
}

.total {
  font-size: 1.4rem;
  font-weight: 800;
  margin-top: 20px;
}

.btn-checkout {
  width: 100%;
  padding: 15px;
  background: #333;
  color: white;
  border: none;
  border-radius: 10px;
  font-size: 1.1rem;
  cursor: pointer;
  margin-top: 20px;
}

.btn-checkout:hover {
  background: #e91e63;
}

/* Responsive */
@media (max-width: 768px) {
  .cart-layout {
    grid-template-columns: 1fr;
  }
}
</style>
