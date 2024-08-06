import React, { useState, useContext, useEffect } from "react";
import {
  View,
  Text,
  ScrollView,
  Pressable,
  TextInput,
  ActivityIndicator,
  Switch,
} from "react-native";
import { Screen } from "../../components/Screen";
import PatientContext from "../../contexts/PatientContext";
import { getQuestions } from "../../lib/iclinicaApi";
import { useRouter } from "expo-router";
import Body from "react-native-body-highlighter";
import Slider from "@react-native-community/slider";

export default function SymptomsInfo() {
  const [location, setLocation] = useState("");
  const [description, setDescription] = useState("");
  const [duration, setDuration] = useState("");
  const [intensity, setIntensity] = useState(1);
  const [isVisible, setIsVisible] = useState(false);
  const [localSymptoms, setLocalSymptoms] = useState([]);
  const formPaciente = useContext(PatientContext);
  const [isLoading, setIsLoading] = useState(false);
  const [isBackSideEnabled, setIsBackSideEnabled] = useState(false);
  const [bodyPartSelected, setBodyPartSelected] = useState({});
  const toggleSwitch = () =>
    setIsBackSideEnabled((previousState) => !previousState);

  const bodyPartTranslations = {
    trapezius: "Trapecio",
    triceps: "Tríceps",
    forearm: "Antebrazo",
    obliques: "Oblicuos",
    adductors: "Aductores",
    calves: "Gemelos",
    head: "Cabeza",
    hair: "Pelo",
    neck: "Cuello",
    chest: "Pecho",
    biceps: "Bíceps",
    abs: "Abdomen",
    "upper-back": "Espalda Alta",
    "lower-back": "Espalda Baja",
    hamstring: "Isquiotibiales",
    gluteal: "Glúteos",
    deltoids: "Deltoides",
    hands: "Manos",
    feet: "Pies",
    ankles: "Tobillos",
    tibialis: "Tibial",
    adductor: "Aductor",
    "front-deltoids": "Deltoides Frontales",
    abductors: "Abductores",
    "back-deltoids": "Deltoides Posteriores",
    quadriceps: "Cuádriceps",
    knees: "Rodillas",
  };

  const router = useRouter();
  useEffect(() => {
    setLocalSymptoms(formPaciente.patientForm.symptoms || []);
  }, [formPaciente.patientForm.symptoms]);

  const handleClick = () => {
    const newSymptom = {
      location,
      description,
      duration,
      intensity,
    };
    const updatedSymptoms = [...localSymptoms, newSymptom];
    setLocalSymptoms(updatedSymptoms);
    formPaciente.patientForm.symptoms = updatedSymptoms;
    setIsVisible(false);
  };

  const deleteSymptom = (index) => {
    const updatedSymptoms = localSymptoms.filter((_, i) => i !== index);
    setLocalSymptoms(updatedSymptoms);
    formPaciente.patientForm.symptoms = updatedSymptoms;
    setIsVisible(false);
  };
  return (
    <Screen>
      <ScrollView className="h-full">
        <Text className="text-2xl font-bold mb-1">Síntomas específicos</Text>
        <Text className="text-sm text-gray-400 mb-8">
          Si quiere un diagnóstico más preciso, por favor ingrese todos los
          síntomas
        </Text>
        {isLoading && <ActivityIndicator size="large" color="#0000ff" />}
        {!isLoading && !isVisible && (
          <View className="h-auto flex-1">
            <Pressable
              className="justify-center items-center w-4/12 bg-black h-12 rounded-lg"
              onPress={() => setIsVisible(true)}
            >
              <Text className="text-white text-l font-semibold">+ Agregar</Text>
            </Pressable>
            <Pressable
              className="justify-center items-center w-4/12 bg-black h-12 rounded-lg ml-36 -mt-12 mb-6"
              onPress={() => deleteSymptom(localSymptoms.length - 1)}
            >
              <Text className="text-white text-l font-semibold">
                - Eliminar último
              </Text>
            </Pressable>
            {localSymptoms.length > 0 ? (
              localSymptoms.map((symptom, index) => (
                <View
                  key={index}
                  className={`items-center mb-4 border rounded-lg p-4 border-gray-500 bg-gray-100-500 h-auto"`}
                >
                  <View className="w-11/12 h-auto">
                    <Text className={`pl-2 text-l text-black flex-wrap`}>
                      Ubicación: {symptom.location}
                    </Text>
                    <Text className={`pl-2 text-l text-black flex-wrap`}>
                      Intensidad: {symptom.intensity}
                    </Text>
                    <Text
                      className={`w-full pl-2 text-sm text-black text-justify h-auto`}
                    >
                      Descripción: {symptom.description}
                    </Text>
                  </View>
                </View>
              ))
            ) : (
              <Text className="h-10 w-full block">
                No ha agregado síntomas aún.
              </Text>
            )}
          </View>
        )}
        {!isLoading && isVisible && (
          <ScrollView className="-mt-28">
            <View className="bg-gray-50 border border-gray-300 p-4 items-center">
              <View className="w-1/4 absolute right-8 scale-150 mt-4 z-10">
                <Switch
                  onValueChange={toggleSwitch}
                  value={isBackSideEnabled}
                  thumbColor="#000"
                />
              </View>
              <Text className="text-base font-bold -mr-8 absolute mt-16 right-12">
                ({isBackSideEnabled ? "Frontal" : "De espalda"})
              </Text>
              <Body
                data={[bodyPartSelected]}
                gender={
                  formPaciente.patientForm.patientInfo.gender === "Masculino"
                    ? "male"
                    : "female"
                }
                onBodyPartPress={(e) => {
                  setLocation(bodyPartTranslations[e.slug]);
                  setBodyPartSelected({ slug: e.slug, intensity: 2 });
                }}
                side={isBackSideEnabled ? "back" : "front"}
                scale={1.3}
              />
              <Text className="text-lg mb-3">
                Ubicación del síntoma (seleccione)
              </Text>
              <TextInput
                className="border border-gray-300 rounded-lg p-1 mb-8 w-full pl-4 text-black"
                value={location}
                placeholder="¿Dónde duele? (cabeza, estómago, garganta)"
                readOnly
                onChangeText={setLocation}
              />
              <Text className="text-lg mb-3">Descripción del síntoma</Text>
              <TextInput
                className="border border-gray-300 rounded-lg p-1 mb-8 w-full pl-4"
                value={description}
                multiline
                numberOfLines={1}
                placeholder="¿Cómo es el dolor? (agudo, sordo, punzante)"
                onChangeText={setDescription}
              />
              <Text className="text-lg mb-3">Duración del síntoma</Text>
              <TextInput
                className="border border-gray-300 rounded-lg p-1 mb-8 w-full pl-4"
                value={duration}
                multiline
                placeholder="¿Cuánto tiempo lleva con este síntoma?"
                numberOfLines={1}
                onChangeText={setDuration}
              />
              <Text className="text-lg mb-3">
                Intensidad del síntoma (1/10)
              </Text>
              <View className="flex-row">
                <Text className="border border-gray-300 text-lg rounded-lg p-2 mb-2 w-1/5 pl-4">
                  {intensity}
                </Text>
                <Slider
                  style={{ width: "60%", height: 50 }}
                  minimumValue={0}
                  step={1}
                  maximumValue={10}
                  minimumTrackTintColor="#CCC"
                  maximumTrackTintColor="black"
                  thumbTintColor="black"
                  onValueChange={setIntensity}
                  value={intensity} // Inicializar slider con el valor actual de `age`
                />
              </View>
              <View className="flex-row mt-10">
                <Pressable
                  className="justify-center items-center w-4/12 bg-black h-12 rounded-lg"
                  onPress={handleClick}
                >
                  <Text className="text-white text-l font-semibold">
                    Agregar
                  </Text>
                </Pressable>
                <Pressable
                  className="justify-center items-center w-4/12  h-12 rounded-lg ml-6"
                  onPress={() => setIsVisible(false)}
                >
                  <Text className="text-black text-l font-semibold">
                    Cancelar
                  </Text>
                </Pressable>
              </View>
            </View>
          </ScrollView>
        )}
      </ScrollView>
      {!isLoading && !isVisible && (
        <View className="w-64 ml-auto mt-2">
          <Pressable
            className="justify-center items-center bg-black h-12 rounded-lg "
            onPress={() => {
              if (localSymptoms.length === 0) {
                alert("Por favor ingrese al menos un síntoma");
                return;
              }
              setIsLoading(true);
              getQuestions(formPaciente.doctor, formPaciente.patientForm).then(
                (questions) => {
                  formPaciente.patientForm.aditionalQuestions = questions;
                  router.push("/screens/Questions");
                  setIsLoading(false);
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
