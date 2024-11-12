import { icons } from "@/constants";
import { ResizeMode, Video } from "expo-av";
import React, { useState } from "react";
import { Image, Text, TouchableOpacity, View } from "react-native";
const VideoCard = ({ video }: any) => {
  const [play, setPlay] = useState(false);
  return (
    <View className="flex-col  px-4 items-center mb-14">
      <View className="flex-row gap-3 items-start">
        <View className="justify-center items-center flex-row flex-1">
          <View className="w-[46px] h-[46px] rounded-lg border border-secondary justify-center items-center p-0.5">
            <Image
              source={{ uri: video.creators.avatar }}
              className="w-full h-full rounded-lg"
              resizeMode="cover"
            />
          </View>
          <View className="justify-center flex-1 ml-3 gap-y-1">
            <Text className="text-white font-psemibold text-sm">
              {video.title}
            </Text>
            <Text className="text-gray-100 font-pregular text-xs">
              {video.creators.username}
            </Text>
          </View>
        </View>
        <View>
          <Image source={icons.menu} className="w-5 h-5" resizeMode="contain" />
        </View>
      </View>
      {play ? (
        <Video
          source={{
            uri: video.video,
          }}
          shouldPlay
          isLooping
          resizeMode={ResizeMode.COVER}
          className="w-full h-60 rounded-xl mt-3"
          style={{
            width: "100%",
            height: 240,
            borderRadius: 12,
            marginTop: 12,
            backgroundColor: "rgba(255, 255, 255, 0.1)",
          }}
        />
      ) : (
        <TouchableOpacity
          activeOpacity={0.7}
          onPress={() => setPlay(true)}
          className="w-full h-60 rounded-xl mt-3 relative justify-center items-center"
        >
          <Image
            source={{ uri: video.thumbnail }}
            className="w-full h-full rounded-xl mt-3"
            resizeMode="cover"
          />
          <Image
            source={icons.play}
            className="w-12 h-12 absolute"
            resizeMode="contain"
          />
        </TouchableOpacity>
      )}
    </View>
  );
};

export default VideoCard;
