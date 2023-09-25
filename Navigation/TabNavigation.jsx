import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import React from 'react';
import {Text} from 'react-native';
import HomeScreen from '../Views/Screens/HomeScreen/HomeScreen';
import AssetsScreen from '../Views/Screens/AssetsScreen/AssetsScreen';
import Icon from 'react-native-vector-icons/FontAwesome';

import PostScreen from '../Views/Screens/PostScreen/PostScreen';

export default function TabNavigation() {
  const Tab = createBottomTabNavigator();
  return (
    <Tab.Navigator
      initialRouteName="Home"
      screenOptions={({route}) => ({
        tabBarIcon: ({color, size}) => {
          let iconName;

          if (route.name === 'Home') {
            iconName = 'home';
          } else if (route.name === 'Assets') {
            iconName = 'desktop';
          } else if (route.name === 'Posts') {
            iconName = 'users';
          }

          // Use the '#B00814' color for both icons and labels
          return <Icon name={iconName} size={size} color={color} />;
        },
        // Set label color
        tabBarActiveTintColor: '#B00814', // Set active icon color
        tabBarInactiveTintColor: 'gray', // Set inactive icon color
      })}>
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          headerShown: false,
          tabBarLabel: 'Home',
        }}
      />
      <Tab.Screen
        name="Assets"
        component={AssetsScreen}
        options={{
          headerShown: false,
          tabBarLabel: 'Assets',
        }}
      />
      <Tab.Screen
        name="Posts"
        component={PostScreen}
        options={{
          headerShown: false,
          tabBarLabel: 'Posts',
        }}
      />
    </Tab.Navigator>
  );
}
