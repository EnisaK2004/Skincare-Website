<template>
  <div class="brands">
    <h1>Нашите Брендови</h1>
    <p>Овде ќе ги најдеш сите брендови што ги нудиме во GlowCare.</p>

    <div class="brands-grid">
      <div class="brand-card" v-for="brand in brands" :key="brand.name">
        <img :src="brand.logo" :alt="brand.name" class="brand-logo" />
        <h3>{{ brand.name }}</h3>
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

<script>
export default {
  name: 'BrandsView',
  data() {
    return {
      brands: [
        { name: 'COSRX', logo: new URL('../images/cosrx.jpg', import.meta.url).href },
        { name: 'CeraVe', logo: new URL('../images/cerave.png', import.meta.url).href },
        { name: 'Lancome', logo: new URL('../images/lancome.jpg', import.meta.url).href },
        { name: 'Chanel', logo: new URL('../images/chanel.png', import.meta.url).href },
        { name: 'Dior', logo: new URL('../images/dior.png', import.meta.url).href },
        { name: 'Garnier', logo: new URL('../images/garnier.jpg', import.meta.url).href },
        { name: 'Versage', logo: new URL('../images/versage.png', import.meta.url).href },
        { name: 'Purito', logo: new URL('../images/puriii.png', import.meta.url).href },
        { name: 'ORDINARY', logo: new URL('../images/ord.png', import.meta.url).href },
        { name: 'NYX', logo: new URL('../images/nyx.png', import.meta.url).href },
        { name: 'Neutrogena', logo: new URL('../images/neu.png', import.meta.url).href },
        { name: 'Naiva', logo: new URL('../images/naiva.jpg', import.meta.url).href },

        { name: 'Loreal', logo: new URL('../images/loreal.png', import.meta.url).href },
        { name: 'Balea', logo: new URL('../images/le.png', import.meta.url).href },
        { name: 'La roche Posaye', logo: new URL('../images/la roche.png', import.meta.url).href },
        { name: 'FOX', logo: new URL('../images/fox.jpg', import.meta.url).href },
        { name: 'Forest', logo: new URL('../images/forest.jpg', import.meta.url).href },
        { name: 'Prada', logo: new URL('../images/prada.png', import.meta.url).href },
      ],
    }
  },
}
</script>

<style scoped>
.brands {
  padding: 60px 20px;
  text-align: center;
}

.brands-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));
  gap: 30px;
  margin-top: 40px;
}

.brand-card {
  background: #fdf2f7;
  padding: 20px;
  border-radius: 12px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.05);
  transition: 0.3s;
}

.brand-card:hover {
  transform: translateY(-5px);
}

.brand-logo {
  width: 100px;
  height: auto;
  margin-bottom: 15px;
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

.main-footer {
  background-color: #fdf2f7;
  padding: 50px 20px 20px;
  margin-top: 50px;
  border-top: 1px solid #ffe6f0;
}

.footer-container {
  max-width: 1200px;
  margin: 0 auto;
  display: flex; /* Главниот flex контејнер */
  justify-content: space-between; /* Распореди секциите со простор меѓу нив */
  align-items: center; /* Вертикално центрирај ги сите */
  gap: 40px; /* Простор меѓу секциите */
}

.footer-section {
  flex: 1; /* Секоја секција зема еднакво место */
  display: flex;
  flex-direction: column;
  align-items: center;
}

.newsletter-form {
  display: flex;
  gap: 10px;
  flex: 1;
  max-width: 400px;
}

.newsletter-form input {
  flex: 1;
  padding: 12px 16px;
  border: 1px solid #ddd;
  border-radius: 8px 0 0 8px;
}

.newsletter-form button {
  background: #333;
  color: white;
  border: none;
  padding: 12px 24px;
  border-radius: 0 8px 8px 0;
  cursor: pointer;
  font-weight: bold;
}

.social-links {
  display: flex;
  gap: 20px;
}

.footer-bottom {
  text-align: center;
  margin-top: 40px;
  padding-top: 20px;
  border-top: 1px solid #eee;
  color: #888;
}

/* Responsive */
@media (max-width: 768px) {
  .footer-container {
    flex-direction: column; /* Стани колонa на мобилен */
    gap: 30px;
    text-align: center;
  }

  .newsletter-form {
    flex-direction: column;
    max-width: 100%;
  }
  #app > footer > div.footer-container > div.footer-section.register > p {
    padding: 20px;
  }
}
</style>
