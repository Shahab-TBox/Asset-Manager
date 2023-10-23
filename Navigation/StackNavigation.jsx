import React from 'react';

import {createNativeStackNavigator} from '@react-navigation/native-stack';
import TabNavigation from './TabNavigation';
const Stack = createNativeStackNavigator();
import {useSelector, useDispatch} from 'react-redux';
import DrawerNavigation from './DrawerNavigation';
import AuthScreen from '../Views/Screens/AuthScreen/AuthScreen';
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
      {isAuthenticated === 'true' ? (
        <Stack.Screen
          name="HomeScreen"
          component={TabNavigation}
          options={{headerShown: false}}
        />
      ) : (
        <Stack.Screen
          name="AuthScreen"
          component={AuthScreen}
          options={{headerShown: false}}
        />
      )}
    </Stack.Navigator>
  );
}
export default StackNavigation;
