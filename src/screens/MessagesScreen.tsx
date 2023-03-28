import { View, Text, ImageBackground, TouchableOpacity } from "react-native";
import React from "react";
import { cLogo, notificationIcon, scanIcon, searchIcon } from "assets/icons";
import { SvgXml } from "react-native-svg";
import { CustomInput, MessagePreview } from "components";
import homeHeaderBg from "assets/img/homeHeaderBg.jpg";
import driverImage from "assets/img/driverImage.png";

type Props = {};

const MessagesScreen = (props: Props) => {
  return (
    <View className="flex-1 bg-white">
      <View className=" min-h-[216px] w-full">
        <ImageBackground className="flex-1" source={homeHeaderBg}>
          <View className="flex-row items-center justify-between mx-8 mt-16">
            <Text className="text-2xl text-white font-AvenirHeavy">Messages</Text>
            <TouchableOpacity onPress={() => {}}>
              <SvgXml xml={notificationIcon} />
            </TouchableOpacity>
          </View>

          <View className="mx-5 mt-3 ">
            <CustomInput type="numeric" leftIcon={searchIcon} placeholder="Search Messages" variant="orange" />
          </View>
        </ImageBackground>
      </View>
      <View className="mx-3">
        <MessagePreview picture={driverImage} username={"Harry Johnson"} messagePreview={"Haha that's terrifying 😂"} time={"3:33 pm"} />
      </View>
    </View>
  );
};

export default MessagesScreen;
