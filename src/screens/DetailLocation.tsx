import { View, Text, Image } from "react-native";
import React, { useCallback, useMemo, useRef, useState } from "react";
import BottomSheet from "@gorhom/bottom-sheet";
import { PageHeader } from "components";
import driverImage from "assets/img/driverImage.png";
import { starIcon, recordCircleIcon, locationDividerIcon, locationIcon } from "assets/icons";
import { Ionicons } from "@expo/vector-icons";
import { RootStackParamList } from "utils/types";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import MapView from "react-native-maps";
import { SvgXml } from "react-native-svg";
type Props = NativeStackScreenProps<RootStackParamList>;

const DetailLocation = ({ navigation }: Props) => {
  const HandleSettingPress = () => {};
  const [sheetState, setSheetState] = useState(0);
  const bottomSheetRef = useRef<BottomSheet>(null);

  // variables
  const snapPoints = useMemo(() => ["42%", "75%"], []);

  // callbacks
  const handleSheetChanges = useCallback((index: number) => {
    console.log("handleSheetChanges", index);
    setSheetState(index);
  }, []);

  return (
    <View className="flex-1 bg-white">
      <PageHeader backPress={() => navigation.goBack()} title="Detail Location" settingsPress={HandleSettingPress} />
      <MapView className="w-full h-full" showsUserLocation={true} />
      <BottomSheet
        ref={bottomSheetRef}
        index={0}
        snapPoints={snapPoints}
        onChange={handleSheetChanges}
        handleIndicatorStyle={{ width: 80, height: 5, backgroundColor: "#DFE2EB" }}
      >
        <View className="mx-4">
          <View className="my-4">
            <Text className="text-xl font-AvenirHeavy text-blueText">Your Package on The Way</Text>
            <Text className="mt-2 text-gray-400 font-AvenirRoman">Arriving at pick up point in 2 mins</Text>
          </View>
          {/* //Divider */}
          <View className="w-full h-[2px] bg-slate-200"></View>
          <View className="h-[80px] w-full items-center flex-row justify-between">
            <View className="flex-row items-center gap-2">
              <Image className="w-[46px] h-[46px]" source={driverImage} />
              <View className="gap-[2px]">
                <Text className="font-AvenirMedium text-blueText">Harry Johnson</Text>
                <View className="flex-row items-center gap-1">
                  <SvgXml xml={starIcon} />
                  <Text className="text-subText">4.9</Text>
                </View>
              </View>
            </View>

            {/* //Icons */}
            <View className="flex-row gap-4">
              <Ionicons name="call" size={24} color="black" />
              <Ionicons name="chatbox-ellipses" size={24} color="black" />
            </View>
          </View>
          <View className="w-full h-[2px] bg-slate-200"></View>
          {sheetState ? (
            <>
              <View className="flex-row my-5 justify-evenly">
                <View className="gap-2">
                  <Text className="text-base font-AvenirMedium">MM09130520</Text>
                  <Text className="text-gray-500">Track Number</Text>
                </View>
                <View className="gap-2">
                  <Text className="text-base font-AvenirMedium">1-3 Hours</Text>
                  <Text className="text-gray-500">Estimate Time</Text>
                </View>
                <View className="gap-2">
                  <Text className="text-base font-AvenirMedium">5.5 Kg</Text>
                  <Text className="text-gray-500">Package Weight</Text>
                </View>
              </View>
              <View className="w-full h-[2px] bg-slate-200"></View>
            </>
          ) : null}

          <View className="mt-5">
            <View className="flex-row items-center gap-3 ">
              <SvgXml width={30} height={30} xml={recordCircleIcon} />
              <Text className="text-lg font-AvenirMedium">1213 Washington Blvd, Belpre, OH </Text>
            </View>
            <SvgXml className="my-2 ml-[15px]" xml={locationDividerIcon} />
            <View className="flex-row items-center gap-3 ">
              <SvgXml width={30} height={30} xml={locationIcon} />
              <Text className="text-lg font-AvenirMedium">1213 Washington Blvd, Belpre, OH </Text>
            </View>
          </View>
        </View>
      </BottomSheet>
    </View>
  );
};

export default DetailLocation;
