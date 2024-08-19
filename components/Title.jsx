import React from "react";
import { View, Text } from "react-native";

const Title = ({ text, subtext }) => {
  return (
    <View>
      <Text className="text-2xl font-bold mb-1">{text}</Text>
      <Text className="text-sm text-gray-400 mb-4">{subtext}</Text>
    </View>
  );
};

export default Title;
