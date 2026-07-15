// src/navigation/MainTabNavigator.js
// Ketentuan Wajib #6 (Navigasi): "menu utama berbentuk tab di bawah layar (Home, Keranjang/Wishlist, Profil)"
// Home memakai Stack sendiri supaya bisa lanjut ke ProductDetail

import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Ionicons } from "@expo/vector-icons";

import CatalogScreen from "../screens/CatalogScreen";
import ProductDetailScreen from "../screens/ProductDetailScreen";
import CartScreen from "../screens/CartScreen";
import ProfileScreen from "../screens/ProfileScreen";

const Tab = createBottomTabNavigator();
const HomeStack = createNativeStackNavigator();

// Stack khusus tab Home: Katalog -> Detail Produk
function HomeStackNavigator() {
  return (
    <HomeStack.Navigator>
      <HomeStack.Screen name="Catalog" component={CatalogScreen} options={{ headerShown: false }} />
      <HomeStack.Screen
        name="ProductDetail"
        component={ProductDetailScreen}
        options={{ title: "Detail Produk" }}
      />
    </HomeStack.Navigator>
  );
}

export default function MainTabNavigator() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarActiveTintColor: "#4F46E5",
        tabBarInactiveTintColor: "#9CA3AF",
        tabBarIcon: ({ color, size }) => {
          const icons = {
            Home: "home",
            Keranjang: "heart",
            Profil: "person",
          };
          return <Ionicons name={icons[route.name]} size={size} color={color} />;
        },
      })}
    >
      <Tab.Screen name="Home" component={HomeStackNavigator} />
      <Tab.Screen name="Keranjang" component={CartScreen} />
      <Tab.Screen name="Profil" component={ProfileScreen} />
    </Tab.Navigator>
  );
}
