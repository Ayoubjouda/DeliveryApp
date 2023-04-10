import { View, Text } from "react-native";
import React from "react";
import { TouchableOpacity } from "react-native-gesture-handler";

type Props = {
  title: string;
  active?: boolean;
};

const Categories = ({ active, title }: Props) => {
  return (
    <>
      {active ? (
        <View className="px-4 py-2 rounded-2xl bg-blueText">
          <Text className="text-white font-AvenirHeavy">{title}</Text>
        </View>
      ) : (
        <View className="px-4 py-2 bg-white border rounded-2xl border-slate-200">
          <Text className="text-slate-400 font-AvenirHeavy">{title}</Text>
        </View>
      )}
    </>
  );
};

export default Categories;
