import { StatusBar } from "expo-status-bar";
import { View } from "react-native";
import { SafeAreaProvider } from "react-native-safe-area-context";
import Main from "./components/Main";
import { useFonts } from "expo-font";
import * as SplashScreen from "expo-splash-screen";
import PatientContext from "./contexts/PatientContext";
import React from "react";

SplashScreen.preventAutoHideAsync();

export default function App() {
  const [fontsLoaded] = useFonts({
    GeistRegular: require("/assets/fonts/Geist-Regular.ttf"),
  });
  if (!fontsLoaded) {
    return null;
  } else {
    SplashScreen.hideAsync();
  }

  return (
    <PatientContext.Provider>
      <SafeAreaProvider>
        <View className="flex-1 bg-white justify-center items-center px-12">
          <StatusBar style="light" />
          <Main />
        </View>
      </SafeAreaProvider>
    </PatientContext.Provider>
  );
}
