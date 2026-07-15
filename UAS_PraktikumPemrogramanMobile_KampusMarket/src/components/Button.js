// src/components/Button.js
// Komponen tombol yang bisa dipakai berulang di seluruh aplikasi
// Ketentuan Wajib #2 (Komponen)

import React from "react";
import { TouchableOpacity, Text, StyleSheet, ActivityIndicator } from "react-native";

export default function Button({ title, onPress, variant = "primary", loading = false, disabled = false }) {
  const isOutline = variant === "outline";

  return (
    <TouchableOpacity
      style={[
        styles.base,
        isOutline ? styles.outline : styles.primary,
        (disabled || loading) && styles.disabled,
      ]}
      onPress={onPress}
      disabled={disabled || loading}
      activeOpacity={0.7}
    >
      {loading ? (
        <ActivityIndicator color={isOutline ? "#4F46E5" : "#fff"} />
      ) : (
        <Text style={[styles.text, isOutline && styles.textOutline]}>{title}</Text>
      )}
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  base: {
    paddingVertical: 14,
    borderRadius: 10,
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
  },
  primary: { backgroundColor: "#4F46E5" },
  outline: { backgroundColor: "transparent", borderWidth: 1.5, borderColor: "#4F46E5" },
  disabled: { opacity: 0.5 },
  text: { color: "#fff", fontWeight: "600", fontSize: 15 },
  textOutline: { color: "#4F46E5" },
});
