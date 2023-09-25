import React from 'react';
import {View, Text, Image, TouchableOpacity} from 'react-native';
import {styles} from './AssetButtonStyling';
import Icon from 'react-native-vector-icons/FontAwesome';

var hasImage = true;
const AssetButton = props => {
  if (typeof props.img === 'undefined') {
    hasImage = false;
  } else {
    hasImage = true;
  }
  return (
    <View>
      {hasImage ? (
        <View style={styles.container}>
          <View>
            <Image style={styles.image} source={props.img} />
          </View>
          <Text style={styles.textNonImage}> {props.text}</Text>
          <TouchableOpacity style={styles.buttonNonImage} activeOpacity={0.7}>
            <Icon name="plus" color="white" size={14} />
          </TouchableOpacity>
        </View>
      ) : (
        <View style={styles.container}>
          <TouchableOpacity style={styles.button} activeOpacity={0.7}>
            <Icon name="plus" color="white" size={25} />
          </TouchableOpacity>
          <Text style={styles.text}> {props.text}</Text>
        </View>
      )}
    </View>
  );
};
export default AssetButton;
