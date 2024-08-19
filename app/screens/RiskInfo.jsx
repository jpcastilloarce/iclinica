import React, { useState, useContext, useCallback, useEffect } from "react";
import { ScrollView } from "react-native";
import { Screen } from "../../components/Screen";
import { useRouter } from "expo-router";
import Checkbox from "../../components/Checkbox";
import NavigationButtons from "../../components/NavigationButtons";
import Title from "../../components/Title";
import RiskContext from "../../contexts/RiskContext";

export default function RiskInfo() {
  const riskContext = useContext(RiskContext);
  const [cigarro, setCigarro] = useState(riskContext.riskFactors.smokes);
  const [hipertension, setHipertension] = useState(
    riskContext.riskFactors.hasHypertension,
  );
  const [diabetes, setDiabetes] = useState(riskContext.riskFactors.hasDiabetes);
  const [asma, setAsma] = useState(riskContext.riskFactors.hasAsthma);
  const [acv, setAcv] = useState(riskContext.riskFactors.hadStroke);
  const [ataque, setAtaque] = useState(riskContext.riskFactors.hadHeartAttack);

  const router = useRouter();

  useEffect(() => {
    if (riskContext) {
      setCigarro(riskContext.riskFactors.smokes);
      setHipertension(riskContext.riskFactors.hasHypertension);
      setDiabetes(riskContext.riskFactors.hasDiabetes);
      setAsma(riskContext.riskFactors.hasAsthma);
      setAcv(riskContext.riskFactors.hadStroke);
      setAtaque(riskContext.riskFactors.hadHeartAttack);
    }
  }, [riskContext]);

  const handleContinuePress = useCallback(() => {
    if (riskContext) {
      riskContext.riskFactors = {};
      riskContext.riskFactors.hadHeartAttack = ataque;
      riskContext.riskFactors.hadStroke = acv;
      riskContext.riskFactors.hasAsthma = asma;
      riskContext.riskFactors.hasDiabetes = diabetes;
      riskContext.riskFactors.hasHypertension = hipertension;
      riskContext.riskFactors.smokes = cigarro;
    }
    router.push("/screens/SymptomsInfo");
  }, [acv, asma, ataque, cigarro, diabetes, hipertension, riskContext, router]);

  const handleBackPress = () => {
    router.push("/screens/ReasonInfo");
  };

  return (
    <Screen>
      <ScrollView>
        <Title
          text="Factores de Riesgo"
          subtext="Por favor seleccione los factores de riesgo que padece"
        />
        <Checkbox
          checked={cigarro}
          onPress={() => setCigarro(!cigarro)}
          label="Fumo Cigarro"
        />
        <Checkbox
          checked={hipertension}
          onPress={() => setHipertension(!hipertension)}
          label="Tengo Hipertensión"
        />
        <Checkbox
          checked={diabetes}
          onPress={() => setDiabetes(!diabetes)}
          label="Tengo Diabetes"
        />
        <Checkbox
          checked={asma}
          onPress={() => setAsma(!asma)}
          label="Tengo Asma"
        />
        <Checkbox
          checked={acv}
          onPress={() => setAcv(!acv)}
          label="Tuve Accidente Cerebrovascular ACV"
        />
        <Checkbox
          checked={ataque}
          onPress={() => setAtaque(!ataque)}
          label="Tuve Ataque al corazón"
        />
      </ScrollView>
      <NavigationButtons
        onBackPress={handleBackPress}
        onContinuePress={handleContinuePress}
      />
    </Screen>
  );
}
