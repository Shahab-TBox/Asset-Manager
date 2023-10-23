import {StyleSheet} from 'react-native';
export const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  map: {
    flex: 1,
  },
  zoomButtonPlus: {
    position: 'absolute',
    bottom: 110,
    right: 15,
    height: 45,
    width: 45,
    backgroundColor: 'white',
    borderRadius: 23,
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: 'black',
    shadowRadius: 5,
    shadowOpacity: 0.4,
    shadowOffset: {width: 0, height: -2},
  },
  zoomButtonMinus: {
    position: 'absolute',
    bottom: 165,
    right: 15,
    height: 45,
    width: 45,
    backgroundColor: 'white',
    borderRadius: 23,
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: 'black',
    shadowRadius: 5,
    shadowOpacity: 0.4,
    shadowOffset: {width: 0, height: -2},
  },
  zoomButtonText: {
    fontSize: 18,
    color: '#5F6368',
    fontWeight: 'bold',
  },
});
