<script setup>
import { computed } from 'vue'
import { useFavorites } from '@/composables/useFavorites'

const props = defineProps(['product'])

const { favorites, toggleFavorite } = useFavorites()

const favoriteState = computed(() => favorites.value.some((p) => p.id === props.product.id))
</script>

<template>
  <div class="product-card">
    <div class="badge" v-if="product.discount">{{ product.discount }} попуст</div>

    <img
      :src="product.img"
      :alt="product.name"
      @error="(e) => (e.target.src = 'https://via.placeholder.com/200')"
    />

    <h3>{{ product.name }}</h3>

    <div class="prices">
      <span v-if="product.oldPrice" class="old-price">{{ product.oldPrice }}ден</span>
      <span class="new-price">{{ product.price }}ден</span>
    </div>

    <button @click="toggleFavorite(product)" class="favorite-btn">
      <i :class="favoriteState ? 'bi bi-heart-fill active-heart' : 'bi bi-heart'"></i>
      <span>
        {{ favoriteState ? 'Отстрани од омилени' : 'Додај во омилени' }}
      </span>
    </button>
  </div>
</template>

<style scoped>
.product-card {
  border: 1px solid #eee;
  padding: 15px;
  text-align: center;
  position: relative;
  transition: transform 0.2s;
}
.product-card:hover {
  transform: translateY(-5px);
}
.badge {
  position: absolute;
  top: 10px;
  left: 10px;
  background: #f8d7da;
  color: #dc3545;
  padding: 2px 8px;
  font-size: 12px;
}
img {
  width: 100%;
  height: 200px;
  object-fit: contain;
}
h3 {
  font-size: 14px;
  margin: 10px 0;
  color: #333;
}
.old-price {
  text-decoration: line-through;
  color: #999;
  margin-right: 10px;
  font-size: 13px;
}
.new-price {
  color: #d63384;
  font-weight: bold;
}
.favorite-btn {
  display: flex;
  align-items: center;
  gap: 8px;
  background: none;
  border: 1px solid #d63384;
  border-radius: 5px;
  padding: 5px 10px;
  cursor: pointer;
  font-size: 14px;
  color: #d63384;
  margin-top: 10px;
}

.favorite-btn:hover {
  background: #d63384;
  color: white;
}

.favorite-btn i {
  font-size: 18px;
}
.product-card {
  transition: 0.3s ease;
}

.product-card:hover {
  transform: translateY(-8px);
  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.1);
}
section {
  padding: 80px 0;
}
.active-heart {
  color: #d63384;
}
.product-card {
  border: 1px solid #eee;
  padding: 15px;
  text-align: center;
  position: relative;

  display: flex;
  flex-direction: column;
  justify-content: space-between;

  height: 100%;
}
.favorite-btn i {
  transition: 0.2s ease;
}

.active-heart {
  color: #d63384;
  transform: scale(1.2);
}
</style>
