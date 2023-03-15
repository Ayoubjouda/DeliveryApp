import React from "react";
import { View, Image } from "react-native";
import { logoIcon } from "assets/icons";
import { SvgXml } from "react-native-svg";
const SplashScreen = () => {
  return (
    <View className="items-center justify-center flex-1 w-full bg-primary">
      <SvgXml xml={logoIcon} />
    </View>
  );
};

export default SplashScreen;
