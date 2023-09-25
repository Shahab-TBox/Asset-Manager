import React, {useEffect} from 'react';
import {SafeAreaView, Text, View, FlatList} from 'react-native';
import SearchHeader from '../../CommonComponents/SearchHeader/SearchHeader';
import {styles} from './PostScreenStyling';
import {getPosts} from '../../../Models/API/Posts';
import Post from '../../CommonComponents/PostComponent/Post';
import {useSelector, useDispatch} from 'react-redux';
import {useState} from 'react';
import {savePosts, selectCurrentPage} from '../../../Redux/paginationSlice';

export default function PostScreen() {
  const dispatcher = useDispatch();
  useEffect(() => {
    getPosts().then(response => {
      dispatcher(
        savePosts({data: response.data, length: response.data.length}),
      );
    });
  }, [dispatcher]); // Include dispatcher as a dependency
  const currentPage = useSelector(state => state.pagination.currentPage);
  console.log(currentPage);
  // Calculate the starting index based on the current page
  const startingIndex = (currentPage - 1) * 10 + 1;

  const currentPageData = useSelector(state => {
    return state.pagination.data.slice(0, 9);
  });
  return (
    <SafeAreaView style={{backgroundColor: 'white'}}>
      <View style={styles.screen}>
        <SearchHeader ScreenName="Users" />
        <View style={styles.postList}>
          <FlatList
            data={currentPageData}
            renderItem={({item}) => <Post data={item} />}
            keyExtractor={item => item.id.toString()} // Add a unique key
          />
        </View>
      </View>
    </SafeAreaView>
  );
}
