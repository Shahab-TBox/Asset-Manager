import {StyleSheet} from 'react-native';
export const styles = StyleSheet.create({
  container: {
    width: '95%',
    padding: '4%',
    height: 240,
    borderColor: 'black',
    alignSelf: 'center',
    justifyContent: 'space-between',
    borderRadius: 8,
    marginVertical: '1.5%',
    backgroundColor: 'white',
    shadowColor: 'black',
    shadowRadius: 2,
    shadowOpacity: 0.4,
    shadowOffset: (0, 0),
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  body: {
    fontSize: 16,
  },
  text: {
    fontSize: 15,
  },
  topContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderBottomColor: 'black',
    borderBottomWidth: 0.2,
    alignItems: 'center',
    padding: 5,
    borderRadius: 5,
    shadowColor: 'black',
  },
  icons: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '20%',
  },
  pressableIcon: {
    height: 30,
    width: 30,
    borderRadius: 15,
    backgroundColor: '#F4F4F4',
    justifyContent: 'center',
    alignItems: 'center',
  },
});
