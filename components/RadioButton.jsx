import { View, Text, TouchableOpacity } from "react-native";

const RadioButton = ({ isSelected, onPress, label }) => {
  return (
    <TouchableOpacity onPress={onPress} className="flex-row mr-8">
      <View className="h-6 w-6 rounded-full border-2 border-black items-center justify-center">
        {isSelected ? <View className="h-3 w-3 rounded-full bg-black" /> : null}
      </View>
      <Text className="ml-2 text-base">{label}</Text>
    </TouchableOpacity>
  );
};

export default RadioButton;
