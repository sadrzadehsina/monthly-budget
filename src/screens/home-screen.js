import React, { memo } from 'react';
import { Background } from '../components/background';
import { Logo } from '../components/logo';
import { Header } from '../components/header';
import { Button } from '../components/button';
import { Paragraph } from '../components/paragraph';

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