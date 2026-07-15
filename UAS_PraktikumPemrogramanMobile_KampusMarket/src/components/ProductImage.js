// src/components/ProductImage.js
// Menampilkan foto produk. PRIORITAS: foto lokal dari assets/products/ (disimpan
// di dalam aplikasi sendiri, tidak butuh internet - aman dipakai pas presentasi).
// Kalau entri lokalnya entah kenapa tidak ada, baru jatuh ke ikon emoji kategori.

import React from "react";
import { Image, View, Text, StyleSheet } from "react-native";
import { CATEGORY_VISUAL } from "../data/products";
import productImages from "../data/productImages";

export default function ProductImage({ product, style, emojiSize = 44 }) {
  const localSource = productImages[product.id];
  const visual = CATEGORY_VISUAL[product.category] || { emoji: "📦", color: "#F3F4F6" };

  if (!localSource) {
    return (
      <View style={[styles.fallback, style, { backgroundColor: visual.color }]}>
        <Text style={{ fontSize: emojiSize }}>{visual.emoji}</Text>
      </View>
    );
  }

  return <Image source={localSource} style={style} resizeMode="cover" />;
}

const styles = StyleSheet.create({
  fallback: { alignItems: "center", justifyContent: "center" },
});
