import React from "react";
import { TouchableOpacity, Text } from "react-native";
import { SvgXml } from "react-native-svg";
const CustomButton = ({ text, type, icon }: { text: string; type: string; icon?: string }) => {
  return (
    <>
      {type === "orange" ? (
        <TouchableOpacity className="bg-orange w-[327px] h-[56px] justify-center items-center  rounded-[30px] active:bg-darkOrange">
          <Text className="text-lg text-white font-AvenirHeavy ">{text}</Text>
        </TouchableOpacity>
      ) : null}
      {type === "google" ? (
        <TouchableOpacity className="bg-white  relative w-[327px] h-[56px] flex-row-reverse justify-center items-center mt-3 border border-dotBg rounded-[30px]  active:bg-darkWhite">
          <Text className="text-lg text-black border border-black font-AvenirHeavy">{text}</Text>
          {icon ? (
            <>
              <SvgXml className="mr-3" width={22} height={22} xml={icon} />
            </>
          ) : null}
        </TouchableOpacity>
      ) : null}
    </>
  );
};

export default CustomButton;
