
import { defineStore } from 'pinia'
import { computed, ref } from 'vue'

export const useCartStore = defineStore('cart', () => {
  // Data keranjang
  const items = ref([])

  // Menambahkan produk ke keranjang
  function addToCart(product) {
    const existing = items.value.find(
      item => item.id === product.id
    )

    if (existing) {
      existing.quantity++
    } else {
      items.value.push({
        ...product,
        quantity: 1
      })
    }
  }

  // Menghapus produk
  function removeFromCart(id) {
    items.value = items.value.filter(
      item => item.id !== id
    )
  }

  // Menambah jumlah produk
  function increaseQuantity(id) {
    const item = items.value.find(
      item => item.id === id
    )

    if (item) item.quantity++
  }

  // Mengurangi jumlah produk
  function decreaseQuantity(id) {
    const item = items.value.find(
      item => item.id === id
    )

    if (item && item.quantity > 1) {
      item.quantity--
    }
  }

  // Menghitung total barang
  const totalItems = computed(() =>
    items.value.reduce(
      (total, item) => total + item.quantity, 0
    )
  )

  // Menghitung total harga
  const totalPrice = computed(() =>
    items.value.reduce(
      (total, item) => total + item.price * item.quantity, 0
    )
  )

  return {
    items,
    totalItems,
    totalPrice,
    addToCart,
    removeFromCart,
    increaseQuantity,
    decreaseQuantity
  }
})
