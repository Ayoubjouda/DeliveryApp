import { View, Text, Image, KeyboardAvoidingView, TouchableOpacity } from "react-native";
import React from "react";
import { CustomButton, FormInput, PageHeader } from "components";

import { lockIcon, lockOrangeIcon } from "assets/icons";

type Props = {};

const EditPassword = ({ navigation }: any) => {
  return (
    <View className="items-center flex-1 bg-white">
      <PageHeader title="Edit Password" backPress={() => navigation.goBack()} />

      <View className="w-full mt-3">
        <FormInput label="Current Password" icon={lockOrangeIcon} placeholder="Enter your password" />
        <Text className="mx-3 mt-4 ml-auto text-slate-500">Forgot Password</Text>
      </View>

      <View className="w-full mt-5">
        <FormInput label="New Password" icon={lockIcon} placeholder="Enter your password" />
        <FormInput label="Confirm Password" icon={lockIcon} placeholder="Enter your password" />
      </View>
      <View className="mt-auto mb-10">
        <CustomButton text="Change Password" type="orange" onPress={() => {}} />
      </View>
    </View>
  );
};

export default EditPassword;
