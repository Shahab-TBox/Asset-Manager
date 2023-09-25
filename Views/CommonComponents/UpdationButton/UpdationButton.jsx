import React from 'react';
import {Text, View, Image, TouchableOpacity} from 'react-native';
import {styles} from './UpdationStyling';
import Icon from 'react-native-vector-icons/FontAwesome';
var hasImage = true;
export default function UpdationButton(props) {
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
          <TouchableOpacity style={styles.button} activeOpacity={0.7}>
            <Icon name="pencil" size={20} />
          </TouchableOpacity>
          <View style={styles.textContainer}>
            <Text style={styles.simpleText}>Update </Text>
            <Text style={styles.text}>{props.text}</Text>
          </View>
        </View>
      ) : (
        <View style={styles.container}>
          <TouchableOpacity style={styles.nonImageButton} activeOpacity={0.7}>
            <Icon name="pencil" size={25} />
          </TouchableOpacity>
          <Text style={styles.text}> {props.text}</Text>
        </View>
      )}
    </View>
  );
}
