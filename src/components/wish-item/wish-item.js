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

export const WishItem = ({ id, title, description, budget, remove, canBuy }) => {

	return (
		<List.Item
			title={title}
			description={description}
			style={canBuy ? list.itemCanBuy : list.item}
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
    backgroundColor: '#f8f8f8',
    marginVertical: 5,
		shadowColor: "#000",
		shadowOffset: {
			width: 0,
			height: 2,
		},
		shadowOpacity: 0.25,
		shadowRadius: 3.84,
		elevation: 5,
  },
	itemCanBuy: {
		backgroundColor: '#DCEDC8',
		marginVertical: 5,
		shadowColor: "#000",
		shadowOffset: {
			width: 0,
			height: 2,
		},
		shadowOpacity: 0.25,
		shadowRadius: 3.84,
		elevation: 5,
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