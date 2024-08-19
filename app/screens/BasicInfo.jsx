import React, { useState, useContext, useEffect } from "react";
import { View, Text, ScrollView } from "react-native";
import { Screen } from "../../components/Screen";
import { useRouter } from "expo-router";
import RadioButton from "../../components/RadioButton";
import NavigationButtons from "../../components/NavigationButtons";
import Title from "../../components/Title";
import BasicInfoContext from "../../contexts/BasicInfoContext";
import FormTextInput from "../../components/FormTextInput";

export default function BasicInfo() {
  const router = useRouter();
  const basicInfoContext = useContext(BasicInfoContext);
  const [country, setCountry] = useState("");
  const [age, setAge] = useState("");
  const [gender, setGender] = useState("Masculino");
  const [weight, setWeight] = useState("");
  const [height, setHeight] = useState("");

  useEffect(() => {
    if (basicInfoContext?.patientInfo) {
      const { country, age, gender, weight, height } =
        basicInfoContext.patientInfo;
      setCountry(country || "");
      setAge(age || "");
      setGender(gender || "Masculino");
      setWeight(weight || "");
      setHeight(height || "");
    }
  }, [basicInfoContext?.patientInfo]);

  const handleContinuePress = () => {
    if (!country || !age) {
      alert("Por favor complete el campo País y Edad");
      return;
    }
    if (basicInfoContext) {
      basicInfoContext.patientInfo = {
        country,
        age,
        gender,
        weight,
        height,
      };
    }
    router.push("/screens/ReasonInfo");
  };

  const handleBackPress = () => {
    router.push("/screens/DoctorInfo");
  };

  return (
    <Screen>
      <ScrollView>
        <Title
          text="Información Paciente"
          subtext="Por favor ingrese sus datos"
        />
        <FormTextInput label="País" value={country} onChangeText={setCountry} />
        <FormTextInput
          label={"Edad"}
          value={age}
          onChangeText={setAge}
          type={"numeric"}
        />
        <Text className="text-lg mb-3">Sexo </Text>
        <View className="flex-row mb-8">
          <RadioButton
            isSelected={gender === "Masculino"}
            onPress={() => setGender("Masculino")}
            label="Masculino"
          />
          <RadioButton
            isSelected={gender === "Femenino"}
            onPress={() => setGender("Femenino")}
            label="Femenino"
          />
        </View>
        <FormTextInput
          label="Peso (kg)"
          value={weight}
          placeholder={"Ej: 74"}
          onChangeText={setWeight}
          type={"numeric"}
          isOptional={true}
        />
        <FormTextInput
          label="Altura (cm)"
          value={height}
          placeholder={"Ej: 177"}
          type={"numeric"}
          onChangeText={setHeight}
          isOptional={true}
        />
      </ScrollView>
      <NavigationButtons
        onBackPress={handleBackPress}
        onContinuePress={handleContinuePress}
      />
    </Screen>
  );
}
