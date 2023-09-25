import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 15,
    width: '100%',
    height: 110,
    borderColor: 'gray',
    borderWidth: 0.2,
    marginVertical: 4,
    paddingVertical: 10,
    backgroundColor: 'white',
    borderRadius: 8,
    shadowColor: 'black',
    shadowOffset: {width: 2, height: 2},
    shadowOpacity: 0.2,
    shadowRadius: 2,
  },
  details: {
    justifyContent: 'space-around',
    width: '58%',
    overflow: 'hidden',
    marginHorizontal: '1%',
  },
  button: {padding: 10},
  buttonText: {fontSize: 20, fontWeight: 'bold'},
  type: {
    fontSize: 14,
    color: 'gray',
    fontWeight: 'normal',
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    overflow: 'hidden',
    height: 24,
    width: '100%',
  },
  id: {
    fontSize: 15,
  },
  image: {
    height: 80, // Adjust the image height as needed
    width: 80, // Adjust the image width as needed
    borderRadius: 5,
    borderColor: 'gray',
    alignSelf: 'center',
    borderWidth: 0.2,
  },
});
