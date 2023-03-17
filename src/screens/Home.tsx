import { View, Text, ScrollView } from "react-native";
import React from "react";
import { HomeHeader, FeatureCard, ServicesCard } from "components";
import { FEATURE_DATA } from "utils/constants";

type Props = {};

const Home = (props: Props) => {
  return (
    <ScrollView className="flex-1 bg-white">
      <HomeHeader />
      <View className="mx-3 mt-5">
        <Text className="text-lg font-AvenirHeavy">Features</Text>
        <View className="flex-row flex-wrap justify-center gap-5 mt-1">
          {FEATURE_DATA
            ? FEATURE_DATA?.map((el: any) => (
                <View>
                  <FeatureCard icon={el.icon} name={el.name} />
                </View>
              ))
            : null}
        </View>
      </View>
      <View className="mx-3 mt-5 ">
        <Text className="text-lg font-AvenirHeavy">Services and Product</Text>
        <View className="items-center w-full mt-1"></View>
      </View>
    </ScrollView>
  );
};

export default Home;
