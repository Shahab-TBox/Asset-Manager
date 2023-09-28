import React from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';
import {useState} from 'react';
import {View, Text, Pressable, Modal, Alert} from 'react-native';
import {styles} from './PostStyling';
const Post = props => {
  return (
    <View style={styles.container}>
      <View style={styles.topContainer}>
        <Text style={styles.text}>id: {props.data.id}</Text>
        <View style={styles.icons}>
          <Pressable style={styles.pressableIcon} onPress={props.invokeModal}>
            <Icon name="trash" color="#B00814" size={20} />
          </Pressable>
          <Pressable style={styles.pressableIcon}>
            <Icon name="pencil" size={20} />
          </Pressable>
        </View>
      </View>
      <View style={styles.line}></View>
      <Text style={styles.text}>User Id: {props.data.userId}</Text>
      <Text style={styles.title}>{props.data.title}</Text>
      <Text style={styles.body} ellipsizeMode="tail" numberOfLines={5}>
        {props.data.body}
      </Text>
    </View>
  );
};

export default Post;
