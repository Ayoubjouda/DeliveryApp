import { View, Text, TouchableOpacity } from "react-native";
import React, { useState } from "react";
import { SvgXml } from "react-native-svg";
import { checkIcon } from "assets/icons";
type Props = {
  icon: string;
  title: string;
  onPress?: any;
};

const LanguageButton = ({ title, icon, onPress }: Props) => {
  const [active, setActive] = useState(false);

  return (
    <TouchableOpacity
      className={`flex-row items-center min-w-full px-3 mt-3 border rounded-xl h-14  ${active ? "border-black" : "border-slate-100"}`}
      onPress={() => setActive(!active)}
    >
      <SvgXml xml={icon} />
      <Text className="ml-3 font-AvenirMedium">{title}</Text>
      <SvgXml className={`ml-auto ${!active ? "hidden" : ""}`} xml={checkIcon} />
    </TouchableOpacity>
  );
};

export default LanguageButton;
