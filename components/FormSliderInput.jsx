import React from "react";
import { View, Text } from "react-native";
import Slider from "@react-native-community/slider";

const FormSliderInput = ({ label, value, onValueChange, min, max, step }) => {
  return (
    <View>
      <Text className="text-lg mb-3">{label}</Text>
      <View className="flex-row">
        <Text className="border border-gray-300 text-lg rounded-lg p-2 mb-2 w-1/5 pl-4">
          {value}
        </Text>
        <Slider
          style={{ width: "80%", height: 50 }}
          minimumValue={min || 0}
          step={step || 1}
          maximumValue={max || 50}
          minimumTrackTintColor="#CCC"
          maximumTrackTintColor="black"
          thumbTintColor="black"
          onValueChange={onValueChange}
          value={value}
        />
      </View>
    </View>
  );
};

export default FormSliderInput;
