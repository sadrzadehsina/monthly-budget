import React, { memo, useState } from 'react';
import { TouchableOpacity, StyleSheet, Text, View } from 'react-native';

import { theme } from '@Core';
import {
	Background,
	Logo,
	Header,
	Button,
	TextInput,
	BackButton
} from '@Components';
import { useAuth } from '@Core/hook';

const ConfirmScreen = ({ navigation }) => {

  const [code, setCode] = useState();

  const { confirm } = useAuth();

  const verifyPressed = async () => {
    try {
      const response = await confirm(code);
      console.log(response);
    } catch(error) {
      console.log('something went wrong', error);
    }
  };

  return (
    <Background>

      <Logo />

      <Header>Welcome back.</Header>

      <TextInput
        label="Confirm Code"
        returnKeyType="next"
        value={code}
        onChangeText={text => setCode(text)}
        keyboardType="number-pad"
      />

      <Button mode="contained" onPress={verifyPressed}>
        Verify 
      </Button>

    </Background>
  );
};

export { ConfirmScreen };