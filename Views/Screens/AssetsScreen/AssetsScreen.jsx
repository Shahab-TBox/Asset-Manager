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
export default function AssetsScreen({navigation}) {
  const imagePath = require('../../../assets/images/iphone13pro.jpg');

  return (
    <SafeAreaView style={styles.screen}>
      <View style={styles.container}>
        <View style={styles.header}>
          <Text style={styles.headerText}>
            Assets <Text style={styles.count}>({assets.length})</Text>
          </Text>
          <View style={styles.searchBarContainer}>
            <View style={styles.searchBar}>
              <Icon name="search" color="gray" size={18} />
              <TextInput placeholder="Search" style={styles.search} />
              <Icon name="print" size={18} />
            </View>
            <TouchableOpacity style={styles.filterButton} activeOpacity={0.7}>
              <Icon name="sliders" size={20} />
            </TouchableOpacity>
          </View>
        </View>
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
