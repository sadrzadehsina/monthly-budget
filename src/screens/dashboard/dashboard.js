import React, { useEffect } from 'react';
import { StyleSheet, View } from 'react-native';
import {Text, List, FAB, Button, Appbar, Card, Paragraph} from 'react-native-paper';
import AsyncStorage from '@react-native-async-storage/async-storage';

import {AddWishDialog, WishItem, ChangeBudgetDialog} from '@Components';
import { toMoney, uniqueId } from '@Utils';

export const DashboardScreen = () => {

  const [visible, setVisible] = React.useState(false);
  const [visibleBudgetDialog, setVisibleBudgetDialog] = React.useState(false);

  const [items, setItems] = React.useState([]);
  const [budget, setBudget] = React.useState(1000);

  const showDialog = () => setVisible(true);
  const hideDialog = () => setVisible(false);

  const showBudgetDialog = () => setVisibleBudgetDialog(true);
  const hideBudgetDialog = () => setVisibleBudgetDialog(false);

  const updateItems = async() => {
    try {
      const wishes = await AsyncStorage.getItem('wishes');
      if (wishes) setItems(JSON.parse(wishes));
    } catch (error) {
      console.log('something went wrong', error);
    }
  };

  const updateBudget = async() => {
    try {
      const budget = await AsyncStorage.getItem('budget');
      if (budget) setBudget(budget);
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

  const changeBudget = async (budget) => {
    await AsyncStorage.setItem('budget', budget);
    updateBudget();
  };

  React.useEffect(() => {
    updateItems();
    updateBudget();
  }, []);

  const canBuy = remaining => cost => cost <= budget;

  const canBuyMore = canBuy(budget);

  return (
    <View style={styles.root}>
    
      <Appbar.Header>
        <Appbar.Content title="Wish List" />
      </Appbar.Header>

      <Card>
        <Card.Content>
          <Paragraph>You have <Text style={styles.budget}>{toMoney(budget)}</Text> in your wallet. Below is a list of your wishes. Those you can buy now is marked as green.</Paragraph>
        </Card.Content>
        <Card.Actions>
          <Button onPress={() => showBudgetDialog(true)}>Update</Button>
        </Card.Actions>
      </Card>

      <List.Section> 
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
      <ChangeBudgetDialog hideDialog={hideBudgetDialog} update={changeBudget} visible={visibleBudgetDialog} />
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
  budget: {
    fontWeight: 'bold',
  }
});

const list = StyleSheet.create({
  header: {
    fontSize: 24,
  },
});
