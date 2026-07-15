// src/data/productImages.js
// Mapping foto produk LOKAL (disimpan di dalam aplikasi, bukan dari internet).
// Metro bundler (React Native) mewajibkan require() dengan path statis seperti ini,
// jadi tidak bisa dibuat otomatis pakai perulangan/variabel.
//
// CARA GANTI FOTO: buka folder assets/products/, timpa file sesuai id produk
// (misalnya assets/products/1.png) dengan foto asli kamu. JANGAN ubah nama filenya,
// biar tidak perlu edit kode ini lagi. Formatnya PNG - kalau fotomu JPG, ganti dulu
// ekstensi di sini jadi .jpg pada baris yang sesuai.

const productImages = {
  1: require("../../assets/products/1.png"), // Honda BeAT Street 110
  2: require("../../assets/products/2.png"), // Yamaha Mio M3 125
  3: require("../../assets/products/3.png"), // Honda Vario 125
  4: require("../../assets/products/4.png"), // Honda Vario 160
  5: require("../../assets/products/5.png"), // Yamaha Freego 125
  6: require("../../assets/products/6.png"), // Honda Scoopy 110
  7: require("../../assets/products/7.png"), // Yamaha Fazzio 125
  8: require("../../assets/products/8.png"), // Yamaha Vixion 150
  9: require("../../assets/products/9.png"), // Honda CB150R Streetfire
  10: require("../../assets/products/10.png"), // Kawasaki W175
  11: require("../../assets/products/11.png"), // Yamaha MT-15
  12: require("../../assets/products/12.png"), // Honda CBR150R
  13: require("../../assets/products/13.png"), // Suzuki Satria F150
  14: require("../../assets/products/14.png"), // Wardah Lightening Series
  15: require("../../assets/products/15.png"), // Emina Bright Stuff
  16: require("../../assets/products/16.png"), // Scarlett Whitening Body Lotion
  17: require("../../assets/products/17.png"), // Somethinc Niacinamide Serum
  18: require("../../assets/products/18.png"), // MS Glow Whitening Series
  19: require("../../assets/products/19.png"), // Avoskin Miraculous Retox Night Serum
  20: require("../../assets/products/20.png"), // Compass Merapi
  21: require("../../assets/products/21.png"), // Ventela Casual
  22: require("../../assets/products/22.png"), // League Legas Runner
  23: require("../../assets/products/23.png"), // Piero Sneakers
  24: require("../../assets/products/24.png"), // Nike Revolution 6
  25: require("../../assets/products/25.png"), // Adidas Stan Smith
  26: require("../../assets/products/26.png"), // Erigo Jaket Varsity
  27: require("../../assets/products/27.png"), // 3Second Kaos Basic
  28: require("../../assets/products/28.png"), // Cotton Ink Kemeja
  29: require("../../assets/products/29.png"), // Uniqlo Kaos Airism
  30: require("../../assets/products/30.png"), // Damn! I Love Indonesia Kaos
};

export default productImages;
