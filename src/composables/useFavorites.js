import { ref } from 'vue'

// 👇 ГЛОБАЛЕН STATE (надвор од функцијата)
const favorites = ref([])

export function useFavorites() {
  function addFavorite(product) {
    if (!favorites.value.find((p) => p.id === product.id)) {
      favorites.value.push(product)
    }
  }

  function removeFavorite(id) {
    favorites.value = favorites.value.filter((p) => p.id !== id)
  }

  function toggleFavorite(product) {
    const exists = favorites.value.find((p) => p.id === product.id)
    if (exists) {
      removeFavorite(product.id)
    } else {
      addFavorite(product)
    }
  }

  function isFavorite(id) {
    return favorites.value.some((p) => p.id === id)
  }

  return {
    favorites,
    addFavorite,
    removeFavorite,
    toggleFavorite,
    isFavorite,
  }
}
