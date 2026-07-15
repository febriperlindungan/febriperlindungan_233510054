// src/data/products.js
// Data produk bekas anak kampus Indonesia: motor matic/kopling, skincare lokal, sepatu, baju.
// Dipakai sebagai "sumber data" produk (disimulasikan seperti hasil API di productApi.js),
// karena katalog DummyJSON asli isinya barang generik luar negeri yang tidak relevan
// untuk marketplace jual-beli barang bekas mahasiswa Indonesia.

export const CATEGORY_LABELS = {
  "motor-matic": "Motor Matic",
  "motor-kopling": "Motor Kopling",
  skincare: "Skincare",
  sepatu: "Sepatu",
  baju: "Baju",
};

// Emoji & warna representatif tiap kategori — dipakai sebagai gambar produk
// pengganti foto (karena data ini simulasi lokal, bukan hasil upload foto asli)
export const CATEGORY_VISUAL = {
  "motor-matic": { emoji: "🛵", color: "#DBEAFE" },
  "motor-kopling": { emoji: "🏍️", color: "#FEE2E2" },
  skincare: { emoji: "🧴", color: "#FCE7F3" },
  sepatu: { emoji: "👟", color: "#FEF3C7" },
  baju: { emoji: "👕", color: "#D1FAE5" },
};

// Kata kunci untuk cari foto sungguhan (bukan bermerek spesifik) sesuai kategori,
// dipakai membangun URL foto stok gratis di setiap produk
export const CATEGORY_KEYWORDS = {
  "motor-matic": "scooter,motorcycle",
  "motor-kopling": "motorcycle,sportbike",
  skincare: "skincare,cosmetics",
  sepatu: "sneakers,shoes",
  baju: "tshirt,clothing",
};

export const PRODUCTS = [
  // ===== MOTOR MATIC (110cc - 160cc) =====
  {
    id: 1,
    title: "Honda BeAT Street 110",
    category: "motor-matic",
    brand: "Honda",
    price: 12500000,
    rating: 4.6,
    stock: 1,
    condition: "Bekas - Tahun 2021",
    description:
      "Honda BeAT Street 110cc, tahun 2021, pajak hidup, servis rutin. Irit dan lincah, cocok buat mahasiswa mondar-mandir kampus-kosan.",
  },
  {
    id: 2,
    title: "Yamaha Mio M3 125",
    category: "motor-matic",
    brand: "Yamaha",
    price: 10500000,
    rating: 4.4,
    stock: 1,
    condition: "Bekas - Tahun 2020",
    description:
      "Yamaha Mio M3 125cc, mesin halus, konsumsi BBM irit. Surat lengkap, STNK hidup sampai tahun depan.",
  },
  {
    id: 3,
    title: "Honda Vario 125",
    category: "motor-matic",
    brand: "Honda",
    price: 14500000,
    rating: 4.7,
    stock: 1,
    condition: "Bekas - Tahun 2022",
    description:
      "Honda Vario 125cc CBS-ISS, kondisi terawat, ban baru ganti. Cocok buat harian kuliah dan part time kerja.",
  },
  {
    id: 4,
    title: "Honda Vario 160",
    category: "motor-matic",
    brand: "Honda",
    price: 18500000,
    rating: 4.8,
    stock: 1,
    condition: "Bekas - Tahun 2023",
    description:
      "Honda Vario 160cc, tenaga lebih besar buat yang sering boncengan atau nanjak ke kampus. Masih mulus, jarang dipakai.",
  },
  {
    id: 5,
    title: "Yamaha Freego 125",
    category: "motor-matic",
    brand: "Yamaha",
    price: 13200000,
    rating: 4.5,
    stock: 1,
    condition: "Bekas - Tahun 2021",
    description:
      "Yamaha Freego 125cc dengan bagasi luas, muat buat bawa laptop dan buku kuliah. Kondisi mesin sehat.",
  },
  {
    id: 6,
    title: "Honda Scoopy 110",
    category: "motor-matic",
    brand: "Honda",
    price: 13800000,
    rating: 4.6,
    stock: 1,
    condition: "Bekas - Tahun 2022",
    description:
      "Honda Scoopy 110cc, desain retro yang jadi favorit mahasiswi. Warna masih kinclong, interior rapi.",
  },
  {
    id: 7,
    title: "Yamaha Fazzio 125",
    category: "motor-matic",
    brand: "Yamaha",
    price: 15200000,
    rating: 4.5,
    stock: 1,
    condition: "Bekas - Tahun 2023",
    description:
      "Yamaha Fazzio 125cc hybrid, tampilan modern retro, irit BBM. Cocok buat anak kampus yang suka tampil beda.",
  },

  // ===== MOTOR KOPLING (150cc - 200cc) =====
  {
    id: 8,
    title: "Yamaha Vixion 150",
    category: "motor-kopling",
    brand: "Yamaha",
    price: 17000000,
    rating: 4.6,
    stock: 1,
    condition: "Bekas - Tahun 2020",
    description:
      "Yamaha Vixion 150cc, mesin bertenaga, cocok buat anak kampus yang suka riding jauh atau touring ringan.",
  },
  {
    id: 9,
    title: "Honda CB150R Streetfire",
    category: "motor-kopling",
    brand: "Honda",
    price: 22500000,
    rating: 4.8,
    stock: 1,
    condition: "Bekas - Tahun 2021",
    description:
      "Honda CB150R Streetfire, tampilan sporty naked bike, tenaga responsif. Servis rutin di bengkel resmi.",
  },
  {
    id: 10,
    title: "Kawasaki W175",
    category: "motor-kopling",
    brand: "Kawasaki",
    price: 19500000,
    rating: 4.5,
    stock: 1,
    condition: "Bekas - Tahun 2020",
    description:
      "Kawasaki W175, gaya klasik retro yang beda dari motor kampus kebanyakan. Body mulus, mesin masih halus.",
  },
  {
    id: 11,
    title: "Yamaha MT-15",
    category: "motor-kopling",
    brand: "Yamaha",
    price: 25500000,
    rating: 4.7,
    stock: 1,
    condition: "Bekas - Tahun 2022",
    description:
      "Yamaha MT-15, naked sport bike favorit anak muda, tenaga galak buat yang suka riding santai maupun ngebut dikit.",
  },
  {
    id: 12,
    title: "Honda CBR150R",
    category: "motor-kopling",
    brand: "Honda",
    price: 27500000,
    rating: 4.7,
    stock: 1,
    condition: "Bekas - Tahun 2021",
    description:
      "Honda CBR150R full fairing, tampilan sporty ala moge mini. Cat masih original, tanpa lecet berarti.",
  },
  {
    id: 13,
    title: "Suzuki Satria F150",
    category: "motor-kopling",
    brand: "Suzuki",
    price: 16800000,
    rating: 4.4,
    stock: 1,
    condition: "Bekas - Tahun 2019",
    description:
      "Suzuki Satria F150, motor bebek super legendaris di kalangan mahasiswa. Akselerasi enteng, gampang dirawat.",
  },

  // ===== SKINCARE LOKAL =====
  {
    id: 14,
    title: "Wardah Lightening Series",
    category: "skincare",
    brand: "Wardah",
    price: 45000,
    rating: 4.5,
    stock: 3,
    condition: "Baru dipakai sedikit (± 80%)",
    description:
      "Paket Wardah Lightening Series (facial wash + toner), baru kepakai sedikit karena ganti varian. Masih jauh dari expired.",
  },
  {
    id: 15,
    title: "Emina Bright Stuff",
    category: "skincare",
    brand: "Emina",
    price: 35000,
    rating: 4.4,
    stock: 2,
    condition: "Baru dipakai sedikit (± 85%)",
    description:
      "Emina Bright Stuff serum, cocok buat kulit remaja/mahasiswa. Dijual karena beli double waktu promo.",
  },
  {
    id: 16,
    title: "Scarlett Whitening Body Lotion",
    category: "skincare",
    brand: "Scarlett",
    price: 60000,
    rating: 4.6,
    stock: 2,
    condition: "Baru dipakai sedikit (± 90%)",
    description:
      "Scarlett Whitening Body Lotion varian Romansa, wangi tahan lama. Sisa pakai masih banyak.",
  },
  {
    id: 17,
    title: "Somethinc Niacinamide Serum",
    category: "skincare",
    brand: "Somethinc",
    price: 75000,
    rating: 4.7,
    stock: 2,
    condition: "Baru dipakai sedikit (± 85%)",
    description:
      "Somethinc Niacinamide + Moisture Serum, best seller lokal buat kulit berjerawat khas anak kost.",
  },
  {
    id: 18,
    title: "MS Glow Whitening Series",
    category: "skincare",
    brand: "MS Glow",
    price: 150000,
    rating: 4.3,
    stock: 1,
    condition: "Baru dipakai sedikit (± 90%)",
    description:
      "Paket lengkap MS Glow Whitening Series, dijual karena tidak cocok. Original, bukan tiruan.",
  },
  {
    id: 19,
    title: "Avoskin Miraculous Retox Night Serum",
    category: "skincare",
    brand: "Avoskin",
    price: 130000,
    rating: 4.8,
    stock: 1,
    condition: "Baru dipakai sedikit (± 80%)",
    description:
      "Avoskin Miraculous Retox Night Serum, cocok buat kulit kusam gara-gara begadang skripsi/tugas.",
  },

  // ===== SEPATU =====
  {
    id: 20,
    title: "Compass Merapi",
    category: "sepatu",
    brand: "Compass",
    price: 250000,
    rating: 4.6,
    stock: 1,
    condition: "Bekas - Second (± 85%)",
    description:
      "Sepatu Compass Merapi original, brand lokal yang lagi hits. Sol masih tebal, cocok buat harian ke kampus.",
  },
  {
    id: 21,
    title: "Ventela Casual",
    category: "sepatu",
    brand: "Ventela",
    price: 220000,
    rating: 4.5,
    stock: 1,
    condition: "Bekas - Second (± 80%)",
    description:
      "Ventela Casual, sepatu lokal dengan desain minimalis. Cocok dipadu outfit kuliah santai.",
  },
  {
    id: 22,
    title: "League Legas Runner",
    category: "sepatu",
    brand: "League",
    price: 180000,
    rating: 4.4,
    stock: 1,
    condition: "Bekas - Second (± 75%)",
    description:
      "League Legas Runner, sepatu lokal ringan buat lari pagi atau olahraga kampus. Empuk dan awet.",
  },
  {
    id: 23,
    title: "Piero Sneakers",
    category: "sepatu",
    brand: "Piero",
    price: 150000,
    rating: 4.3,
    stock: 2,
    condition: "Bekas - Second (± 70%)",
    description:
      "Piero Sneakers, sepatu lokal harga terjangkau, cocok buat mahasiswa yang mau tampil kasual tanpa bikin kantong bolong.",
  },
  {
    id: 24,
    title: "Nike Revolution 6",
    category: "sepatu",
    brand: "Nike",
    price: 350000,
    rating: 4.6,
    stock: 1,
    condition: "Bekas - Second (± 80%)",
    description:
      "Nike Revolution 6, ringan dan nyaman dipakai seharian jalan kaki di area kampus. Original, ada box.",
  },
  {
    id: 25,
    title: "Adidas Stan Smith",
    category: "sepatu",
    brand: "Adidas",
    price: 320000,
    rating: 4.5,
    stock: 1,
    condition: "Bekas - Second (± 75%)",
    description:
      "Adidas Stan Smith klasik, gampang dipadu-padankan sama outfit kuliah apa aja. Kondisi masih rapi.",
  },

  // ===== BAJU =====
  {
    id: 26,
    title: "Erigo Jaket Varsity",
    category: "baju",
    brand: "Erigo",
    price: 120000,
    rating: 4.5,
    stock: 1,
    condition: "Bekas - Second (± 85%)",
    description:
      "Jaket Varsity Erigo, brand lokal yang lagi naik daun. Bahan tebal, hangat dipakai pas kelas AC dingin.",
  },
  {
    id: 27,
    title: "3Second Kaos Basic",
    category: "baju",
    brand: "3Second",
    price: 45000,
    rating: 4.3,
    stock: 3,
    condition: "Bekas - Second (± 80%)",
    description:
      "Kaos basic 3Second warna netral, gampang dipakai buat kuliah harian. Bahan katun adem.",
  },
  {
    id: 28,
    title: "Cotton Ink Kemeja",
    category: "baju",
    brand: "Cotton Ink",
    price: 95000,
    rating: 4.6,
    stock: 1,
    condition: "Bekas - Second (± 85%)",
    description:
      "Kemeja Cotton Ink, brand lokal favorit, cocok dipakai buat presentasi tugas atau acara kampus.",
  },
  {
    id: 29,
    title: "Uniqlo Kaos Airism",
    category: "baju",
    brand: "Uniqlo",
    price: 65000,
    rating: 4.7,
    stock: 2,
    condition: "Bekas - Second (± 80%)",
    description:
      "Kaos Uniqlo Airism, adem dan cepat kering, cocok buat cuaca panas pas jalan kaki keliling kampus.",
  },
  {
    id: 30,
    title: "Damn! I Love Indonesia Kaos",
    category: "baju",
    brand: "Damn! I Love Indonesia",
    price: 55000,
    rating: 4.4,
    stock: 2,
    condition: "Bekas - Second (± 75%)",
    description:
      "Kaos DILI (Damn! I Love Indonesia), brand lokal bertema nasionalisme. Cocok buat gaya kasual harian.",
  },
];
