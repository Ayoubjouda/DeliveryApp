import { View, Text } from "react-native";
import React from "react";
import { SvgProps, SvgXml } from "react-native-svg";

type Props = {
  icon: string;
  title: string;
};

const ProfileButton = ({ icon, title }: Props) => {
  return (
    <View className="flex-row items-center w-full h-12 px-3 mt-3 border rounded-lg border-slate-100">
      <SvgXml xml={icon} />
      <Text className="ml-3 font-AvenirMedium">{title}</Text>
    </View>
  );
};

export default ProfileButton;
