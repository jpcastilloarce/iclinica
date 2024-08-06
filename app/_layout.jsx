import { Link, Stack } from "expo-router";
import { Pressable, View, Image } from "react-native";
import { CircleInfoIcon } from "../components/Icons";

const favicon = require("../assets/mini-logo.png");

export default function Layout() {
  return (
    <View className="flex-1">
      <Stack
        screenOptions={{
          headerStyle: { display: "none" },
          headerTitle: "",
          headerLeft: () => (
            <Link asChild href="/">
              <Pressable>
                <Image source={favicon} />
              </Pressable>
            </Link>
          ),
          headerRight: () => (
            <Link asChild href="/screens/About">
              <Pressable>
                <CircleInfoIcon />
              </Pressable>
            </Link>
          ),
        }}
      />
    </View>
  );
}
