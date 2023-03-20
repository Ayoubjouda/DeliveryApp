import { View, Text } from "react-native";
import React from "react";
import { PageHeader, CustomInput } from "components";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { RootStackParamList } from "src/utils/types";
import { searchIcon, scanIcon, noHistory } from "assets/icons";
import { SvgXml } from "react-native-svg";
type Props = NativeStackScreenProps<RootStackParamList>;

const TrackingScreen = ({ navigation }: Props) => {
  return (
    <View>
      <PageHeader title="Track" backPress={() => navigation.goBack()} />
      <View className="mx-3">
        <CustomInput variant="simple" placeholder="Enter Number" type="numeric" leftIcon={searchIcon} rightIcon={scanIcon} />
      </View>
      <View className="items-center justify-center mt-20">
        <SvgXml xml={noHistory} />
        <Text className="mt-10 text-2xl font-AvenirHeavy text-blueText">You Have No History Yet</Text>
        <Text className="mx-10 mt-5 text-lg text-center text-gray-400 font-AvenirRoman">
          When tracking history appear, you will see them here
        </Text>
      </View>
    </View>
  );
};

export default TrackingScreen;
