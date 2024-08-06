import React, { useState, useContext, useEffect } from "react";
import {
  View,
  Text,
  ScrollView,
  Pressable,
  ActivityIndicator,
} from "react-native";
import { Screen } from "../../components/Screen";
import { useRouter } from "expo-router";
import PatientContext from "../../contexts/PatientContext";

export default function Questions() {
  const router = useRouter();
  const { patientForm } = useContext(PatientContext) || {};
  const [questions, setQuestions] = useState([]);
  const [question, setQuestion] = useState("");
  const [idQuestion, setIdQuestion] = useState(0);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (patientForm) {
      const aditionalQuestions = patientForm.aditionalQuestions || [];
      setQuestion(aditionalQuestions[0]?.question || "Pregunta no disponible");
    }
    setLoading(false);
  }, [patientForm]);

  useEffect(() => {
    if (patientForm.aditionalQuestions.length > 0) {
      setQuestion(
        patientForm.aditionalQuestions[idQuestion]?.question ||
          "Pregunta no disponible",
      );
    }
  }, [idQuestion, patientForm.aditionalQuestions]);

  const handleAnswer = (answer) => {
    const updatedQuestions = [...(questions || [])];
    updatedQuestions.push({
      question:
        patientForm.aditionalQuestions[idQuestion]?.question ||
        "Pregunta no disponible",
      answer: answer,
    });
    setQuestions(updatedQuestions);

    if (idQuestion < patientForm.aditionalQuestions.length - 1) {
      setIdQuestion(idQuestion + 1);
    } else {
      patientForm.aditionalQuestions = updatedQuestions;
      router.push("/screens/AditionalInfo");
    }
  };

  if (loading) {
    return (
      <Screen>
        <View className="flex-1 justify-center items-center">
          <ActivityIndicator size="large" color="#0000ff" />
        </View>
      </Screen>
    );
  }

  return (
    <Screen>
      <ScrollView className="h-full">
        <Text className="text-2xl font-bold mb-1">Preguntas Adicionales</Text>
        <Text className="text-sm text-gray-400 mb-8">
          Estas preguntas son en base a los síntomas que ha presentado
        </Text>
        <View className="h-auto flex-1">
          <Text className="text-xl font-semibold justify-center items-center text-center mb-10">
            {question}
          </Text>
          <View className="flex-row">
            <Pressable
              className="justify-center items-center w-3/12 bg-black h-12 rounded-lg"
              onPress={() => handleAnswer("Si")}
            >
              <Text className="text-white text-lg font-semibold">Si</Text>
            </Pressable>
            <Pressable
              className="justify-center items-center w-3/12 bg-black h-12 rounded-lg ml-10"
              onPress={() => handleAnswer("No")}
            >
              <Text className="text-white text-lg font-semibold">No</Text>
            </Pressable>
            <Pressable
              className="justify-center items-center w-3/12 bg-black h-12 rounded-lg ml-10"
              onPress={() => handleAnswer("Omitir")}
            >
              <Text className="text-white text-lg font-semibold">Omitir</Text>
            </Pressable>
          </View>
        </View>
      </ScrollView>
    </Screen>
  );
}
