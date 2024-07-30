import { Stack } from "expo-router";

export default function LoginLayout() {
  return (
    <Stack>
      <Stack.Screen
        name="index"
        options={{ title: "Login", headerShown: false }}
      />
      <Stack.Screen
        name="register"
        options={{ title: "Register", headerShown: false }}
      />
      <Stack.Screen
        name="home"
        options={{ title: "Home", headerShown: false }}
      />
    </Stack>
  );
}
