// src/screens/CartScreen.js
// Tab kedua bottom navigation: Keranjang/Wishlist - Ketentuan Wajib #6 (Navigasi)

import React from "react";
import { View, Text, FlatList, StyleSheet, TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { EmptyView } from "../components/StatusView";
import ProductImage from "../components/ProductImage";
import { useCart } from "../context/CartContext";
import { formatRupiah } from "../utils/format";

export default function CartScreen() {
  const { items, removeItem } = useCart();

  if (items.length === 0) {
    return (
      <View style={styles.screen}>
        <Text style={styles.header}>Keranjang / Wishlist</Text>
        <EmptyView message="Belum ada produk yang disimpan" />
      </View>
    );
  }

  const total = items.reduce((sum, p) => sum + p.price, 0);

  return (
    <View style={styles.screen}>
      <Text style={styles.header}>Keranjang / Wishlist</Text>
      <FlatList
        data={items}
        keyExtractor={(item) => String(item.id)}
        contentContainerStyle={{ paddingHorizontal: 16 }}
        renderItem={({ item }) => (
          <View style={styles.row}>
            <ProductImage product={item} style={styles.thumb} emojiSize={22} />
            <View style={{ flex: 1, marginLeft: 12 }}>
              <Text style={styles.title} numberOfLines={1}>{item.title}</Text>
              <Text style={styles.price}>{formatRupiah(item.price)}</Text>
            </View>
            <TouchableOpacity onPress={() => removeItem(item.id)} hitSlop={10}>
              <Ionicons name="trash-outline" size={20} color="#DC2626" />
            </TouchableOpacity>
          </View>
        )}
      />
      <View style={styles.footer}>
        <Text style={styles.totalLabel}>Total</Text>
        <Text style={styles.totalValue}>{formatRupiah(total)}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  screen: { flex: 1, backgroundColor: "#fff", paddingTop: 8 },
  header: { fontSize: 20, fontWeight: "800", color: "#111827", paddingHorizontal: 16, marginBottom: 12 },
  row: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderBottomColor: "#F3F4F6",
  },
  thumb: { width: 56, height: 56, borderRadius: 8, overflow: "hidden" },
  title: { fontSize: 14, fontWeight: "600", color: "#111827" },
  price: { fontSize: 13, color: "#4F46E5", marginTop: 2, fontWeight: "700" },
  footer: {
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 16,
    borderTopWidth: 1,
    borderTopColor: "#F3F4F6",
  },
  totalLabel: { fontSize: 15, color: "#374151" },
  totalValue: { fontSize: 18, fontWeight: "800", color: "#111827" },
});
