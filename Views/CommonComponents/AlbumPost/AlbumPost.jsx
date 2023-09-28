import React from 'react';
import {View, Text, Image} from 'react-native';
import {styles} from './AlbumPostStyling';
const AlbumPost = props => {
  return (
    <View style={styles.container}>
      <View style={styles.topContainer}>
        <Text
          style={{
            marginHorizontal: '3%',
          }}>
          {props.data.id}
        </Text>
        <Text style={styles.text}>Album id: {props.data.albumId}</Text>
      </View>
      <View style={{padding: 10}}>
        <Text style={styles.title}>Title: {props.data.title}</Text>
        <Text style={styles.text}>URL: {props.data.url}</Text>
      </View>
      <Image
        source={{uri: props.data.thumbnailUrl}}
        style={{width: 400, height: 400}}
      />
    </View>
  );
};

export default AlbumPost;
