import { Pressable, Text } from "react-native";
import { useRouter } from "expo-router";
import { styled } from "nativewind";

const StyledPressable = styled(Pressable);

const Button = ({ children, href }) => {
  const router = useRouter();
  return (
    <StyledPressable
      className="w-56 h-56 bg-black rounded-full justify-center items-center"
      onPress={() => router.push(href)}
    >
      <Text className="text-white">{children}</Text>
    </StyledPressable>
  );
};

export default Button;
