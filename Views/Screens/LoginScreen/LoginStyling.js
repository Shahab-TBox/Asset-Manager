import {StyleSheet} from 'react-native';
export const styles = StyleSheet.create({
  loginContainer: {
    height: '60%',
    width: '90%',
    alignSelf: 'center',
    alignItems: 'center',
    borderColor: 'black',
    borderWidth: 0.1,
    justifyContent: 'space-around',
    borderRadius: 15,
    alignContent: 'center',
    marginHorizontal: 5,
    marginVertical: 20,
    backgroundColor: 'white',
    color: 'white',
    shadowColor: 'color',
    shadowOffset: {height: 2, width: 2},
    shadowRadius: 4,
    shadowOpacity: 0.4,
  },
  title: {
    fontSize: 30,
    fontWeight: 'bold',
    color: '#B00814',
  },
  input: {
    height: '25%',
    marginVertical: '2%',
    width: '100%',
    borderColor: 'rgba(255, 255, 255)',
    alignSelf: 'center',
    borderWidth: 0.1,
    borderRadius: 10,
    paddingHorizontal: 10,
    fontSize: 20,
    backgroundColor: '#ECECEC',
  },
  inputContainer: {
    height: '70%',
    width: '95%',
    paddingHorizontal: 10,
    paddingVertical: 20,
    justifyContent: 'space-between',
    alignItems: 'center',
    borderRadius: 15,
    marginHorizontal: 10,
  },
  headingText: {
    fontSize: 30,
    fontWeight: 'bold',
    margin: 20,
    alignSelf: 'center',
  },
  loginButton: {
    fontSize: 30,
    borderColor: 'black',
    borderWidth: 0.1,
    borderRadius: 8,
    height: '10%',
    padding: 5,
    width: '25%',
    backgroundColor: '#B00814',
    alignItems: 'center',
    justifyContent: 'center',
  },
  loginButtonText: {
    fontSize: 30,
    color: 'white',
    fontWeight: 'bold',
  },
  dateText: {
    height: '25%',
    width: '100%',
    borderColor: 'rgba(255, 255, 255)',
    alignSelf: 'center',
    borderWidth: 1,
    borderRadius: 10,
    paddingHorizontal: 10,
    fontSize: 20,
  },
});