// src/context/AuthContext.js
// Menyimpan status login secara global memakai React Context + useState
// Ketentuan Wajib #6 (Navigasi): "Pengguna wajib login dulu sebelum bisa mengakses menu utama"
//
// Karena soal bilang "tidak perlu membuat backend sendiri", akun hasil Daftar
// disimpan sementara di memori aplikasi (registeredUsers). Saat Login, kita cek
// dulu ke daftar akun lokal ini, baru kalau tidak ketemu, coba ke API DummyJSON
// (untuk akun uji bawaan seperti emilys/emilyspass).

import React, { createContext, useState, useContext } from "react";

const AuthContext = createContext(null);

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null); // null = belum login
  const [isLoading, setIsLoading] = useState(false);
  const [registeredUsers, setRegisteredUsers] = useState([]); // akun hasil Daftar (lokal, hilang jika app ditutup)

  const login = (userData) => setUser(userData);
  const logout = () => setUser(null);

  // Dipanggil dari RegisterScreen setelah validasi form sukses
  const registerUser = ({ nama, email, password }) => {
    const [firstName, ...rest] = nama.trim().split(" ");
    const newUser = {
      id: `local-${Date.now()}`,
      username: email.trim().toLowerCase(), // email dipakai sebagai username saat login
      email: email.trim().toLowerCase(),
      password, // catatan: hanya untuk simulasi lokal, bukan praktik aman untuk produksi
      firstName: firstName || nama,
      lastName: rest.join(" "),
      image: "https://dummyjson.com/icon/user/128",
    };
    setRegisteredUsers((prev) => [...prev, newUser]);
    return newUser;
  };

  // Dipanggil dari LoginScreen: cari akun lokal yang cocok username/email + password
  const findLocalUser = (identifier, password) => {
    const id = identifier.trim().toLowerCase();
    return registeredUsers.find(
      (u) => (u.username === id || u.email === id) && u.password === password
    );
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        isLoggedIn: !!user,
        isLoading,
        setIsLoading,
        login,
        logout,
        registerUser,
        findLocalUser,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

// Custom hook biar gampang dipakai di screen lain
export function useAuth() {
  return useContext(AuthContext);
}
