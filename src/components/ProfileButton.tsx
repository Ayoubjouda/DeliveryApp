import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import { SvgProps, SvgXml } from "react-native-svg";

type Props = {
  icon: string;
  title: string;
  onPress?: any;
};

const ProfileButton = ({ icon, title, onPress }: Props) => {
  return (
    <TouchableOpacity className="flex-row items-center w-full h-12 px-3 mt-3 border rounded-lg border-slate-100" onPress={onPress}>
      <SvgXml xml={icon} />
      <Text className="ml-3 font-AvenirMedium">{title}</Text>
    </TouchableOpacity>
  );
};

export default ProfileButton;
