// screens/PertemuanScreen.js
// Halaman 2: Daftar Pertemuan -- dirender menggunakan FlatList
// Wajib pakai 4 props: keyExtractor, ItemSeparatorComponent,
// ListHeaderComponent, ListEmptyComponent

import React from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';
import { pertemuanList } from '../data/scheduleData';

// Komponen untuk setiap item pertemuan
function PertemuanItem({ item }) {
  return (
    <View style={styles.card}>
      <Text style={styles.namaMatkul}>
        {item.matkul} — Pertemuan {item.pertemuanKe}
      </Text>
      <Text style={styles.detail}>
        {item.topik} · {item.tanggal}
      </Text>
    </View>
  );
}

// Komponen pemisah antar item (ItemSeparatorComponent)
function Separator() {
  return <View style={styles.separator} />;
}

// Komponen header di atas daftar (ListHeaderComponent)
function ListHeader() {
  return (
    <View style={styles.headerBox}>
      <Text style={styles.headerTitle}>Daftar Pertemuan</Text>
      <Text style={styles.headerSubtitle}>
        Total {pertemuanList.length} pertemuan · Semester Ganjil
      </Text>
    </View>
  );
}

// Komponen yang tampil jika data kosong (ListEmptyComponent)
function ListEmpty() {
  return (
    <View style={styles.emptyBox}>
      <Text style={styles.emptyText}>Belum ada data pertemuan.</Text>
    </View>
  );
}

export default function PertemuanScreen() {
  return (
    <FlatList
      style={styles.container}
      data={pertemuanList}
      // keyExtractor -> key unik per item pertemuan
      keyExtractor={(item) => item.id}
      renderItem={({ item }) => <PertemuanItem item={item} />}
      ItemSeparatorComponent={Separator}
      ListHeaderComponent={ListHeader}
      ListEmptyComponent={ListEmpty}
    />
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f2f2f2',
  },
  headerBox: {
    padding: 16,
    paddingBottom: 8,
  },
  headerTitle: {
    fontSize: 16,
    fontWeight: '700',
  },
  headerSubtitle: {
    fontSize: 12,
    color: '#777',
    marginTop: 2,
  },
  card: {
    backgroundColor: '#fff',
    marginHorizontal: 16,
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
  separator: {
    height: 10,
  },
  emptyBox: {
    padding: 24,
    alignItems: 'center',
  },
  emptyText: {
    color: '#999',
    fontSize: 13,
  },
});
