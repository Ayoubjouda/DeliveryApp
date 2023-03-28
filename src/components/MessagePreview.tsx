import { View, Text, Image } from "react-native";
import React from "react";
import { SvgXml } from "react-native-svg";
import { Ionicons } from "@expo/vector-icons";
import { starIcon } from "assets/icons";
import driverImage from "assets/img/driverImage.png";

type Props = {
  picture: ImageBitmap;
  username?: string;
  messagePreview?: string;
  time?: string;
};

const MessagePreview = ({ picture, username, messagePreview, time }: Props) => (
  <View className="h-[80px] w-full items-center flex-row justify-between">
    <View className="flex-row items-center gap-2">
      <Image className="w-[46px] h-[46px]" source={picture} />
      <View className="gap-[2px]">
        <Text className="font-AvenirMedium text-blueText">{username}</Text>
        <View className="flex-row items-center gap-1">
          <Text className="text-subText">{messagePreview}</Text>
        </View>
      </View>
    </View>

    {/* //Icons */}
    <View className="flex-row ">
      <Text className="text-slate-400">{time}</Text>
    </View>
    <View className="w-full h-[2px] absolute bottom-0 bg-slate-100"></View>
  </View>
);

export default MessagePreview;
