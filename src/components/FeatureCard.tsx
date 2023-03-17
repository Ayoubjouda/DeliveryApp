import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import { SvgXml } from "react-native-svg";

type Props = {
  icon: string;
  name: string;
};

const FeatureCard = ({ icon, name }: Props) => {
  return (
    <TouchableOpacity className="items-center bg-white justify-center gap-2 border w-[110px] h-[82px] border-gray-300 rounded-2xl">
      <SvgXml xml={icon} />
      <Text className="font-AvenirHeavy">{name}</Text>
    </TouchableOpacity>
  );
};

export default FeatureCard;
