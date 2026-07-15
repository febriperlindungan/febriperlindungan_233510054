// src/screens/ProductDetailScreen.js
// Halaman ke-3 dari Ketentuan #1 (Layout Flexbox): Login, Katalog, Detail Produk
// Ketentuan Wajib #7 (API): status loading/error saat mengambil detail produk

import React, { useState, useEffect } from "react";
import { View, Text, ScrollView, StyleSheet } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import Button from "../components/Button";
import ProductImage from "../components/ProductImage";
import { LoadingView, ErrorView } from "../components/StatusView";
import { fetchProductDetail } from "../api/productApi";
import { useCart } from "../context/CartContext";
import { formatRupiah } from "../utils/format";
import { CATEGORY_LABELS } from "../data/products";

export default function ProductDetailScreen({ route }) {
  const { productId } = route.params;
  const { addItem, removeItem, isInCart } = useCart();

  const [product, setProduct] = useState(null);
  const [status, setStatus] = useState("loading");
  const [errorMsg, setErrorMsg] = useState("");

  const loadDetail = async () => {
    setStatus("loading");
    try {
      const data = await fetchProductDetail(productId);
      setProduct(data);
      setStatus("success");
    } catch (err) {
      setErrorMsg(err.message);
      setStatus("error");
    }
  };

  useEffect(() => {
    loadDetail();
  }, [productId]);

  if (status === "loading") return <LoadingView message="Memuat detail produk..." />;
  if (status === "error") return <ErrorView message={errorMsg} onRetry={loadDetail} />;

  const wishlisted = isInCart(product.id);

  return (
    <ScrollView style={styles.screen}>
      <ProductImage product={product} style={styles.image} emojiSize={90} />

      <View style={styles.body}>
        <View style={styles.rowBetween}>
          <Text style={styles.title}>{product.title}</Text>
          <Ionicons
            name={wishlisted ? "heart" : "heart-outline"}
            size={26}
            color={wishlisted ? "#DC2626" : "#9CA3AF"}
            onPress={() => (wishlisted ? removeItem(product.id) : addItem(product))}
          />
        </View>

        <Text style={styles.category}>
          {CATEGORY_LABELS[product.category]} • {product.brand}
        </Text>
        <Text style={styles.price}>{formatRupiah(product.price)}</Text>

        <View style={styles.badgeRow}>
          <Text style={styles.badge}>⭐ {product.rating}</Text>
          <Text style={styles.badge}>Stok: {product.stock}</Text>
          <Text style={styles.badge}>{product.condition}</Text>
        </View>

        <Text style={styles.sectionTitle}>Deskripsi</Text>
        <Text style={styles.description}>{product.description}</Text>

        <View style={{ marginTop: 24 }}>
          <Button
            title={wishlisted ? "Hapus dari Wishlist" : "Tambah ke Wishlist"}
            onPress={() => (wishlisted ? removeItem(product.id) : addItem(product))}
            variant={wishlisted ? "outline" : "primary"}
          />
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  screen: { flex: 1, backgroundColor: "#fff" },
  image: { width: "100%", height: 260 },
  body: { padding: 20 },
  rowBetween: { flexDirection: "row", justifyContent: "space-between", alignItems: "flex-start" },
  title: { fontSize: 20, fontWeight: "800", color: "#111827", flex: 1, marginRight: 10 },
  category: { fontSize: 13, color: "#6B7280", marginTop: 4 },
  price: { fontSize: 22, fontWeight: "800", color: "#4F46E5", marginTop: 8 },
  badgeRow: { flexDirection: "row", marginTop: 14, gap: 8, flexWrap: "wrap" },
  badge: {
    backgroundColor: "#F3F4F6",
    paddingHorizontal: 10,
    paddingVertical: 6,
    borderRadius: 8,
    fontSize: 12,
    color: "#374151",
  },
  sectionTitle: { fontSize: 15, fontWeight: "700", color: "#111827", marginTop: 22, marginBottom: 6 },
  description: { fontSize: 14, color: "#4B5563", lineHeight: 21 },
});
