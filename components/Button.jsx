import React from "react";
import { Pressable, Text } from "react-native";

const Button = ({ label, onPress, isPrimary }) => {
  return (
    <Pressable
      className={`justify-center items-center h-12 rounded-lg ${
        isPrimary ? "bg-black" : ""
      }`}
      onPress={onPress}
    >
      <Text
        className={`text-lg font-semibold ${
          isPrimary ? "text-white" : "text-black"
        }`}
      >
        {label}
      </Text>
    </Pressable>
  );
};

export default Button;
