import { View, Text, TextInput } from "react-native";
import React from "react";
import { SvgXml } from "react-native-svg";

type Props = {
  placeholder: string;
  leftIcon?: string;
  rightIcon?: string;
  type: "numeric" | "text";
  variant: string;
};

const CustomInput = ({ placeholder, leftIcon, rightIcon, type, variant = "orange" }: Props) => {
  return (
    <View>
      <View className="relative mt-3">
        {variant === "orange" ? (
          <TextInput
            className="  border-dotBg bg-orange rounded-lg h-[52px] text-black  placeholder:px-12 placeholder:text-black "
            placeholder={placeholder}
            placeholderTextColor={"#1D272F"}
            inputMode={type}
          />
        ) : (
          <TextInput
            className="  border-black bg-dotBg rounded-lg h-[52px] text-black  placeholder:px-12 placeholder:text-black "
            placeholder={placeholder}
            inputMode={type}
          />
        )}

        {leftIcon ? <SvgXml className="absolute top-4 left-3" width={22} height={22} xml={leftIcon} /> : null}
        {rightIcon ? <SvgXml className="absolute top-4 right-3" width={22} height={22} xml={rightIcon} /> : null}
      </View>
    </View>
  );
};

export default CustomInput;
