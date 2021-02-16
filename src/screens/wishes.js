import * as React from 'react';
import {View, StyleSheet} from 'react-native';
import {Text, List, FAB} from 'react-native-paper';
import {AddWishDialog} from '../components';

export const Wishes = () => {
  const [visible, setVisible] = React.useState(false);

  const showDialog = () => setVisible(true);
  const hideDialog = () => setVisible(false);

  const add = ({title, budget}) => {
    console.log(title, budget);
  };

  return (
    <View style={styles.root}>
      <List.Section>
				<List.Subheader style={list.header}>Wish List</List.Subheader>
        <List.Item
          title="Buy a Car"
          description="I want to buy a car"
          style={list.item}
          titleStyle={list.title}
          right={() => <View style={list.budget}><Text style={list.budgetText}>5k$</Text></View>}
        />
        <List.Item
          title="Buy a Car"
          description="I want to buy a car"
          titleStyle={list.title}
          style={list.item}
					right={() => <View style={list.budget}><Text style={list.budgetText}>5k$</Text></View>}
        />
        <List.Item
          title="Buy a Car"
          description="I want to buy a car"
          titleStyle={list.title}
          style={list.item}
					right={() => <View style={list.budget}><Text style={list.budgetText}>5k$</Text></View>}
        />
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
  item: {
    backgroundColor: '#EEEEEE',
    marginVertical: 5,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
  },
	budget: {
		flex: 1,
		justifyContent: 'center',
		alignContent: 'flex-end',
		alignItems: 'flex-end'
	},
	budgetText: {
		fontSize: 24,
	}
});
