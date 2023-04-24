import { View, Text, Image, KeyboardAvoidingView, TouchableOpacity, TextInput } from "react-native";
import React from "react";
import { CustomButton, FormInput, PageHeader, LanguageButton } from "components";

import { EN, FR, PG, JP, searchIcon } from "assets/icons";
import { SvgXml } from "react-native-svg";

type Props = {};

const EditLanguage = ({ navigation }: any) => {
  return (
    <View className="items-center flex-1 bg-white">
      <PageHeader title="Language" backPress={() => navigation.goBack()} />

      <View className="w-full mt-3">
        <View className="relative mx-4 mt-3">
          <TextInput className=" border border-dotBg rounded-lg h-[52px]  placeholder:pl-12 bg-gray-100" placeholder="Search language" />
          <SvgXml className="absolute top-4 left-3" width={22} height={22} xml={searchIcon} />
        </View>
      </View>
      <View className="mx-3 mt-10">
        <LanguageButton icon={EN} title="English" />
        <LanguageButton icon={FR} title="Frensh" />
        <LanguageButton icon={PG} title="Portuguese" />
        <LanguageButton icon={JP} title="Japanese" />
      </View>
      <View className="mt-auto mb-10">
        <CustomButton text="Change Password" type="orange" onPress={() => {}} />
      </View>
    </View>
  );
};

export default EditLanguage;
