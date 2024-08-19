import React, { useState, useContext, useCallback } from "react";
import { ScrollView } from "react-native";
import { Screen } from "../../components/Screen";
import { useRouter } from "expo-router";
import NavigationButtons from "../../components/NavigationButtons";
import Title from "../../components/Title";
import ReasonContext from "../../contexts/ReasonContext";
import FormTextInput from "../../components/FormTextInput";

export default function ReasonInfo() {
  const router = useRouter();
  const reasonContext = useContext(ReasonContext);
  const [reason, setReason] = useState(reasonContext.reason);

  const handleContinuePress = useCallback(() => {
    if (!reason.trim()) {
      alert("Por favor ingrese el motivo de la consulta");
      return;
    }
    if (reasonContext) {
      reasonContext.reason = reason;
    }
    router.push("/screens/RiskInfo");
  }, [reason, reasonContext, router]);

  const handleBackPress = () => {
    router.push("/screens/BasicInfo");
  };

  return (
    <Screen>
      <ScrollView>
        <Title
          text="Motivo de la consulta"
          subtext="Ingrese la información solicitada"
        />
        <FormTextInput
          label="Descripción principal del problema o síntoma"
          value={reason}
          onChangeText={setReason}
          isMultiline
          numberOfLines={6}
          placeholder="(Gripe, dolor de cabeza al despertar, migrañas, resfriados, bronquitis, neumonía, diarrea, estreñimiento, gastritis)"
        />
      </ScrollView>

      <NavigationButtons
        onBackPress={handleBackPress}
        onContinuePress={handleContinuePress}
      />
    </Screen>
  );
}
