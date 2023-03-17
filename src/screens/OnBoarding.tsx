import React from "react";
import { View, TouchableOpacity, Text } from "react-native";
import { Carousrel, CustomButton } from "components";
import { RootStackParamList } from "src/utils/types";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
type Props = NativeStackScreenProps<RootStackParamList>;

const OnBoarding = ({ navigation }: Props) => {
  return (
    <View className="flex-1 w-full bg-white ">
      <Carousrel />
      <View className="items-center">
        <CustomButton text="Create an account" type="orange" onPress={() => navigation.navigate("SignInUp")} />
        <TouchableOpacity className="bg-white w-[327px] h-[56px] justify-center items-center mt-10 border border-subTitle rounded-[30px]  active:bg-darkWhite">
          <Text className="text-lg text-black border border-black font-AvenirHeavy">Sign In</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default OnBoarding;
