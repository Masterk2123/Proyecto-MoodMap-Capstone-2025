import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, Alert, SafeAreaView } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { login } from '../../../Backend/services/authServices';
import { styles } from '../../styles/login.styles';

const LoginScreen = () => {
  const [email, setEmail] = useState<string>('');       
  const [password, setPassword] = useState<string>('');

  const handleLogin = async () => {
    if (!email || !password) {
      Alert.alert('Error', 'Por favor, completa ambos campos.');
      return;
    }

    try {
      const data = await login(email, password);
      const token = data.token;

      await AsyncStorage.setItem('token', token);
      Alert.alert('Éxito', 'Inicio de sesión exitoso.');
      console.log('Token guardado:', token);

      // Aquí podrías redirigir a la pantalla principal
      // router.push('/(tabs)/Chat');

    } catch (error: any) {
      Alert.alert('Error al iniciar sesión', error.message);
    }
  };

  return (
    <SafeAreaView style={styles.screen}>
      <Text style={styles.MoodTitle}>Moodmap</Text>

      <View style={styles.container}>
        <View style={styles.box}>
          <Text style={styles.Label}>Login</Text>

          <Text style={styles.Text}>Email</Text>
          <TextInput
            style={styles.Input}
            placeholder="Lorem.ipsum@gmail.com"
            value={email}
            onChangeText={setEmail}
            autoCapitalize="none"
            keyboardType="email-address"
          />

          <Text style={styles.Text}>Contraseña</Text>
          <TextInput
            style={styles.Input}
            placeholder="Inserte Contraseña"
            value={password}
            onChangeText={setPassword}
            secureTextEntry
          />

          <TouchableOpacity style={styles.ForgotPassword}>
            <Text>¿Olvidaste tu contraseña?</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.Button} onPress={handleLogin}>
            <Text style={styles.ButtonText}>Iniciar sesión</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.registerButton}>
            <Text>¿No tienes una cuenta? Regístrate</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default LoginScreen;
