import { defineStore } from 'pinia'

export const useCartStore = defineStore('cart', {
  state: () => ({
    items: [], // { id, name, price, qty, image }
  }),
  getters: {
    totalItems: (state) => state.items.reduce((s, i) => s + i.qty, 0),
    totalPrice: (state) => state.items.reduce((s, i) => s + i.price * i.qty, 0),
  },
  actions: {
    addToCart(product) {
      const existing = this.items.find((i) => i.id === product.id)
      if (existing) {
        existing.qty += 1
      } else {
        this.items.push({ ...product, qty: 1 })
      }
    },
    removeFromCart(productId) {
      this.items = this.items.filter((i) => i.id !== productId)
    },
    updateQty(productId, qty) {
      const item = this.items.find((i) => i.id === productId)
      if (item) item.qty = Math.max(1, qty)
    },
    clearCart() {
      this.items = []
    },
    // Пример за синхронизација со backend (optimistic)
    async addToCartRemote(product) {
      this.addToCart(product) // instant UI
      try {
        await fetch('/api/cart', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ productId: product.id, qty: 1 }),
        })
      } catch (err) {
        // rollback ако треба
        const item = this.items.find((i) => i.id === product.id)
        if (item) {
          item.qty = Math.max(0, item.qty - 1)
          if (item.qty === 0) this.removeFromCart(product.id)
        }
        throw err
      }
    },
  },
})
