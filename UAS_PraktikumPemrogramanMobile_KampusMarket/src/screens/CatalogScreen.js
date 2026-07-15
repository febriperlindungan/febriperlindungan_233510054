// src/screens/CatalogScreen.js
// Ketentuan Wajib #3 (Lists): FlatList untuk daftar produk
// Ketentuan Wajib #4 (State & Hooks): search + filter kategori tanpa bikin lag (debounce)
// Ketentuan Wajib #7 (API): status loading / berhasil / gagal

import React, { useState, useEffect, useCallback } from "react";
import { View, Text, FlatList, StyleSheet, TextInput } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import ProductCard from "../components/ProductCard";
import { LoadingView, ErrorView, EmptyView } from "../components/StatusView";
import { fetchProducts, searchProducts, fetchCategories, fetchProductsByCategory } from "../api/productApi";
import { useCart } from "../context/CartContext";
import { CATEGORY_LABELS } from "../data/products";

export default function CatalogScreen({ navigation }) {
  const { addItem, removeItem, isInCart } = useCart();

  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [keyword, setKeyword] = useState("");

  const [status, setStatus] = useState("loading"); // loading | success | error
  const [errorMsg, setErrorMsg] = useState("");

  // Ambil daftar kategori sekali di awal
  useEffect(() => {
    fetchCategories().then(setCategories).catch(() => {});
  }, []);

  // Fungsi pengambil data produk, dipakai ulang untuk load awal & tombol "Coba Lagi"
  const loadProducts = useCallback(async (kw, category) => {
    setStatus("loading");
    try {
      let data;
      if (kw && kw.trim().length > 0) {
        data = await searchProducts(kw.trim());
      } else if (category) {
        data = await fetchProductsByCategory(category);
      } else {
        data = await fetchProducts(30);
      }
      setProducts(data);
      setStatus("success");
    } catch (err) {
      setErrorMsg(err.message);
      setStatus("error");
    }
  }, []);

  // Debounce: tunggu 400ms setelah user berhenti ngetik biar tidak lag/spam API
  useEffect(() => {
    const timer = setTimeout(() => {
      loadProducts(keyword, selectedCategory);
    }, 400);
    return () => clearTimeout(timer); // batalkan timer lama tiap kali keyword/kategori berubah
  }, [keyword, selectedCategory, loadProducts]);

  const toggleWishlist = (product) => {
    if (isInCart(product.id)) removeItem(product.id);
    else addItem(product);
  };

  const renderContent = () => {
    if (status === "loading") return <LoadingView message="Memuat produk..." />;
    if (status === "error") return <ErrorView message={errorMsg} onRetry={() => loadProducts(keyword, selectedCategory)} />;
    if (products.length === 0) return <EmptyView message="Produk tidak ditemukan" />;

    return (
      <FlatList
        data={products}
        keyExtractor={(item) => String(item.id)}
        numColumns={2}
        contentContainerStyle={{ paddingBottom: 20 }}
        renderItem={({ item }) => (
          <ProductCard
            product={item}
            onPress={() => navigation.navigate("ProductDetail", { productId: item.id })}
            onWishlistPress={() => toggleWishlist(item)}
            isWishlisted={isInCart(item.id)}
          />
        )}
      />
    );
  };

  return (
    <View style={styles.screen}>
      <Text style={styles.header}>KampusMarket</Text>

      {/* Search bar - Ketentuan #4 State & Hooks */}
      <View style={styles.searchBox}>
        <Ionicons name="search" size={18} color="#9CA3AF" />
        <TextInput
          style={styles.searchInput}
          placeholder="Cari nama, brand, atau kategori..."
          value={keyword}
          onChangeText={setKeyword}
        />
      </View>
      <Text style={styles.searchHint}>
        Contoh: "vario", "wardah", "sepatu", "kopling"
      </Text>

      {/* Filter kategori */}
      <FlatList
        data={["Semua", ...categories]}
        horizontal
        showsHorizontalScrollIndicator={false}
        keyExtractor={(item) => item}
        style={styles.chipList}
        contentContainerStyle={{ paddingHorizontal: 4 }}
        renderItem={({ item }) => {
          const value = item === "Semua" ? null : item;
          const active = selectedCategory === value;
          const label = item === "Semua" ? "Semua" : CATEGORY_LABELS[item] || item;
          return (
            <Text
              onPress={() => setSelectedCategory(value)}
              style={[styles.chip, active && styles.chipActive]}
            >
              {label}
            </Text>
          );
        }}
      />

      <View style={{ flex: 1, paddingHorizontal: 6 }}>{renderContent()}</View>
    </View>
  );
}

const styles = StyleSheet.create({
  screen: { flex: 1, backgroundColor: "#fff", paddingTop: 8 },
  header: { fontSize: 22, fontWeight: "800", color: "#111827", paddingHorizontal: 16, marginBottom: 10 },
  searchBox: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#F3F4F6",
    marginHorizontal: 16,
    borderRadius: 10,
    paddingHorizontal: 12,
    height: 42,
  },
  searchInput: { flex: 1, marginLeft: 8, fontSize: 14 },
  searchHint: { fontSize: 11, color: "#9CA3AF", marginHorizontal: 16, marginTop: 6 },
  chipList: { flexGrow: 0, marginVertical: 10, paddingLeft: 12 },
  chip: {
    fontSize: 12,
    color: "#374151",
    backgroundColor: "#F3F4F6",
    paddingHorizontal: 14,
    paddingVertical: 8,
    borderRadius: 20,
    marginRight: 8,
    overflow: "hidden",
    textTransform: "capitalize",
  },
  chipActive: { backgroundColor: "#4F46E5", color: "#fff", fontWeight: "600" },
});
