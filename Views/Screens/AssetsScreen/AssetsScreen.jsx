import React from 'react';
import {
  Button,
  FlatList,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import Navbar from '../../CommonComponents/Navbar/Navbar';
import {SafeAreaView} from 'react-native-safe-area-context';
import {styles} from './AssetsStyling';
import {assets} from '../../../Models/AssetModel';
import AssetItem from '../../CommonComponents/AssetItem/AssetItem';
import SearchHeader from '../../CommonComponents/SearchHeader/SearchHeader';
export default function AssetsScreen({navigation}) {
  const imagePath = require('../../../assets/images/iphone13pro.jpg');

  return (
    <SafeAreaView style={styles.screen}>
      <View style={styles.container}>
        <SearchHeader number={assets.length} ScreenName="Assets" />
        <FlatList
          style={styles.listContainer}
          data={assets}
          renderItem={({item}) => (
            <AssetItem
              type={item.type}
              name={item.name}
              id={item.id}
              imgPath={item.imgPath}
            />
          )}
        />
      </View>
      <TouchableOpacity style={styles.floatingPlusButton} activeOpacity={0.7}>
        <Text style={styles.buttonText}>+</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
}
