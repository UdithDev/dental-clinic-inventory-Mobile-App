import TabBar from "@/components/TabBar";
import { Tabs } from "expo-router";
import React from "react";

export default function LoginLayout() {
  return (
    <Tabs tabBar={(props) => <TabBar {...props} />}>
      <Tabs.Screen
        name="home"
        options={{ title: "Home", headerShown: false }}
      />
      <Tabs.Screen
        name="inventory"
        options={{ title: "Inventory", headerShown: false }}
      />
      <Tabs.Screen
        name="addUser"
        options={{ title: "Add A User", headerShown: false }}
      />

      <Tabs.Screen
        name="index"
        options={{ title: "Login", headerShown: false }}
      />
      <Tabs.Screen
        name="register"
        options={{ title: "Register", headerShown: false, href: null }}
      />
    </Tabs>
  );
}
