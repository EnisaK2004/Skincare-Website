<template>
  <div class="home">
    <section class="hero">
      <div class="hero-content">
        <h1>Твојата кожа заслужува нова шанса</h1>
        <p>Од лична борба со акни до совршен сјај – откриј го патот на Ениса и Мирзана.</p>
        <button class="hero-btn" @click="goRoutine">✨ Започни ја твојата рутина</button>
      </div>
    </section>

    <section class="about-story">
      <div class="container">
        <div class="story-header">
          <span class="greeting">Здраво од Ениса и Мирзана 👋</span>
          <h2>Приказната зад GlowCare</h2>
          <p class="intro">
            Ние не сме само основачи, ние сме две пријателки кои поминаа низ сè што поминуваш ти
            денес.
          </p>
        </div>

        <div class="story-grid">
          <div class="story-card">
            <div class="icon-box">🏷️</div>
            <h3>Борбата со акните</h3>
            <p>
              Долго време се боревме со акни, црвенила и несигурност. Пробувавме сè што ќе најдеме
              на полиците, но резултатите беа краткотрајни или никакви. Знаеме колку боли кога
              кожата не соработува.
            </p>
          </div>

          <div class="story-card highlight">
            <div class="icon-box">✨</div>
            <h3>Откривањето на Glow</h3>
            <p>
              Сè се промени кога ја откривме моќта на корејската козметика и правилните активни
              состојки. Нашата кожа конечно се смири. Тогаш решивме – ова мора да им го овозможиме
              на сите во нашата држава, веднаш достапно!
            </p>
          </div>
        </div>

        <div class="personal-note">
          <p>
            „GlowCare го создадовме за никој повеќе да не мора да лута низ козметичкиот свет како
            што лутавме ние.“
          </p>
          <span class="signature">Со љубов ❤️, Ениса и Мирзана</span>
        </div>
      </div>
    </section>
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
  name: 'HomeView',
}
</script>
<script setup>
import { useRouter } from 'vue-router'

const router = useRouter()

function goRoutine() {
  router.push('/routine')
}
</script>

<style scoped>
/* Hero Section */
.hero {
  height: 60vh;
  background:
    linear-gradient(rgba(255, 230, 240, 0.5), rgba(255, 230, 240, 0.5)),
    url('https://images.unsplash.com/photo-1556228578-0d85b1a4d571?auto=format&fit=crop&q=80')
      center/cover;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  color: #333;
}

.hero-content h1 {
  font-size: 3rem;
  margin-bottom: 1rem;
  font-weight: 700;
}

.cta-button {
  background-color: #333;
  color: white;
  padding: 12px 30px;
  border: none;
  border-radius: 25px;
  font-weight: bold;
  cursor: pointer;
  margin-top: 20px;
  transition: 0.3s;
}

.cta-button:hover {
  background-color: #f7a8c4;
}

/* Story Section */
.about-story {
  padding: 80px 20px;
  background-color: #fff;
}

.container {
  max-width: 1000px;
  margin: 0 auto;
}

.story-header {
  text-align: center;
  margin-bottom: 50px;
}

.greeting {
  font-size: 1.5rem;
  color: #f7a8c4;
  font-weight: bold;
}

.story-grid {
  display: flex;
  gap: 30px;
  margin-bottom: 50px;
}

.story-card {
  flex: 1;
  padding: 40px;
  background: #fdf2f7;
  border-radius: 20px;
  position: relative;
}

.story-card.highlight {
  background: #fff;
  border: 2px solid #fdf2f7;
  box-shadow: 0 10px 30px rgba(247, 168, 196, 0.1);
}

.year {
  font-size: 2rem;
  font-weight: 800;
  color: #f7a8c4;
  margin-bottom: 15px;
}

.personal-note {
  text-align: center;
  background: #333;
  color: #fff;
  padding: 40px;
  border-radius: 20px;
  font-style: italic;
}

.signature {
  display: block;
  margin-top: 15px;
  font-weight: bold;
  font-style: normal;
  color: #f7a8c4;
}

/* Responsive */
@media (max-width: 768px) {
  .story-grid {
    flex-direction: column;
  }
  .hero-content h1 {
    font-size: 2rem;
  }
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
.hero-btn {
  margin-top: 25px;
  padding: 14px 36px;
  font-size: 1rem;
  font-weight: 600;
  border-radius: 30px;
  border: none;
  cursor: pointer;

  color: white;
  background: linear-gradient(135deg, #f7a8c4, #ff6fa5);

  box-shadow: 0 8px 20px rgba(247, 168, 196, 0.4);

  transition: all 0.3s ease;
}

/* Hover ефект */
.hero-btn:hover {
  transform: translateY(-3px) scale(1.03);
  box-shadow: 0 12px 30px rgba(247, 168, 196, 0.6);
}

/* Click ефект */
.hero-btn:active {
  transform: scale(0.96);
}
</style>
