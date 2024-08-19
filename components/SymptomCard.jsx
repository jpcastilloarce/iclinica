import React from "react";
import { Text, View } from "react-native";

const SymptomCard = ({ symptom, index }) => {
  return (
    <View
      key={index}
      className="items-center mb-4 border rounded-lg p-4 border-gray-500 bg-gray-100 h-auto"
    >
      <View className="w-11/12 h-auto">
        <Text className="pl-2 text-l text-black flex-wrap">
          Ubicación: {symptom.location}
        </Text>
        <Text className="pl-2 text-l text-black flex-wrap">
          Intensidad: {symptom.intensity}
        </Text>
        <Text className="w-full pl-2 text-sm text-black text-justify h-auto">
          Duración: {symptom.duration}
        </Text>
        <Text className="w-full pl-2 text-sm text-black text-justify h-auto">
          Descripción: {symptom.description}
        </Text>
      </View>
    </View>
  );
};

export default SymptomCard;
