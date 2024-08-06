import Button from "../components/Button";
import { View } from "react-native";
import React, { useContext } from "react";
import PatientContext from "../contexts/PatientContext";

export default function Index() {
  const formPaciente = useContext(PatientContext);
  formPaciente.doctor = "";
  const backPatienteInfo = formPaciente.patientForm.patientInfo;
  formPaciente.patientForm = {};
  formPaciente.patientForm.patientInfo = backPatienteInfo;
  return (
    <View className="bg-white h-full justify-center items-center">
      <Button href="/screens/DoctorInfo">Iniciar Consulta Médica</Button>
    </View>
  );
}
