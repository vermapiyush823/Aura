import { images } from "@/constants";
import { router } from "expo-router";
import React from "react";
import { Image, Text, View } from "react-native";
import CustomButton from "./CustomButton";
const Empty = ({ title, subtitle }: { title: string; subtitle: string }) => {
  return (
    <View className="justify-center items-center px-4">
      <Image source={images.empty} className="w-[270px] h-[215px]" />
      <Text className="text-2xl text-center font-psemibold text-white mt-2">
        {title}
      </Text>
      <Text className=" text-sm font-pmedium text-gray-100">{subtitle}</Text>
      <CustomButton
        title="Create Video"
        handlePress={() => router.push("/create")}
        containerStyles="w-full my-5"
      />
    </View>
  );
};

export default Empty;
