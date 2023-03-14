import React, { useCallback } from "react";
import { StatusBar } from "expo-status-bar";
import { View } from "react-native";
import SplashScreen from "./src/screens/Splashscreen";
import OnBoarding from "./src/screens/OnBoarding";
import { useFonts } from "expo-font";
import * as Splashscreen from "expo-splash-screen";

export default function App() {
  const [AvenirRoman] = useFonts({
    "Avenir-Roman": require("./assets/fonts/Avenir-Roman.ttf"),
  });
  const [AvenirHeavy] = useFonts({
    "Avenir-Heavy": require("./assets/fonts/Avenir-Heavy.ttf"),
  });

  const onLayoutRootView = useCallback(async () => {
    if (AvenirRoman && AvenirHeavy) {
      await Splashscreen.hideAsync();
    }
  }, [AvenirRoman, AvenirHeavy]);

  if (!AvenirRoman || !AvenirHeavy) {
    return null;
  }

  return (
    <View className="items-center justify-center flex-1 ">
      {/* <SplashScreen /> */}
      <OnBoarding />
      <StatusBar style="auto" />
    </View>
  );
}
