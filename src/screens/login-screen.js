import React, { memo, useState } from 'react';
import { TouchableOpacity, StyleSheet, Text, View } from 'react-native';
import { Background } from '../components/background';
import { Logo } from '../components/logo';
import { Header } from '../components/header';
import { Button } from '../components/button';
import { TextInput } from '../components/text-input';
import { BackButton } from '../components/back-button';
import { theme } from '../core/theme';

const LoginScreen = ({ navigation }) => {
  
  const [phone, setPhone] = useState({ value: '', error: '' });

  const _onLoginPressed = () => {
    // do login and redirect to dashboard
  };

  return (
    <Background>
      <BackButton goBack={() => navigation.navigate('Home')} />

      <Logo />

      <Header>Welcome back.</Header>

      <TextInput
        label="Phone Number"
        returnKeyType="next"
        value={phone.value}
        onChangeText={text => setPhone({ value: text, error: '' })}
        error={!!phone.error}
        errorText={phone.error}
        autoCapitalize="none"
        textContentType="emailAddress"
        keyboardType="phone-pad"
      />

      <Button mode="contained" onPress={_onLoginPressed}>
        Login
      </Button>

    </Background>
  );
};

export { LoginScreen };