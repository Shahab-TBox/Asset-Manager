import React from 'react';
import {Text, View, Image, TouchableOpacity} from 'react-native';
import {styles} from './ScannerStyling';
import Icon from 'react-native-vector-icons/FontAwesome';
export default function ScannerButton(props) {
  return (
    <View style={styles.container}>
      <View>
        <Image style={styles.image} source={props.img} />
      </View>
      <TouchableOpacity style={styles.button} activeOpacity={0.7}>
        <Icon name="search" color="gray" size={20} />
      </TouchableOpacity>
      <View style={styles.textContainer}>
        <Text style={styles.simpleText}>SCAN </Text>
        <Text style={styles.text}>{props.text}</Text>
      </View>
    </View>
  );
}
