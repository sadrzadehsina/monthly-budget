import * as React from 'react';

import {
	Portal,
	Modal,
	Text,
} from 'react-native-paper';

export const AddWishDialog = ({ hideModal, visible }) => {
  return (
    <Portal>
      <Modal visible={visible} onDismiss={hideModal}>
        <Text>New Wish Modal</Text>
      </Modal>
    </Portal>
  );
};