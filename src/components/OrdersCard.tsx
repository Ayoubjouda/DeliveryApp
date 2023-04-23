import { Text, View } from "react-native";
import React from "react";
import { boxIcon } from "assets/icons";
import { SvgXml } from "react-native-svg";

type Props = {
  orderNumber: string;
  orderInfo: string;
  orderStatus: string;
};

const OrdersCard = ({ orderNumber, orderInfo, orderStatus }: Props) => {
  return (
    <View className="w-full h-[80px] justify-between flex-row items-center border border-bgFill rounded-3xl px-4 ">
      <View className="flex-row items-center gap-3">
        <View className="h-[50px] w-[50px] bg-bgFill rounded-xl justify-center items-center">
          <SvgXml xml={boxIcon} />
        </View>
        <View className="gap-1">
          <Text className="text-blueText font-AvenirMedium">{orderNumber}</Text>
          <Text className="text-gray-400 font-AvenirRoman">{orderInfo}</Text>
        </View>
      </View>
      <Text className={`font-medium  ${orderStatus === "Pending" ? "text-orange" : "text-blueText"} font-AvenirRoman`}>{orderStatus}</Text>
    </View>
  );
};

export default OrdersCard;
