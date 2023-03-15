import React from "react";
import { View } from "react-native";
import FormInput from "./FormInput";
import CustomButton from "./CustomButton";

import { profileIcon, callIcon, lockIcon } from "assets/icons";
const SignIn = () => {
  return (
    <View>
      <FormInput label="Username" icon={profileIcon} placeholder="Enter username" />
      <FormInput label="Password" icon={lockIcon} placeholder="Enter your password" />
      <View className="items-center mt-7">
        <CustomButton onPress={""} type="orange" text="Sign In" />
      </View>
    </View>
  );
};

export default SignIn;
