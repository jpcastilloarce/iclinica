import React, { useState, useContext, useEffect, useCallback } from "react";
import { View, Text, ScrollView, Switch } from "react-native";
import { Screen } from "../../components/Screen";
import { useRouter } from "expo-router";
import NavigationButtons from "../../components/NavigationButtons";
import Button from "../../components/Button";
import Title from "../../components/Title";
import SymptomCard from "../../components/SymptomCard";
import FormTextInput from "../../components/FormTextInput";
import FormSliderInput from "../../components/FormSliderInput";
import SynptomsContext from "../../contexts/SymptomsContext";
import Body from "jpc-react-native-body-highlighter";
import bodyPartTranslations from "../../lib/bodyPartTranslations";
import BasicInfoContext from "../../contexts/BasicInfoContext";

export default function SymptomsInfo() {
  const symptomContext = useContext(SynptomsContext);
  const basicInfoContext = useContext(BasicInfoContext);
  const [location, setLocation] = useState("");
  const [description, setDescription] = useState("");
  const [duration, setDuration] = useState("");
  const [intensity, setIntensity] = useState(1);
  const [showNavButtons, setShowNavButtons] = useState(true);
  const [localSymptoms, setLocalSymptoms] = useState([]);
  const [isBackSideEnabled, setIsBackSideEnabled] = useState(false);
  const [bodyPartSelected, setBodyPartSelected] = useState({});
  const toggleSwitch = () =>
    setIsBackSideEnabled((previousState) => !previousState);

  const router = useRouter();
  useEffect(() => {
    setLocalSymptoms(symptomContext.symptoms || []);
  }, [symptomContext.symptoms]);

  const addSymnptom = () => {
    const newSymptom = {
      location,
      description,
      duration,
      intensity,
    };
    const updatedSymptoms = [...localSymptoms, newSymptom];
    setLocalSymptoms(updatedSymptoms);
    symptomContext.symptoms = updatedSymptoms;
    setShowNavButtons(true);
  };

  const removeSymptom = (index) => {
    const updatedSymptoms = localSymptoms.filter((_, i) => i !== index);
    setLocalSymptoms(updatedSymptoms);
    symptomContext.symptoms = updatedSymptoms;
    setShowNavButtons(true);
  };

  const handleAddNewSymptomPress = () => {
    setShowNavButtons(false);
    setBodyPartSelected({});
    setLocation("");
    setDuration("");
    setIntensity(1);
  };

  const handleContinuePress = useCallback(() => {
    if (localSymptoms.length === 0) {
      alert("Por favor ingrese al menos un síntoma");
      return;
    }
    router.push("/screens/QuestionsInfo");
  }, [localSymptoms.length, router]);

  const handleBackPress = () => {
    router.push("/screens/RiskInfo");
  };

  return (
    <Screen>
      <ScrollView>
        <Title
          text={"Sintomas Específicos"}
          subtext={
            "Si quiere un diagnóstico más preciso, por favor ingrese todos los síntomas"
          }
        />

        {showNavButtons && (
          <View>
            <View className="flex-row">
              <View className="w-4/12">
                <Button
                  onPress={handleAddNewSymptomPress}
                  label="+ Agregar"
                  isPrimary
                />
              </View>
              <View className="w-4/12 ml-4">
                <Button
                  onPress={() => removeSymptom(localSymptoms.length - 1)}
                  label="- Eliminar"
                  isPrimary
                />
              </View>
            </View>

            <View className="mt-4">
              {localSymptoms.length > 0 ? (
                localSymptoms.map((symptom, index) => (
                  <SymptomCard key={index} index={index} symptom={symptom} />
                ))
              ) : (
                <Text className="h-10 w-full block">
                  No ha agregado síntomas aún.
                </Text>
              )}
            </View>
          </View>
        )}

        {!showNavButtons && (
          <ScrollView className="-mt-14">
            <View className="bg-gray-50 border border-gray-300 p-4">
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
              <View className="-mt-10 -mb-10">
                <Body
                  data={[bodyPartSelected]}
                  gender={
                    basicInfoContext.patientInfo.gender === "Masculino"
                      ? "male"
                      : "female"
                  }
                  onBodyPartPress={(e) => {
                    setLocation(bodyPartTranslations[e.slug]);
                    setBodyPartSelected({ slug: e.slug, intensity: 2 });
                  }}
                  side={isBackSideEnabled ? "back" : "front"}
                  scale={1.5}
                />
              </View>
              <FormTextInput
                label="Ubicación del dolor o malestar"
                value={location}
                placeholder={"¿Dónde duele? (cabeza, estómago, garganta)"}
                onChangeText={setLocation}
                readOnly
              />
              <FormTextInput
                label="Descripción del síntoma"
                value={description}
                placeholder={"¿Cómo es el dolor? (agudo, leve, punzante)"}
                onChangeText={setDescription}
              />
              <FormTextInput
                label="Duración del síntoma"
                value={duration}
                placeholder={"¿Cuánto tiempo lleva con este síntoma?"}
                onChangeText={setDuration}
              />
              <FormSliderInput
                label="Intensidad del síntoma (1/10)"
                value={intensity}
                onValueChange={setIntensity}
                min={1}
                max={10}
                step={1}
              />
              <View className="flex-row mt-10">
                <View className="w-3/5 ml-auto">
                  <Button
                    onPress={() => setShowNavButtons(true)}
                    label="Cancelar"
                    isPrimary={false}
                  />
                </View>
                <View className="w-2/6">
                  <Button onPress={addSymnptom} label="Agregar" isPrimary />
                </View>
              </View>
            </View>
          </ScrollView>
        )}
      </ScrollView>

      {showNavButtons && (
        <NavigationButtons
          onBackPress={handleBackPress}
          onContinuePress={handleContinuePress}
        />
      )}
    </Screen>
  );
}
