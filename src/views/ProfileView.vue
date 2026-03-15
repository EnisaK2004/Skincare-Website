<template>
  <div class="registration-container">
    <div class="fancy-card">
      <div class="card-header">
        <span class="badge">GlowCare Exclusive</span>
        <h2>Стани дел од заедницата</h2>
        <p>Регистрирај се и добиј 10% попуст на првата нарачка.</p>
      </div>

      <form @submit.prevent="handleRegister" class="fancy-form">
        <div class="input-wrapper">
          <input type="text" v-model="user.username" required />
          <label>Корисничко име</label>
          <div class="underline"></div>
        </div>

        <div class="input-wrapper">
          <input type="email" v-model="user.email" required />
          <label>Е-пошта</label>
          <div class="underline"></div>
        </div>

        <div class="input-wrapper">
          <input type="password" v-model="user.password" required />
          <label>Лозинка</label>
          <div class="underline"></div>
        </div>

        <button type="submit" class="glow-button" :disabled="isLoading">
          {{ isLoading ? 'Се процесира...' : 'Креирај Профил' }}
          <span v-if="!isLoading" class="arrow">→</span>
        </button>
      </form>

      <p class="footer-note">Веќе си регистриран? <a href="#">Најави се</a></p>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'

// Дефинирање на објектот user кој претходно фалеше
const user = ref({
  username: '',
  email: '',
  password: '',
})

const isLoading = ref(false)

const handleRegister = async () => {
  isLoading.value = true

  try {
    // Тука оди твојот API повик
    const response = await fetch('http://localhost:3000/api/register', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(user.value),
    })

    const data = await response.json()
    alert(data.message || 'Успешна регистрација!')
  } catch (error) {
    console.error(error)
    alert('Настана грешка при поврзување со серверот.')
  } finally {
    isLoading.value = false
  }
}
</script>

<style scoped>
/* Твојот стил останува ист овде... (го имаш веќе) */
.registration-container {
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 80vh;
  padding: 40px 20px;
  background: radial-gradient(circle at top right, #fff5f7, #ffffff);
}

.fancy-card {
  background: rgba(255, 255, 255, 0.8);
  backdrop-filter: blur(10px);
  padding: 50px 40px;
  border-radius: 24px;
  box-shadow: 0 20px 40px rgba(233, 30, 99, 0.08);
  border: 1px solid rgba(255, 255, 255, 0.5);
  width: 100%;
  max-width: 450px;
  text-align: center;
}

.card-header h2 {
  font-size: 1.8rem;
  color: #222;
  margin: 15px 0 5px;
  font-weight: 700;
}

.card-header p {
  color: #777;
  font-size: 0.95rem;
  margin-bottom: 35px;
}

.badge {
  background: #ffe6f0;
  color: #e91e63;
  padding: 5px 12px;
  border-radius: 20px;
  font-size: 0.75rem;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 1px;
}

.input-wrapper {
  position: relative;
  margin-bottom: 30px;
}

.input-wrapper input {
  width: 100%;
  padding: 10px 0;
  font-size: 1rem;
  border: none;
  border-bottom: 2px solid #eee;
  background: transparent;
  outline: none;
  transition: 0.3s;
}

.input-wrapper label {
  position: absolute;
  top: 10px;
  left: 0;
  color: #aaa;
  pointer-events: none;
  transition: 0.3s all ease;
}

.input-wrapper input:focus ~ label,
.input-wrapper input:valid ~ label {
  top: -15px;
  font-size: 0.8rem;
  color: #e91e63;
  font-weight: 600;
}

.underline {
  position: absolute;
  bottom: 0;
  left: 0;
  height: 2px;
  width: 0;
  background: #e91e63;
  transition: 0.4s;
}

.input-wrapper input:focus ~ .underline {
  width: 100%;
}

.glow-button {
  width: 100%;
  padding: 16px;
  background: #222;
  color: white;
  border: none;
  border-radius: 12px;
  font-size: 1rem;
  font-weight: 600;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
  transition: all 0.3s;
}

.glow-button:hover:not(:disabled) {
  background: #e91e63;
  transform: translateY(-3px);
  box-shadow: 0 10px 20px rgba(233, 30, 99, 0.2);
}

.glow-button:disabled {
  background: #888;
  cursor: not-allowed;
}

.arrow {
  transition: 0.3s;
}

.glow-button:hover .arrow {
  transform: translateX(5px);
}

.footer-note {
  margin-top: 25px;
  font-size: 0.9rem;
  color: #888;
}

.footer-note a {
  color: #222;
  font-weight: 600;
  text-decoration: none;
}
</style>
