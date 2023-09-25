import React from 'react';
import {Image, Text, TouchableOpacity, View} from 'react-native';
import {styles} from './AssetItemStyling';
export default function AssetItem(props) {
  return (
    <View style={styles.container}>
      <Image style={styles.image} source={props.imgPath} />
      <View style={styles.details}>
        <Text style={styles.type}>{props.type}</Text>
        <Text style={styles.title}>{props.name}</Text>
        <Text style={styles.id}>{props.id}</Text>
      </View>
      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>...</Text>
      </TouchableOpacity>
    </View>
  );
}
