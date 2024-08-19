import { View } from "react-native";

export function Screen({ children }) {
  return <View className="flex-1 p-6 bg-white h-full">{children}</View>;
}
