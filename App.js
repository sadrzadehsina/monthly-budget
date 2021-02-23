/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import { HomeScreen } from './src/screens';

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>

      <Stack.Navigator headerMode="none">
        <Stack.Screen name='Home' component={HomeScreen}/>
      </Stack.Navigator>
      
    </NavigationContainer>
  )
};

export default App;
