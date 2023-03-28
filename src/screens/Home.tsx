import { View, Text, ScrollView } from "react-native";
import React from "react";
import { HomeHeader, FeatureCard, ServicesCard } from "components";
import { FEATURE_DATA } from "utils/constants";
import { boxIcon } from "assets/icons";
import { RootStackParamList } from "src/utils/types";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
type Props = NativeStackScreenProps<RootStackParamList>;
const Home = ({ navigation }: Props) => {
  return (
    <ScrollView className="flex-1 bg-white">
      <HomeHeader onPress={() => navigation.navigate("DetailLocation")} />
      <View className="mx-3 mt-5">
        <Text className="text-lg font-AvenirHeavy">Features</Text>
        <View className="flex-row flex-wrap justify-center gap-5 mt-1">
          {FEATURE_DATA
            ? FEATURE_DATA?.map((el: any, index: number) => (
                <View key={index}>
                  <FeatureCard icon={el.icon} name={el.name} />
                </View>
              ))
            : null}
        </View>
      </View>
      <View className="mx-3 mt-5 ">
        <Text className="text-lg font-AvenirHeavy">Services and Product</Text>

        <View className="items-center w-full mt-1">
          <ServicesCard serviceNumber="MM09132005" serviceInfo="Processed at sort facility" serviveTime="2Hrs" serviceIcon={boxIcon} />
        </View>
      </View>
    </ScrollView>
  );
};

export default Home;
