import React from "react";
import { View, Text, TextInput, TouchableOpacity } from "react-native";
import { BackButton, CustomButton } from "components";
import type { NativeStackScreenProps } from "@react-navigation/native-stack";
import { RootStackParamList } from "src/utils/types";

type Props = NativeStackScreenProps<RootStackParamList>;

const CodeVerification = ({ navigation }: Props) => {
  return (
    <View className="flex-1 bg-white">
      <View className="absolute top-12 left-5">
        <BackButton onPress={() => navigation.goBack()} />
      </View>
      {/* // Title and SubTitle */}
      <View className="mx-5 mt-28">
        <Text className="text-[20px] font-AvenirHeavy">Verification Code</Text>
        <Text className="pr-16 mt-3 text-sm leading-6 font-AvenirRoman text-subTitle">
          We have sent the code verification to your number <Text className="text-sm text-black font-AvenirMedium">+01 65841542265</Text>{" "}
        </Text>
      </View>

      {/* // Code Input */}

      <View className="flex-row justify-center w-full gap-3 mt-5">
        <TextInput
          className="w-[66px] h-[59px] bg-dotBg rounded-lg text-xl leading-7 text-center font-AvenirHeavy"
          maxLength={1}
          inputMode="numeric"
        ></TextInput>
        <TextInput
          className="w-[66px] h-[59px] bg-dotBg rounded-lg text-xl leading-7 text-center font-AvenirHeavy"
          maxLength={1}
          inputMode="numeric"
        ></TextInput>
        <TextInput
          className="w-[66px] h-[59px] bg-dotBg rounded-lg text-xl leading-7 text-center font-AvenirHeavy"
          maxLength={1}
          inputMode="numeric"
        ></TextInput>
        <TextInput
          className="w-[66px] h-[59px] bg-dotBg rounded-lg text-xl leading-7 text-center font-AvenirHeavy"
          maxLength={1}
          inputMode="numeric"
        ></TextInput>
      </View>

      {/* // Counter */}

      <View className="items-center justify-center my-10">
        <Text className="text-lg font-AvenirHeavy">02:39</Text>
      </View>
      <View className="items-center">
        <CustomButton text="Submit" type="orange" onPress={() => navigation.navigate("CodeConfirmation")} />

        <View className="flex-row justify-center gap-1 mt-10">
          <Text className="text-base text-gray-500 font-AvenirRoman">Didn’t receive the code?</Text>
          <TouchableOpacity>
            <Text className="text-base font-AvenirHeavy">Resend</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default CodeVerification;
