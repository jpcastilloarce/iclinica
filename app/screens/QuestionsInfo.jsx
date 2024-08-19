import React, { useState, useContext, useEffect } from "react";
import { View, Text, ScrollView, ActivityIndicator } from "react-native";
import { Screen } from "../../components/Screen";
import { useRouter } from "expo-router";
import Button from "../../components/Button";
import Title from "../../components/Title";
import { getQuestions } from "../../lib/iclinicaApi";
import SynptomsContext from "../../contexts/SymptomsContext";
import DoctorContext from "../../contexts/DoctorContext";
import BasicInfoContext from "../../contexts/BasicInfoContext";
import ReasonContext from "../../contexts/ReasonContext";
import RiskContext from "../../contexts/RiskContext";
import QuestionContext from "../../contexts/QuestionsContex";

export default function QuestionsInfo() {
  const router = useRouter();
  const doctorContext = useContext(DoctorContext);
  const basicInfoContext = useContext(BasicInfoContext);
  const reasonContext = useContext(ReasonContext);
  const riskContext = useContext(RiskContext);
  const symptomContext = useContext(SynptomsContext);
  const questionContext = useContext(QuestionContext);

  const [updatedQuestions, setUpdatedQuestions] = useState([]);
  const [questions, setQuestions] = useState([]);
  const [question, setQuestion] = useState("");
  const [idQuestion, setIdQuestion] = useState(0);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const fetchQuestions = async () => {
      setIsLoading(true);
      try {
        const fetchedQuestions = await getQuestions(doctorContext.doctor, {
          patientInfo: basicInfoContext.patientInfo,
          reason: reasonContext.reason,
          riskFactors: riskContext.riskFactors,
          symptoms: symptomContext.symptoms,
        });
        setQuestions(fetchedQuestions);
        setUpdatedQuestions([]);
        setIdQuestion(0);
      } catch (error) {
        console.error("Error fetching questions:", error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchQuestions();
  }, [
    basicInfoContext.patientInfo,
    doctorContext.doctor,
    reasonContext.reason,
    riskContext.riskFactors,
    symptomContext.symptoms,
  ]);

  useEffect(() => {
    if (questions.length > 0) {
      setQuestion(questions[idQuestion]?.question || "Pregunta no disponible");
    }
  }, [idQuestion, questions]);

  const handleAnswer = (answer) => {
    setUpdatedQuestions((prevUpdatedQuestions) => [
      ...prevUpdatedQuestions,
      {
        question: questions[idQuestion]?.question || "Pregunta no disponible",
        answer,
      },
    ]);

    if (idQuestion < questions.length - 1) {
      setIdQuestion(idQuestion + 1);
    } else {
      questionContext.questions = updatedQuestions;
      router.push("/screens/AditionalInfo");
    }
  };

  return (
    <Screen>
      <ScrollView>
        <Title
          text="Preguntas Adicionales"
          subtext="Estas preguntas son en base a los síntomas que ha presentado"
        />
        {isLoading && <ActivityIndicator size="large" color="#0000ff" />}
        {!isLoading && (
          <View>
            <Text className="text-xl font-semibold justify-center items-center text-center mb-10 mt-4">
              {question}
            </Text>
            <View className="flex-row">
              <View className="w-4/12 px-2">
                <Button
                  label="Si"
                  isPrimary
                  onPress={() => handleAnswer("Si")}
                />
              </View>
              <View className="w-4/12 px-2">
                <Button
                  label="No"
                  isPrimary
                  onPress={() => handleAnswer("No")}
                />
              </View>
              <View className="w-4/12 px-2">
                <Button
                  label="Omitir"
                  isPrimary
                  onPress={() => handleAnswer("Omitir")}
                />
              </View>
            </View>
          </View>
        )}
      </ScrollView>
    </Screen>
  );
}
