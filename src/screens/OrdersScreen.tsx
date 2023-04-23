import { View, Text, ImageBackground, TouchableOpacity, FlatList } from "react-native";
import React from "react";
import { CustomInput, Categories, OrdersCard } from "components";
import { searchIcon, scanIcon, settingsIcon } from "assets/icons";
import { SvgXml } from "react-native-svg";
import homeHeaderBg from "assets/img/homeHeaderBg.jpg";

type Props = {};

const categoriesData = [
  {
    id: "1",
    title: "all",
    active: true,
  },
  {
    id: "2",
    title: "pending",
    active: false,
  },
  {
    id: "3",
    title: "On Process",
    active: false,
  },
  {
    id: "4",
    title: "Delivered",
    active: false,
  },
];
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
      <View>
        <FlatList
          data={categoriesData}
          horizontal
          contentContainerStyle={{ gap: 8, flexDirection: "row", marginHorizontal: 12, marginVertical: 10, height: 35 }}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => <Categories active={item.active} title={item.title} />}
        />
      </View>
      <Text className="mx-3 my-3 text-lg font-bold text-blueText font-AvenirHeavy"> 4 Results</Text>
      <FlatList
        data={[1, 3, 4, 3]}
        contentContainerStyle={{ gap: 10, marginHorizontal: 10 }}
        renderItem={({ item }) => <OrdersCard orderNumber="MM09132005" orderInfo="On transit area" orderStatus="Pending" />}
      />
    </View>
  );
};

export default OrdersScreen;
