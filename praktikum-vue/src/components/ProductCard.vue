
<script setup>
import { useCartStore } from '../stores/cart'

defineProps({
  product: {
    type: Object,
    required: true
  }
})

const cart = useCartStore()

function beliProduk(product) {
  cart.addToCart(product)
  alert(product.name + ' berhasil ditambahkan!')
}
</script>

<template>
  <div class="product-card">
    <div class="product-image">
      {{ product.image }}
    </div>

    <div class="product-info">
      <span class="category">
        {{ product.category }}
      </span>

      <h3>{{ product.name }}</h3>

      <p class="description">
        {{ product.description }}
      </p>

      <div class="product-bottom">
        <strong>
          Rp {{ product.price.toLocaleString('id-ID') }}
        </strong>

        <button @click="beliProduk(product)">
          + Beli
        </button>
      </div>
    </div>
  </div>
</template>

<style scoped>
.product-card {
  background: white;
  border-radius: 16px;
  overflow: hidden;
  box-shadow: 0 4px 18px #00000010;
  transition: transform 0.2s;
}

.product-card:hover {
  transform: translateY(-5px);
}

.product-image {
  height: 180px;
  background: #eaf0ff;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 75px;
}

.product-info {
  padding: 20px;
}

.category {
  color: #3159a5;
  font-size: 12px;
  font-weight: bold;
}

.description {
  color: #64748b;
  font-size: 14px;
  min-height: 40px;
}

.product-bottom {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 8px;
  margin-top: 15px;
}

.product-bottom strong {
  color: #263f75;
}

.product-bottom button {
  background: #3159a5;
  color: white;
  border: none;
  padding: 10px 14px;
  border-radius: 8px;
  cursor: pointer;
}
</style>
