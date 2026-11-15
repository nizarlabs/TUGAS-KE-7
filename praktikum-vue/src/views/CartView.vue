
<script setup>
import { useCartStore } from '../stores/cart'

const cart = useCartStore()

function formatRupiah(value) {
  return 'Rp ' + value.toLocaleString('id-ID')
}
</script>

<template>
  <main class="cart-page">
    <h1>🛒 Keranjang Belanja</h1>
    <p>Daftar produk yang kamu pilih.</p>

    <div v-if="cart.items.length === 0" class="empty">
      <h2>🛍️</h2>
      <h3>Keranjang masih kosong</h3>
      <p>Silakan pilih produk di katalog.</p>

      <RouterLink to="/" class="back-button">
        Belanja Sekarang
      </RouterLink>
    </div>

    <div v-else class="cart-content">
      <div
        v-for="item in cart.items"
        :key="item.id"
        class="cart-item"
      >
        <div class="item-image">
          {{ item.image }}
        </div>

        <div class="item-info">
          <h3>{{ item.name }}</h3>
          <p>{{ formatRupiah(item.price) }}</p>

          <div class="quantity">
            <button @click="cart.decreaseQuantity(item.id)">
              -
            </button>

            <span>{{ item.quantity }}</span>

            <button @click="cart.increaseQuantity(item.id)">
              +
            </button>
          </div>
        </div>

        <div class="item-action">
          <strong>
            {{ formatRupiah(item.price * item.quantity) }}
          </strong>

          <button
            class="remove"
            @click="cart.removeFromCart(item.id)"
          >
            Hapus
          </button>
        </div>
      </div>

      <div class="checkout">
        <h2>Ringkasan Belanja</h2>

        <div class="summary-row">
          <span>Total Produk</span>
          <strong>{{ cart.totalItems }} barang</strong>
        </div>

        <div class="summary-row total">
          <span>Total Harga</span>
          <strong>{{ formatRupiah(cart.totalPrice) }}</strong>
        </div>
      </div>
    </div>
  </main>
</template>

<style scoped>
.cart-page {
  max-width: 950px;
  margin: 35px auto;
  padding: 20px;
}

.cart-page > p {
  color: #64748b;
}

.empty {
  text-align: center;
  background: white;
  border-radius: 15px;
  padding: 50px 20px;
  margin-top: 25px;
}

.empty h2 {
  font-size: 55px;
}

.empty p {
  color: #64748b;
}

.back-button {
  display: inline-block;
  background: #3159a5;
  color: white;
  padding: 12px 20px;
  border-radius: 8px;
  text-decoration: none;
  margin-top: 15px;
}

.cart-content {
  margin-top: 25px;
}

.cart-item {
  display: flex;
  align-items: center;
  gap: 20px;
  background: white;
  padding: 20px;
  border-radius: 12px;
  margin-bottom: 15px;
}

.item-image {
  width: 85px;
  height: 85px;
  background: #eaf0ff;
  border-radius: 12px;
  display: grid;
  place-items: center;
  font-size: 40px;
}

.item-info {
  flex: 1;
}

.item-info p {
  color: #64748b;
}

.quantity {
  display: flex;
  align-items: center;
  gap: 12px;
}

.quantity button {
  width: 30px;
  height: 30px;
  border: none;
  border-radius: 6px;
  cursor: pointer;
}

.item-action {
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  gap: 12px;
}

.remove {
  border: none;
  color: #dc2626;
  background: #fee2e2;
  padding: 8px 12px;
  border-radius: 7px;
  cursor: pointer;
}

.checkout {
  background: white;
  padding: 25px;
  border-radius: 12px;
  margin-top: 25px;
}

.summary-row {
  display: flex;
  justify-content: space-between;
  padding: 12px 0;
}

.total {
  border-top: 1px solid #eee;
  color: #3159a5;
  font-size: 18px;
}

@media (max-width: 500px) {
  .cart-item {
    flex-wrap: wrap;
  }

  .item-action {
    width: 100%;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
  }
}
</style>
