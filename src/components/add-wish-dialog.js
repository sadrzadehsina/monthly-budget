import * as React from 'react';
import { StyleSheet } from 'react-native';

import {
	Portal, 
	Dialog, 
	Text, 
	TextInput, 
	Button
} from 'react-native-paper';

export const AddWishDialog = ({ hideDialog, add, visible }) => {
  const [title, setTitle] = React.useState('');
  const [budget, setBudget] = React.useState(0);

  const containerStyle = {backgroundColor: 'white', padding: 20};
	
	const hideAndAdd = () => {
		add({ title, budget });
		hideDialog();
	};

  return (
    <Portal>
      <Dialog visible={visible} onDismiss={hideDialog}>
        <Dialog.Title>Add New Wish</Dialog.Title>
        <Dialog.Content>
          <TextInput
            label="Title"
            value={title}
						style={styles.input}
            onChangeText={(text) => setTitle(text)}
          />
          <TextInput
            label="Budget"
            value={budget}
            onChangeText={(text) => setBudget(text)}
          />
        </Dialog.Content>
				<Dialog.Actions>
					<Button onPress={hideAndAdd}>Done</Button>
				</Dialog.Actions>
      </Dialog>
    </Portal>
  );
};

const styles = StyleSheet.create({
	input: {
		marginVertical: 10
	}
})
