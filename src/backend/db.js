import pkg from 'pg'
const { Pool } = pkg

const pool = new Pool({
  user: 'postgres',
  host: process.env.DB_HOST || 'localhost',
  database: 'glowcare',
  password: 'Enisa123!',
  port: 5432,
})

export default pool
