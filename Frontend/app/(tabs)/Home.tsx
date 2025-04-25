import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
{/* Componente de pantalla principal de la aplicación */}
import Home from '@/modal/home/HomeScreen';

export default function TabOneScreen() {
  const [isLogin, setIsLogin] = useState(true); 

  return (
    <View>
      <Home />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ecc395',
    alignItems: 'center',
    justifyContent: 'center',
  },
  switchButton: {
    marginTop: 20,
    padding: 10,
  },
  switchText: {
    color: '#4a4e69',
    fontSize: 16,
    fontWeight: 'bold',
    textDecorationLine: 'underline',
  },
});