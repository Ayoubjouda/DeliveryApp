import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import { SvgXml } from "react-native-svg";

type Props = {
  notificationName: string;
  notificationInfo: string;
  notificationIcon: string;
  notificationTime: string;
};

const NotificationCard = ({ notificationName, notificationInfo, notificationIcon = "", notificationTime }: Props) => {
  return (
    <TouchableOpacity className="w-full min-h-[80px] justify-between flex-row items-center border border-bgFill rounded-3xl px-4 ">
      <View className="flex-row items-center gap-3">
        <View className="h-[50px] w-[50px] rounded-xl justify-center items-center">
          <SvgXml xml={notificationIcon} />
        </View>
        <View className="gap-1 max-w-[75%]">
          <Text className="text-blueText font-AvenirMedium">{notificationName}</Text>
          <Text className="text-gray-400 font-AvenirRoman">{notificationInfo}</Text>
        </View>
      </View>
      <Text className="text-gray-400 font-AvenirRoman">{notificationTime}</Text>
    </TouchableOpacity>
  );
};

export default NotificationCard;
