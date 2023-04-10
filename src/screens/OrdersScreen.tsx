import { View, Text, ImageBackground, TouchableOpacity } from "react-native";
import React from "react";
import { CustomInput, Categories } from "components";
import { notificationIcon, searchIcon, scanIcon, settingsIcon } from "assets/icons";
import { SvgXml } from "react-native-svg";
import homeHeaderBg from "assets/img/homeHeaderBg.jpg";
import { ScrollView } from "react-native-gesture-handler";

type Props = {};

const OrdersScreen = (props: Props) => {
  return (
    <View className="flex-1 bg-white">
      <View className=" min-h-[216px] w-full">
        <ImageBackground className="flex-1" source={homeHeaderBg}>
          <View className="flex-row items-center justify-between mx-8 mt-16">
            <Text className="text-2xl text-white font-AvenirHeavy">My Order</Text>
            <TouchableOpacity onPress={() => {}}>
              <SvgXml xml={settingsIcon} />
            </TouchableOpacity>
          </View>

          <View className="mx-5 mt-3 ">
            <CustomInput type="numeric" leftIcon={searchIcon} placeholder="Enter track number" variant="orange" rightIcon={scanIcon} />
          </View>
        </ImageBackground>
      </View>
      <View className="flex-row relative h-[58px] max-w-screen mx-3 mt-7 bg-lightGray items-center justify-center rounded-3xl">
        <View className={`bg-white w-[49%] h-[50px] absolute rounded-3xl left-0 `}></View>
        <TouchableOpacity className="w-[49%] h-[50px] flex-row justify-center items-center  rounded-3xl ">
          <Text className="text-sm text-center border border-black font-AvenirMedium">From Me</Text>
        </TouchableOpacity>
        <TouchableOpacity className="w-[49%] h-[50px] flex-row justify-center items-center  rounded-3xl">
          <Text className="w-[50%] text-center font-AvenirMedium text-sm">To Me</Text>
        </TouchableOpacity>
      </View>
      <ScrollView horizontal className="flex flex-row gap-2 mx-3 mt-3 h-14">
        <View>
          <Categories active title="All" />
        </View>
        <View>
          <Categories title="Pending" />
        </View>
      </ScrollView>
    </View>
  );
};

export default OrdersScreen;
