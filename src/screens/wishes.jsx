import * as React from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {View, StyleSheet} from 'react-native';
import {Text, List, FAB} from 'react-native-paper';
import {AddWishDialog, WishItem} from '../components';

export const Wishes = () => {

  const [visible, setVisible] = React.useState(false);
  const [items, setItems] = React.useState([]);

  const showDialog = () => setVisible(true);
  const hideDialog = () => setVisible(false);

  const updateItems = async() => {

    const wishes = await AsyncStorage.getItem('wishes');
    if (wishes) setItems(JSON.parse(wishes));

  };

  const add = async ({title, budget}) => {
    // save to async storage
    const wish = { title, budget };
    const newWishes = [ ...items, wish ];
    await AsyncStorage.setItem('wishes', JSON.stringify(newWishes));
    updateItems();
  };

  React.useEffect(() => {

    updateItems();

  }, []);

  return (
    <View style={styles.root}>
      <List.Section>
        <List.Subheader style={list.header}>Wish List</List.Subheader>
        {
          (items.length === 0) ? (
            <List.Item title='No Available Wish' />
          ) : (
            items.map(item => (
              <WishItem 
                key={item.title.toLowerCase().split(' ').join('-')}
                title={item.title}
                description={item.description}
                budget={item.budget}
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
  },
});
