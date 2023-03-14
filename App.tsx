import React, { useCallback } from "react";
import { StatusBar } from "expo-status-bar";
import { View } from "react-native";
import SplashScreen from "./src/screens/Splashscreen";
import OnBoarding from "./src/screens/OnBoarding";
import SignUpIn from "./src/screens/SignUpIn";
import { useFonts } from "expo-font";
import * as Splashscreen from "expo-splash-screen";

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
    <View className="items-center justify-center flex-1 ">
      {/* <SplashScreen /> */}
      {/* <OnBoarding /> */}
      <SignUpIn />
      <StatusBar style="auto" />
    </View>
  );
}
