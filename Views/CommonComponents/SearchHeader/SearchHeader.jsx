import React from 'react';
import {View, Text, TouchableOpacity, TextInput, Pressable} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import {styles} from './SearchHeaderStyling';
import {useDispatch} from 'react-redux';
import {logout} from '../../../Redux/authSlice';
export default function SearchHeader(props) {
  const dispatcher = useDispatch();

  return (
    <View style={styles.header}>
      <View style={styles.headerTextContainer}>
        <Text style={styles.headerText}>
          {props.ScreenName}{' '}
          {props.number ? (
            <Text style={styles.count}>({props.number})</Text>
          ) : (
            <View></View>
          )}
        </Text>
        <Pressable
          onPress={() => {
            dispatcher(logout());
          }}>
          <Icon name="sign-out" size={24} />
        </Pressable>
      </View>
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
  );
}
