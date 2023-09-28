import React, {useEffect, useState} from 'react';
import {
  SafeAreaView,
  View,
  FlatList,
  Alert,
  Modal,
  Text,
  Pressable,
} from 'react-native';
import SearchHeader from '../../CommonComponents/SearchHeader/SearchHeader';
import {styles} from './PostScreenStyling';
import {getPosts} from '../../../Models/API/Posts';
import Post from '../../CommonComponents/PostComponent/Post';
import {useSelector, useDispatch} from 'react-redux';
import {savePosts, setPage} from '../../../Redux/paginationSlice';
import Pagination from '../../CommonComponents/Pagination/Pagination';

export default function PostScreen() {
  const dispatcher = useDispatch();
  const currentPage = useSelector(state => state.pagination.currentPage);

  useEffect(() => {
    getPosts().then(response => {
      dispatcher(
        savePosts({data: response.data, length: response.data.length}),
      );
    });
  }, [dispatcher]);

  const itemsPerPage = 10;
  const totalPosts = useSelector(state => state.pagination.data);
  const totalPages = Math.ceil(totalPosts.length / itemsPerPage);

  // Calculate the starting index based on the current page
  const startingIndex = (currentPage - 1) * itemsPerPage;

  const currentPageData = totalPosts.slice(
    startingIndex,
    startingIndex + itemsPerPage,
  );
  const [modalVisible, setModalVisible] = useState(false);

  return (
    <SafeAreaView style={{backgroundColor: 'white'}}>
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          Alert.alert('Modal has been closed.');
          setModalVisible(!modalVisible);
        }}>
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <Text style={styles.modalText}>Delete post with id: 69?</Text>
            <View style={styles.buttonContainer}>
              <Pressable
                style={[styles.button, styles.buttonClose]}
                onPress={() => setModalVisible(!modalVisible)}>
                <Text style={styles.textStyle}> Cancel</Text>
              </Pressable>
              <Pressable
                style={[styles.button, styles.buttonConfirm]}
                onPress={() => setModalVisible(!modalVisible)}>
                <Text style={styles.textStyle}>Hide Modal</Text>
              </Pressable>
            </View>
          </View>
        </View>
      </Modal>
      <View style={styles.screen}>
        <SearchHeader ScreenName="Users" />
        <View style={styles.postList}>
          <FlatList
            data={currentPageData}
            renderItem={({item}) => (
              <Post
                data={item}
                invokeModal={() => setModalVisible(!modalVisible)}
              />
            )}
            ListFooterComponent={
              <Pagination
                currentPage={currentPage}
                totalPages={totalPages}
                onPageChange={page => {
                  dispatcher(setPage(page));
                }}
              />
            }
            keyExtractor={item => item.id.toString()} // Add a unique key
          />
        </View>
      </View>
    </SafeAreaView>
  );
}
