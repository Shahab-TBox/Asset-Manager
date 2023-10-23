import React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import HomeScreen from '../Views/Screens/HomeScreen/HomeScreen';
import {useSelector} from 'react-redux';
import LoginScreen from '../Views/Screens/LoginScreen/LoginScreen';
import CustomDrawer from '../Views/CommonComponents/CustomDrawer/CustomDrawer';
import StackNavigation from './StackNavigation';
import MapScreen from '../Views/Screens/MapScreen/MapScreen';

const Drawer = createDrawerNavigator();

const DrawerNavigation = () => {
  const isAuthenticated = useSelector(state => state.auth.isAuthenticated);

  return (
    <Drawer.Navigator
      initialRouteName="Stack"
      screenOptions={{headerShown: false}}
      drawerContent={({navigation}) => (
        <CustomDrawer navigation={navigation} />
      )}>
      <Drawer.Screen name="Stack" component={StackNavigation} />
      <Drawer.Screen name="MapScreen" component={MapScreen} />
    </Drawer.Navigator>
  );
};

export default DrawerNavigation;
