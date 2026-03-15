<script setup>
import { ref } from 'vue'

const giftCards = ref([
  {
    id: 1,
    name: 'Gift Card 500 мкд',
    price: 500,
    img: 'https://coslovemetics.mk/wp-content/uploads/GiftCard_500-01.jpg',
  },
  {
    id: 2,
    name: 'Gift Card 1000 мкд',
    price: 1000,
    img: 'https://coslovemetics.mk/wp-content/uploads/GiftCard_1000-01.jpg',
  },
  {
    id: 3,
    name: 'Gift Card 2000 мкд',
    price: 2000,
    img: 'https://coslovemetics.mk/wp-content/uploads/GiftCard_2000-01.jpg',
  },
])
</script>

<template>
  <div class="container">
    <header class="gift-header">
      <h2>ПОДАРОЧНИ КАРТИЧКИ</h2>
      <div class="sort-bar">
        <select>
          <option>Стандардно подредување</option>
        </select>
      </div>
    </header>

    <div class="gift-grid">
      <div v-for="card in giftCards" :key="card.id" class="gift-item">
        <div class="card-img-wrapper">
          <img :src="card.img" :alt="card.name" />
        </div>
        <div class="card-info">
          <h4>{{ card.name }}</h4>
          <p class="gift-price">{{ card.price.toLocaleString() }}ден</p>
        </div>
      </div>
    </div>
  </div>

  <footer class="main-footer">
    <div class="footer-container">
      <div class="footer-section register">
        <p>Пријави се за најновите промоции и новости.</p>
        <form @submit.prevent="submitNewsletter" class="newsletter-form">
          <input type="email" placeholder="Вашата е-маил адреса" v-model="email" required />
          <button type="submit">ПРИЈАВИ СЕ</button>
        </form>
      </div>

      <div class="footer-section share_us">
        <h2>Следете нѐ</h2>
        <div class="social-links">
          <a href="https://www.instagram.com/glowcare" target="_blank" class="social-item">
            <img src="@/images/insta.jpg" alt="Instagram" />
            <span>Instagram</span>
          </a>
          <a href="https://www.facebook.com" target="_blank" class="social-item">
            <div class="fb-placeholder">f</div>
            <span>Facebook</span>
          </a>
        </div>
      </div>
    </div>

    <div class="footer-bottom">
      <p>&copy; 2024 GlowCare. Сите права се задржани.</p>
    </div>
  </footer>
</template>

<style scoped>
.container {
  max-width: 1200px;
  margin: 40px auto;
  padding: 0 20px;
}
.gift-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 30px;
  border-bottom: 1px solid #eee;
  padding-bottom: 10px;
}
.gift-header h2 {
  font-size: 20px;
  color: #333;
  font-weight: normal;
}

.gift-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  gap: 30px;
}

.gift-item {
  border: 1px solid #f2f2f2;
  padding: 20px;
  text-align: center;
  transition: 0.3s;
}
.gift-item:hover {
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.05);
}

.card-img-wrapper {
  margin-bottom: 20px;
}
.card-img-wrapper img {
  width: 100%;
  height: auto;
  border-radius: 5px;
}

.card-info h4 {
  font-size: 16px;
  color: #444;
  margin-bottom: 15px;
  font-weight: normal;
}
.gift-price {
  color: #888;
  font-size: 15px;
}

select {
  border: 1px solid #ddd;
  padding: 8px;
  color: #666;
  outline: none;
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
</style>
