import React, { memo } from 'react';

import {
  Background,
  Logo,
  Header,
  Button,
  Paragraph,
} from '@Components';

import { Text } from 'react-native';

const HomeScreen = ({ navigation }) => (
  <Background>
    <Logo />
    <Header>WISH LIST</Header>

    <Paragraph>
      The easiest way track your wishes, and of course buy them!
    </Paragraph>
    <Button 
      mode="contained"
      onPress={() => navigation.navigate('Login')}
    >
      Try It! 
    </Button>
  </Background>
);

export { HomeScreen };