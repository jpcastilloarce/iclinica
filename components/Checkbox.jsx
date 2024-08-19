import React from "react";
import { View, Text, TouchableOpacity } from "react-native";

const Checkbox = ({ checked, onPress, label }) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      className="flex-row items-center mb-4 mt-6"
    >
      <Text className="ml-2 w-10/12 text-lg mr-2">{label}</Text>
      <View className="h-6 w-6 border-2 border-black items-center justify-center">
        {checked ? <View className="h-3 w-3 bg-black" /> : null}
      </View>
    </TouchableOpacity>
  );
};
export default Checkbox;
