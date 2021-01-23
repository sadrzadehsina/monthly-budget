import * as React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { Home } from "../screens";

const MainStack = createStackNavigator();

const image = { uri: "/assets/background.png" };

const MainStackNavigator = () => {
  return (
    <MainStack.Navigator initialRouteName="Home">
      <MainStack.Screen
        name="Home"
        component={Home}
        options={{ headerShown: false }}
      />
    </MainStack.Navigator>
  );
};

export { MainStackNavigator };
