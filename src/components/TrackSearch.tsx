import { View, Text } from "react-native";
import React from "react";
import { Ionicons } from "@expo/vector-icons";

type Props = {};

const TrackSearch = (props: Props) => {
  return (
    <View className="relative flex-row items-center justify-between w-full min-h-[40px] pb-3">
      <View className="flex-row items-center justify-center gap-5">
        <Ionicons name="time-outline" size={24} color="#A7A9B7" />
        <Text className="font-AvenirMedium">TrackSearch</Text>
      </View>
      <Ionicons name="close-outline" size={24} color="#A7A9B7" />
      <View className="absolute w-full h-[1px] bottom-0 bg-slate-300"></View>
    </View>
  );
};

export default TrackSearch;
