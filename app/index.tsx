import { Text, View } from "react-native";

export default function App() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Text
        className="text-2xl
        text-red-900
        font-bold
      "
      >
        Edit app/index.tsx to edit this screen.
      </Text>
    </View>
  );
}
