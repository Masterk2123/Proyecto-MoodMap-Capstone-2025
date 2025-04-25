import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity } from 'react-native';
import { register } from '../../services/authServices'; // Ajusta la ruta si es distinta
import { styles } from '../../styles/login.styles'; // Tu archivo de estilos personalizado
import { useRouter } from 'expo-router';  // Importa useRouter desde expo-router

const RegisterScreen = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');
  const router = useRouter(); // Inicializa el router

  const handleRegister = async () => {
    try {
      const data = await register(email, password);
      setMessage(`¡Usuario registrado con ID: ${data.id}!`);
      console.log('Registro exitoso:', data);

      // Redirigir a la pantalla principal después de iniciar sesión
      router.replace('/(tabs)/Home'); 
    } catch (error: unknown) {
      if (error instanceof Error) {
        setMessage(error.message);
      } else {
        setMessage('Error desconocido');
      }
    }
  };

  return (
    <View style={styles.screen}>
      <Text style={styles.MoodTitle}>MoodMap</Text>

      <View style={styles.container}>
        <View style={styles.box}>
          <Text style={styles.Label}>Correo electrónico</Text>
          <TextInput
            style={styles.Input}
            placeholder="ejemplo@correo.com"
            value={email}
            onChangeText={setEmail}
            autoCapitalize="none"
          />

          <Text style={styles.Label}>Contraseña</Text>
          <TextInput
            style={styles.Input}
            placeholder="Contraseña segura"
            secureTextEntry
            value={password}
            onChangeText={setPassword}
          />

          <TouchableOpacity style={styles.Button} onPress={handleRegister}>
            <Text style={styles.ButtonText}>Registrarse</Text>
          </TouchableOpacity>

          {message !== '' && <Text style={styles.Text}>{message}</Text>}
        </View>
      </View>
    </View>
  );
};

export default RegisterScreen;
