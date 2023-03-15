import React from "react";
import { TouchableOpacity } from "react-native";
import { SvgXml } from "react-native-svg";
import { arrowLeftIcon } from "assets/icons";
const BackButton = () => {
  return (
    <TouchableOpacity className="w-[46px] h-[46px] border justify-center items-center rounded-full border-dotBg">
      <SvgXml xml={arrowLeftIcon} width={22} height={22} />
    </TouchableOpacity>
  );
};

export default BackButton;
