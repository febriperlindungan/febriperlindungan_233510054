// src/screens/RegisterScreen.js
// Ketentuan Wajib #5 (Form): "mengecek kelengkapan data (nama, format email, panjang password)"

import React, { useState } from "react";
import { View, Text, StyleSheet, ScrollView, Alert } from "react-native";
import InputField from "../components/InputField";
import Button from "../components/Button";
import { useAuth } from "../context/AuthContext";

// Regex sederhana untuk cek format email
const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export default function RegisterScreen({ navigation }) {
  const { registerUser } = useAuth();
  const [nama, setNama] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);

  const validate = () => {
    const newErrors = {};

    if (!nama.trim()) {
      newErrors.nama = "Nama wajib diisi";
    } else if (nama.trim().length < 3) {
      newErrors.nama = "Nama minimal 3 karakter";
    }

    if (!email.trim()) {
      newErrors.email = "Email wajib diisi";
    } else if (!EMAIL_REGEX.test(email.trim())) {
      newErrors.email = "Format email tidak valid";
    }

    if (!password) {
      newErrors.password = "Password wajib diisi";
    } else if (password.length < 6) {
      newErrors.password = "Password minimal 6 karakter";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleRegister = () => {
    if (!validate()) return;
    setLoading(true);
    // Karena tidak perlu backend sendiri, akun disimpan lokal di AuthContext (bukan ke server DummyJSON)
    setTimeout(() => {
      setLoading(false);
      registerUser({ nama, email, password });
      Alert.alert(
        "Berhasil",
        `Akun berhasil dibuat.\n\nLogin pakai:\nUsername: ${email.trim().toLowerCase()}\nPassword: (yang tadi kamu buat)`,
        [{ text: "OK", onPress: () => navigation.navigate("Login", { prefillUsername: email.trim().toLowerCase() }) }]
      );
    }, 800);
  };

  return (
    <ScrollView contentContainerStyle={styles.container} keyboardShouldPersistTaps="handled">
      <Text style={styles.title}>Daftar Akun</Text>
      <Text style={styles.subtitle}>Bergabung dengan komunitas KampusMarket</Text>

      <InputField
        label="Nama Lengkap"
        placeholder="Masukkan nama lengkap"
        value={nama}
        onChangeText={setNama}
        autoCapitalize="words"
        error={errors.nama}
      />
      <InputField
        label="Email"
        placeholder="nama@kampus.ac.id"
        value={email}
        onChangeText={setEmail}
        keyboardType="email-address"
        error={errors.email}
      />
      <InputField
        label="Password"
        placeholder="Minimal 6 karakter"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
        error={errors.password}
      />

      <Button title="Daftar" onPress={handleRegister} loading={loading} />

      <View style={{ marginTop: 16 }}>
        <Button title="Sudah punya akun? Masuk" variant="outline" onPress={() => navigation.goBack()} />
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { flexGrow: 1, justifyContent: "center", padding: 24, backgroundColor: "#fff" },
  title: { fontSize: 24, fontWeight: "800", color: "#111827", marginBottom: 4 },
  subtitle: { color: "#6B7280", fontSize: 13, marginBottom: 24 },
});
