import React, { useState, useContext, useEffect } from "react";
import {
  View,
  ScrollView,
  TextInput,
  Alert,
  ActivityIndicator,
} from "react-native";
import { Screen } from "../../components/Screen";
import { useRouter } from "expo-router";
import * as Clipboard from "expo-clipboard";
import Button from "../../components/Button";
import Title from "../../components/Title";
import SynptomsContext from "../../contexts/SymptomsContext";
import DoctorContext from "../../contexts/DoctorContext";
import BasicInfoContext from "../../contexts/BasicInfoContext";
import ReasonContext from "../../contexts/ReasonContext";
import RiskContext from "../../contexts/RiskContext";
import QuestionContext from "../../contexts/QuestionsContex";
import AditionalContext from "../../contexts/AditionalContext";
import { getResult } from "../../lib/iclinicaApi";

export default function ResultInfo() {
  const router = useRouter();
  const [result, setResult] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const doctorContext = useContext(DoctorContext);
  const basicInfoContext = useContext(BasicInfoContext);
  const reasonContext = useContext(ReasonContext);
  const riskContext = useContext(RiskContext);
  const symptomContext = useContext(SynptomsContext);
  const questionContext = useContext(QuestionContext);
  const aditionalContext = useContext(AditionalContext);

  useEffect(() => {
    setIsLoading(true);
    const fetchResult = async () => {
      try {
        const fetchedResult = await getResult(doctorContext.doctor, {
          patientInfo: basicInfoContext.patientInfo,
          reason: reasonContext.reason,
          riskFactors: riskContext.riskFactors,
          symptoms: symptomContext.symptoms,
          aditionalQuestions: questionContext.questions,
          aditionalConetxt: aditionalContext,
        });
        setResult(fetchedResult);
      } catch (error) {
        console.error("Error fetching result:", error);
      } finally {
        setIsLoading(false);
      }
    };
    fetchResult();
  }, [
    doctorContext.doctor,
    basicInfoContext.patientInfo,
    reasonContext.reason,
    riskContext.riskFactors,
    symptomContext.symptoms,
    questionContext.questions,
    aditionalContext,
  ]);
  return (
    <Screen>
      <Title text="Resultado" subtext="Esto no reemplaza una consulta médica" />
      {isLoading && <ActivityIndicator size="large" color="black" />}
      {!isLoading && (
        <>
          <ScrollView className="border border-gray-300 rounded-lg pr-4">
            <TextInput
              className="mb-8 w-full pl-4 text-black text-justify"
              value={result}
              multiline
              readOnly
              numberOfLines={2}
            ></TextInput>
          </ScrollView>
          <View className="flex-row mt-4">
            <View className="w-5/12">
              <Button
                label={"Copiar Texto"}
                onPress={() => {
                  Clipboard.setStringAsync(result);
                  Alert.alert("Resultado médico", "El texto ha sido copiado");
                }}
                isPrimary
              />
            </View>
            <View className="w-5/12 ml-auto">
              <Button
                label={"Finalizar"}
                onPress={() => {
                  router.push("/");
                }}
                isPrimary
              />
            </View>
          </View>
        </>
      )}
    </Screen>
  );
}
