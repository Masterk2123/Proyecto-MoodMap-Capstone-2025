//C:\Users\fabio\OneDrive\Escritorio\Proyecto-APT\styles\header.styles.ts


import { StyleSheet } from "react-native"

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fbf8ec',
        paddingTop: 20,
        paddingHorizontal: 16,
        height: '100%',
    },
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingHorizontal: 16,
        marginBottom: 20,
        backgroundColor: 'transparent',
      },
      icon: {
        fontSize: 24,
        backgroundColor: 'transparent',
        marginTop: 10,
        marginLeft: 10,
      },
      avatar: {
        fontSize: 24,
        backgroundColor: 'transparent',
        marginTop: 10,
        marginRight: 10,
      },
});