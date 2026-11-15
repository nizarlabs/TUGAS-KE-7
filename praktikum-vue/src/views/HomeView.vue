
<script setup>
import ProductCard from '../components/ProductCard.vue'

// Data produk
const products = [
  {
    id: 1,
    name: 'Laptop ASUS',
    category: 'Elektronik',
    price: 8500000,
    image: '💻',
    description: 'Laptop untuk produktivitas dan belajar.'
  },
  {
    id: 2,
    name: 'Headphone Sony',
    category: 'Aksesoris',
    price: 1250000,
    image: '🎧',
    description: 'Headphone dengan suara berkualitas.'
  },
  {
    id: 3,
    name: 'Smartwatch',
    category: 'Gadget',
    price: 750000,
    image: '⌚',
    description: 'Jam pintar dengan desain modern.'
  }
]
</script>

<template>
  <main class="home">
    <section class="hero">
      <span>WELCOME TO OUR STORE</span>
      <h1>Temukan Produk Favoritmu</h1>
      <p>Belanja mudah, cepat, dan nyaman.</p>
    </section>

    <section class="catalog">
      <h2>Katalog Produk</h2>

      <div class="product-grid">
        <ProductCard
          v-for="product in products"
          :key="product.id"
          :product="product"
        />
      </div>
    </section>
  </main>
</template>

<style scoped>
.home {
  max-width: 1100px;
  margin: auto;
  padding: 25px;
}

.hero {
  background: linear-gradient(120deg, #263f75, #4778c9);
  color: white;
  padding: 55px 35px;
  border-radius: 20px;
  margin-bottom: 35px;
}

.hero span {
  font-size: 12px;
  letter-spacing: 2px;
}

.hero h1 {
  font-size: 34px;
  margin: 15px 0;
}

.catalog h2 {
  margin-bottom: 25px;
}

.product-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 25px;
}

@media (max-width: 750px) {
  .product-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (max-width: 500px) {
  .product-grid {
    grid-template-columns: 1fr;
  }
}
</style>
