import CircleButton from "../components/CircleButton";
import { Screen } from "../components/Screen";
import { View } from "react-native";

export default function Index() {
  return (
    <Screen>
      <View className="justify-center items-center h-full">
        <CircleButton href="/screens/DoctorInfo">
          Iniciar Consulta Médica
        </CircleButton>
      </View>
    </Screen>
  );
}
