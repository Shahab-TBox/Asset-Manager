import {StyleSheet} from 'react-native';
export const styles = StyleSheet.create({
  container: {
    height: 490,
    width: '100%',
    borderWidth: 0.2,
    borderRadius: 5,
    backgroundColor: 'white',
    marginVertical: '2%',
    overflow: 'hidden',
    shadowColor: 'black',
    justifyContent: 'space-between',
  },
  topContainer: {
    flexDirection: 'row',
    padding: '1%',
    borderBottomColor: 'black',
    borderBottomWidth: 0.2,
    marginBottom: '1%',
  },
  text: {
    fontSize: 16,
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold',
    marginVertical: 4,
  },
});
