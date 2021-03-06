import * as React from 'react';
import { StyleSheet } from 'react-native';

import {
	Portal, 
	Dialog, 
	Text, 
	TextInput, 
	Button,
  HelperText
} from 'react-native-paper';

export const AddWishDialog = ({ hideDialog, add, visible }) => {

  const [title, setTitle] = React.useState('');
  const [budget, setBudget] = React.useState('');
  const [hasError, setHasError] = React.useState(false);

  const containerStyle = {backgroundColor: 'white', padding: 20};
	
  const reset = () => {
    setTitle('');
    setBudget('');
    setHasError(false);
  };

	const hideAndAdd = () => {
    if (title === '' || budget === '') {
      setHasError(true);
      return;
    };
		add({ title, budget });
    reset();
		hideDialog();
	};

  const hide = () => {
    reset();
    hideDialog();
  };

  return (
    <Portal>
      <Dialog visible={visible} onDismiss={hideDialog}>
        <Dialog.Title>Add New Wish</Dialog.Title>
        <Dialog.Content>
          <TextInput
            keyboardType="default"
            label="Title"
            value={title}
						style={styles.input}
            onChangeText={(text) => setTitle(text)}
          />
          <TextInput
            keyboardType="number-pad"
            label="Budget"
            value={budget}
            onChangeText={(text) => setBudget(text)}
          />
          <HelperText type="error" visible={hasError}>
            Both title and budget are required
          </HelperText>
        </Dialog.Content>
				<Dialog.Actions>
          <Button onPress={hide}>Cancel</Button>
					<Button onPress={hideAndAdd}>Add</Button>
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
