# Sistem Jadwal Kuliah (React Native - Expo)

Tugas Praktikum Pemrograman Mobile — Handling Lists & Data Rendering.

Aplikasi ini menampilkan jadwal perkuliahan menggunakan 3 teknik rendering list:
1. **`.map()`** — Halaman Ringkasan Mata Kuliah
2. **`FlatList`** — Halaman Daftar Pertemuan (dengan `keyExtractor`, `ItemSeparatorComponent`, `ListHeaderComponent`, `ListEmptyComponent`)
3. **`SectionList`** — Halaman Jadwal per Hari (header hari bergaya beda dari item)

Seluruh data bersumber dari array statis di `data/scheduleData.js` (hardcode, tanpa API/database).

## Struktur Folder

```
JadwalKuliahApp/
├── App.js
├── package.json
├── data/
│   └── scheduleData.js
└── screens/
    ├── RingkasanScreen.js   -> pakai .map()
    ├── PertemuanScreen.js   -> pakai FlatList
    └── JadwalScreen.js      -> pakai SectionList
```

## Cara Menjalankan (Expo Go SDK 54)

1. Install dependency:
   ```
   npm install
   ```
2. Pastikan semua versi package cocok dengan SDK 54 (opsional tapi disarankan):
   ```
   npx expo install --fix
   ```
3. Jalankan project:
   ```
   npx expo start
   ```
4. Scan QR code pakai aplikasi **Expo Go** (pastikan versi Expo Go di HP kamu sudah versi terbaru yang mendukung SDK 54), atau tekan `a` untuk membuka di emulator Android / `w` untuk web.

> Catatan: project ini sudah diset ke `expo ~54.0.0` dengan `react-native 0.81.4` dan `react 19.1.0`, sesuai dengan Expo SDK 54.

## Cara Push ke GitHub

```bash
git init
git add .
git commit -m "Tugas Praktikum: Sistem Jadwal Kuliah"
git branch -M main
git remote add origin <link-repo-github-kamu>
git push -u origin main
```

Jangan lupa buat file `.gitignore` (sudah disediakan) supaya folder `node_modules` tidak ikut ter-push.
