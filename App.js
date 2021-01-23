import { StatusBar } from 'expo-status-bar';
import React, { useEffect } from 'react';
import { StyleSheet, View } from 'react-native';
import { ThemeProvider, Text } from 'react-native-elements';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Parse from 'parse/react-native.js';
import AsyncStorage from '@react-native-async-storage/async-storage';

import theme from './src/theme';

import { MainStackNavigator } from './src/navigation';

Parse.setAsyncStorage(AsyncStorage);

Parse.initialize("123456");

Parse.serverURL = 'http://localhost:1337/parse';

export default function App() {

  return (
    <ThemeProvider theme={theme}>
      <NavigationContainer>
        <MainStackNavigator />
      </NavigationContainer>
    </ThemeProvider>
  );
};
