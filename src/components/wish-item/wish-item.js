import * as React from 'react';
import { View, StyleSheet } from 'react-native';
import { List, Text, Button } from 'react-native-paper';

const ListItemLeft = ({ id, remove }) => {
	return (
		<View style={list.action}>
			<Button icon='trash-can-outline' mode='text' compact onPress={() => remove(id)} />
		</View>
	);
};

const ListItemRight = ({ budget }) => {
	return (
		<View style={list.budget}>
			<Text style={list.budgetText}>{budget}</Text>
		</View>
	)
};

export const WishItem = ({ id, title, description, budget, remove }) => {

	return (
		<List.Item
			title={title}
			description={description}
			style={list.item}
			titleStyle={list.title}
			left={() => <ListItemLeft id={id} remove={remove} />}
			right={() => <ListItemRight budget={budget} />}
		/>
	);

};

const list = StyleSheet.create({
	header: {
		fontSize: 24,
	},
  item: {
    backgroundColor: '#EEEEEE',
    marginVertical: 5,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
  },
	budget: {
		justifyContent: 'center',
	},
	budgetText: {
		fontSize: 18,
	},
	action: {
		justifyContent: 'center'	
	}
});