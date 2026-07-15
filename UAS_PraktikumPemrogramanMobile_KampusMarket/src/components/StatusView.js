// src/components/StatusView.js
// Komponen reusable untuk menampilkan status pemanggilan API dengan jelas
// Ketentuan Wajib #7 (API): "sedang memuat data, berhasil ditampilkan, atau gagal tanpa crash"

import React from "react";
import { View, Text, StyleSheet, ActivityIndicator } from "react-native";
import Button from "./Button";

export function LoadingView({ message = "Sedang memuat data..." }) {
  return (
    <View style={styles.center}>
      <ActivityIndicator size="large" color="#4F46E5" />
      <Text style={styles.text}>{message}</Text>
    </View>
  );
}

export function ErrorView({ message = "Gagal memuat data", onRetry }) {
  return (
    <View style={styles.center}>
      <Text style={styles.errorText}>⚠️ {message}</Text>
      {onRetry && (
        <View style={{ width: 160, marginTop: 12 }}>
          <Button title="Coba Lagi" onPress={onRetry} variant="outline" />
        </View>
      )}
    </View>
  );
}

export function EmptyView({ message = "Data tidak ditemukan" }) {
  return (
    <View style={styles.center}>
      <Text style={styles.text}>{message}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  center: { flex: 1, alignItems: "center", justifyContent: "center", padding: 24 },
  text: { marginTop: 10, color: "#6B7280", fontSize: 13 },
  errorText: { color: "#DC2626", fontSize: 14, fontWeight: "600", textAlign: "center" },
});
