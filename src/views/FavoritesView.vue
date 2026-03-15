<script setup>
import { useFavorites } from '@/composables/useFavorites'

const { favorites, removeFavorite } = useFavorites()
</script>

<template>
  <div class="favorites-container">
    <h2>❤️ Мои омилени производи</h2>

    <div v-if="favorites.length === 0" class="empty">Немате додадено омилени производи.</div>

    <div v-else class="grid">
      <div v-for="p in favorites" :key="p.id" class="card">
        <img :src="p.img" :alt="p.name" />

        <h4>{{ p.name }}</h4>

        <div class="price">{{ p.price }}ден</div>

        <button @click="removeFavorite(p.id)">Отстрани ❌</button>
      </div>
    </div>
  </div>
</template>

<style scoped>
.favorites-container {
  max-width: 1200px;
  margin: 50px auto;
}

.grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;
}

.card {
  border: 1px solid #eee;
  padding: 20px;
  text-align: center;
}

.card img {
  max-width: 100%;
  height: 200px;
  object-fit: contain;
}

button {
  margin-top: 10px;
  background: #f06292;
  border: none;
  padding: 8px 15px;
  color: white;
  cursor: pointer;
}
</style>
