import React from "react";
import { View } from "react-native";
import Button from "./Button";

const NavigationButtons = ({ onBackPress, onContinuePress }) => {
  return (
    <View className="flex-row mt-4">
      <View className="w-2/6">
        <Button label="Volver" onPress={onBackPress} isPrimary={false} />
      </View>
      <View className="w-3/5 ml-auto">
        <Button label="Continuar" onPress={onContinuePress} isPrimary />
      </View>
    </View>
  );
};

export default NavigationButtons;
