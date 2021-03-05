import * as React from 'react';
import { View, StyleSheet } from 'react-native';
import { List, Text } from 'react-native-paper';

export const WishItem = ({ title, description, budget }) => {

	return (
		<List.Item
			title={title}
			description={description}
			style={list.item}
			titleStyle={list.title}
			right={() => <View style={list.budget}><Text style={list.budgetText}>{budget}</Text></View>}
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
		flex: 1,
		justifyContent: 'center',
		alignContent: 'flex-end',
		alignItems: 'flex-end'
	},
	budgetText: {
		fontSize: 18,
	}
});