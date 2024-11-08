import "react-native-reanimated";

import { StatusBar, Text, View } from "react-native";

export default function App() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#f5fcff",
      }}
    >
      <Text>Hello, World!</Text>
      <StatusBar barStyle="default" />
    </View>
  );
}
