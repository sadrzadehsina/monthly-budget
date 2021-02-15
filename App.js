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
  Text,
  List,
  FAB,
  Portal,
  Modal,
} from 'react-native-paper';

const NewWishModal = ({ hideModal, visible }) => {
  return (
    <Portal>
      <Modal visible={visible} onDismiss={hideModal}>
        <Text>New Wish Modal</Text>
      </Modal>
    </Portal>
  );
};

const WishesRoute = () => {
  const [visible, setVisible] = React.useState(false);

  const showModal = () => setVisible(true);
  const hideModal = () => setVisible(false);
  return (
    <View style={styles.root}>
      <List.Section>
        <List.Subheader>Wish List</List.Subheader>
        <List.Item
          title="Buy a Car"
          description="I want to buy a car"
          right={() => <Text>5k$</Text>}
        />
        <List.Item
          title="Buy a Car"
          description="I want to buy a car"
          right={() => <Text>5k$</Text>}
        />
        <List.Item
          title="Buy a Car"
          description="I want to buy a car"
          right={() => <Text>5k$</Text>}
        />
      </List.Section>
      <FAB
        style={styles.fab}
        small
        icon="plus"
        onPress={() => showModal()}
      />
      <NewWishModal hideModal={hideModal} visible={visible} />
    </View>
  );
};

const WishRoute = () => (
  <View>
    <Text>A Wish</Text>
  </View>
);

const SettingRoute = () => <Text>Setting</Text>;

const App = () => {
  const [index, setIndex] = React.useState(0);

  const [routes] = React.useState([
    {key: 'wishes', title: 'Wishes'},
    {key: 'setting', title: 'Setting'},
  ]);

  const renderScene = BottomNavigation.SceneMap({
    wishes: WishesRoute,
    setting: SettingRoute,
  });

  return (
    <BottomNavigation
      navigationState={{index, routes}}
      onIndexChange={setIndex}
      renderScene={renderScene}
    />
  );
};

const styles = StyleSheet.create({
  root: {
    flex: 1,
  },
  fab: {
    position: 'absolute',
    margin: 16,
    right: 0,
    bottom: 0,
  },
});

export default App;
