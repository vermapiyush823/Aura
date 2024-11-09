import { Image, SafeAreaView, ScrollView, Text, View } from "react-native";
import { images } from "../constants";
export default function App() {
  return (
    <SafeAreaView className="bg-primary h-full">
      <ScrollView
        contentContainerStyle={{
          height: "100%",
        }}
      >
        <View className="w-full justify-center items-center h-full  px-4">
          <Image
            source={images.logo}
            className="w-[130px] h-[130px]"
            resizeMode="contain"
          />
          <Image
            source={images.cards}
            className="max-w-[380px] w-full h-[300px]"
            resizeMode="contain"
          />
          <View className="relative mt-5">
            <Text className="text-3xl font-pbold text-white text-center">
              Discover Endless possiblities with{" "}
              <Text className="text-secondary-200">Aura</Text>
            </Text>
            <Image
              className="
              absolute
              -bottom-2
              -right-8
              w-[136px]
              h-[15px]
            "
              resizeMode="contain"
              source={images.path}
            />
          </View>
          <Text className="text-sm font-pregular text-gray-100 mt-7 text-center">
            Where creativity meets innovations: embark on a journey of limitless
            exploration with Aura.
          </Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
