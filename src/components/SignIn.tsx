import React from "react";
import { View } from "react-native";
import { FormInput, CustomButton } from "components";
import { profileIcon, callIcon, lockIcon } from "assets/icons";
const SignIn = () => {
  return (
    <View>
      <FormInput label="Username" icon={profileIcon} placeholder="Enter username" />
      <FormInput label="Password" icon={lockIcon} placeholder="Enter your password" />
      <View className="items-center mt-7">
        <CustomButton type="orange" text="Sign In" />
      </View>
    </View>
  );
};

export default SignIn;
