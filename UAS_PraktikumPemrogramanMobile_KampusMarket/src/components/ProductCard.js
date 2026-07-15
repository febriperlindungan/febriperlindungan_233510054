// src/components/ProductCard.js
// Kartu produk reusable, dipakai di FlatList katalog
// Ketentuan Wajib #2 (Komponen) & #1 (Flexbox - layout kartu pakai flexbox)

import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { formatRupiah } from "../utils/format";
import ProductImage from "./ProductImage";

export default function ProductCard({ product, onPress, onWishlistPress, isWishlisted }) {
  return (
    <TouchableOpacity style={styles.card} onPress={onPress} activeOpacity={0.8}>
      <ProductImage product={product} style={styles.imageBox} emojiSize={40} />
      <View style={styles.info}>
        <Text style={styles.title} numberOfLines={1}>{product.title}</Text>
        <Text style={styles.category}>{product.brand}</Text>
        <View style={styles.bottomRow}>
          <Text style={styles.price} numberOfLines={1}>{formatRupiah(product.price)}</Text>
          {onWishlistPress && (
            <TouchableOpacity onPress={onWishlistPress} hitSlop={8}>
              <Ionicons
                name={isWishlisted ? "heart" : "heart-outline"}
                size={20}
                color={isWishlisted ? "#DC2626" : "#9CA3AF"}
              />
            </TouchableOpacity>
          )}
        </View>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  card: {
    flex: 1,
    flexDirection: "column",
    backgroundColor: "#fff",
    borderRadius: 12,
    margin: 6,
    overflow: "hidden",
    borderWidth: 1,
    borderColor: "#F3F4F6",
    maxWidth: "47%",
  },
  imageBox: { width: "100%", height: 120 },
  info: { padding: 10 },
  title: { fontSize: 13, fontWeight: "600", color: "#111827" },
  category: { fontSize: 11, color: "#6B7280", marginTop: 2, textTransform: "capitalize" },
  bottomRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: 8,
  },
  price: { fontSize: 13, fontWeight: "700", color: "#4F46E5", flexShrink: 1, marginRight: 4 },
});
