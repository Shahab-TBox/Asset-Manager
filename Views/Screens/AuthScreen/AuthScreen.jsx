import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import LoginScreen from '../LoginScreen/LoginScreen';
import SignupScreen from '../SignupScreen/SignupScreen';
import React from 'react';

const Tab = createBottomTabNavigator();

const AuthScreen = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: '#B00814',
        tabBarInactiveTintColor: 'gray',
        tabBarStyle: {
          position: 'absolute',
          top: 90,
          borderRadius: 12,
          left: 0,
          right: 0,
          width: '90%',
          alignSelf: 'center',
          marginHorizontal: '5%',
        },
      }}>
      <Tab.Screen
        name="Login"
        component={LoginScreen}
        options={{tabBarIcon: null}}
      />
      <Tab.Screen
        name="Sign up "
        component={SignupScreen}
        options={{
          tabBarIcon: null,
        }}
      />
    </Tab.Navigator>
  );
};
export default AuthScreen;
