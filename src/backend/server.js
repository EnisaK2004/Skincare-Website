import express from 'express'
import pool from './db.js'
import cors from 'cors'

const app = express()

app.use(express.json())
app.use(cors())

// 1. Рута за регистрација
app.post('/api/register', (req, res) => {
  const { username, email, password } = req.body
  res.json({ message: `Корисникот ${username} е успешно регистриран!` })
})

// 2. Рута за квизот (препораки)
app.post('/recommend', async (req, res) => {
  const { skinType, acneLevel } = req.body
  try {
    const result = await pool.query(
      `
      SELECT * FROM products
      WHERE $1 = ANY(skin_type)
      AND $2 = ANY(acne_level)
      `,
      [skinType, acneLevel],
    )
    res.json(result.rows)
  } catch (err) {
    console.error(err)
    res.status(500).send('DB error')
  }
})

// 3. Рута за сите производи (Провери дали е ОВДЕ)
app.get('/api/products', async (req, res) => {
  try {
    const result = await pool.query('SELECT * FROM products ORDER BY id DESC')
    res.json(result.rows)
  } catch (err) {
    console.error(err)
    res.status(500).json({ error: 'Не можевме да ги вчитаме производите' })
  }
})

// 4. LISTEN ОДИ НАЈДОЛЕ
app.listen(3000, () => {
  console.log('✅ Server running on port 3000')
})
