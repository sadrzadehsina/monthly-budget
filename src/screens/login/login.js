import React, { memo, useState, useEffect } from 'react';
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

const LoginScreen = ({ navigation }) => {
  
  const [phoneNumber, setPhoneNumber] = useState();
  const [code, setCode] = useState();

  const { login } = useAuth();

  const loginPressed = async () => {
    try {
      await login(phoneNumber);
      navigation.navigate('Confirm');
    } catch (error) {
      console.log('something went wrong', error);
    }
  };

  return (
    <Background>
      <BackButton goBack={() => navigation.navigate('Home')} />

      <Logo />

      <Header>Welcome back.</Header>

      <TextInput
        label="Phone Number"
        returnKeyType="next"
        value={phoneNumber}
        onChangeText={text => setPhoneNumber(text)}
        keyboardType="phone-pad"
      />

      <Button mode="contained" onPress={loginPressed}>
        Login
      </Button>

    </Background>
  );
};

export { LoginScreen };