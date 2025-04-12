import React, { useState } from 'react';
import { View, Text, TextInput, Button, TouchableOpacity, Alert, SafeAreaView, StyleSheet } from 'react-native';
import { styles } from '../../styles/login.styles';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    if (!email || !password) {
      Alert.alert('Error', 'Por favor, completa ambos campos.');
      return;
    }

    // Aquí iría tu lógica de autenticación (ej: Firebase o API)
    console.log('Iniciando sesión con:', email, password);
    Alert.alert('Sesión iniciada', `Bienvenido, ${email}`);
  };

  const handleForgotPassword = () => {
    // Aquí iría tu lógica para recuperar contraseña
    console.log('Recuperar contraseña para:', email);
    Alert.alert('Recuperar contraseña', 'Funcionalidad aún no implementada.');
  };

  const handleRegister = () => {
    // Aquí podrías navegar a la pantalla de registro
    console.log('Redirigiendo a registro...');
    Alert.alert('Registro', 'Funcionalidad aún no implementada.');
  };

  return (
    <SafeAreaView style={styles.screen}>
      <text style={styles.MoodTitle}>Moodmap</text>
        <View style={styles.container}>
          <View style={styles.box}>
            <Text style={styles.Label}>Login</Text>

            <Text style={styles.Text}>Email</Text>
            <TextInput style={styles.Input}
              placeholder="Lorem.ipsum@gmail.com"
              value={email}
              onChangeText={setEmail}
              autoCapitalize="none"
              keyboardType="email-address"
            />

            <Text style={styles.Text}>Contraseña</Text>
            <TextInput style={styles.Input}
              placeholder="Incerte Contraseña"
              value={password}
              onChangeText={setPassword}
              secureTextEntry
            />

            <TouchableOpacity style={
              styles.ForgotPassword
            } onPress={handleForgotPassword}>
              <Text>¿Olvidaste tu contraseña?</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.Button} onPress={handleLogin}>
              <Text style={styles.ButtonText}>Iniciar sesión</Text>
            </TouchableOpacity>

            <TouchableOpacity  style={styles.registerButton} onPress={handleRegister}>
              <Text>¿No tienes una cuenta? Regístrate</Text>
            </TouchableOpacity>
          </View>
      </View>
    </SafeAreaView>
  );
};

export default Login;

