import React from 'react';
import {Text, View, TextInput, Pressable, SectionList} from 'react-native';
import {styles} from './HomeStyling';
import {SafeAreaView} from 'react-native-safe-area-context';
import Icon from 'react-native-vector-icons/FontAwesome';
import {useSelector, useDispatch} from 'react-redux';
import AssetList from '../../CommonComponents/AssetList/AssetList';
import {login, logout} from '../../Redux/authSlice';

const DATA = [
  {
    title: 'Scan assets',
    data: [
      {
        array: [
          {
            text: 'ASSET TAG',
            img: require('../../../assets/images/qrCode.png'),
          },
          {
            text: 'SERIAL NUMBER',
            img: require('../../../assets/images/qrCode.png'),
          },
          {
            text: 'BARCODE',
            img: require('../../../assets/images/qrCode.png'),
          },
          {
            text: 'QR CODE',
            img: require('../../../assets/images/qrCode.png'),
          },
        ],
      },
    ],
  },
  {
    title: 'Add assets',
    data: [
      {
        array: [
          {
            text: 'ASSET TAG',
            img: require('../../../assets/images/qrCode.png'),
          },
          {
            text: 'ASSET TAG',
            img: require('../../../assets/images/qrCode.png'),
          },
          {
            text: 'ASSET TAG',
            img: require('../../../assets/images/qrCode.png'),
          },
          {
            text: 'Manually',
          },
        ],
      },
    ],
  },
  {
    title: 'Update assets',
    data: [
      {
        array: [
          {
            text: 'ASSET TAG',
            img: require('../../../assets/images/qrCode.png'),
          },
          {
            text: 'ASSET TAG',
            img: require('../../../assets/images/qrCode.png'),
          },
          {
            text: 'ASSET TAG',
            img: require('../../../assets/images/qrCode.png'),
          },
          {
            text: 'Manually',
          },
        ],
      },
    ],
  },
];

export default function HomeScreen({navigation}) {
  const isAuthenticated = useSelector(state => state.auth.isAuthenticated);
  const dispatcher = useDispatch();
  return (
    <SafeAreaView>
      <View style={styles.container}>
        <View style={styles.headerContainer}>
          <Text style={styles.mainHeader}>
            Home{/* Homes {isAuthenticated.toString()} */}
          </Text>
          <Pressable
            onPress={() => {
              dispatcher(logout());
            }}>
            <Icon name="sign-out" size={24} />
          </Pressable>
        </View>
        <View>
          <Text style={styles.header}>Search assets</Text>
          <View style={styles.searchBox}>
            <Icon name="search" color="gray" size={16} />

            <TextInput placeholder="Type something..." style={styles.textBox} />
          </View>
        </View>
        <View
          style={{
            flexDirection: 'row',
            height: '80%',
            justifyContent: 'space-around',
          }}>
          <SectionList
            sections={DATA}
            renderItem={item => renderSectionItem(item)}
            renderSectionHeader={({section: {title}}) => (
              <Text style={styles.header}>{title}</Text>
            )}
            stickySectionHeadersEnabled={false}
          />
        </View>
      </View>
    </SafeAreaView>
  );

  function renderSectionItem(item) {
    return (
      <View style={{height: 220}}>
        <AssetList data={item.item.array} title={item.section.title} />
      </View>
      // <View style={{height: 200, margin: 20}}>
      //   <Text>
      //     {item.item.array[1].img} {item.item.array[0].img}
      //   </Text>
      // </View>
    );
  }
}
