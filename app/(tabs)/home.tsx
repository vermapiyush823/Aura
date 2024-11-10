import SearchInput from "@/components/SearchInput";
import Trending from "@/components/Trending";
import React from "react";
import { FlatList, Image, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { images } from "../../constants";
const Home = () => {
  return (
    <SafeAreaView className="bg-primary">
      <FlatList
        data={[]}
        keyExtractor={(item) => item.$id}
        renderItem={({ item }) => (
          <Text className="text-white text-3xl">{item.id}</Text>
        )}
        ListHeaderComponent={() => (
          <View className="my-6 px-4 space-y-6">
            <View className="justify-between items-start flex-row mb-6">
              <View>
                <Text className="text-sm font-pmedium text-gray-100">
                  Welcome back,
                </Text>
                <Text className="text-2xl font-psemibold text-white">
                  Piyush
                </Text>
              </View>
              <View className="mt-1.5">
                <Image
                  source={images.logoSmall}
                  className="w-9 h-10"
                  resizeMode="contain"
                />
              </View>
            </View>
            <SearchInput
              value=""
              placeholder="Search for a video topic"
              handleChangeText={(e: any) => {}}
              otherStyles=""
            />
            <View className="w-full flex-1 pt-5 pb-8">
              <Text className="text-gray-100 text-lg font-pregular mb-3">
                Latest Videos
              </Text>
              <Trending posts={[{ id: 1 }, { id: 2 }]} />
            </View>
          </View>
        )}
        ListEmptyComponent={() => <Text className="text-white">Empty</Text>}
      />
    </SafeAreaView>
  );
};

export default Home;
