
<script setup>
import { ref, computed } from 'vue'

const judul = ref('')
const kategori = ref('Fiksi')
const sudahDibaca = ref(false)
const pencarian = ref('')

const bukuTersaring = computed(() => {
  return daftarBuku.value.filter(buku =>
    buku.judul.toLowerCase().includes(
      pencarian.value.toLowerCase()
    )
  )
})

const daftarBuku = ref([
  {
    id: 1,
    judul: 'Laskar Pelangi',
    kategori: 'Novel',
    sudahDibaca: true
  },
  {
    id: 2,
    judul: 'Belajar Pemrograman Vue',
    kategori: 'Pendidikan',
    sudahDibaca: false
  },
  {
    id: 3,
    judul: 'Filosofi Teras',
    kategori: 'Pengembangan Diri',
    sudahDibaca: true
  }
])

// Menghitung jumlah buku yang sudah dibaca
const jumlahSelesai = computed(() => {
  return daftarBuku.value.filter(
    buku => buku.sudahDibaca
  ).length
})

// Menambahkan buku
function tambahBuku() {
  if (judul.value.trim() === '') {
    alert('Judul buku tidak boleh kosong!')
    return
  }

  daftarBuku.value.push({
    id: Date.now(),
    judul: judul.value,
    kategori: kategori.value,
    sudahDibaca: sudahDibaca.value
  })

  // Mengosongkan form
  judul.value = ''
  kategori.value = 'Fiksi'
  sudahDibaca.value = false
}

// Menghapus buku
function hapusBuku(id) {
  daftarBuku.value = daftarBuku.value.filter(
    buku => buku.id !== id
  )
}
</script>

<template>
  <div class="container">
    <header class="header">
      <h1>📚 Buku Catatan</h1>
      <p>Kelola daftar buku bacaan kamu.</p>
    </header>

<input
    v-model="pencarian"
    type="text"
    class="search-input"
    placeholder="🔍 Cari judul buku..."
  />

<p v-if="bukuTersaring.length === 0">
  Buku tidak ditemukan.
</p>
    <section class="form-card">
      <h2>Tambah Buku Baru</h2>

      <form @submit.prevent="tambahBuku">
        <label>Judul Buku</label>
        <input
          v-model="judul"
          type="text"
          placeholder="Masukkan judul buku..."
        />

        <label>Kategori Buku</label>
        <select v-model="kategori">
          <option>Fiksi</option>
          <option>Novel</option>
          <option>Pendidikan</option>
          <option>Teknologi</option>
          <option>Pengembangan Diri</option>
        </select>

        <label class="checkbox">
          <input
            v-model="sudahDibaca"
            type="checkbox"
          />
          Sudah selesai dibaca
        </label>

        <button type="submit">+ Tambahkan Buku</button>
      </form>
    </section>

    <section class="summary">
      <div>
        <span>Total Buku</span>
        <h2>{{ daftarBuku.length }}</h2>
      </div>

      <div>
        <span>Selesai Dibaca</span>
        <h2>{{ jumlahSelesai }}</h2>
      </div>

      <div>
        <span>Belum Dibaca</span>
        <h2>{{ daftarBuku.length - jumlahSelesai }}</h2>
      </div>
    </section>

    <section class="book-section">
      <h2>Daftar Buku</h2>

      <div v-if="daftarBuku.length === 0" class="empty">
        Belum ada buku. Silakan tambahkan buku baru!
      </div>

      <div
        v-for="buku in bukuTersaring"
        :key="buku.id"
        class="book-card"
      >
        <div>
          <h3>{{ buku.judul }}</h3>
          <p>Kategori: {{ buku.kategori }}</p>

          <span
            :class="buku.sudahDibaca ? 'selesai' : 'belum'"
          >
            {{ buku.sudahDibaca ? 'Sudah Dibaca' : 'Belum Dibaca' }}
          </span>
        </div>

        <div class="actions">
          <button
            class="status-btn"
            @click="buku.sudahDibaca = !buku.sudahDibaca"
          >
            Ubah Status
          </button>

          <button
            class="delete-btn"
            @click="hapusBuku(buku.id)"
          >
            Hapus
          </button>
        </div>
      </div>
    </section>
  </div>
</template>

<style scoped>
.container {
  max-width: 750px;
  margin: 30px auto;
  padding: 20px;
  font-family: Arial, sans-serif;
  color: #243047;
}

.search-input {
  width: 100%;
  padding: 13px 16px;
  border: 1px solid #d5dbe5;
  border-radius: 10px;
  outline: none;
  margin: 15px 0;
  font-size: 14px;
}

.search-input:focus {
  border-color: #3159a5;
  box-shadow: 0 0 0 3px #3159a520;
}

.header {
  background: #263f75;
  color: white;
  padding: 25px;
  border-radius: 14px;
  margin-bottom: 20px;
}

.header h1 {
  margin: 0 0 8px;
}

.header p {
  margin: 0;
  opacity: 0.85;
}

.form-card, .book-section {
  background: white;
  padding: 22px;
  border-radius: 14px;
  box-shadow: 0 3px 15px #00000012;
  margin-bottom: 20px;
}

form label {
  display: block;
  margin: 14px 0 7px;
  font-weight: bold;
}

form input[type="text"], select {
  width: 100%;
  padding: 12px;
  border: 1px solid #d5dbe5;
  border-radius: 8px;
  box-sizing: border-box;
}

.checkbox {
  display: flex !important;
  align-items: center;
  gap: 8px;
}

form button {
  width: 100%;
  margin-top: 15px;
  padding: 12px;
  background: #3159a5;
  color: white;
  border: none;
  border-radius: 8px;
  cursor: pointer;
}

.summary {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 12px;
  margin-bottom: 20px;
}

.summary div {
  background: #eaf0fb;
  padding: 18px 10px;
  border-radius: 12px;
  text-align: center;
}

.summary span {
  font-size: 13px;
}

.summary h2 {
  margin-bottom: 0;
  color: #3159a5;
}

.book-card {
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 12px;
  padding: 15px 0;
  border-bottom: 1px solid #eee;
}

.book-card h3 {
  margin: 0 0 7px;
}

.book-card p {
  color: #64748b;
  font-size: 14px;
}

.selesai, .belum {
  font-size: 12px;
  padding: 5px 9px;
  border-radius: 20px;
}

.selesai {
  background: #dcfce7;
  color: #15803d;
}

.belum {
  background: #fef3c7;
  color: #a16207;
}

.actions {
  display: flex;
  flex-direction: column;
  gap: 7px;
}

.actions button {
  padding: 8px;
  border: none;
  border-radius: 6px;
  cursor: pointer;
}

.status-btn {
  background: #dbeafe;
  color: #1d4ed8;
}

.delete-btn {
  background: #fee2e2;
  color: #dc2626;
}

.empty {
  padding: 20px;
  text-align: center;
  color: #64748b;
}

@media (max-width: 500px) {
  .summary {
    grid-template-columns: 1fr;
  }

  .book-card {
    align-items: flex-start;
    flex-direction: column;
  }

  .actions {
    flex-direction: row;
  }
}
</style>
