/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import React from 'react';

import StackNavigation from './modules/mainStack/StackNavigation';
import {NavigationContainer} from '@react-navigation/native';
import 'react-native-gesture-handler';
import {LogBox} from 'react-native';
import {SafeAreaProvider} from 'react-native-safe-area-context';

const App = () => {
  LogBox.ignoreLogs([
    "[react-native-gesture-handler] Seems like you're using an old API with gesture components, check out new Gestures system!",
  ]);
  return (
    <NavigationContainer>
      <SafeAreaProvider>
        <StackNavigation />
      </SafeAreaProvider>
    </NavigationContainer>
  );
};

export default App;
