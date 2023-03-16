import React from "react";
import { Animated, View, Text, Pressable, StyleSheet, useWindowDimensions, TouchableOpacity } from "react-native";
import { useCardAnimation } from "@react-navigation/stack";
import { SvgXml } from "react-native-svg";
import { registrationSuccessIcon } from "assets/icons";
import { CustomButton } from "components";
type Props = {};
const styles = StyleSheet.create({
  viewAnimated: {
    width: "100%",
  },
  viewContainer: {
    flex: 1,
    padding: 10,
    backgroundColor: "#ffffff",
    borderRadius: 20,
  },
});
const CodeConfirmation = ({ navigation }: any) => {
  const { height } = useWindowDimensions();
  const { current } = useCardAnimation();

  return (
    <View
      style={{
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Pressable style={[StyleSheet.absoluteFill, { backgroundColor: "rgba(0, 0, 0, 0.5)" }]} onPress={navigation.goBack} />
      <Animated.View
        style={[
          {
            height: height,
            transform: [
              {
                translateY: current.progress.interpolate({
                  inputRange: [0, 1],
                  outputRange: [height, height * 0.3],
                  extrapolate: "clamp",
                }),
              },
            ],
          },
          styles.viewAnimated,
        ]}
      >
        {/* //Content Here */}

        <View style={styles.viewContainer}>
          {/* <TouchableOpacity style={{ marginTop: 40 }} onPress={navigation.goBack}>
            <Text> Close</Text>
          </TouchableOpacity> */}
          <View className="-mt-10 opacity-30" style={{}}>
            <SvgXml xml={registrationSuccessIcon} />
          </View>
          <View className="flex-col items-center -mt-32">
            <Text className="text-xl font-AvenirHeavy">Register Successfully</Text>
            <Text className="mt-24 text-lg text-center text-subText font-AvenirRoman">
              Congratulation! your account already created. Please login to get amazing experience.
            </Text>
            <View className="mt-8">
              <CustomButton onPress={() => navigation.navigate("Home")} text="Go to Home Page" type="orange" />
            </View>
          </View>
        </View>
      </Animated.View>
    </View>
  );
};

export default CodeConfirmation;
