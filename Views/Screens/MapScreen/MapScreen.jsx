import React, {useState, useRef} from 'react';
import {
  View,
  StyleSheet,
  Pressable,
  Text,
  Platform,
  Animated,
  Image,
} from 'react-native';
import {
  Marker,
  AnimatedRegion,
  animateMarkerToCoordinate,
} from 'react-native-maps';
import MapView from 'react-native-map-clustering';
import {useEffect} from 'react';
import {zoomIn, zoomOut} from '../../../Redux/mapSlice';
import {useSelector, useDispatch} from 'react-redux';
import {styles} from './MapScreenStyling';
import {setCurrentRegion, setCurrentZoomLevel} from '../../../Redux/mapSlice';
// import Geolocation from '@react-native-community/geolocation';
// import {request, PERMISSIONS} from 'react-native-permissions';
const MapScreen = () => {
  // const requestLocationPermission = async () => {
  //   if (Platform.OS === 'android') {
  //     var response = await request(PERMISSIONS.ANDROID.ACCESS_FINE_LOCATION);
  //     if (response === 'granted') {
  //       locateCurrentPosition();
  //     }
  //   } else {
  //     var response = await request(PERMISSIONS.IOS.LOCATION_WHEN_IN_USE);
  //     if (response === 'granted') {
  //       locateCurrentPosition();
  //     }
  //   }
  // };

  // const locateCurrentPosition = () => {
  //   Geolocation.getCurrentPosition(position => {
  //     console.log(JSON.stringify(position));
  //   });
  // };

  const animateMarkerToCoordinate = (newCoordinate, duration) => {
    if (markerRef.current) {
      Animated.timing(markerRef.current, {
        toValue: newCoordinate,
        duration: duration,
        useNativeDriver: false,
      }).start();
    }
  };

  const mapRef = useRef(null);
  const markerRef = useRef(null);
  // const {latitude, longitude, latitudeDelta, longitudeDelta} = useSelector(
  //   state => state.map,
  // );
  const [state, setState] = useState({
    latitude: 31.5007,
    longitude: 74.3301,
    latitudeDelta: 0.9222,
    longitudeDelta: 0.043,
  });

  const [vehicleState, setVehicleState] = useState({
    curLoc: {latitude: 30.7046, longitude: 77.1025},
    destinationCords: {},
    coordinate: new AnimatedRegion({
      latitude: 30.7046,
      longitude: 77.1025,
      latitudeDelta: 0.9222,
      longitudeDelta: 0.043,
    }),
  });
  useEffect(() => {
    const interval = setInterval(() => {
      setVehicleState(vehicleState);
    }, 5000);
  });
  const [markerState, setMarkerState] = useState({
    markerLatitude: null,
    markerLongitude: null,
  });
  const {markerLatitude, markerLongitude} = markerState;

  const {latitude, longitude, latitudeDelta, longitudeDelta} = state;
  useEffect(() => {
    console.log(latitude, longitude, latitudeDelta, longitudeDelta);
  }, []);
  const dummyPlacesData = [
    {
      id: 1,
      name: 'Hotel',
      latitude: 31.5208,
      longitude: 74.359,
    },
    {
      id: 2,
      name: 'Hotel',
      latitude: 31.5211,
      longitude: 74.359,
    },
    {
      id: 3,
      name: 'Hotel',
      latitude: 31.5208,
      longitude: 74.3513,
    },
    {
      id: 4,
      name: 'Hotel',
      latitude: 31.5213,
      longitude: 74.3513,
    },
    {
      id: 5,
      name: 'Hotel',
      latitude: 31.5217,
      longitude: 74.3513,
    },
    {
      id: 6,
      name: 'Hotel',
      latitude: 31.522,
      longitude: 74.3513,
    },
    {
      id: 7,
      name: 'Hotel',
      latitude: 31.5217,
      longitude: 74.3516,
    },
    {
      id: 8,
      name: 'Hotel',
      latitude: 31.522,
      longitude: 74.3516,
    },
  ];

  const [source, setSource] = useState({
    latitude: 31.6969,
    longitude: 74.4516,
  });
  const [destination, setDestination] = useState({
    latitude: 31.794049,
    longitude: 74.7688,
  });
  useEffect(() => {
    animateMarkerToCoordinate(destination, 5000);
  }, [destination]);

  const dispatcher = useDispatch();
  const [zoomLevel, setZoomLevel] = useState({
    latitudeD: 0.0922,
    longitudeD: 0.0421,
  });
  const handleDrag = e => {
    const newLatitude = e.nativeEvent.coordinate.latitude;
    const newLongitude = e.nativeEvent.coordinate.longitude;

    dispatcher(
      setCurrentRegion({latitude: newLatitude, longitude: newLongitude}),
    );
    // if (Platform.OS == 'android') {
    //   if (markerRef.current) {
    //     markerRef.current.animateMarkerToCoordinate(
    //       {
    //         newLatitude,
    //         newLongitude,
    //       },
    //       4000,
    //     );
    //   }
    // }
  };

  const handleRegionChange = e => {
    setState({
      latitude: e.latitude,
      longitude: e.longitude,
      latitudeDelta: latitudeDelta,
      longitudeDelta: longitudeDelta,
    });
    dispatcher(
      setCurrentZoomLevel({
        latitudeDelta: e.latitudeDelta,
        longitudeDelta: e.longitudeDelta,
      }),
      setCurrentRegion({
        latitude: e.latitude,
        longitude: e.longitude,
      }),
    );
  };

  const handleZoomIn = () => {
    setState(prevState => ({
      ...prevState,
      longitudeDelta: Math.max(
        0.0001,
        prevState.longitudeDelta - 0.5 * prevState.longitudeDelta,
      ),
      latitudeDelta: Math.max(
        0.0001,
        prevState.latitudeDelta - 0.5 * prevState.latitudeDelta,
      ),
    }));
    dispatcher(zoomIn());
    mapRef.current.animateToRegion({
      latitude: latitude,
      longitude: longitude,
      latitudeDelta: latitudeDelta,
      longitudeDelta: longitudeDelta,
    });
  };
  const handleZoomOut = () => {
    setState(prevState => ({
      ...prevState,
      longitudeDelta: Math.min(
        30,
        prevState.longitudeDelta + 0.5 * prevState.longitudeDelta,
      ),
      latitudeDelta: Math.min(
        30,
        prevState.latitudeDelta + 0.5 * prevState.latitudeDelta,
      ),
    }));
    dispatcher(zoomOut());
    mapRef.current.animateToRegion({
      latitude: latitude,
      longitude: longitude,
      latitudeDelta: latitudeDelta,
      longitudeDelta: longitudeDelta,
    });
  };
  return (
    <View style={styles.container}>
      <MapView
        ref={mapRef}
        style={styles.map}
        initialRegion={{
          latitude: useSelector(state => state.map.latitude),
          longitude: useSelector(state => state.map.longitude),
          latitudeDelta: useSelector(state => state.map.latitudeDelta),
          longitudeDelta: useSelector(state => state.map.longitudeDelta),
        }}
        clusterColor="#B00814"
        showsZoomControls={true}
        showsUserLocation={true}
        provider="google"
        showsCompass={true}
        loadingEnabled={true}
        showsMyLocationButton={true}
        onRegionChangeComplete={handleRegionChange}
        onPress={coord =>
          setMarkerState({
            latitude: coord.nativeEvent.coordinate.latitude,
            longitude: coord.nativeEvent.coordinate.longitude,
          })
        }>
        <Marker
          coordinate={source}
          title="Selected Location"
          description=""
          onDragEnd={handleDrag}
          pinColor="blue"
          draggable
        />
        <Marker coordinate={destination} pinColor="teal" />
        <Marker.Animated
          ref={markerRef}
          coordinate={useRef(new AnimatedRegion(destination)).current}
          pinColor="green">
          <Image
            source={require('../../../assets/images/Oval.png')} // Provide the path to your marker image
            style={{width: 50, height: 50}} // Adjust the width and height of the marker image
          />
        </Marker.Animated>

        {dummyPlacesData.map(place => (
          <Marker
            coordinate={{
              latitude: place.latitude,
              longitude: place.longitude,
            }}
          />
        ))}
      </MapView>
      {Platform.OS === 'ios' ? (
        <>
          <Pressable
            style={styles.zoomButtonPlus}
            onPress={handleZoomIn}
            disabled={
              zoomLevel.latitudeD === 0.01 && zoomLevel.longitudeD === 0.1
            }>
            <Text style={styles.zoomButtonText}>+</Text>
          </Pressable>
          <Pressable style={styles.zoomButtonMinus} onPress={handleZoomOut}>
            <Text style={styles.zoomButtonText}>-</Text>
          </Pressable>
        </>
      ) : null}
    </View>
  );
};
export default MapScreen;
