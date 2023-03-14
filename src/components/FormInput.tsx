import React from "react";
import { TextInput, View, Text } from "react-native";
import { SvgXml } from "react-native-svg";
const FormInput = ({ label, icon, placeholder }: { label: string; icon: string; placeholder: string }) => {
  return (
    <View className="mx-3 mt-5">
      <Text className="font-AvenirHeavy"> {label}</Text>

      <View className="relative mt-3">
        <TextInput
          className=" border border-dotBg rounded-lg h-[52px]  placeholder:pl-12"
          placeholder={placeholder}
        ></TextInput>
        <SvgXml className="absolute top-4 left-3" width={22} height={22} xml={icon} />
      </View>
    </View>
  );
};

export default FormInput;
