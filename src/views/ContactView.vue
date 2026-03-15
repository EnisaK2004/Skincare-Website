<template>
  <div class="important">
    <div class="contact-page">
      <h1>Contact</h1>

      <div class="contact-info">
        <div class="location">
          <h2>Centar GlowCare</h2>
          <p>📞 +389 70 261 003</p>
          <p>🕒 Пон-Саб: 9:00-21:00</p>
          <p>✉️ centar@glowCare.mk</p>
          <p>📍 Даме Груев 7 (Градски Сид), 1000 Скопје</p>
        </div>

        <div class="location">
          <h2>East Gate GlowCare</h2>
          <p>📞 +389 70 235 005</p>
          <p>🕒 Пон-Саб: 10:00-22:00 / Нед: 10:00-20:00</p>
          <p>✉️ eg@glowCare.mk</p>
          <p>📍 East Gate Mall, Беласица 2, Скопје 1000</p>
        </div>

        <div class="location">
          <h2>GlowCare - Аеродром, Скопје</h2>
          <p>📞 +389 72 250 011</p>
          <p>🕒 Пон-Саб: 9:00-21:00</p>
          <p>✉️ aerodrom@glowCare.mk</p>
          <p>📍 Милан Зечар 4, Скопје 1000</p>
        </div>

        <div class="location">
          <h2>GlowCare - Skopje City Mall</h2>
          <p>📞 +389 70 290 020</p>
          <p>🕒 Пон-Саб: 9:00-21:00</p>
          <p>✉️ citymall@glowCare.mk</p>
          <p>📍 Skopje City Mall, Скопје 1000</p>
        </div>
      </div>
    </div>
    <div class="contact-form">
      <h2>Напиши ни порака</h2>
      <form @submit.prevent="submitForm">
        <input type="text" placeholder="Вашето име" v-model="name" required />
        <input type="email" placeholder="Вашата е-маил адреса" v-model="email" required />
        <textarea placeholder="Вашата порака" v-model="message" required></textarea>
        <button type="submit">ИСПРАТИ</button>
      </form>
    </div>
  </div>
  <div class="register">
    <h2>Добивај ги најновите информации!</h2>

    <form @submit.prevent="submitForm">
      <input type="email" placeholder="Вашата е-маил адреса" v-model="email" required />
      <button type="submit">ПРИЈАВИ СЕ</button>
    </form>
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
  name: 'ContactView',
  data() {
    return {
      name: '',
      email: '',
      message: '',
    }
  },
  methods: {
    submitForm() {
      alert(`Порака испратена од ${this.name} (${this.email}): ${this.message}`)
      this.name = ''
      this.email = ''
      this.message = ''
    },
  },
}
</script>

<style scoped>
.contact-page {
  max-width: 900px;
  margin: 0 auto;
  padding: 2rem;
}
.contact-info {
  margin-bottom: 2rem;
}
.location {
  margin-bottom: 1.5rem;
}
.important {
  display: flex;
  flex-direction: row;
}
.contact-form input,
.contact-form textarea {
  width: 100%;
  padding: 0.5rem;
  margin-bottom: 1rem;
  border: 1px solid #ccc;
  border-radius: 4px;
}
.contact-form button {
  padding: 0.7rem 1.5rem;
  background-color: #333;
  color: white;
  border: none;
  cursor: pointer;
}
.contact-form button:hover {
  background-color: #555;
}
.contact-form {
  padding: 70px;
  margin: 40px;
}
.contact-form h2 {
  color: black;
  padding: 15px;
}
.contact-form button {
  background-color: #ffe6f0;
  color: #000;
  font-weight: bold;
}
.register {
  color: #000;
  font-weight: bold;
  padding: 10px;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
}
#app > div.register > form {
  display: flex;
  flex-direction: column;
}
#app > div.register > form > input[type='email'] {
  margin: 10px;
  width: 100%;
}
#app > div.register > form > button {
  padding: 7px;
  margin-left: 10px;
  width: 100;
  background-color: #ffe6f0;
  border: #ffe6f0;
}
#app > div.register > form > input[type='email'] {
  padding: 10px;
  width: 600px;
}
#app > div.register > form > button:hover {
  background-color: #555;
}

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

.footer-bottom {
  text-align: center;
  margin-top: 40px;
  padding-top: 20px;
  border-top: 1px solid #eee;
  font-size: 0.8rem;
  color: #888;
}

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
