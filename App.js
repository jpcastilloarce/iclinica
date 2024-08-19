import { StatusBar } from "expo-status-bar";
import { View } from "react-native";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { useFonts } from "expo-font";
import * as SplashScreen from "expo-splash-screen";
import React, { useEffect } from "react";
import DoctorContext from "./contexts/DoctorContext";

SplashScreen.preventAutoHideAsync();

export default function App() {
  const [fontsLoaded] = useFonts({
    GeistRegular: require("/assets/fonts/Geist-Regular.ttf"),
  });
  useEffect(() => {
    if (fontsLoaded) {
      SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);

  if (!fontsLoaded) {
    return null;
  }

  return (
    <DoctorContext.Provider>
      <SafeAreaProvider>
        <View>
          <StatusBar style="light" />
        </View>
      </SafeAreaProvider>
    </DoctorContext.Provider>
  );
}
