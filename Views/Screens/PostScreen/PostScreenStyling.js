import {StyleSheet} from 'react-native';
export const styles = StyleSheet.create({
  screen: {
    height: '100%',
    paddingHorizontal: '6%',
    width: '102%',
    alignSelf: 'center',
    paddingVertical: '3%',
  },
  postList: {
    backgroundColor: '#F4F4F4',
    width: '112%',
    alignSelf: 'center',
    height: '85%',
    paddingHorizontal: '1%',
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '45%',
  },
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 22,
  },
  modalView: {
    margin: 20,
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 35,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  button: {
    borderRadius: 8,
    padding: 10,
    elevation: 2,
  },
  buttonOpen: {
    backgroundColor: '#F194FF',
  },
  buttonConfirm: {
    backgroundColor: '#B00814',
  },
  buttonClose: {
    backgroundColor: '#1D1B1C',
  },
  textStyle: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  modalText: {
    marginBottom: 15,
    textAlign: 'center',
  },
});
