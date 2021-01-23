import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, View } from 'react-native';
import { ThemeProvider, Text } from 'react-native-elements';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import theme from './src/theme';

import { MainStackNavigator } from './src/navigation';

const Stack = createStackNavigator();

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <NavigationContainer>
        <MainStackNavigator />
      </NavigationContainer>
    </ThemeProvider>
  );
};
