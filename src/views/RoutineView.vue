<script setup>
import { ref } from 'vue'

import axios from 'axios'

const skinType = ref('')
const acneLevel = ref('')
const products = ref([])
const loading = ref(false)

// Мапирање од македонски избор во англиски вредности за базата
const mapping = {
  skin: {
    сува: 'dry',
    масна: 'oily',
    комбинирана: 'combination',
    нормална: 'normal',
  },
  acne: {
    нема: 'none',
    лесни: 'mild',
    умерени: 'moderate',
    тешки: 'severe',
  },
}

async function generateRoutine() {
  if (!skinType.value || !acneLevel.value) {
    return alert('Ве молиме изберете ги сите параметри!')
  }

  loading.value = true
  products.value = []

  try {
    // Ги претвораме македонските вредности во англиски пред да ги пратиме
    const payload = {
      skinType: mapping.skin[skinType.value],
      acneLevel: mapping.acne[acneLevel.value],
    }

    const response = await axios.post('http://localhost:3000/recommend', payload)

    setTimeout(() => {
      products.value = response.data
      loading.value = false
    }, 1200)
  } catch (err) {
    console.error('Грешка:', err)
    loading.value = false
    alert('Грешка при поврзување со базата. Проверете дали серверот на порт 3000 е пуштен.')
  }
}
</script>

<template>
  <div class="reel-container">
    <div class="glass-card">
      <header>
        <div class="ai-badge">AI ТЕХНОЛОГИЈА</div>
        <h1>Skin<b>Routine</b></h1>
        <p>Твојата идеална нега, веднаш.</p>
      </header>

      <div class="form-group">
        <label>Тип на кожа</label>
        <select v-model="skinType" class="modern-select">
          <option value="" disabled selected>Избери тип...</option>
          <option value="сува">СУВА</option>
          <option value="масна">МАСНА</option>
          <option value="комбинирана">КОМБИНИРАНА</option>
          <option value="нормална">НОРМАЛНА</option>
        </select>

        <label>Ниво на акни</label>
        <select v-model="acneLevel" class="modern-select">
          <option value="" disabled selected>Избери ниво...</option>
          <option value="нема">НЕМА (None)</option>
          <option value="лесни">ЛЕСНИ (Mild)</option>
          <option value="умерени">УМЕРЕНИ (Moderate)</option>
          <option value="тешки">ТЕШКИ (Severe)</option>
        </select>

        <button @click="generateRoutine" :disabled="loading" class="glow-button">
          <span v-if="!loading">ГЕНЕРИРАЈ РУТИНА</span>
          <span v-else class="loader"></span>
        </button>
      </div>

      <transition-group name="list" tag="div" class="results-grid">
        <div v-for="(p, index) in products" :key="p.id || index" class="product-card">
          <div class="step-tag">Чекор {{ index + 1 }}</div>
          <img :src="p.image" class="product-img" />
          <div class="product-info">
            <h4>{{ p.name }}</h4>
            <span>Препорачано за {{ skinType }} кожа</span>
          </div>
        </div>
      </transition-group>
    </div>
  </div>
</template>

<style scoped>
/* Стиловите остануваат истите од претходно за "Fancy" изглед */
.reel-container {
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background: linear-gradient(135deg, #f5f7fa 0%, #d6e0f0 100%);
  padding: 20px;
  font-family:
    'Inter',
    -apple-system,
    sans-serif;
}

.glass-card {
  width: 100%;
  max-width: 400px;
  background: rgba(255, 255, 255, 0.75);
  backdrop-filter: blur(15px);
  border-radius: 30px;
  padding: 30px;
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.1);
  border: 1px solid rgba(255, 255, 255, 0.3);
}

header {
  text-align: center;
  margin-bottom: 30px;
}
.ai-badge {
  display: inline-block;
  font-size: 10px;
  letter-spacing: 2px;
  background: #000;
  color: #fff;
  padding: 4px 12px;
  border-radius: 20px;
  margin-bottom: 10px;
}

h1 {
  font-weight: 300;
  margin: 0;
  font-size: 2rem;
  color: #333;
}
h1 b {
  font-weight: 800;
  color: #ff8e8e;
}

.form-group {
  display: flex;
  flex-direction: column;
  gap: 15px;
}
label {
  font-size: 11px;
  font-weight: 700;
  text-transform: uppercase;
  color: #888;
  margin-left: 5px;
}

.modern-select {
  padding: 15px;
  border-radius: 15px;
  border: 1px solid rgba(0, 0, 0, 0.05);
  background: white;
  font-size: 0.95rem;
  outline: none;
}

.glow-button {
  margin-top: 10px;
  padding: 18px;
  border-radius: 15px;
  border: none;
  background: #000;
  color: white;
  font-weight: 700;
  cursor: pointer;
  transition: transform 0.2s ease;
}

.glow-button:active {
  transform: scale(0.96);
}

.results-grid {
  margin-top: 30px;
  display: grid;
  gap: 15px;
}

.product-card {
  display: flex;
  align-items: center;
  background: white;
  padding: 15px;
  border-radius: 20px;
  position: relative;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.05);
}

.step-tag {
  position: absolute;
  top: 0;
  right: 0;
  background: #ff8e8e;
  color: white;
  font-size: 10px;
  padding: 4px 10px;
  border-bottom-left-radius: 12px;
}

.product-img {
  width: 60px;
  height: 60px;
  object-fit: contain;
  margin-right: 15px;
}
.product-info h4 {
  margin: 0;
  font-size: 0.85rem;
  color: #333;
  line-height: 1.2;
}
.product-info span {
  font-size: 0.7rem;
  color: #999;
}

.list-enter-active {
  transition: all 0.5s ease;
}
.list-enter-from {
  opacity: 0;
  transform: translateY(20px);
}

.loader {
  border: 2px solid #fff;
  border-top: 2px solid transparent;
  border-radius: 50%;
  width: 16px;
  height: 16px;
  animation: spin 0.8s linear infinite;
  display: inline-block;
}
@keyframes spin {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
</style>
