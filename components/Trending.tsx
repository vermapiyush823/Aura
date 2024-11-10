import React from "react";
import { FlatList, Text, View } from "react-native";

const Trending = ({ posts }: any) => {
  return (
    <FlatList
      data={posts}
      keyExtractor={(post: any) => post.$id}
      renderItem={({ item }: any) => (
        <View>
          <Text className="text-white text-3xl">{item.id}</Text>
        </View>
      )}
      horizontal
    />
  );
};

export default Trending;
