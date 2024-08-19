import React from "react";
import { Pressable, Text, Image, View } from "react-native";

const DoctorCard = ({ doctor, onPress, isActive }) => {
  return (
    <Pressable
      key={doctor.id}
      onPress={onPress}
      className={`flex-row items-center mb-4 border rounded-lg p-4 ${isActive ? "border-black" : "border-gray-300"}`}
    >
      <Image source={doctor.image} className="h-32 w-1/3" />
      <View className="w-2/3">
        <Text className="pl-2 text-lg text-black font-bold">{doctor.name}</Text>
        <Text className="pl-2 text-sm text-black">
          Especialidad: {doctor.specialty}
        </Text>
        <Text className="pl-2 text-sm text-black text-justify">
          Descripción: {doctor.description}
        </Text>
      </View>
    </Pressable>
  );
};

export default DoctorCard;
