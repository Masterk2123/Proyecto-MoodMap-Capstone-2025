import React from 'react';
import { View, Text, Button } from 'react-native';

export default function LoginScreen({ navigation }) {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text style={{ fontSize: 20 }}>Pantalla de Login</Text>
      <Button title="Ir al Home" onPress={() => navigation.navigate('Home')} />
    </View>
  );
}
// This is a simple login screen component using React Native.