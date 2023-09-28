import React, {useState, useEffect, useCallback} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {styles} from './AlbumScreenStyling';
import {ActivityIndicator, View} from 'react-native';
import {SafeAreaView} from 'react-native';
import SearchHeader from '../../CommonComponents/SearchHeader/SearchHeader';
import {FlatList} from 'react-native';
import {getAlbums} from '../../../Models/API/Photos';
import {saveAlbums, setPage} from '../../../Redux/albumSlice';
import AlbumPost from '../../CommonComponents/AlbumPost/AlbumPost';
import {RefreshControl} from 'react-native';

const AlbumScreen = () => {
  const [currentAlbums, setCurrentAlbums] = useState([]);
  const [itemsPerPage] = useState(10);
  const [startingIndex, setStartingIndex] = useState(-10);
  const dispatcher = useDispatch();
  const currentPage = useSelector(state => state.album.currentPage);
  const [refreshing, setRefreshing] = useState(false);

  const onRefresh = useCallback(() => {
    setRefreshing(true);
    dispatcher(setPage(1));
    setTimeout(() => {
      setRefreshing(false);
    }, 1000);
  }, [dispatcher]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await getAlbums();
        dispatcher(
          saveAlbums({data: response.data, length: response.data.length}),
        );
        setCurrentAlbums(response.data.slice(0, 10));
      } catch (error) {
        console.error('Error fetching albums:', error);
      }
    };
    fetchData();
  }, [dispatcher]);

  const album = useSelector(state => state.album.data);

  const getMoreAlbums = () => {
    const newStartingIndex = startingIndex + itemsPerPage;
    setStartingIndex(newStartingIndex);
    const newAlbums = album.slice(
      newStartingIndex,
      newStartingIndex + itemsPerPage,
    );
    setCurrentAlbums([...currentAlbums, ...newAlbums]);
  };

  return (
    <View style={{backgroundColor: 'white', flex: 1}}>
      <SafeAreaView style={{backgroundColor: 'white', flex: 1}}>
        <View
          style={{
            paddingHorizontal: '4%',
            backgroundColor: '#F4F4F4',
          }}>
          <SearchHeader ScreenName="Posts" />
          <View style={styles.albumList}>
            <FlatList
              data={currentAlbums}
              renderItem={({item}) => (
                <AlbumPost
                  data={item}
                  keyExtractor={item => item.id.toString()}
                />
              )}
              refreshControl={
                <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
              }
              ListFooterComponent={() =>
                refreshing ? null : (
                  <ActivityIndicator size="large" color="#aaa" />
                )
              }
              onEndReachedThreshold={0.1}
              // progressViewOffset={2}
              onEndReached={getMoreAlbums}
            />
          </View>
        </View>
      </SafeAreaView>
    </View>
  );
};

export default AlbumScreen;
