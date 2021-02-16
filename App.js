/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {View, StyleSheet} from 'react-native';
import {
  BottomNavigation,
} from 'react-native-paper';

import { Wishes, Setting } from './src/screens';

const App = () => {
  const [index, setIndex] = React.useState(0);

  const [routes] = React.useState([
    {key: 'wishes', title: 'Wishes'},
    {key: 'setting', title: 'Setting'},
  ]);

  const renderScene = BottomNavigation.SceneMap({
    wishes: Wishes,
    setting: Setting,
  });

  return (
    <BottomNavigation
      navigationState={{index, routes}}
      onIndexChange={setIndex}
      renderScene={renderScene}
    />
  );
};

export default App;
