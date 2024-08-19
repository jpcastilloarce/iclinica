import React, { useState, useContext } from "react";
import { ScrollView } from "react-native";
import { Screen } from "../../components/Screen";
import { useRouter } from "expo-router";
import NavigationButtons from "../../components/NavigationButtons";
import Title from "../../components/Title";
import AditionalContext from "../../contexts/AditionalContext";
import FormTextInput from "../../components/FormTextInput";

export default function AditionalInfo() {
  const router = useRouter();
  const [contacts, setContacts] = useState("");
  const [travels, setTravels] = useState("");
  const aditionalConetxt = useContext(AditionalContext);

  const handleContinuePress = () => {
    if (aditionalConetxt) {
      aditionalConetxt.contacts = contacts;
      aditionalConetxt.travels = travels;
    }
    router.push("/screens/ResultInfo");
  };

  const handleBackPress = () => {
    router.push("/screens/SymptomsInfo");
  };
  return (
    <Screen>
      <ScrollView>
        <Title
          text="Contexto Adicional"
          subtext="Por favor ingrese información adicional"
        />
        <FormTextInput
          label="Contacto reciente con personas enfermas"
          value={contacts}
          onChangeText={setContacts}
          placeholder={`¿Ha tenido contacto reciente con personas enfermas? ¿Cuántas personas? ¿Cuál es su relación con ellas?`}
          isMultiline
          numberOfLines={3}
          isOptional
        />
        <FormTextInput
          label="Viajes recientes"
          value={travels}
          onChangeText={setTravels}
          placeholder="¿Ha viajado recientemente a alguna área con brotes de enfermedades?"
          isMultiline
          numberOfLines={3}
          isOptional
        />
      </ScrollView>
      <NavigationButtons
        onBackPress={handleBackPress}
        onContinuePress={handleContinuePress}
      />
    </Screen>
  );
}
