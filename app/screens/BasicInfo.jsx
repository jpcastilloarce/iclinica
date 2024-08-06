import React, { useState, useContext, useEffect } from "react";
import { View, Text, TextInput, ScrollView, Pressable } from "react-native";
import { Screen } from "../../components/Screen";
import { useRouter } from "expo-router";
import PatientContext from "../../contexts/PatientContext";

export default function BasicInfo() {
  const router = useRouter();
  const { patientForm } = useContext(PatientContext) || {};
  const [country, setCountry] = useState("");
  const [age, setAge] = useState("");
  const [gender, setGender] = useState("");
  const [weight, setWeight] = useState("");
  const [height, setHeight] = useState("");

  useEffect(() => {
    setGender("Masculino");
    if (patientForm && patientForm.patientInfo) {
      const { country, age, gender, weight, height } = patientForm.patientInfo;
      setCountry(country || "");
      setAge(age || 0);
      setGender(gender || "Masculino");
      setWeight(weight || "");
      setHeight(height || "");
    }
  }, [patientForm]);

  useEffect(() => {
    if (patientForm) {
      patientForm.patientInfo = {
        country,
        age,
        gender,
        weight,
        height,
      };
    }
  }, [country, age, gender, weight, height, patientForm]); // Dependencias para actualizar cuando cambian los valores

  return (
    <Screen>
      <ScrollView className="h-full">
        <Text className="text-2xl font-bold mb-1">Información Paciente</Text>
        <Text className="text-sm text-gray-400 mb-5">
          Por favor ingrese sus datos
        </Text>
        <Text className="text-lg mb-3">País </Text>
        <View className="flex-row">
          <TextInput
            className="border border-gray-300 text-lg rounded-lg p-2 mb-2 w-full text-gray-500"
            value={country}
            onChangeText={setCountry}
          />
        </View>
        <Text className="text-lg mb-3">Edad </Text>
        <TextInput
          className="border border-gray-300 text-lg rounded-lg p-2 mb-2 w-full text-gray-500"
          value={age}
          onChangeText={setAge}
          keyboardType="numeric"
        />
        <Text className="text-lg mb-3">Sexo </Text>
        <View style={{ flexDirection: "row" }} className="mb-4">
          <Pressable
            onPress={() => setGender("Masculino")}
            className="flex-row items-center mb-4"
          >
            <Text
              className={`h-7 w-7 float-left border rounded-full ${gender === "Masculino" ? "bg-black text-white" : "bg-white text-black"}`}
            ></Text>
            <Text
              className={`pl-2 text-lg ${gender === "Masculino" ? "text-black" : "text-gray-400"}`}
            >
              Masculino
            </Text>
          </Pressable>
          <Pressable
            onPress={() => setGender("Femenino")}
            className="flex-row items-center mb-4 ml-4"
          >
            <Text
              className={`h-7 w-7 float-left border rounded-full ${gender === "Femenino" ? "bg-black text-white" : "bg-white text-black"}`}
            ></Text>
            <Text
              className={`pl-2 text-lg ${gender === "Femenino" ? "text-black" : "text-gray-400"}`}
            >
              Femenino
            </Text>
          </Pressable>
        </View>
        <Text className="text-lg mb-3">
          Peso (kg)<Text className="text-sm text-gray-400">(Opcional)</Text>
        </Text>
        <TextInput
          className="border border-gray-300 rounded-lg p-2 mb-4 w-full pl-4"
          value={weight}
          placeholder="Ej: 74"
          onChangeText={setWeight}
          keyboardType="numeric"
        />
        <Text className="text-lg mb-3">
          Altura (cm) <Text className="text-sm text-gray-400">(Opcional)</Text>
        </Text>
        <TextInput
          className="border border-gray-300 rounded-lg p-2 w-full pl-4"
          value={height}
          placeholder="Ej: 177"
          onChangeText={setHeight}
          keyboardType="numeric"
        />
      </ScrollView>
      <View className="w-64 ml-auto mt-2">
        <Pressable
          className="justify-center items-center bg-black h-12 rounded-lg "
          onPress={() => {
            if (country === "" || age === "") {
              alert("Por favor complete el campo País y Edad");
              return;
            }
            router.push("/screens/ReasonInfo");
          }}
        >
          <Text className="text-white text-lg font-semibold">Continuar</Text>
        </Pressable>
      </View>
    </Screen>
  );
}
