import { View, Text, Image, KeyboardAvoidingView, TouchableOpacity } from "react-native";
import React from "react";
import { CustomButton, FormInput, PageHeader } from "components";
import driverImage from "assets/img/profilePicture.png";
import { profileOrangeIcon, callOrangeIcon, editImageIcon } from "assets/icons";
import { SvgXml } from "react-native-svg";

type Props = {};

const EditProfile = ({ navigation }: any) => {
  return (
    <View className="items-center flex-1 bg-white">
      <PageHeader title="Edit Profile" backPress={() => navigation.goBack()} />
      <View className="items-center justify-center w-full mt-10">
        <View className="relative">
          <Image source={driverImage} className="max-h-[100px] max-w-[100px]" />
          <TouchableOpacity onPress={() => {}} className="absolute -left-5 -top-3 ">
            <SvgXml xml={editImageIcon} />
          </TouchableOpacity>
        </View>
      </View>
      <View className="w-full">
        <FormInput label="Full Name" icon={profileOrangeIcon} placeholder="Enter your password" value="Micheal Sam" />

        <FormInput label="Phone Number" icon={callOrangeIcon} placeholder="Enter your password" value="+01 65841542265" />
      </View>
      <View className="mt-auto mb-10">
        <CustomButton text="Save Changes" type="orange" onPress={() => {}} />
      </View>
    </View>
  );
};

export default EditProfile;
