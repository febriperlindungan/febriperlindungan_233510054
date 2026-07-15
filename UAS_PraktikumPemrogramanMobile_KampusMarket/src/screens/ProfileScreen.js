// src/screens/ProfileScreen.js
// Tab ketiga bottom navigation: Profil - Ketentuan Wajib #6 (Navigasi)

import React from "react";
import { View, Text, Image, StyleSheet } from "react-native";
import Button from "../components/Button";
import { useAuth } from "../context/AuthContext";

export default function ProfileScreen() {
  const { user, logout } = useAuth();

  return (
    <View style={styles.screen}>
      <Image
        source={{ uri: user?.image || "https://dummyjson.com/icon/user/128" }}
        style={styles.avatar}
      />
      <Text style={styles.name}>{user?.firstName} {user?.lastName}</Text>
      <Text style={styles.email}>{user?.email}</Text>

      <View style={styles.card}>
        <Row label="Username" value={user?.username} />
        <Row label="No. HP" value={user?.phone || "-"} />
        <Row label="Universitas" value="Teknik Informatika" />
      </View>

      <View style={{ marginTop: 24, width: "100%" }}>
        <Button title="Keluar (Logout)" variant="outline" onPress={logout} />
      </View>
    </View>
  );
}

function Row({ label, value }) {
  return (
    <View style={styles.row}>
      <Text style={styles.rowLabel}>{label}</Text>
      <Text style={styles.rowValue}>{value}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  screen: { flex: 1, backgroundColor: "#fff", alignItems: "center", padding: 24, paddingTop: 40 },
  avatar: { width: 90, height: 90, borderRadius: 45, backgroundColor: "#F3F4F6" },
  name: { fontSize: 18, fontWeight: "800", color: "#111827", marginTop: 14 },
  email: { fontSize: 13, color: "#6B7280", marginTop: 2 },
  card: { width: "100%", backgroundColor: "#F9FAFB", borderRadius: 12, padding: 16, marginTop: 24 },
  row: { flexDirection: "row", justifyContent: "space-between", paddingVertical: 8 },
  rowLabel: { fontSize: 13, color: "#6B7280" },
  rowValue: { fontSize: 13, color: "#111827", fontWeight: "600" },
});
