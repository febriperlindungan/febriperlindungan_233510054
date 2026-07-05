// data/scheduleData.js
// Semua data di aplikasi ini bersifat STATIS (hardcode), sesuai ketentuan tugas.

// #sel 1 - Data ringkasan mata kuliah (dipakai di halaman map())
export const mataKuliahList = [
  {
    id: 'MK001',
    nama: 'Pemrograman Mobile',
    kode: 'IF-401',
    sks: 3,
    dosen: 'Dr. Ahmad Fauzi',
  },
  {
    id: 'MK002',
    nama: 'Basis Data Lanjut',
    kode: 'IF-312',
    sks: 3,
    dosen: 'Dr. Sari Dewi',
  },
  {
    id: 'MK003',
    nama: 'Kecerdasan Buatan',
    kode: 'IF-405',
    sks: 3,
    dosen: 'Dr. Rizal Hakim',
  },
  {
    id: 'MK004',
    nama: 'Jaringan Komputer',
    kode: 'IF-308',
    sks: 2,
    dosen: 'Dr. Putri Indah',
  },
  {
    id: 'MK005',
    nama: 'Rekayasa Perangkat Lunak',
    kode: 'IF-402',
    sks: 3,
    dosen: 'Dr. Hendra Putra',
  },
];

// #sel 2 - Data daftar pertemuan (dipakai di halaman FlatList)
// Minimal 10 item sesuai ketentuan tugas.
export const pertemuanList = [
  {
    id: 'P001',
    matkul: 'Pemrograman Mobile',
    pertemuanKe: 1,
    topik: 'Pengenalan React Native',
    tanggal: '4 Sep 2025',
  },
  {
    id: 'P002',
    matkul: 'Basis Data Lanjut',
    pertemuanKe: 1,
    topik: 'Review SQL Dasar',
    tanggal: '5 Sep 2025',
  },
  {
    id: 'P003',
    matkul: 'Kecerdasan Buatan',
    pertemuanKe: 1,
    topik: 'Intro AI & Machine Learning',
    tanggal: '6 Sep 2025',
  },
  {
    id: 'P004',
    matkul: 'Pemrograman Mobile',
    pertemuanKe: 2,
    topik: 'Komponen & Props',
    tanggal: '11 Sep 2025',
  },
  {
    id: 'P005',
    matkul: 'Basis Data Lanjut',
    pertemuanKe: 2,
    topik: 'Normalisasi Database',
    tanggal: '12 Sep 2025',
  },
  {
    id: 'P006',
    matkul: 'Jaringan Komputer',
    pertemuanKe: 1,
    topik: 'Konsep Dasar Jaringan',
    tanggal: '13 Sep 2025',
  },
  {
    id: 'P007',
    matkul: 'Kecerdasan Buatan',
    pertemuanKe: 2,
    topik: 'Algoritma Pencarian',
    tanggal: '13 Sep 2025',
  },
  {
    id: 'P008',
    matkul: 'Rekayasa Perangkat Lunak',
    pertemuanKe: 1,
    topik: 'Software Development Life Cycle',
    tanggal: '14 Sep 2025',
  },
  {
    id: 'P009',
    matkul: 'Pemrograman Mobile',
    pertemuanKe: 3,
    topik: 'State & Hooks',
    tanggal: '18 Sep 2025',
  },
  {
    id: 'P010',
    matkul: 'Jaringan Komputer',
    pertemuanKe: 2,
    topik: 'Model OSI dan TCP/IP',
    tanggal: '20 Sep 2025',
  },
  {
    id: 'P011',
    matkul: 'Basis Data Lanjut',
    pertemuanKe: 3,
    topik: 'Query Kompleks & Join',
    tanggal: '19 Sep 2025',
  },
  {
    id: 'P012',
    matkul: 'Rekayasa Perangkat Lunak',
    pertemuanKe: 2,
    topik: 'Requirement Engineering',
    tanggal: '21 Sep 2025',
  },
];

// #sel 3 - Data jadwal mingguan (dipakai di halaman SectionList)
// Setiap section = 1 hari, "data" = daftar mata kuliah pada hari tersebut.
export const jadwalMingguan = [
  {
    title: 'Senin',
    data: [
      {
        id: 'J001',
        matkul: 'Pemrograman Mobile',
        ruang: 'A201',
        jamMulai: '08.00',
        jamSelesai: '10.30',
      },
      {
        id: 'J002',
        matkul: 'Kecerdasan Buatan',
        ruang: 'B102',
        jamMulai: '13.00',
        jamSelesai: '15.30',
      },
    ],
  },
  {
    title: 'Selasa',
    data: [
      {
        id: 'J003',
        matkul: 'Basis Data Lanjut',
        ruang: 'C301',
        jamMulai: '09.00',
        jamSelesai: '11.30',
      },
      {
        id: 'J004',
        matkul: 'Jaringan Komputer',
        ruang: 'Lab Jaringan',
        jamMulai: '13.00',
        jamSelesai: '14.40',
      },
    ],
  },
  {
    title: 'Rabu',
    data: [
      {
        id: 'J005',
        matkul: 'Rekayasa Perangkat Lunak',
        ruang: 'A301',
        jamMulai: '10.00',
        jamSelesai: '12.30',
      },
    ],
  },
];
