import { StyleSheet } from 'react-native';

import { Text, View } from 'react-native';
import EditScreenInfo from '@/components/EditScreenInfo';
import NeoChat from '@/modal/chatbot/ChatScreen';

export default function TabTwoScreen() {
  return (
    <View style={styles.container}>
      <NeoChat />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
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
    backgroundColor: '#eee',
  },
});
