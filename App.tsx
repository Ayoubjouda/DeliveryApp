import React, { useCallback } from "react";
import { StatusBar } from "expo-status-bar";
import { View } from "react-native";
import { CodeVerification, OnBoarding, SignUpIn, SplashScreen } from "screens";
import Navigation from "./src/navigation/Navigation";
import { useFonts } from "expo-font";
import * as Splashscreen from "expo-splash-screen";
import { GestureHandlerRootView } from "react-native-gesture-handler";

export default function App() {
  const [AvenirRoman] = useFonts({
    "Avenir-Roman": require("./assets/fonts/Avenir-Roman.ttf"),
  });
  const [AvenirHeavy] = useFonts({
    "Avenir-Heavy": require("./assets/fonts/Avenir-Heavy.ttf"),
  });
  const [AvenirMedium] = useFonts({
    "Avenir-Medium": require("./assets/fonts/Avenir-Medium.ttf"),
  });

  const onLayoutRootView = useCallback(async () => {
    if (AvenirRoman && AvenirHeavy && AvenirMedium) {
      await Splashscreen.hideAsync();
    }
  }, [AvenirRoman, AvenirHeavy, AvenirMedium]);

  if (!AvenirRoman || !AvenirHeavy || !AvenirMedium) {
    return null;
  }

  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <View className="flex-1 ">
        {/* <SplashScreen /> */}
        {/* <OnBoarding /> */}
        {/* <SignUpIn /> */}
        <Navigation />
        <StatusBar style="auto" />
      </View>
    </GestureHandlerRootView>
  );
}
