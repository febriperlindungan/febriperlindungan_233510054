// src/utils/format.js
// Utility untuk format angka jadi Rupiah, dipakai di semua tempat yang menampilkan harga

export function formatRupiah(number) {
  return "Rp" + number.toLocaleString("id-ID");
}
