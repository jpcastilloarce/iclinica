import React, { useState, useContext } from "react";
import {
  View,
  Text,
  ScrollView,
  Pressable,
  TextInput,
  ActivityIndicator,
} from "react-native";
import { Screen } from "../../components/Screen";
import { useRouter } from "expo-router";
import PatientContext from "../../contexts/PatientContext";
import { getResult } from "../../lib/iclinicaApi";

export default function AditionalInfo() {
  const router = useRouter();
  const [contacts, setContacts] = useState("");
  const [travels, setTravels] = useState("");
  const formPaciente = useContext(PatientContext);
  const [isLoading, setIsLoading] = useState(false);
  formPaciente.patientForm.aditionalConetxt = {
    contacts: contacts,
    travels: travels,
  };
  return (
    <Screen>
      <ScrollView className="h-full">
        <Text className="text-2xl font-bold mb-1">Contexto Adicional</Text>
        <Text className="text-sm text-gray-400 mb-8">
          Por favor ingrese información adicional
        </Text>
        {isLoading && <ActivityIndicator size="large" color="#0000ff" />}
        {!isLoading && (
          <>
            <Text className="text-lg mb-3">
              Contacto reciente con personas enfermas
              <Text className="text-sm text-gray-400">(Opcional)</Text>
            </Text>
            <TextInput
              className="border border-gray-300 rounded-lg p-1 mb-8 w-full pl-4"
              value={contacts}
              multiline
              numberOfLines={3}
              onChangeText={setContacts}
            />
            <Text className="text-lg mb-3">
              Viajes recientes
              <Text className="text-sm text-gray-400">(Opcional)</Text>
            </Text>
            <TextInput
              className="border border-gray-300 rounded-lg p-1 mb-8 w-full pl-4"
              value={travels}
              multiline
              numberOfLines={3}
              placeholder="¿Ha viajado recientemente a alguna área con brotes de enfermedades?"
              onChangeText={setTravels}
            />
          </>
        )}
      </ScrollView>
      {!isLoading && (
        <View className="w-64 ml-auto mt-2">
          <Pressable
            className="justify-center items-center bg-black h-12 rounded-lg "
            onPress={() => {
              setIsLoading(true);
              getResult(formPaciente.doctor, formPaciente.patientForm).then(
                (result) => {
                  formPaciente.patientForm.results = result;
                  setIsLoading(false);
                  router.push("/screens/ResultInfo");
                },
              );
            }}
          >
            <Text className="text-white text-lg font-semibold">Continuar</Text>
          </Pressable>
        </View>
      )}
    </Screen>
  );
}
