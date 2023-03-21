import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import BackButton from "./BackButton";
import { Ionicons } from "@expo/vector-icons";
type Props = {
  backPress: Function;
  title: string;
  settingsPress?: Function;
};

const PageHeader = ({ backPress, title, settingsPress }: Props) => {
  return (
    <View className="relative items-center justify-center h-[85px] w-full flex-row mt-5">
      <View className="absolute top-8 left-5">
        <BackButton onPress={backPress} />
      </View>
      <Text className="mt-5 text-lg font-AvenirHeavy text-blueText">{title}</Text>
      <View className="absolute top-11 right-5">
        {settingsPress ? (
          <TouchableOpacity onPress={() => settingsPress()}>
            <Ionicons name="ellipsis-vertical" size={24} color="black" />
          </TouchableOpacity>
        ) : null}
      </View>
    </View>
  );
};

export default PageHeader;
