// C:\Users\fabio\OneDrive\Escritorio\Proyecto-APT\styles\chat.styles.ts
import { StyleSheet, Platform } from "react-native"

export const styles = StyleSheet.create({
    ChatScreen: {
        flex: 1,
        backgroundColor: '#f5f5f5',
        paddingTop: Platform.OS === 'android' ? 25 : 0,
    },
    ChatArea: {
        flex: 1,
        
    },
    Header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 16
    },
    InputArea: {
        borderTopWidth: 1,
        borderColor: '#ccc',
        paddingTop: 10,
    },
    InputContainer: {
      borderTopWidth: 1,
      borderColor: '#ccc',
      paddingTop: 10,
  },
    InputField: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    InputText: {
        flex: 1,
        marginHorizontal: 10,
        padding: 10,
        backgroundColor: '#fff',
        borderRadius: 10,
    },
    Disclamer: {
        fontSize: 12,
        color: '#888',
        marginTop: 8
    },
    SendButton: {
        backgroundColor: '#007AFF',
        padding: 10,
        borderRadius: 5,
    },

    Scrollable: {
        flex: 1,
        height: '100%',
        overflow: 'scroll',
      },


});