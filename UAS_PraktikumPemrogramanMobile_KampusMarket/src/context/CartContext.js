// src/context/CartContext.js
// Menyimpan daftar produk yang di-wishlist/keranjang secara global

import React, { createContext, useState, useContext } from "react";

const CartContext = createContext(null);

export function CartProvider({ children }) {
  const [items, setItems] = useState([]); // array of product

  const addItem = (product) => {
    setItems((prev) => {
      const alreadyExist = prev.some((p) => p.id === product.id);
      if (alreadyExist) return prev; // hindari duplikat
      return [...prev, product];
    });
  };

  const removeItem = (id) => {
    setItems((prev) => prev.filter((p) => p.id !== id));
  };

  const isInCart = (id) => items.some((p) => p.id === id);

  return (
    <CartContext.Provider value={{ items, addItem, removeItem, isInCart }}>
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  return useContext(CartContext);
}
