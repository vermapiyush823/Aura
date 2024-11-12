import React from "react";
import { Text, View } from "react-native";

const InfoBox = ({
  title,
  subtitle,
  containerStyles,
  titleStyles,
  subtitleStyles,
}: any) => {
  return (
    <View className={containerStyles}>
      <Text
        className={`
            text-white text-center font-psemibold
            ${titleStyles}`}
      >
        {title}
      </Text>
      <Text
        className={`
                text-sm text-gray-100 text-center font-pregular
            ${subtitleStyles}`}
      >
        {subtitle}
      </Text>
    </View>
  );
};

export default InfoBox;
