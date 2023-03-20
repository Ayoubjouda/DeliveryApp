import { View, Text } from "react-native";
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { CodeVerification, SignUpIn, OnBoarding, CodeConfirmation, Home, Notification, TrackingScreen } from "screens";
import { createStackNavigator } from "@react-navigation/stack";
import { RootStackParamList } from "src/utils/types";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons } from "@expo/vector-icons";
type Props = {};

const Stack = createStackNavigator<RootStackParamList>();

const TabNavigation = () => {
  const Tab = createBottomTabNavigator();
  return (
    <Tab.Navigator
      initialRouteName="Home"
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName: "home" | "home-outline" | "ios-list" | "ios-list-outline" = "home";

          if (route.name === "Home") {
            iconName = focused ? "home" : "home-outline";
          } else if (route.name === "Settings") {
            iconName = focused ? "ios-list" : "ios-list-outline";
          }

          // You can return any component that you like here!
          return <Ionicons name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: "tomato",
        tabBarInactiveTintColor: "gray",
        headerShown: false,
      })}
    >
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen name="Settings" component={Home} />
    </Tab.Navigator>
  );
};

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
        <Stack.Screen name="Home" component={TabNavigation} />
        <Stack.Screen name="Notification" component={TrackingScreen} />
        <Stack.Screen name="Tracking" component={TrackingScreen} />
        <Stack.Group screenOptions={{ presentation: "transparentModal" }}>
          <Stack.Screen name="CodeConfirmation" component={CodeConfirmation} />
        </Stack.Group>
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigation;
