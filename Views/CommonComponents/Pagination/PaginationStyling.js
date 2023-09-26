import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  paginationContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginHorizontal: 20,
    marginVertical: 10,
  },
  activatedPage: {
    backgroundColor: '#B00814',
    height: 30,
    width: 30,
    borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'center',
  },
  activatedText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
  dottedContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: 30,
  },
  nextPrev: {
    backgroundColor: '#B00814',
    height: 30,
    width: 40,
    borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: 15,
  },

  nextPrevDisabled: {
    backgroundColor: '#B00814',
    height: 30,
    width: 40,
    borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: 15,
    opacity: 0.6,
  },
  nextContainer: {
    flexDirection: 'row-reverse',
    width: '30%',
    minWidth: 40,
    marginHorizontal: 15,
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  staticButtonsContainer: {
    flexDirection: 'row',
    width: '30%',
    minWidth: 40,
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  dynamicButtonsContainer: {
    flexDirection: 'row',
    width: '35%',
    minWidth: 40,
    justifyContent: 'space-around',
    alignItems: 'center',
  },
});
