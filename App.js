// App.js
// Entry point aplikasi. Menggunakan Bottom Tab Navigator
// untuk berpindah antar 3 halaman (Ringkasan, Pertemuan, Jadwal).

import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';

import RingkasanScreen from './screens/RingkasanScreen';
import PertemuanScreen from './screens/PertemuanScreen';
import JadwalScreen from './screens/JadwalScreen';

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          headerTitleAlign: 'center',
          tabBarIcon: ({ color, size }) => {
            let iconName;
            if (route.name === 'Ringkasan') iconName = 'book-outline';
            else if (route.name === 'Pertemuan') iconName = 'list-outline';
            else if (route.name === 'Jadwal') iconName = 'calendar-outline';
            return <Ionicons name={iconName} size={size} color={color} />;
          },
        })}
      >
        <Tab.Screen
          name="Ringkasan"
          component={RingkasanScreen}
          options={{ title: 'Ringkasan Matkul' }}
        />
        <Tab.Screen
          name="Pertemuan"
          component={PertemuanScreen}
          options={{ title: 'Daftar Pertemuan' }}
        />
        <Tab.Screen
          name="Jadwal"
          component={JadwalScreen}
          options={{ title: 'Jadwal Mingguan' }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
