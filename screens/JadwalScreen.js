// screens/JadwalScreen.js
// Halaman 3: Jadwal per Hari -- dirender menggunakan SectionList
// Header setiap seksi (nama hari) wajib beda gaya dari item biasa.

import React from 'react';
import { View, Text, SectionList, StyleSheet } from 'react-native';
import { jadwalMingguan } from '../data/scheduleData';

// Komponen untuk setiap item jadwal
function JadwalItem({ item }) {
  return (
    <View style={styles.card}>
      <Text style={styles.namaMatkul}>{item.matkul}</Text>
      <Text style={styles.detail}>
        Ruang {item.ruang} · {item.jamMulai} – {item.jamSelesai}
      </Text>
    </View>
  );
}

// Komponen header seksi (nama hari) -- gaya berbeda dari item
function SectionHeader({ section }) {
  return (
    <View style={styles.sectionHeader}>
      <Text style={styles.sectionHeaderText}>{section.title}</Text>
    </View>
  );
}

export default function JadwalScreen() {
  return (
    <SectionList
      style={styles.container}
      sections={jadwalMingguan}
      keyExtractor={(item) => item.id}
      renderItem={({ item }) => <JadwalItem item={item} />}
      renderSectionHeader={({ section }) => <SectionHeader section={section} />}
      ListHeaderComponent={() => (
        <Text style={styles.pageTitle}>Jadwal Kuliah Mingguan</Text>
      )}
      stickySectionHeadersEnabled={false}
      ItemSeparatorComponent={() => <View style={{ height: 8 }} />}
    />
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f2f2f2',
    paddingHorizontal: 16,
  },
  pageTitle: {
    fontSize: 16,
    fontWeight: '700',
    marginTop: 12,
    marginBottom: 8,
  },
  sectionHeader: {
    backgroundColor: '#e0e0e0',
    paddingVertical: 6,
    paddingHorizontal: 10,
    borderRadius: 6,
    marginTop: 12,
    marginBottom: 6,
  },
  sectionHeaderText: {
    fontSize: 14,
    fontWeight: '700',
    color: '#333',
    textTransform: 'uppercase',
    letterSpacing: 0.5,
  },
  card: {
    backgroundColor: '#fff',
    padding: 14,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#e5e5e5',
  },
  namaMatkul: {
    fontSize: 14,
    fontWeight: '600',
    marginBottom: 4,
  },
  detail: {
    fontSize: 13,
    color: '#555',
  },
});
