import { icons } from "@/constants";
import { Image, TextInput, TouchableOpacity, View } from "react-native";
const SearchInput = ({
  value,
  placeholder,
  handleChangeText,
  otherStyles,
  ...props
}: {
  value: string;
  placeholder: string;
  handleChangeText: (text: string) => void;
  otherStyles: string;
}) => {
  return (
    <View className="w-full h-16 px-4 bg-black-100 rounded-2xl border-2 border-black-200 focus:border-secondary flex flex-row items-center space-x-4">
      <TextInput
        className="mt-0.5 flex-1 font-pregular text-white  text-base"
        value={value}
        placeholder={placeholder}
        placeholderTextColor="#7B7B8B"
        onChangeText={handleChangeText}
        {...props}
      />
      <TouchableOpacity>
        <Image source={icons.search} className="w-5 h-5" resizeMode="contain" />
      </TouchableOpacity>
    </View>
  );
};

export default SearchInput;
