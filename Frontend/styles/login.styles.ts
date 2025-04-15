import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  screen:{
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#ecc395',
    //borderWidth: 1,
    borderColor: '#4a4e69',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
  },

  container: {
    height: '80%',  
    //borderWidth: 1,
    borderColor: 'black',
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%', 
  },

  box: {
    width: '100%',
    height: '100%',
    marginTop: 80,
    //borderWidth: 1,
    borderColor: '#e60000',
    backgroundColor: '#fff9f1',
    borderRadius: 25,
    padding: 20,
    
    // Sombras para iOS
    shadowColor: '#000',
    shadowOffset: { width: 0, height: -10 },
    shadowOpacity: 0.5,
    shadowRadius: 20,

    // Sombras para Android
    elevation: 6,
    },
  
  MoodTitle: {
    fontSize: 50,
    fontFamily: 'sans-serif',
    color: '#fbfbf3',
    fontWeight: 'bold',
    marginTop: 50,
    top: 100,

    // Sombras para iOS
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 10 },
    shadowOpacity: 0.25,
    shadowRadius: 0,
  },

  Label: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
    color: '#00000',
  },

  Text: {
    fontSize: 15,
    fontWeight:'500',
    marginBottom: 10,
    color: '#4a4e69',
  },
  Input: {
    width: '100%',
    height: 40,
    borderColor: '#4a4e69',
    borderWidth: 1,
    borderRadius: 10,
    paddingHorizontal: 10,
    marginBottom: 20,

    // Sombras para iOS
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 10 },
    shadowOpacity: 0.15,
    shadowRadius: 10,
  },

  Button: {
    backgroundColor: '#000000',
    padding: 10,
    borderRadius: 5,
    alignItems: 'center',
    marginTop: 30,

    // Sombras para iOS
    shadowColor: '#000',
    shadowOffset: { width: 10, height: 10 },
    shadowOpacity: 0.45,
    shadowRadius: 20,
  },

  ButtonText: {
    color: '#fff',
    fontWeight: 'bold',
  },

  ForgotPassword: {
    top: -10,
    left: 70,
    color: '#4a4e69',
  },

  registerText: {
    color: '#4a4e69',
    marginTop: 20,
  },

  registerButton: {
    color: '#000000',
    padding: 10,
    borderRadius: 5,
    alignItems: 'center',
    marginTop: 8,
  }
});
