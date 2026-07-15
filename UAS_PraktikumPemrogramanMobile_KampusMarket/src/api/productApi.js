// src/api/productApi.js
// Fungsi pengambil data produk & kategori.
// Produk memakai data lokal (src/data/products.js) yang disimulasikan seperti
// respons API sungguhan - tetap ada delay jaringan dan bisa gagal (Ketentuan #7),
// karena katalog DummyJSON asli isinya barang generik luar negeri, bukan barang
// bekas khas mahasiswa Indonesia.
//
// Login tetap memakai API DummyJSON asli (https://dummyjson.com/auth/login).

import { PRODUCTS, CATEGORY_LABELS } from "../data/products";

const BASE_URL = "https://dummyjson.com";
const FAKE_DELAY = 500; // ms, biar status "loading" kelihatan jelas

// Bungkus data lokal supaya berperilaku seperti fetch API sungguhan (async + delay)
function simulateRequest(resultFn) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      try {
        resolve(resultFn());
      } catch (err) {
        reject(err);
      }
    }, FAKE_DELAY);
  });
}

// Ambil semua produk
export async function fetchProducts() {
  return simulateRequest(() => [...PRODUCTS]);
}

// Cari produk berdasarkan keyword: cocok kalau ada di judul, brand, atau kategori
// Ketentuan #4 (State & Hooks - fitur pencarian)
export async function searchProducts(keyword) {
  const q = keyword.trim().toLowerCase();
  return simulateRequest(() =>
    PRODUCTS.filter(
      (p) =>
        p.title.toLowerCase().includes(q) ||
        p.brand.toLowerCase().includes(q) ||
        CATEGORY_LABELS[p.category].toLowerCase().includes(q)
    )
  );
}

// Ambil daftar kategori yang tersedia (dipakai untuk chip filter)
export async function fetchCategories() {
  return simulateRequest(() => Object.keys(CATEGORY_LABELS));
}

// Ambil produk berdasarkan kategori
export async function fetchProductsByCategory(category) {
  return simulateRequest(() => PRODUCTS.filter((p) => p.category === category));
}

// Ambil detail 1 produk berdasarkan id
export async function fetchProductDetail(id) {
  return simulateRequest(() => {
    const found = PRODUCTS.find((p) => p.id === Number(id));
    if (!found) throw new Error("Produk tidak ditemukan");
    return found;
  });
}

// Simulasi login memakai endpoint auth DummyJSON (tetap API sungguhan)
// User uji dari DummyJSON: username "emilys" password "emilyspass"
export async function loginApi(username, password) {
  const res = await fetch(`${BASE_URL}/auth/login`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ username, password }),
  });
  if (!res.ok) {
    throw new Error("Username atau password salah");
  }
  return await res.json();
}
