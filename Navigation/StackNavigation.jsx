import React from 'react';

import {createNativeStackNavigator} from '@react-navigation/native-stack';
import TabNavigation from './TabNavigation';
import LoginScreen from '../Views/Screens/LoginScreen/LoginScreen';
const Stack = createNativeStackNavigator();
import {useSelector, useDispatch} from 'react-redux';

// const isAuthenticated = store.getState().auth.isAuthenticated;
// console.warn(store.getState());
// console.warn(isAuthenticated);
// var initialScreen = 'LoginScreen';
// if (isAuthenticated) {
//   initialScreen = 'HomeScreen';
// }

function StackNavigation() {
  const isAuthenticated = useSelector(state => state.auth.isAuthenticated);

  return (
    <Stack.Navigator>
      {isAuthenticated ? (
        <Stack.Screen
          name="HomeScreen"
          component={TabNavigation}
          options={{headerShown: false}}
        />
      ) : (
        <Stack.Screen
          name="LoginScreen"
          component={LoginScreen}
          options={{headerShown: false}}
        />
      )}
    </Stack.Navigator>
  );
}
export default StackNavigation;
