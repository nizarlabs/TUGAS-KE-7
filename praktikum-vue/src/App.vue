
<script setup>
import { useCartStore } from './stores/cart'

const cart = useCartStore()
</script>

<template>
  <div>
    <nav class="navbar">
      <RouterLink to="/" class="brand">
        🛍️ NIZAR STORE
      </RouterLink>

      <div class="nav-links">
        <RouterLink to="/">Beranda</RouterLink>

        <RouterLink to="/cart" class="cart-link">
          🛒 Keranjang
          <span class="cart-count">
            {{ cart.totalItems }}
          </span>
        </RouterLink>
      </div>
    </nav>

    <RouterView />
    
    <footer>
      <p>© 2026 Nizar Store. All Rights Reserved.</p>
    </footer>
  </div>
</template>

<style scoped>
.navbar {
  height: 75px;
  background: white;
  padding: 0 7%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  box-shadow: 0 2px 12px #0000000d;
}

.brand {
  color: #263f75;
  font-size: 19px;
  font-weight: bold;
  text-decoration: none;
}

.nav-links {
  display: flex;
  align-items: center;
  gap: 25px;
}

.nav-links a {
  color: #334155;
  text-decoration: none;
  font-weight: 600;
}

.nav-links a.router-link-active {
  color: #3159a5;
}

.cart-link {
  display: flex;
  align-items: center;
  gap: 8px;
}

.cart-count {
  background: #3159a5;
  color: white;
  border-radius: 20px;
  padding: 3px 8px;
  font-size: 12px;
}

footer {
  text-align: center;
  padding: 25px;
  color: #64748b;
  font-size: 13px;
}

@media (max-width: 500px) {
  .navbar {
    padding: 0 15px;
  }

  .brand {
    font-size: 14px;
  }

  .nav-links {
    gap: 12px;
    font-size: 13px;
  }
}
</style>
