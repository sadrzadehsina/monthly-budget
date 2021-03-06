import React, { memo, useEffect, useState } from 'react';

import {
  Background,
  Logo,
  Header,
  Button,
  Paragraph,
} from '@Components';

import { Text } from 'react-native';

import { useAuth } from '@Core/hook';

const HomeScreen = ({ navigation }) => {

  const [user, setUser] = useState();
  const { onAuthStateChanged } = useAuth();

  const loginOrGoToDashboard = () => {
    if (user) navigation.navigate('Dashboard');
    else navigation.navigate('Login');
  };
  
  useEffect(() => {
    const subcriber = onAuthStateChanged(setUser);
    return subcriber;
  }, []);

  return (
    <Background>
      <Logo />
      <Header>WISH LIST</Header>

      <Paragraph>
        The easiest way track your wishes, and of course buy them!
      </Paragraph>
      <Button 
        mode="contained"
        onPress={loginOrGoToDashboard}
      >
        Try It! 
      </Button>
    </Background>
  )
};

export { HomeScreen };