import React from "react";
import { View, Text, TextInput } from "react-native";

const FormTextInput = ({
  label,
  value,
  placeholder,
  type,
  onChangeText,
  isOptional,
  isMultiline,
  numberOfLines,
  readOnly,
}) => {
  return (
    <View>
      <Text className="text-lg mb-3">
        {label}
        {isOptional && (
          <Text className="text-sm text-gray-400"> (Opcional)</Text>
        )}
      </Text>
      <TextInput
        className="border border-gray-300 rounded-lg p-2 mb-4 w-full pl-4 text-base text-black"
        value={value}
        placeholder={placeholder}
        onChangeText={onChangeText}
        keyboardType={type || "default"}
        multiline={isMultiline || false}
        numberOfLines={numberOfLines || 1}
        readOnly={readOnly || false}
      />
    </View>
  );
};

export default FormTextInput;
