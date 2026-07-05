// screens/RingkasanScreen.js
// Halaman 1: Ringkasan Mata Kuliah -- dirender menggunakan .map()

import React from 'react';
import { View, Text, ScrollView, StyleSheet } from 'react-native';
import { mataKuliahList } from '../data/scheduleData';

export default function RingkasanScreen() {
  return (
    <ScrollView style={styles.container}>
      <Text style={styles.headerTitle}>Mata Kuliah Semester Ini</Text>

      {/* Render list menggunakan .map(), key unik memakai item.id */}
      {mataKuliahList.map((item) => (
        <View key={item.id} style={styles.card}>
          <Text style={styles.namaMatkul}>{item.nama}</Text>
          <Text style={styles.detail}>
            {item.kode} · {item.sks} SKS · {item.dosen}
          </Text>
        </View>
      ))}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f2f2f2',
    padding: 16,
  },
  headerTitle: {
    fontSize: 16,
    fontWeight: '700',
    marginBottom: 12,
  },
  card: {
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 14,
    marginBottom: 10,
    borderWidth: 1,
    borderColor: '#e5e5e5',
  },
  namaMatkul: {
    fontSize: 15,
    fontWeight: '600',
    marginBottom: 4,
  },
  detail: {
    fontSize: 13,
    color: '#555',
  },
});
