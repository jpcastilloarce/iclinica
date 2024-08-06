import React, { useState, useContext } from "react";
import { View, Text, ScrollView, Pressable, Image } from "react-native";
import { Screen } from "../../components/Screen";
import { useRouter } from "expo-router";
import PatientContext from "../../contexts/PatientContext";

export default function DoctorInfo() {
  const router = useRouter();
  const [dr, setDr] = useState("gpt");
  const formPaciente = useContext(PatientContext);
  formPaciente.doctor = dr;

  const handleDoctorSelection = (doctor) => {
    setDr(doctor);
  };

  return (
    <Screen>
      <ScrollView className="h-full">
        <Text className="text-2xl font-bold mb-1">
          Seleccione el doctor que desea consultar
        </Text>
        <Text className="text-sm text-gray-400 mb-8">
          La única especialidad es Medicina Familiar
        </Text>
        <Pressable
          onPress={() => handleDoctorSelection("gpt")}
          className={`flex-row items-center mb-4 border rounded-lg p-4 ${dr === "gpt" ? "border-black" : "border-gray-300"}`}
        >
          <Image
            source={require("../../assets/drgpt.png")}
            className="h-32 w-32"
          />
          <View>
            <Text className="pl-2 text-lg text-black font-bold">Dr. GPT</Text>
            <Text className="pl-2 text-l text-black">
              Especialidad: Medicina Familiar
            </Text>
            <Text className="pl-2 text-sm text-black text-justify">
              Descripción: Dr. GPT es un Médico Familiar, con el respaldo de
              OpenAI
            </Text>
          </View>
        </Pressable>
        <Pressable
          onPress={() => handleDoctorSelection("gemini")}
          className={`flex-row items-center mb-4 border rounded-lg p-4 ${dr === "gemini" ? "border-black" : "border-gray-300"}`}
        >
          <Image
            source={require("../../assets/drgemini.png")}
            className="h-32 w-32"
          />
          <View>
            <Text className="pl-2 text-lg text-black font-bold">
              Dr. Gemini
            </Text>
            <Text className="pl-2 text-l text-black">
              Especialidad: Medicina Familiar
            </Text>
            <Text className="pl-2 text-sm text-black text-justify">
              Descripción: Dr. Gemini es un Médico Familiar, con el respaldo de
              Google
            </Text>
          </View>
        </Pressable>
      </ScrollView>
      <View className="w-64 ml-auto mt-2">
        <Pressable
          className="justify-center items-center bg-black h-12 rounded-lg"
          onPress={() => router.push("/screens/BasicInfo")}
        >
          <Text className="text-white text-lg font-semibold">Continuar</Text>
        </Pressable>
      </View>
    </Screen>
  );
}
