import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  screen: {backgroundColor: 'white'},
  header: {
    height: '17%',
    width: '110%',
    paddingHorizontal: '6%',
    paddingVertical: '3%',
    backgroundColor: 'white',
    alignSelf: 'center',
    justifyContent: 'space-around',
  },
  searchBarContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
  },
  count: {
    fontSize: 22,
    color: 'grey',
  },
  buttonText: {color: 'white', fontSize: 36},
  filterButton: {
    borderRadius: 30, // Use a larger value for more rounded corners
    height: 50,
    width: 50,
    backgroundColor: '#ECECEC',
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: 'black',
    shadowOffset: {height: 2, width: 2},
    shadowRadius: 2,
    shadowOpacity: 0.4,
  },
  searchBar: {
    height: '100%',
    width: '83%',
    borderWidth: 0.1,
    borderColor: 'black',
    fontSize: 20,
    padding: 10,
    backgroundColor: '#ECECEC',
    borderRadius: 7,
    shadowColor: 'black',
    shadowOffset: {width: 2, height: 2},
    shadowOpacity: 0.2,
    shadowRadius: 2,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  floatingPlusButton: {
    borderRadius: 35,
    height: 70,
    width: 70,
    backgroundColor: 'black',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    bottom: 100,
    right: 25,
    zIndex: 999,
  },

  headerText: {
    height: '40%',
    width: '100%',
    fontSize: 30,
    fontWeight: 'bold',
  },
  container: {
    height: '105%',
    paddingHorizontal: '5%',
    width: '100%',
  },
  button: {
    position: 'absolute', // Use absolute positioning for the button
    bottom: 16, // Adjust the bottom value to control its vertical placement
    right: 16, // Adjust the right value to control its horizontal placement
    backgroundColor: 'blue', // Button background color
    padding: 10,
    borderRadius: 5,
    zIndex: 2,
  },
  listContainer: {
    backgroundColor: '#F4F4F4',
    width: '110%',
    alignSelf: 'center',
    height: '90%',
    padding: '5%',
  },
});
