{/*C:\Users\fabio\OneDrive\Escritorio\Proyecto-APT\screens\home\HomeScreen.tsx*/}

import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet,
         SafeAreaView, ImageBackground, useWindowDimensions } from 'react-native';
import { createResponsiveStyles } from '../../styles/home.styles';

const Home = () => {
  const { width } = useWindowDimensions();
  const styles = createResponsiveStyles(width);

  return (
    <SafeAreaView style={styles.container}>
      {/* Cabecera */}
      <View style={styles.header}>
        <Text style={styles.icon}>⚙️</Text>
        <Text style={styles.icon}>Buenos dias Mandy👤</Text>
        <Text style={styles.avatar}>😆</Text>
      </View>

    <View style={[styles.menuContainer]}>
      {/* Tarjeta 1 */}
      <TouchableOpacity style={styles.card}>
        <ImageBackground source={require('../../assets/images/fondo1.png')} style={styles.cardOrange} imageStyle={{ borderRadius: 16 }}>
          <Text style={styles.cardTitle}>Diario{"\n"}Personal</Text>
        </ImageBackground>
      </TouchableOpacity>

      {/* Tarjeta 2 */}
      <TouchableOpacity style={styles.card}>
        <ImageBackground source={require('../../assets/images/fondo2.png')} style={styles.cardOrange} imageStyle={{ borderRadius: 16 }}>
          <Text style={styles.cardTitle}>Chat Bot</Text>
        </ImageBackground>
      </TouchableOpacity>

      {/* Tarjeta 3 */}
      <TouchableOpacity style={styles.card}>
        <ImageBackground source={require('../../assets/images/fondo3.png')} style={styles.cardOrange} imageStyle={{ borderRadius: 16 }}>
          <Text style={styles.cardTitle}>Lista de{"\n"} Tareas</Text>
        </ImageBackground>
      </TouchableOpacity>

      {/* Tarjeta 4 */}
      <TouchableOpacity style={styles.card}>
        <ImageBackground source={require('../../assets/images/fondo1.png')} style={styles.cardOrange} imageStyle={{ borderRadius: 16 }}>
          <Text style={styles.cardTitle}>Tipos de{"\n"}Ejercicios</Text>
        </ImageBackground>
      </TouchableOpacity>
    </View>
    </SafeAreaView>
  );
};

export default Home;
