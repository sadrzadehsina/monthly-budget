import * as React from 'react';
import {
	View,
	StyleSheet,
} from 'react-native';
import { Text, List, FAB } from 'react-native-paper';
import { AddWishDialog } from '../components';

export const Wishes = () => {
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
      <FAB style={styles.fab} small icon="plus" onPress={() => showModal()} />
      <AddWishDialog hideModal={hideModal} visible={visible} />
    </View>
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