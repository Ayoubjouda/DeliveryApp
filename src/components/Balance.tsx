import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import { SvgXml } from "react-native-svg";
import { addBalanceIcon } from "assets/icons";

type Props = {};

const Balance = (props: Props) => {
  return (
    <View className="flex-row justify-between items-center w-full bg-white rounded-xl h-[77px]">
      <View className="gap-1 mx-4">
        <Text className="font-AvenirRoman text-subText">My Balance</Text>
        <Text className="text-xl font-AvenirMedium">$3.382.00</Text>
      </View>
      <View className="flex-row gap-2 mx-4">
        <Text className="font-AvenirMedium ">Top Up</Text>
        <TouchableOpacity>
          <SvgXml xml={addBalanceIcon} />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Balance;
