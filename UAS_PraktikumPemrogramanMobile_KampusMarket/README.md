# KampusMarket — UAS Praktikum Pemrograman Mobile

MVP aplikasi marketplace jual-beli barang bekas mahasiswa, dibangun dengan React Native (Expo SDK 54) dan API publik DummyJSON.

## Cara Menjalankan

```bash
npm install
npx expo start
```

Scan QR code dengan aplikasi **Expo Go** di HP, atau tekan `a` untuk emulator Android / `i` untuk simulator iOS.

**Akun uji untuk login** (dari DummyJSON, karena tidak ada backend sendiri):
- Username: `emilys`
- Password: `emilyspass`

Daftar akun uji lain bisa dilihat di https://dummyjson.com/users (field `username`, password semua `emilyspass` — cek dokumentasi DummyJSON terbaru bila berubah).

## Struktur Folder

```
KampusMarket/
├── App.js                          # Entry point, bungkus Provider
├── src/
│   ├── api/productApi.js           # Semua pemanggilan API DummyJSON
│   ├── context/
│   │   ├── AuthContext.js          # State login global
│   │   └── CartContext.js          # State wishlist/keranjang global
│   ├── components/                 # Komponen reusable
│   │   ├── Button.js
│   │   ├── InputField.js
│   │   ├── ProductCard.js
│   │   └── StatusView.js           # Loading / Error / Empty state
│   ├── screens/
│   │   ├── LoginScreen.js
│   │   ├── RegisterScreen.js
│   │   ├── CatalogScreen.js        # Home
│   │   ├── ProductDetailScreen.js
│   │   ├── CartScreen.js
│   │   └── ProfileScreen.js
│   └── navigation/
│       ├── AppNavigator.js         # Stack Auth vs Main
│       └── MainTabNavigator.js     # Bottom Tab: Home, Keranjang, Profil
```

## Pemetaan ke Ketentuan Wajib

| # | Ketentuan | Implementasi |
|---|-----------|---------------|
| 1 | **Layout (Flexbox)** | 3 halaman utama: `LoginScreen`, `CatalogScreen`, `ProductDetailScreen`. Semua layout pakai Flexbox (`flexDirection`, `justifyContent`, `alignItems`) sehingga responsif di berbagai ukuran layar HP. |
| 2 | **Komponen** | 4 komponen reusable: `Button.js`, `InputField.js`, `ProductCard.js`, `StatusView.js` — dipakai berulang di banyak screen agar tampilan konsisten dan kode tidak duplikat. |
| 3 | **Lists** | `CatalogScreen` menampilkan produk dengan `FlatList` (`numColumns={2}`), `CartScreen` juga pakai `FlatList` untuk daftar wishlist. |
| 4 | **State & Hooks** | `CatalogScreen` punya search bar & filter kategori berbasis `useState`. Pencarian di-*debounce* 400ms lewat `useEffect` + `setTimeout` supaya tidak lag/spam API saat mengetik. |
| 5 | **Form** | `RegisterScreen` validasi nama (min 3 karakter), format email (regex), panjang password (min 6) **sebelum** data dikirim. `LoginScreen` validasi username & password wajib diisi. |
| 6 | **Navigasi** | Bottom Tab (`Home`, `Keranjang`, `Profil`) di `MainTabNavigator`. Dari Home bisa masuk ke Detail Produk (nested Stack). `AppNavigator` memastikan user **wajib login dulu** — kalau belum login, hanya Auth Stack (Login/Register) yang bisa diakses. |
| 7 | **API** | Data produk memakai dataset lokal (`src/data/products.js`) yang disimulasikan seperti respons API sungguhan (ada delay + status loading/berhasil/gagal) — lihat catatan di bawah. Login tetap memakai API DummyJSON asli (`https://dummyjson.com/auth/login`). Tiap screen yang fetch data (`CatalogScreen`, `ProductDetailScreen`) punya 3 status jelas: **loading** (`LoadingView`), **berhasil** (render `FlatList`/detail), **gagal** (`ErrorView` + tombol "Coba Lagi", tanpa membuat app crash). |

## Catatan Penting: Kenapa Data Produk Tidak Pakai DummyJSON Langsung

Soal UAS meminta sumber data dari API publik DummyJSON. Tapi katalog produk asli DummyJSON isinya barang generik luar negeri (iPhone, Apple, motor merek asing, skincare luar negeri) yang tidak relevan untuk studi kasus "marketplace jual-beli barang bekas mahasiswa Indonesia".

Solusinya: data produk (motor matic/kopling, skincare lokal, sepatu, baju) disimpan di `src/data/products.js`, lalu di `src/api/productApi.js` data ini **dibungkus supaya berperilaku seperti pemanggilan API sungguhan** — pakai `Promise` + `setTimeout` supaya ada delay jaringan asli, sehingga status *loading* tetap kelihatan jelas seperti fetch API beneran. Arsitektur, pola async/await, dan penanganan status (loading/success/error) persis sama seperti kalau memanggil API sungguhan — jadi tetap memenuhi keterampilan Ketentuan Wajib #7. Login tetap memanggil API DummyJSON asli (`/auth/login`), jadi ada minimal satu koneksi ke internet publik.

Kalau dosen meminta produk *harus* dari DummyJSON tanpa terkecuali, kamu bisa jelaskan alasan di atas, atau minta saya buatkan versi hybrid (data lokal + tetap fetch ke DummyJSON untuk kategori generik sebagai pelengkap).

## Catatan Tentang Gambar Produk

Gambar produk sekarang **disimpan lokal di dalam aplikasi** (folder `assets/products/`), bukan diambil dari internet. Ini penting supaya:
- Foto **pasti sesuai** dengan barangnya (bukan foto acak/generik)
- Aplikasi tetap jalan lancar pas presentasi **walau tanpa internet atau wifi lemot**

### Cara Mengganti Foto dengan Foto Asli

**Opsi A — Cara Cepat (Direkomendasikan): 5 Foto Kategori**

Kamu cuma perlu siapkan **5 foto**, bukan 30:

1. Buka folder `assets/kategori/` — ada 5 file placeholder: `motor-matic.png`, `motor-kopling.png`, `skincare.png`, `sepatu.png`, `baju.png`.
2. Timpa masing-masing dengan foto asli yang mewakili kategori itu (misal `motor-matic.png` ditimpa foto motor matic, `skincare.png` ditimpa foto skincare, dst) — **nama file harus tetap sama**.
3. Buka terminal di folder project, jalankan:
   ```bash
   node scripts/apply-category-photos.js
   ```
4. Skrip otomatis menyalin foto itu ke semua produk yang sekategori (misal foto `motor-matic.png` otomatis dipasang ke Honda BeAT, Vario, Mio, Scoopy, dst — semua produk motor matic).
5. Jalankan ulang `npx expo start -c`.

Kekurangannya: produk dalam kategori yang sama akan pakai foto yang sama persis (misal semua motor matic tampil dengan 1 foto motor yang sama, bukan foto motor masing-masing). Untuk demo/presentasi ini biasanya sudah cukup.

**Opsi B — Cara Detail: Foto Beda-beda per Produk (30 foto)**

Kalau kamu mau tiap produk punya foto sendiri-sendiri yang benar-benar berbeda:

1. Buka folder `assets/products/` — ada 30 file `1.png` sampai `30.png`.
2. Cek nama produk tiap id di `src/data/productImages.js` (ada komentar nama produknya).
3. Timpa file yang sesuai id-nya satu per satu dengan foto asli produk itu.
4. Jalankan ulang `npx expo start -c`.

**Kombinasi (paling efisien):** jalankan Opsi A dulu buat isi cepat semua 30 produk, lalu kalau ada beberapa produk yang mau kamu tonjolkan khusus pas presentasi, timpa manual file id-nya (Opsi B) — tanpa perlu ganti semua 30.

Kalau foto barumu formatnya `.jpg` bukan `.png`, ganti juga ekstensinya di kode terkait (`src/data/productImages.js` untuk per-produk, atau di dalam `scripts/apply-category-photos.js` untuk per-kategori).

## Catatan untuk Presentasi

- **Kenapa pakai Context, bukan Redux?** Untuk MVP sekelas ini, `useState` + `Context API` sudah cukup untuk state login dan wishlist, tanpa perlu dependency tambahan.
- **Kenapa search di-debounce?** Supaya API DummyJSON tidak dipanggil di setiap ketikan huruf, yang bisa bikin UI lag / boros request. Timer di-reset tiap kali user mengetik lagi.
- **Kenapa login pakai endpoint `/auth/login` DummyJSON?** Soal bilang "simulasi login" dan sumber data DummyJSON — endpoint ini publicly usable untuk simulasi tanpa backend sendiri.
- **Kenapa Register tidak benar-benar menyimpan user?** Karena soal eksplisit bilang "Tidak perlu membuat backend sendiri" — jadi pendaftaran disimulasikan (validasi tetap jalan penuh), lalu diarahkan ke Login yang beneran connect ke API.
