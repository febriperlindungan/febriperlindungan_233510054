// src/navigation/AppNavigator.js
// Ketentuan Wajib #6 (Navigasi): "Pengguna wajib login dulu sebelum bisa mengakses menu utama"
// Kalau belum login -> tampilkan Auth Stack (Login/Register)
// Kalau sudah login -> tampilkan Main Tab Navigator

import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import LoginScreen from "../screens/LoginScreen";
import RegisterScreen from "../screens/RegisterScreen";
import MainTabNavigator from "./MainTabNavigator";
import { useAuth } from "../context/AuthContext";

const Stack = createNativeStackNavigator();

export default function AppNavigator() {
  const { isLoggedIn } = useAuth();

  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        {isLoggedIn ? (
          <Stack.Screen name="MainTab" component={MainTabNavigator} />
        ) : (
          <>
            <Stack.Screen name="Login" component={LoginScreen} />
            <Stack.Screen name="Register" component={RegisterScreen} options={{ headerShown: false }} />
          </>
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
}
