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
import { 
  HomeScreen, 
  LoginScreen, 
  ConfirmScreen,
  DashboardScreen,
} from '@Screens';

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>

      <Stack.Navigator headerMode='none' initialRouteName='Home'>
        <Stack.Screen name='Home' component={HomeScreen}/>
        <Stack.Screen name='Login' component={LoginScreen}/>
        <Stack.Screen name='Confirm' component={ConfirmScreen}/>
        <Stack.Screen name='Dashboard' component={DashboardScreen} />
      </Stack.Navigator>
      
    </NavigationContainer>
  )
};

export default App;
