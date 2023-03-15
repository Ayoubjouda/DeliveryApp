import React from "react";
import { View } from "react-native";
import FormInput from "./FormInput";
import CustomButton from "./CustomButton";
import { profileIcon, callIcon, lockIcon } from "assets/icons";
const SignUp = ({ navigation }: { navigation: any }) => {
  return (
    <View>
      <FormInput label="Full Name" icon={profileIcon} placeholder="Enter phone Number" />
      <FormInput label="Phone Number" icon={callIcon} placeholder="Enter your number" />
      <FormInput label="Password" icon={lockIcon} placeholder="Enter your password" />
      <View className="items-center mt-7">
        <CustomButton type="orange" text="Sign Up" onPress={() => navigation.navigate("CodeVerification")} />
      </View>
    </View>
  );
};

export default SignUp;
