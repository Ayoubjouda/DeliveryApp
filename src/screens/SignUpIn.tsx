import React, { useRef, useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  KeyboardAvoidingView,
  Platform,
  TouchableWithoutFeedback,
  Keyboard,
  ScrollView,
  Animated,
} from "react-native";
import BackButton from "../components/BackButton";
import FormInput from "../components/FormInput";
import CustomButton from "../components/CustomButton";
import personIcon from "../../assets/icons/profile";
import callIcon from "../../assets/icons/call";
import lockIcon from "../../assets/icons/lock";
import GoogleIcon from "../../assets/icons/Google";
const SignUpIn = () => {

  const [startValue, setStartValue] = useState(new Animated.Value(0));

  const duration = 300;
  const MoveAnimRight = () => {
    Animated.timing(startValue, {
      toValue: 180,
      duration: duration,
      useNativeDriver: true,
    }).start();
    setTimeout(() => {
      setStartValue(new Animated.Value(180));
    }, 400);
  };
  const MoveAnimLeft = () => {
    Animated.timing(startValue, {
      toValue: 0,
      duration: duration,
      useNativeDriver: true,
    }).start();
    setTimeout(() => {
      setStartValue(new Animated.Value(0));
    }, 400);
  };

  return (
    <KeyboardAvoidingView behavior={Platform.OS === "ios" ? "padding" : "height"} enabled className="relative flex-1 ">
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <ScrollView className="flex-1">
          <View className="absolute top-12 left-5">
            <BackButton />
          </View>
          {/* // Title and SubTitle */}
          <View className="mx-5 mt-28">
            <Text className="text-[20px] font-AvenirHeavy">Shipping and Track Anytime </Text>
            <Text className="mt-3 text-sm font-AvenirRoman text-subTitle">Get great experience with tracky</Text>
          </View>
          {/* // Sign In & up Component */}
          <View className="flex-row relative h-[58px] max-w-screen mx-3 mt-7 bg-lightGray items-center justify-center rounded-3xl">
            <Animated.View
              style={{
                transform: [
                  {
                    translateX: startValue,
                  },
                ],
              }}
              className={`bg-white w-[49%] h-[50px] absolute rounded-3xl left-0 `}
            ></Animated.View>
            <TouchableOpacity
              onPress={MoveAnimLeft}
              className="w-[49%] h-[50px] flex-row justify-center items-center  rounded-3xl "
            >
              <Text className="text-sm text-center border border-black font-AvenirMedium">Sign Up</Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={MoveAnimRight}
              className="w-[49%] h-[50px] flex-row justify-center items-center  rounded-3xl"
            >
              <Text className="w-[50%] text-center font-AvenirMedium text-sm">Sign In</Text>
            </TouchableOpacity>
          </View>

          {/* // SignUp Form */}
          <View>
            <FormInput label="Full Name" icon={personIcon} placeholder="Enter your name" />
            <FormInput label="Phone Number" icon={callIcon} placeholder="Enter your number" />
            <FormInput label="Password" icon={lockIcon} placeholder="Enter your password" />
          </View>
          {/* // SignUp Buttons */}
          <View className="items-center justify-center mx-4 mt-7 max-w-screen">
            <CustomButton type="orange" text="Create Account" />

            <View className="h-[1px] w-full mt-7 bg-dotBg mx-10"></View>
            <Text className="mt-3 text-sm text-subTitle font-AvenirRoman"> Or Sign Up With</Text>
            <CustomButton type="google" text=" Sign Up with Google " icon={GoogleIcon} />
          </View>
        </ScrollView>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
};

export default SignUpIn;
