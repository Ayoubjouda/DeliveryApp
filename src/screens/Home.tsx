import { View, Text } from "react-native";
import React from "react";
import { HomeHeader } from "components";

type Props = {};

const Home = (props: Props) => {
  return (
    <View className="flex-1 ">
      <HomeHeader />
    </View>
  );
};

export default Home;
