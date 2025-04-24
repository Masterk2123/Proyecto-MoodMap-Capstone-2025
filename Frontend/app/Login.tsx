import { StyleSheet } from 'react-native';

import { View } from 'react-native';

{/* Componente de pantalla principal de la aplicación */}
import Login from '@/modal/auth/LoginScreen';

{/*mostrar en pantalla*/}
export default function TabOneScreen() {
  return (
    <View style={styles.container}>
      <Login/>
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
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
});
