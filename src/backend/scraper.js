import axios from 'axios'
import * as cheerio from 'cheerio'
import pool from './db.js'

async function scrapeDecorativeCosmetics() {
  try {
    console.log('⏳ Започнувам со преземање податоци...')

    // 1. Земање на HTML од категоријата
    const { data } = await axios.get(
      'https://coslovemetics.mk/product-category/dekorativnakozmetika/',
    )
    const $ = cheerio.load(data)

    const products = []

    // 2. Селектори специфични за Coslovemetics (WooCommerce)
    $('.product').each((i, el) => {
      const name = $(el).find('.woocommerce-loop-product__title').text().trim()

      // Земање на цената (ја чистиме од "ден" и празни места)
      let priceText = $(el).find('.price .amount').last().text()
      const price = parseInt(priceText.replace(/[^0-9]/g, ''))

      // Земање на сликата
      const image = $(el).find('img').attr('src')

      if (name && price) {
        products.push({
          name,
          price,
          image,
          category: 'ДЕКОРАТИВНА',
          // Бидејќи ова е шминка, ставаме дифолт вредности за кожа/акни
          skin_type: ['combination', 'normal', 'oily', 'dry'],
          acne_level: ['none', 'mild'],
        })
      }
    })

    console.log(`🔎 Најдени ${products.length} производи. Ги внесувам во база...`)

    // 3. Внесување во PostgreSQL
    for (const p of products) {
      await pool.query(
        `INSERT INTO products (name, price, image, category, skin_type, acne_level) 
                 VALUES ($1, $2, $3, $4, $5, $6) 
                 ON CONFLICT (name) DO NOTHING`, // Да не се дуплираат ако веќе постојат
        [p.name, p.price, p.image, p.category, p.skin_type, p.acne_level],
      )
    }

    console.log('✅ Базата е успешно ажурирана!')
    process.exit()
  } catch (error) {
    console.error('❌ Грешка при scrape:', error.message)
    process.exit(1)
  }
}

scrapeDecorativeCosmetics()
