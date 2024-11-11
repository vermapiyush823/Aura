import Empty from "@/components/Empty";
import VideoCard from "@/components/VideoCard";
import { icons } from "@/constants";
import { useGlobalContext } from "@/context/GlobalProvider";
import { getUserPosts } from "@/lib/appwrite";
import React from "react";
import { FlatList, Image, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import useAppwrite from "../../lib/useAppwrite";
import InfoBox from "@/components/InfoBox";
const Profile = () => {
  const { user, setUser, setIsLoggedIn } = useGlobalContext();
  const { data: posts } = useAppwrite(() => getUserPosts(user.$id));
  const logout = async () => {
    await setUser(null);
    setIsLoggedIn(false);
  };
  return (
    <SafeAreaView className="bg-primary h-full">
      <FlatList
        data={posts}
        keyExtractor={(item: any) => item.$id}
        renderItem={({ item }: any) => <VideoCard video={item} />}
        ListHeaderComponent={() => (
          <View className="w-ful justify-center items-center mt-6 mb-12 px-4">
            <TouchableOpacity
              className="w-full items-end mb-10"
              onPress={logout}
            >
              <Image
                source={icons.logout}
                className="w-6 h-6"
                resizeMode="contain"
              />
            </TouchableOpacity>
            <View className="w-16 h-16 border border-secondary rounded-full items-center justify-center">
              <Image
                source={{ uri: user.avatar }}
                className="w-[95%] h-[95%] rounded-full"
                resizeMode="cover"
              />
            </View>
            <InfoBox
          </View>
        )}
        ListEmptyComponent={() => (
          <Empty
            title="No videos found"
            subtitle="No videos found for the search query"
          />
        )}
      />
    </SafeAreaView>
  );
};

export default Profile;
