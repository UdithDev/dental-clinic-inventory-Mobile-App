import { getAuthDetails } from "@/utils/secureStorage";
import { router } from "expo-router";
import { Stack } from "expo-router/stack";
import { useEffect } from "react";

export default function Layout() {
  useEffect(() => {
    getAuthDetails("authToken").then((data) => {
      if (data) router.push("(tabs)");
    });
  }, []);

  return (
    <Stack>
      <Stack.Screen name="index" options={{ headerShown: false }} />
      <Stack.Screen name="register" options={{ headerShown: false }} />
    </Stack>
  );
}
