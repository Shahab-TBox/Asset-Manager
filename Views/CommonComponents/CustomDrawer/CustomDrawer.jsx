import React from 'react';
import {View, Text, Image, Pressable} from 'react-native';
import {logout} from '../../../Redux/authSlice';
import {useDispatch} from 'react-redux';
import Icon from 'react-native-vector-icons/FontAwesome';
import {DrawerContentScrollView, DrawerItem} from '@react-navigation/drawer';

const CustomDrawer = ({navigation}) => {
  const dispatcher = useDispatch();

  return (
    <DrawerContentScrollView>
      <DrawerItem
        label="Check Location"
        icon={({color, size}) => (
          <Icon name="map" size={size} color="#B00814" />
        )}
        onPress={() => {
          navigation.navigate('MapScreen'); // Navigate to the 'MapScreen' when pressed
        }}
      />
      <DrawerItem
        label="Home"
        icon={({color, size}) => <Icon name="home" color="#B00814" size={24} />}
        onPress={() => {
          navigation.navigate('Home');
        }}
      />

      <DrawerItem
        label="Logout"
        icon={({color, size}) => (
          <Icon name="sign-out" color="#B00814" size={24} />
        )}
        onPress={() => {
          dispatcher(logout());
        }}
      />
    </DrawerContentScrollView>
  );
};

export default CustomDrawer;
