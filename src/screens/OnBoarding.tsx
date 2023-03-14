import React from "react";
import { View, TouchableOpacity, Text } from "react-native";
import Carousrel from "../components/Carousrel";

const OnBoarding = () => {
  return (
    <View className="flex-1 w-full bg-white ">
      <Carousrel />
      <View className="items-center">
        <TouchableOpacity className="bg-orange w-[327px] h-[56px] justify-center items-center  rounded-[30px] active:bg-darkOrange">
          <Text className="text-lg text-white font-AvenirHeavy ">Create Account</Text>
        </TouchableOpacity>
        <TouchableOpacity className="bg-white w-[327px] h-[56px] justify-center items-center mt-10 border border-subTitle rounded-[30px]  active:bg-darkWhite">
          <Text className="text-lg text-black border border-black font-AvenirHeavy">Sign In</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default OnBoarding;
