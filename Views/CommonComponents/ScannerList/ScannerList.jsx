import React from 'react';
import ScannerButton from '../ScannerButton/ScannerButton';
import {FlatList, Text, View} from 'react-native';

const DATA = [
  {text: 'ASSET TAG', img: 'assets/images/macMini.jpeg'},
  {text: 'SERIAL NUMBER', img: 'assets/images/macMini.jpeg'},
  {text: 'apg', img: 'assets/images/macMini.jpeg'},
  {text: 'ioemi', img: 'assets/images/macMini.jpeg'},
  {text: 'abujnc', img: 'assets/images/macMini.jpeg'},
  {text: 'adjcbc', img: 'assets/images/macMini.jpeg'},
  {text: 'abcjd', img: 'assets/images/macMini.jpeg'},
  {text: 'abcj dc', img: 'assets/images/macMini.jpeg'},
];
function emptyText() {
  return (
    <Text
      style={{
        color: '#B00814',
        fontSize: 18,
        alignSelf: 'center',
        fontWeight: 'bold',
      }}>
      {' '}
      No Scanning Method Found
    </Text>
  );
}
function separator() {
  return <View style={{width: 10}}></View>;
}
const ScannerList = ({Data}) => {
  return (
    <FlatList
      horizontal={true}
      data={Data}
      renderItem={({item}) => <ScannerButton text={item.text} img={item.img} />}
      ItemSeparatorComponent={separator()}
    />
  );
};

export default ScannerList;
