import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  container: {
    height: '102%',
    width: '100%',
    padding: '5%',
  },
  headerContainer: {flexDirection: 'row', justifyContent: 'space-between'},
  mainHeader: {
    fontSize: 32,
    fontWeight: 'bold',
  },
  header: {
    fontSize: 26,
    fontWeight: 'bold',
    marginTop: 50,
    color: '#B00814',
  },
  profile: {
    height: 35,
    width: 35,
    borderRadius: 20,
    borderColor: 'black',
    borderWidth: 0.1,
  },
  searchBox: {
    height: 50,
    width: '100%',
    alignSelf: 'center',
    backgroundColor: '#E0E0E0',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'start ',
    padding: 10,
    fontSize: 20,
    borderRadius: 7,
    marginTop: 10,
    shadowColor: 'black',
    shadowOffset: {width: 2, height: 2},
    shadowOpacity: 0.3,
    shadowRadius: 2,
  },
  textBox: {
    marginHorizontal: 10,
    width: '90%',
    fontSize: 16,
    overflow: 'hidden',
  },
  scannerContainer: {
    height: '32%',
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 15,
  },
  assetButtonContainer: {
    height: '63%',
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 15,
    marginBottom: -175,
  },

  navStyle: {color: '#B00814'},
});
