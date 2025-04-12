import { StyleSheet } from 'react-native';

import EditScreenInfo from '@/components/EditScreenInfo';
import { Text, View } from '@/components/Themed';

{/* Componente de pantalla principal de la aplicación */}
import Login from '@/screens/auth/LoginScreen';
import Home from '@/screens/home/HomeScreen';
import TaskScreen from '@/screens/tasks/TaskScreen';
import ChatScreen from '@/screens/chatbot/ChatScreen';

{/*mostrar en pantalla*/}
export default function TabOneScreen() {
  return (
    <View style={styles.container}>
      <ChatScreen/>
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
