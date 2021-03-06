import React from 'react';
import { StyleSheet, View } from 'react-native';
import {Text, List, FAB} from 'react-native-paper';
import AsyncStorage from '@react-native-async-storage/async-storage';

import {AddWishDialog, WishItem} from '@Components';
import { toMoney, uniqueId } from '@Utils';

export const DashboardScreen = () => {

  const [visible, setVisible] = React.useState(false);
  const [items, setItems] = React.useState([]);

  const showDialog = () => setVisible(true);
  const hideDialog = () => setVisible(false);

  const updateItems = async() => {
    try {
      const wishes = await AsyncStorage.getItem('wishes');
      if (wishes) setItems(JSON.parse(wishes));
    } catch (error) {
      console.log('something went wrong', error);
    }
  };

  const add = async ({title, budget}) => {
    const wish = { id: uniqueId(), title, budget };
    const newWishes = [ ...items, wish ];
    await AsyncStorage.setItem('wishes', JSON.stringify(newWishes));
    updateItems();
  };

  const remove = async (id) => {
    const wishes = await AsyncStorage.getItem('wishes');
    const remainingWishes = JSON.parse(wishes).filter(item => item.id !== id);
    await AsyncStorage.setItem('wishes', JSON.stringify(remainingWishes));
    updateItems();
  };

  const clear = async() => await AsyncStorage.clear();

  React.useEffect(() => {

    updateItems();

  }, []);

  const remaining = 1000;

  const canBuy = remaining => cost => cost <= remaining;

  const canBuyMore = canBuy(remaining);

  return (
    <View style={styles.root}>
      <List.Section>
        <List.Subheader style={list.header}>Wish List - {toMoney(remaining)}</List.Subheader>
        {
          (items.length === 0) ? (
            <List.Item title='No Available Wish' />
          ) : (
            items.map(item => (
              <WishItem 
                key={item.id}
                id={item.id}
                title={item.title}
                description={item.description}
                budget={toMoney(item.budget)}
                remove={remove}
                canBuy={canBuyMore(item.budget)}
              />
            ))
          )
        }
      </List.Section>
      <FAB style={styles.fab} small icon="plus" onPress={() => showDialog()} />
      <AddWishDialog hideDialog={hideDialog} add={add} visible={visible} />
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

const list = StyleSheet.create({
  header: {
    fontSize: 24,
  }
});
