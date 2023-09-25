import React from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import {styles} from './NavbarStyling';
export default function Navbar({navigation}) {
  return (
    <View style={styles.navContainer}>
      <View>
        <TouchableOpacity onPress={() => navigation.navigate('Home')}>
          <Text>Home</Text>
        </TouchableOpacity>
      </View>
      <View>
        <TouchableOpacity onPress={() => navigation.navigate('Assets')}>
          <Text>Assets</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
