import { View, Text } from "react-native";
import React from "react";
import { SvgXml } from "react-native-svg";
type Props = {
  serviceNumber: string;
  serviceInfo: string;
  serviceIcon: string;
  serviveTime: string;
};

const ServicesCard = ({ serviceNumber, serviceInfo, serviceIcon, serviveTime }: Props) => {
  return (
    <View className="w-full h-[80px] justify-between flex-row items-center border border-bgFill rounded-3xl px-4 ">
      <View className="flex-row items-center gap-3">
        <View className="h-[50px] w-[50px] bg-bgFill rounded-xl justify-center items-center">
          <SvgXml xml={serviceIcon} />
        </View>
        <View className="gap-1">
          <Text className="text-blueText font-AvenirMedium">{serviceNumber}</Text>
          <Text className="text-gray-400 font-AvenirRoman">{serviceInfo}</Text>
        </View>
      </View>
      <Text className="text-gray-400 font-AvenirRoman">{serviveTime}</Text>
    </View>
  );
};

export default ServicesCard;
