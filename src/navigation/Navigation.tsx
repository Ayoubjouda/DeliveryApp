import { View, Text } from "react-native";
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { CodeVerification, SignUpIn, OnBoarding } from "screens";
import { createStackNavigator } from "@react-navigation/stack";
import { RootStackParamList } from "src/utlis/types";
type Props = {};

const Stack = createStackNavigator<RootStackParamList>();

const Navigation = (props: Props) => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="OnBoarding"
        screenOptions={{
          headerShown: false,
        }}
      >
        <Stack.Screen name="OnBoarding" component={OnBoarding} />
        <Stack.Screen name="SignInUp" component={SignUpIn} />
        <Stack.Screen name="CodeVerification" component={CodeVerification} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigation;
