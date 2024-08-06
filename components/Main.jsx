import { View } from "react-native";
import React, { useContext } from "react";
import PatientContext from "../contexts/PatientContext";

export function Main() {
  const formPaciente = useContext(PatientContext);
  formPaciente.doctor = "";
  const backPatienteInfo = formPaciente.patientForm.patientInfo;
  formPaciente.patientForm = {};
  formPaciente.patientForm.patientInfo = backPatienteInfo;
  return <View className="flex-1 justify-center items-center bg-white"></View>;
}
