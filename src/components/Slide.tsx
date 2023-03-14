import React from "react";
import { Image, Text, Dimensions, View } from "react-native";

type SlideData = {
  id: number;
  image: string;
  title: string;
  subtitle: string;
};

const Slide = ({ data }: { data: SlideData }) => {
  const { width: windowWidth, height: windowHeight } = Dimensions.get("window");
  return (
    <View className={`max-w-full  overflow-hidden`}>
      <Image source={{ uri: data.image }} style={{ width: windowWidth, height: windowHeight * 0.55 }} />
      <View className={`items-center `}>
        <Text className="mt-3 text-2xl font-AvenirHeavy">{data.title}</Text>
        <Text className="w-screen px-10 mt-3 text-sm text-center text-subTitle font-AvenirRoman leading-[28px] ">
          {data.subtitle}
        </Text>
      </View>
    </View>
  );
};

export default Slide;
