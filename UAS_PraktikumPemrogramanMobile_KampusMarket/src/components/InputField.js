// src/components/InputField.js
// Komponen input teks reusable, mendukung tampilan pesan error validasi
// Ketentuan Wajib #2 (Komponen) & mendukung Ketentuan #5 (Form validation)

import React from "react";
import { View, TextInput, Text, StyleSheet } from "react-native";

export default function InputField({
  label,
  value,
  onChangeText,
  placeholder,
  secureTextEntry = false,
  keyboardType = "default",
  error,
  autoCapitalize = "none",
}) {
  return (
    <View style={styles.container}>
      {label ? <Text style={styles.label}>{label}</Text> : null}
      <TextInput
        style={[styles.input, error && styles.inputError]}
        value={value}
        onChangeText={onChangeText}
        placeholder={placeholder}
        placeholderTextColor="#9CA3AF"
        secureTextEntry={secureTextEntry}
        keyboardType={keyboardType}
        autoCapitalize={autoCapitalize}
      />
      {error ? <Text style={styles.errorText}>{error}</Text> : null}
    </View>
  );
}

const styles = StyleSheet.create({
  container: { width: "100%", marginBottom: 14 },
  label: { fontSize: 13, fontWeight: "600", color: "#374151", marginBottom: 6 },
  input: {
    borderWidth: 1,
    borderColor: "#D1D5DB",
    borderRadius: 10,
    paddingHorizontal: 14,
    paddingVertical: 12,
    fontSize: 15,
    color: "#111827",
    backgroundColor: "#F9FAFB",
  },
  inputError: { borderColor: "#DC2626" },
  errorText: { color: "#DC2626", fontSize: 12, marginTop: 4 },
});
