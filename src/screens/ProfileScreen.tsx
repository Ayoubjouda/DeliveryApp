import { View, Text, ImageBackground, TouchableOpacity, Image } from "react-native";
import React from "react";
import { SvgXml } from "react-native-svg";
import { CustomInput, ProfileButton } from "components";
import {
  notificationIcon,
  searchIcon,
  lockOrangeIcon,
  globeOrangeIcon,
  notificationOrangeIcon,
  helpIcon,
  privacyOrangeIcon,
  teamOrangeIcon,
  mobileOrangeIcon,
  shareIcon,
} from "assets/icons";
import homeHeaderBg from "assets/img/homeHeaderBg.jpg";
import driverImage from "assets/img/driverImage.png";
import { ScrollView } from "react-native-gesture-handler";

type Props = {};

const ProfileScreen = ({ navigation }: any) => {
  return (
    <View className="flex-1 bg-white">
      <View className=" min-h-[200px] w-full">
        <ImageBackground className="flex-1" source={homeHeaderBg}>
          <View className="flex-row items-center justify-between mx-8 mt-16">
            <Text className="text-2xl text-white font-AvenirHeavy">My Profile</Text>
          </View>

          <View className="flex-row items-center justify-between mx-5 mt-6 ">
            <View className="flex-row items-center justify-center gap-4">
              <Image className="w-[55px] h-[55px]" source={driverImage} />
              <View className="gap-[2px]">
                <Text className="text-lg text-white font-AvenirHeavy">Micheal Sam</Text>
                <Text className="text-white font-AvenirRoman">+01 65841542265</Text>
              </View>
            </View>

            <TouchableOpacity className="px-4 py-2.5 bg-gray-600 rounded-2xl" onPress={() => navigation.navigate("EditProfile")}>
              <Text className="text-white">Edit Profile</Text>
            </TouchableOpacity>
          </View>
        </ImageBackground>
      </View>
      <ScrollView showsVerticalScrollIndicator={false} className="flex-1 mx-4">
        <View className="pb-10">
          <View className="mt-4">
            <Text className="text-lg font-AvenirHeavy">Settings</Text>
            <View className="">
              <ProfileButton icon={lockOrangeIcon} title="Change Password" />
              <ProfileButton icon={globeOrangeIcon} title="Language" />
              <ProfileButton icon={notificationOrangeIcon} title="Notification" />
            </View>
          </View>
          <View className="mt-4">
            <Text className="text-lg font-AvenirHeavy">About Us</Text>
            <View className="">
              <ProfileButton icon={helpIcon} title="FAQ" />
              <ProfileButton icon={privacyOrangeIcon} title="Privacy Policy" />
              <ProfileButton icon={teamOrangeIcon} title="Contact Us" />
            </View>
          </View>
          <View className="mt-4">
            <Text className="text-lg font-AvenirHeavy">Other</Text>
            <View className="">
              <ProfileButton icon={shareIcon} title="Share" />
              <ProfileButton icon={mobileOrangeIcon} title="Get The Latest Vesrion" />
            </View>
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

export default ProfileScreen;
