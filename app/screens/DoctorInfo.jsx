import React, { useContext, useState, useMemo, useCallback } from "react";
import { ScrollView } from "react-native";
import { Screen } from "../../components/Screen";
import { useRouter } from "expo-router";
import doctors from "../../lib/doctors";
import NavigationButtons from "../../components/NavigationButtons";
import Title from "../../components/Title";
import DoctorContext from "../../contexts/DoctorContext";
import DoctorCard from "../../components/DoctorCard";

export default function DoctorInfo() {
  const router = useRouter();
  const doctorContext = useContext(DoctorContext);
  const [doctor, setDoctor] = useState(doctorContext.doctor);

  const handleDoctorSelection = useCallback(
    (doc) => {
      doctorContext.doctor = doc;
      setDoctor(doc);
    },
    [doctorContext, setDoctor],
  );

  const doctorCards = useMemo(
    () =>
      doctors.map((doctorItem) => (
        <DoctorCard
          key={doctorItem.id}
          doctor={doctorItem}
          onPress={() => handleDoctorSelection(doctorItem.id)}
          isActive={doctor === doctorItem.id}
        />
      )),
    [doctor, handleDoctorSelection],
  );

  return (
    <Screen>
      <ScrollView>
        <Title
          text="Seleccione el doctor que desea consultar"
          subtext="La única especialidad es Medicina Familiar"
        />
        {doctorCards}
      </ScrollView>
      <NavigationButtons
        onBackPress={() => router.push("/")}
        onContinuePress={() => router.push("/screens/BasicInfo")}
      />
    </Screen>
  );
}
