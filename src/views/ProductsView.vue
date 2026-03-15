<script setup>
import { ref, computed, onMounted } from 'vue'
import { useCartStore } from '@/stores/cart'
import { useFavorites } from '@/composables/useFavorites'

const cart = useCartStore()
const { toggleFavorite, isFavorite } = useFavorites()

const products = ref([])
const loading = ref(true)
const selectedCategory = ref('ALL')
const email = ref('')

// Оваа мапа ги поврзува МК копчињата со вредностите во базата
const categoryMapping = {
  КОМБИНИРАНА: 'combination',
  СУВА: 'dry',
  НОРМАЛНА: 'normal',
}

async function fetchProducts() {
  try {
    loading.value = true
    const response = await fetch('http://localhost:3000/api/products')
    const data = await response.json()

    products.value = data.map((p) => {
      // Претвори го PostgreSQL стрингот "{oily,combination}" во ["oily", "combination"]
      let skinTypes = []
      if (typeof p.skin_type === 'string') {
        skinTypes = p.skin_type.replace(/[{}"']/g, '').split(',')
      } else if (Array.isArray(p.skin_type)) {
        skinTypes = p.skin_type
      }

      return {
        id: p.id,
        name: p.name,
        price: p.price,
        img: p.image,
        skin_type: skinTypes,
        oldPrice: p.old_price || null,
        discount: p.discount || null,
      }
    })
  } catch (error) {
    console.error('Грешка при вчитување:', error)
  } finally {
    loading.value = false
  }
}

onMounted(fetchProducts)

// Клучна логика за филтрирање
const filteredProducts = computed(() => {
  if (selectedCategory.value === 'ALL') return products.value

  const target = categoryMapping[selectedCategory.value]

  return products.value.filter((p) => {
    return p.skin_type && p.skin_type.includes(target)
  })
})

const setCategory = (cat) => {
  selectedCategory.value = cat
}

function addProductToCart(product) {
  cart.addToCart(product)
}
</script>

<template>
  <div class="container">
    <div class="shop-layout">
      <aside class="sidebar">
        <h3>КАТЕГОРИИ</h3>
        <ul>
          <li @click="setCategory('ALL')" :class="{ active: selectedCategory === 'ALL' }">
            > СИТЕ
          </li>
          <li>
            - Тип на кожа
            <ul class="submenu">
              <li
                @click="setCategory('КОМБИНИРАНА')"
                :class="{ active: selectedCategory === 'КОМБИНИРАНА' }"
              >
                > КОМБИНИРАНА
              </li>
              <li @click="setCategory('СУВА')" :class="{ active: selectedCategory === 'СУВА' }">
                > СУВА
              </li>
              <li
                @click="setCategory('НОРМАЛНА')"
                :class="{ active: selectedCategory === 'НОРМАЛНА' }"
              >
                > НОРМАЛНА
              </li>
            </ul>
          </li>
        </ul>
      </aside>

      <main class="content">
        <div v-if="loading">Се вчитува...</div>
        <div v-else class="grid">
          <div v-for="p in filteredProducts" :key="p.id" class="card">
            <div v-if="p.discount" class="badge">{{ p.discount }}</div>

            <div class="img-container">
              <img
                :src="p.img"
                :alt="p.name"
                @error="(e) => (e.target.src = 'https://via.placeholder.com/200')"
              />
            </div>

            <h4>{{ p.name }}</h4>
            <div class="prices">
              <span v-if="p.oldPrice" class="old">{{ p.oldPrice }} ден</span>
              <span class="current">{{ p.price }} ден</span>
            </div>

            <button class="fav-btn" @click="toggleFavorite(p)">
              {{ isFavorite(p.id) ? '❤️' : '🤍' }}
            </button>
            <button class="cart-btn" @click="addProductToCart(p)">🛒 Додади во кошничка</button>
          </div>
        </div>

        <div v-if="!loading && filteredProducts.length === 0" class="no-products">
          Нема производи во оваа категорија моментално.
        </div>
      </main>
    </div>
  </div>
</template>

<style scoped>
.container {
  padding-top: 20px;
}
.shop-layout {
  display: flex;
  gap: 30px;
  max-width: 1200px;
  margin: 0 auto;
}

.sidebar {
  width: 250px;
  text-align: left;
}
.sidebar h3 {
  font-size: 16px;
  border-bottom: 2px solid #eee;
  padding-bottom: 10px;
  margin-bottom: 15px;
}
.sidebar ul {
  list-style: none;
  padding: 0;
}
.sidebar li {
  padding: 8px 0;
  cursor: pointer;
  font-size: 14px;
  transition: 0.3s;
}
.sidebar li:hover {
  color: #f06292;
}
.sidebar li.active {
  color: #f06292;
  font-weight: bold;
}

.submenu {
  padding-left: 15px;
  margin-top: 5px;
}

.grid {
  flex: 1;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;
}

.card {
  border: 1px solid #eee;
  padding: 15px;
  display: flex;
  flex-direction: column;
  align-items: center;
  background: white;
  transition: transform 0.2s;
}
.card:hover {
  transform: translateY(-5px);
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.05);
}
.cart-btn {
  background-color: pink;
}
.img-container {
  width: 100%;
  height: 250px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.img-container img {
  max-width: 100%;
  max-height: 100%;
  object-fit: contain;
}

.badge {
  align-self: flex-start;
  background: #fce4ec;
  color: #f06292;
  padding: 2px 8px;
  font-size: 11px;
  margin-bottom: 10px;
  border-radius: 3px;
}

h4 {
  font-size: 13px;
  margin: 15px 0;
  color: #444;
  height: 40px;
  overflow: hidden;
  line-height: 1.4;
  text-align: center;
}
.old {
  text-decoration: line-through;
  color: #ccc;
  margin-right: 10px;
  font-size: 13px;
}
.current {
  color: #f06292;
  font-weight: bold;
  font-size: 15px;
}

.no-products {
  text-align: center;
  padding: 50px;
  color: #999;
  width: 100%;
}

/* Гlavniot Footer */
.main-footer {
  background-color: #fdf2f7; /* Нежна розова нијанса која одговара на брендот */
  padding: 40px 20px 20px;
  margin-top: 50px;
  border-top: 1px solid #ffe6f0;
}

.footer-container {
  max-width: 1100px;
  margin: 0 auto;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: flex-start;
  gap: 30px;
}

.footer-section {
  flex: 1;
  min-width: 280px;
}

.footer-section h2 {
  font-size: 1.2rem;
  margin-bottom: 15px;
  color: #333;
}

/* Стил за Формата */
.newsletter-form {
  display: flex;
  gap: 10px;
}

.newsletter-form input {
  flex: 1;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
}

.newsletter-form button {
  background-color: #333;
  color: white;
  border: none;
  padding: 10px 20px;
  border-radius: 5px;
  cursor: pointer;
  transition: 0.3s;
}

.newsletter-form button:hover {
  background-color: #ffe6f0;
  color: black;
}

/* Стил за Социјалните мрежи */
.social-links {
  display: flex;
  gap: 20px;
}

.social-item {
  text-decoration: none;
  color: #555;
  display: flex;
  flex-direction: column;
  align-items: center;
  font-size: 0.9rem;
  transition: 0.3s;
}

.social-item img,
.fb-placeholder {
  width: 45px;
  height: 45px;
  border-radius: 10px;
  margin-bottom: 5px;
  object-fit: cover;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
}

.fb-placeholder {
  background: #1877f2;
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 24px;
  font-weight: bold;
}

.social-item:hover {
  transform: translateY(-5px);
  color: #000;
}

/* Најдолниот дел */
.footer-bottom {
  text-align: center;
  margin-top: 40px;
  padding-top: 20px;
  border-top: 1px solid #eee;
  font-size: 0.8rem;
  color: #888;
}

/* Responsive за мобилен */
@media (max-width: 768px) {
  .footer-container {
    flex-direction: column;
    text-align: center;
  }
  .newsletter-form {
    flex-direction: column;
  }
  .social-links {
    justify-content: center;
  }
}

/* Главниот Footer */
.main-footer {
  background-color: #fdf2f7;
  padding: 60px 20px 30px; /* Малку повеќе простор горе */
  margin-top: 50px;
  border-top: 1px solid #ffe6f0;
}

.footer-container {
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center; /* Центрирај ги сите секции вертикално */
  gap: 40px;
}

.footer-section {
  flex: 1;
}

/* Средување на насловите и описот */
.footer-section h2 {
  font-size: 1.3rem;
  margin-bottom: 5px;
  color: #333;
}

.footer-section p {
  font-size: 0.9rem;
  margin-bottom: 0;
  color: #666;
}

/* Стил за Формата - за да биде во иста линија */
.newsletter-form {
  display: flex;
  align-items: stretch; /* Копчето и инпутот да бидат иста висина */
  gap: 0; /* Ги лепиме едно до друго за модерен изглед */
}

.newsletter-form input {
  flex: 2;
  padding: 12px 15px;
  border: 1px solid #ddd;
  border-radius: 5px 0 0 5px; /* Заоблено само лево */
  outline: none;
  font-size: 0.9rem;
}

.newsletter-form button {
  background-color: #333;
  color: white;
  border: none;
  padding: 0 25px;
  border-radius: 0 5px 5px 0; /* Заоблено само десно */
  cursor: pointer;
  font-weight: bold;
  transition: 0.3s;
  white-space: nowrap; /* Да не се крши текстот во копчето */
}

.newsletter-form button:hover {
  background-color: #555;
}

/* Стил за Социјалните мрежи */
.social-links {
  display: flex;
  justify-content: flex-end; /* Ги турка иконите десно */
  gap: 25px;
}

.social-item {
  text-decoration: none;
  color: #555;
  display: flex;
  flex-direction: column;
  align-items: center;
  transition: 0.3s;
}

.social-item img,
.fb-placeholder {
  width: 40px;
  height: 40px;
  border-radius: 8px;
  margin-bottom: 8px;
  object-fit: contain;
}

.social-item span {
  font-size: 0.8rem;
  font-weight: 500;
}

/* Главниот Footer */
.main-footer {
  background-color: #fdf2f7;
  padding: 50px 0 20px;
  margin-top: 50px;
  border-top: 1px solid #ffe6f0;
}

.footer-container {
  max-width: 1500px;
  margin: 0 auto;
  display: flex;
  justify-content: space-around; /* Подобро распределување на просторот */
  align-items: center; /* Ги порамнува сите три блока на иста висина */
}

/* Секцијата за Текст */
.footer-section.register {
  flex: 1;
}

.footer-section h2 {
  color: #333;
}

.footer-section p {
  font-size: 0.95rem;
  color: #666;
}

/* Секцијата за Форма - Средена висина */
.newsletter-form {
  display: flex;
  height: 45px; /* Фиксна висина за порамнување */
  flex: 1.5;
  max-width: 450px;
  margin: 0 40px;
}

.newsletter-form input {
  flex: 1;
  padding: 0 15px;
  border: 1px solid #ddd;
  border-radius: 5px 0 0 5px;
  outline: none;
}

.newsletter-form button {
  background-color: #333;
  color: white;
  border: none;
  padding: 0 25px;
  border-radius: 0 5px 5px 0;
  cursor: pointer;
  font-weight: bold;
  font-size: 0.85rem;
  transition: 0.3s;
}

/* Секцијата за Социјални мрежи */
.footer-section.share_us {
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.social-links {
  display: flex;
  gap: 30px;
  margin-top: 15px;
}

.social-item {
  text-decoration: none;
  color: #444;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
}

.social-item img {
  width: 42px;
  height: 42px;
  transition: transform 0.2s;
}

.social-item span {
  font-size: 0.8rem;
  font-weight: 600;
}

.social-item:hover img {
  transform: scale(1.1);
}

/* Најдолниот дел */
.footer-bottom {
  text-align: center;
  margin-top: 40px;
  padding-top: 20px;
  font-size: 0.9rem;
  color: #999;
  border-top: 1px solid rgba(0, 0, 0, 0.05);
}

#app > footer > div.footer-container > div.footer-section.register {
  padding: 100px;
}
#app > footer > div.footer-container > div.footer-section.register > p {
  margin-left: 100px;
  padding: 20px;
}
#app > footer > div.footer-container > div.footer-section.register > form > input[type='email'] {
  padding: 20px;
}
#app > footer > div.footer-container > div.footer-section.register > form > button {
  margin-left: 30px;
}

.fav-btn {
  background: none;
  border: none;
  cursor: pointer;
  font-size: 22px;
  margin-top: 10px;
  transition: transform 0.2s;
}

.fav-btn:hover {
  transform: scale(1.2);
}
.card {
  border: 1px solid #eee;
  padding: 15px;
  display: flex;
  flex-direction: column;
  justify-content: space-between; /* ⭐ MAGIC */
  height: 100%;
}
.grid {
  align-items: stretch;
}
</style>
