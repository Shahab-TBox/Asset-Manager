/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import {NavigationContainer} from '@react-navigation/native';
import DrawerNavigation from './Navigation/DrawerNavigation';
import React from 'react';

import StackNavigation from './Navigation/StackNavigation';

function App(): JSX.Element {
  return (
    <NavigationContainer>
      <StackNavigation />
      {/* <DrawerNavigation /> */}
    </NavigationContainer>
  );
}

export default App;
