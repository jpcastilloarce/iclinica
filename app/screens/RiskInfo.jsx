import React, { useState, useContext } from "react";
import { View, Text, ScrollView, Pressable } from "react-native";
import { Screen } from "../../components/Screen";
import { useRouter } from "expo-router";
import PatientContext from "../../contexts/PatientContext";

export default function RiskInfo() {
  const [cigarro, setCigarro] = useState(false);
  const [hipertension, setHipertension] = useState(false);
  const [diabetes, setDiabetes] = useState(false);
  const [asma, setAsma] = useState(false);
  const [acv, setAcv] = useState(false);
  const [ataque, setAtaque] = useState(false);

  const router = useRouter();

  const formPaciente = useContext(PatientContext);
  formPaciente.patientForm.riskFactors = {};
  formPaciente.patientForm.riskFactors.hadHeartAttack = ataque;
  formPaciente.patientForm.riskFactors.hadStroke = acv;
  formPaciente.patientForm.riskFactors.hasAsthma = asma;
  formPaciente.patientForm.riskFactors.hasDiabetes = diabetes;
  formPaciente.patientForm.riskFactors.hasHypertension = hipertension;
  formPaciente.patientForm.riskFactors.smokes = cigarro;
  return (
    <Screen>
      <ScrollView className="h-full">
        <Text className="text-2xl font-bold mb-1">Factores de Riesgo</Text>
        <Text className="text-sm text-gray-400 mb-5">
          Por favor seleccione los factores de riesgo que padece
        </Text>
        <Pressable
          onPress={() => setCigarro(!cigarro)}
          className="flex-row items-center mb-4 mt-10"
        >
          <Text className="text-lg mb-3 w-5/6">Fumo Cigarro</Text>
          <Text
            className={`h-5 w-5 -mt-2 ml-2 border border-gray-500 ${cigarro ? "bg-black text-white" : "bg-white text-black"}`}
          ></Text>
        </Pressable>
        <Pressable
          onPress={() => setHipertension(!hipertension)}
          className="flex-row items-center mb-4 mt-5"
        >
          <Text className="text-lg mb-3 w-5/6">Tengo Hipertensión</Text>
          <Text
            className={`h-5 w-5 -mt-2 ml-2 border border-gray-500 ${hipertension ? "bg-black text-white" : "bg-white text-black"}`}
          ></Text>
        </Pressable>
        <Pressable
          onPress={() => setDiabetes(!diabetes)}
          className="flex-row items-center mb-4 mt-5"
        >
          <Text className="text-lg mb-3 w-5/6">Tengo Diabetes </Text>
          <Text
            className={`h-5 w-5 -mt-2 ml-2 border border-gray-500 ${diabetes ? "bg-black text-white" : "bg-white text-black"}`}
          ></Text>
        </Pressable>
        <Pressable
          onPress={() => setAsma(!asma)}
          className="flex-row items-center mb-4 mt-5"
        >
          <Text className="text-lg mb-3 w-5/6">Tengo Asma </Text>
          <Text
            className={`h-5 w-5 -mt-2 ml-2 border border-gray-500 ${asma ? "bg-black text-white" : "bg-white text-black"}`}
          ></Text>
        </Pressable>
        <Pressable
          onPress={() => setAcv(!acv)}
          className="flex-row items-center mb-4 mt-5"
        >
          <Text className="text-lg mb-3 w-5/6">
            Tuve Accidente Cerebrovascular ACV
          </Text>
          <Text
            className={`h-5 w-5 -mt-2 ml-2 border border-gray-500 ${acv ? "bg-black text-white" : "bg-white text-black"}`}
          ></Text>
        </Pressable>
        <Pressable
          onPress={() => setAtaque(!ataque)}
          className="flex-row items-center mb-4 mt-5"
        >
          <Text className="text-lg mb-3 w-5/6">Tuve Ataque al corazón </Text>
          <Text
            className={`h-5 w-5 -mt-2 ml-2 border border-gray-500 ${ataque ? "bg-black text-white" : "bg-white text-black"}`}
          ></Text>
        </Pressable>
      </ScrollView>
      <View className="w-64 ml-auto mt-2">
        <Pressable
          className="justify-center items-center bg-black h-12 rounded-lg "
          onPress={() => router.push("/screens/SymptomsInfo")}
        >
          <Text className="text-white text-lg font-semibold">Continuar</Text>
        </Pressable>
      </View>
    </Screen>
  );
}
