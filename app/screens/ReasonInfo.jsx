import React, { useState, useContext } from "react";
import { View, Text, ScrollView, Pressable, TextInput } from "react-native";
import { Screen } from "../../components/Screen";
import { useRouter } from "expo-router";
import PatientContext from "../../contexts/PatientContext";

export default function ReasonInfo() {
  const router = useRouter();
  const [reason, setReason] = useState("");

  const formPaciente = useContext(PatientContext);
  formPaciente.patientForm.reason = reason;
  return (
    <Screen>
      <ScrollView className="h-full">
        <Text className="text-2xl font-bold mb-1">Motivo de la consulta</Text>
        <Text className="text-sm text-gray-400 mb-8">
          Ingrese la información solicitada
        </Text>
        <Text className="text-lg mb-3">
          Descripción principal del problema o síntoma
        </Text>
        <TextInput
          className="border border-gray-300 rounded-lg p-1 mb-8 w-full pl-4 text-lg"
          value={reason}
          multiline
          numberOfLines={6}
          placeholder="(Gripe, dolor de cabeza al despertar, migrañas, resfriados, bronquitis, neumonía, diarrea, estreñimiento, gastritis)"
          onChangeText={setReason}
        />
      </ScrollView>
      <View className="w-64 ml-auto mt-2">
        <Pressable
          className="justify-center items-center bg-black h-12 rounded-lg "
          onPress={() => {
            if (reason === "") {
              alert("Por favor ingrese el motivo de la consulta");
              return;
            }
            router.push("/screens/RiskInfo");
          }}
        >
          <Text className="text-white text-lg font-semibold">Continuar</Text>
        </Pressable>
      </View>
    </Screen>
  );
}
