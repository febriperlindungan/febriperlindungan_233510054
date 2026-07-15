// src/screens/LoginScreen.js
// Ketentuan Wajib #5 (Form): validasi kelengkapan data sebelum dikirim ke API
// Ketentuan Wajib #6 (Navigasi): login jadi syarat masuk ke menu utama
//
// Urutan cek saat "Masuk":
// 1. Cek dulu ke akun lokal (hasil Daftar Akun di RegisterScreen)
// 2. Kalau tidak ketemu, baru coba ke API DummyJSON (untuk akun uji seperti emilys/emilyspass)

import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  StyleSheet,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  Alert,
} from "react-native";
import InputField from "../components/InputField";
import Button from "../components/Button";
import { loginApi } from "../api/productApi";
import { useAuth } from "../context/AuthContext";

export default function LoginScreen({ navigation, route }) {
  const { login, findLocalUser } = useAuth();
  const [username, setUsername] = useState(route?.params?.prefillUsername || "");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);

  // Kalau datang dari RegisterScreen, otomatis isi username-nya
  useEffect(() => {
    if (route?.params?.prefillUsername) {
      setUsername(route.params.prefillUsername);
    }
  }, [route?.params?.prefillUsername]);

  // Validasi kelengkapan data sebelum request dikirim
  const validate = () => {
    const newErrors = {};
    if (!username.trim()) newErrors.username = "Username wajib diisi";
    if (!password) newErrors.password = "Password wajib diisi";
    else if (password.length < 5) newErrors.password = "Password minimal 5 karakter";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleLogin = async () => {
    if (!validate()) return;
    setLoading(true);
    try {
      // 1) Cek dulu akun lokal hasil Daftar
      const localUser = findLocalUser(username, password);
      if (localUser) {
        login(localUser);
        return;
      }

      // 2) Kalau bukan akun lokal, coba ke API DummyJSON (akun uji bawaan)
      const userData = await loginApi(username.trim(), password);
      login(userData);
    } catch (err) {
      Alert.alert(
        "Login Gagal",
        "Username atau password salah. Pastikan kamu memakai akun hasil Daftar, atau akun uji DummyJSON (emilys/emilyspass)."
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <KeyboardAvoidingView
      style={{ flex: 1 }}
      behavior={Platform.OS === "ios" ? "padding" : undefined}
    >
      <ScrollView contentContainerStyle={styles.container} keyboardShouldPersistTaps="handled">
        <Text style={styles.logo}>🛍️ KampusMarket</Text>
        <Text style={styles.subtitle}>Marketplace jual-beli barang bekas mahasiswa</Text>

        <View style={styles.form}>
          <InputField
            label="Username / Email"
            placeholder="mis: emilys atau email hasil daftar"
            value={username}
            onChangeText={setUsername}
            error={errors.username}
          />
          <InputField
            label="Password"
            placeholder="Masukkan password"
            value={password}
            onChangeText={setPassword}
            secureTextEntry
            error={errors.password}
          />

          <Button title="Masuk" onPress={handleLogin} loading={loading} />

          <Text style={styles.hint}>
            Akun uji DummyJSON: username "emilys" password "emilyspass".{"\n"}
            Atau pakai akun yang baru saja kamu buat lewat "Daftar".
          </Text>

          <View style={{ marginTop: 20 }}>
            <Button
              title="Belum punya akun? Daftar"
              variant="outline"
              onPress={() => navigation.navigate("Register")}
            />
          </View>
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: { flexGrow: 1, justifyContent: "center", padding: 24, backgroundColor: "#fff" },
  logo: { fontSize: 28, fontWeight: "800", textAlign: "center", color: "#111827" },
  subtitle: { textAlign: "center", color: "#6B7280", marginTop: 6, marginBottom: 32, fontSize: 13 },
  form: { width: "100%" },
  hint: { fontSize: 11, color: "#9CA3AF", textAlign: "center", marginTop: 10, lineHeight: 16 },
});
