import React from "react";
import { TouchableOpacity } from "react-native";
import { SvgXml } from "react-native-svg";
import backIcon from "../../assets/icons/arrow-left";
const BackButton = () => {
  return (
    <TouchableOpacity className="w-[46px] h-[46px] border justify-center items-center rounded-full border-dotBg">
      <SvgXml xml={backIcon} width={22} height={22} />
    </TouchableOpacity>
  );
};

export default BackButton;
