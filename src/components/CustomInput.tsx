import { View, Text, TextInput } from "react-native";
import React from "react";
import { SvgXml } from "react-native-svg";

type Props = {
  placeholder: string;
  leftIcon?: string;
  rightIcon?: string;
  type: "numeric" | "text";
};

const CustomInput = ({ placeholder, leftIcon = "", rightIcon = "", type }: Props) => {
  return (
    <View>
      <View className="relative mt-3">
        <TextInput
          className="  border-dotBg bg-orange rounded-lg h-[52px] text-black  placeholder:px-12 placeholder:text-black "
          placeholder={placeholder}
          inputMode={type}
        />
        <SvgXml className="absolute top-4 left-3" width={22} height={22} xml={leftIcon} />
        <SvgXml className="absolute top-4 right-3" width={22} height={22} xml={rightIcon} />
      </View>
    </View>
  );
};

export default CustomInput;
