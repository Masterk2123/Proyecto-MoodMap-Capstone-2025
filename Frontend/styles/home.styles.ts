//

import { StyleSheet } from 'react-native';

export const createResponsiveStyles = (width: number) => StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fbf8ec',
    paddingTop: 20,
    paddingBottom: 20,
    paddingHorizontal: 16,
    height: '100%',
  },
  menuContainer: {
    flexDirection: width > 700 ? 'row' : 'column',
    flexWrap: width > 700 ? 'wrap' : 'nowrap',
    justifyContent: 'space-between',
    marginTop: 20,
    paddingHorizontal: 16,
    alignItems: 'center',
    alignContent: 'center',
    marginBottom: 20,},

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
  cont: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
    borderWidth: 1,
    borderColor: '#000',
    borderRadius: 16,
  },
  card: {
    width: '45%',
    height: width > 700 ?  150 : 100,
    margin: 10,
    borderRadius: 16,
    marginBottom: 20,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    borderWidth: 1,
    borderColor: '#000',
    overflow: 'hidden',
  },
  cardTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#fff',
    textAlign: 'center',
    marginTop: 10,
  },
  cardOrange: {
    width: '100%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 16,
    overflow: 'hidden',
    backgroundColor: '#FFA500',
  },
  cardGreen: {
  },
  cardBlue: {
  },
});
