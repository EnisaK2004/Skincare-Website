<script setup>
import { useFavorites } from '@/composables/useFavorites'
import { useCartStore } from '@/stores/cart'
import { computed } from 'vue'

const { favorites } = useFavorites()

const cart = useCartStore()

const cartCount = computed(() => cart.totalItems)
</script>

<template>
  <nav class="navbar">
    <div class="logo">
      <RouterLink to="/">GlowCare</RouterLink>
    </div>

    <div class="nav-links">
      <RouterLink to="/" exact-active-class="active">Почетна</RouterLink>
      <RouterLink to="/proizvodi" active-class="active">Производи</RouterLink>
      <RouterLink to="/gift-cards" active-class="active">Ваучери</RouterLink>
      <RouterLink to="/brendovi" active-class="active">Брендови</RouterLink>
      <RouterLink to="/kontakt" active-class="active">Контакт</RouterLink>
      <RouterLink to="/popusti" active-class="active"> Попусти </RouterLink>
    </div>

    <div class="nav-icons">
      <RouterLink to="/search"><i class="bi bi-search"></i></RouterLink>

      <RouterLink to="/profile"><i class="bi bi-person"></i></RouterLink>

      <RouterLink to="/cart" class="icon-wrapper">
        <i class="bi bi-bag"></i>
        <span v-if="cartCount > 0" class="badge">
          {{ cartCount }}
        </span>
      </RouterLink>

      <RouterLink to="/favorites" class="icon-wrapper">
        <i class="bi bi-heart"></i>
        <span v-if="favorites.length > 0" class="badge pink">
          {{ favorites.length }}
        </span>
      </RouterLink>
    </div>
  </nav>
</template>

<style scoped>
.navbar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 18px 50px;
  background-color: #fce4ec;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.05);
}

/* Logo */
.logo a {
  font-size: 24px;
  font-weight: bold;
  text-decoration: none;
  color: #2c3e50;
  transition: color 0.2s;
}
.logo a:hover {
  color: #d63384;
}

/* Links */
.nav-links a {
  margin: 0 15px;
  text-decoration: none;
  color: #333;
  font-weight: 500;
  text-transform: uppercase;
  font-size: 13px;
  letter-spacing: 0.5px;
  position: relative;
  transition: color 0.2s;
}

.nav-links a:hover {
  color: #d63384;
}

.nav-links a.active {
  color: #d63384;
}

.nav-links a.active::after {
  content: '';
  position: absolute;
  width: 100%;
  height: 2px;
  background: #d63384;
  bottom: -6px;
  left: 0;
}

/* Icons */
.nav-icons {
  display: flex;
  align-items: center;
  gap: 22px;
}

.nav-icons i {
  font-size: 20px;
  color: #333;
  transition: 0.2s ease;
}

.nav-icons i:hover {
  color: #d63384;
  transform: scale(1.1);
}

/* Icon wrapper (cart & favorites) */
.icon-wrapper {
  position: relative;
  display: flex;
  align-items: center;
}

/* Badge */
.badge {
  position: absolute;
  top: -8px;
  right: -10px;
  background-color: #333;
  color: white;
  font-size: 10px;
  width: 18px;
  height: 18px;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: bold;
}

.badge.pink {
  background-color: #d63384;
}
.navbar {
  position: sticky;
  top: 0;
  z-index: 1000;
}
.navbar {
  backdrop-filter: blur(10px);
}
.nav-links a {
  position: relative;
}

.nav-links a::after {
  content: '';
  position: absolute;
  width: 0;
  height: 2px;
  bottom: -4px;
  left: 0;
  background: #e48aa4;
  transition: 0.3s;
}

.nav-links a:hover::after {
  width: 100%;
}
</style>
