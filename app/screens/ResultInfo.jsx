import React, { useState, useContext } from "react";
import {
  View,
  Text,
  ScrollView,
  Pressable,
  TextInput,
  Alert,
} from "react-native";
import { Screen } from "../../components/Screen";
import { useRouter } from "expo-router";
import PatientContext from "../../contexts/PatientContext";
import * as Clipboard from "expo-clipboard";

export default function ResultInfo() {
  const router = useRouter();
  const [resultado] = useState("");
  const { patientForm } = useContext(PatientContext) || {};
  return (
    <Screen>
      <ScrollView className="h-full">
        <Text className="text-2xl font-bold mb-1">Resultado</Text>
        <Text className="text-sm text-gray-400 mb-4">
          Esto no reemplaza una consulta médica
        </Text>
        <TextInput
          className="border border-gray-300 rounded-lg p-1 mb-8 w-full pl-4 text-black"
          value={patientForm.results || resultado}
          multiline
          readOnly
          numberOfLines={3}
        ></TextInput>
      </ScrollView>
      <View className="ml-auto mt-2 flex-row">
        <Pressable
          className="justify-center items-center bg-black h-12 rounded-lg w-44"
          onPress={() => {
            Clipboard.setStringAsync(patientForm.results);
            Alert.alert("Resultado médico", "El texto ha sido copiado");
          }}
        >
          <Text className="text-white text-lg font-semibold">Copiar Texto</Text>
        </Pressable>
        <Pressable
          className="justify-center items-center bg-black h-12 rounded-lg w-44 ml-4"
          onPress={() => {
            router.push("/");
          }}
        >
          <Text className="text-white text-lg font-semibold">Finalizar</Text>
        </Pressable>
      </View>
    </Screen>
  );
}
