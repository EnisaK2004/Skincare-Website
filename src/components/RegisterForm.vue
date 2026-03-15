<template>
  <div class="register-wrapper">
    <div class="register-card">
      <h2>Создај профил</h2>
      <p class="subtitle">Придружи се на GlowCare денес</p>

      <form @submit.prevent="registerUser">
        <div class="input-group">
          <label for="username">Корисничко име</label>
          <input
            id="username"
            v-model="user.username"
            type="text"
            placeholder="Твоето име"
            required
          />
        </div>

        <div class="input-group">
          <label for="email">Е-пошта</label>
          <input
            id="email"
            v-model="user.email"
            type="email"
            placeholder="example@email.com"
            required
          />
        </div>

        <div class="input-group">
          <label for="password">Лозинка</label>
          <input
            id="password"
            v-model="user.password"
            type="password"
            placeholder="••••••••"
            required
          />
        </div>

        <button type="submit" :disabled="isLoading">
          {{ isLoading ? 'Се процесира...' : 'Регистрирај се' }}
        </button>
      </form>

      <div class="login-link">Веќе имаш профил? <a href="/login">Најави се</a></div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      user: {
        username: '',
        email: '',
        password: '',
      },
      isLoading: false,
    }
  },
  methods: {
    async registerUser() {
      this.isLoading = true

      try {
        const response = await fetch('http://localhost:3000/api/register', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(this.user),
        })
        const data = await response.json()
        alert(data.message || 'Успешна регистрација!')
      } catch (error) {
        console.error(error)
        alert('Настана грешка при регистрација.')
      } finally {
        this.isLoading = false
      }
    },
  },
}
</script>

<style scoped>
.register-wrapper {
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 80vh;
  background-color: #fdf2f5;
  font-family: 'Inter', sans-serif;
  padding: 20px;
}

.register-card {
  background: white;
  padding: 40px;
  border-radius: 16px;
  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.08);
  width: 100%;
  max-width: 400px;
  text-align: center;
}

.register-card h2 {
  margin: 0 0 5px 0;
  color: #333;
  font-size: 1.8rem;
}

.subtitle {
  color: #888;
  margin-bottom: 30px;
  font-size: 0.95rem;
}

.input-group {
  text-align: left;
  margin-bottom: 20px;
}

.input-group label {
  display: block;
  margin-bottom: 8px;
  font-weight: 600;
  font-size: 0.9rem;
  color: #444;
}

.input-group input {
  width: 100%;
  padding: 14px;
  border: 1px solid #ddd;
  border-radius: 10px;
  font-size: 1rem;
  outline: none;
  transition: all 0.3s ease;
  box-sizing: border-box;
}

.input-group input:focus {
  border-color: #e91e63;
  box-shadow: 0 0 0 3px rgba(233, 30, 99, 0.1);
}

button {
  width: 100%;
  padding: 15px;
  background: #333;
  color: white;
  border: none;
  border-radius: 10px;
  font-size: 1.1rem;
  font-weight: bold;
  cursor: pointer;
  transition: background 0.3s ease;
  margin-top: 10px;
}

button:hover:not(:disabled) {
  background: #e91e63;
}

button:disabled {
  background: #cccccc;
  cursor: not-allowed;
}

.login-link {
  margin-top: 25px;
  font-size: 0.9rem;
  color: #666;
}

.login-link a {
  color: #e91e63;
  text-decoration: none;
  font-weight: bold;
  transition: color 0.3s;
}

.login-link a:hover {
  text-decoration: underline;
  color: #c2185b;
}
</style>
