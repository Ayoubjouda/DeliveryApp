import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import { NotificationCard, PageHeader } from "components";
import { RootStackParamList } from "src/utils/types";
import { NativeStackScreenProps } from "@react-navigation/native-stack";

import { messageIconSvg } from "assets/icons";
type Props = NativeStackScreenProps<RootStackParamList>;

const Notification = ({ navigation }: Props) => {
  return (
    <View className="flex-1 bg-white">
      <PageHeader backPress={() => navigation.goBack()} title="Notification" />
      <View className="flex-row items-center justify-between mx-3">
        <View className="flex-row items-center justify-center">
          <Text className="text-lg font-AvenirHeavy text-blueText">Recent</Text>
          <View className="items-center justify-center w-5 h-5 ml-2 rounded-full bg-orange">
            <Text className="leading-5 text-white font-AvenirHeavy">4</Text>
          </View>
        </View>
        <View>
          <TouchableOpacity>
            <Text className="font-AvenirRoman text-orange">Clear All</Text>
          </TouchableOpacity>
        </View>
      </View>
      <View className="gap-1 mx-2 mt-4">
        <View>
          <NotificationCard
            notificationName="Your Shipping Already Delivered "
            notificationInfo="Tap to see the message"
            notificationIcon={messageIconSvg}
            notificationTime="2m ago"
          />
        </View>

        <View>
          <NotificationCard
            notificationName="Your Shipping Already Delivered "
            notificationInfo="Tap to see the message"
            notificationIcon={messageIconSvg}
            notificationTime="2m ago"
          />
        </View>
      </View>
    </View>
  );
};

export default Notification;
