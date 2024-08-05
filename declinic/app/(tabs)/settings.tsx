import { deleteAuthDetails } from "@/utils/secureStorage";
import { router } from "expo-router";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";

export default function Tab() {
  return (
    <View style={styles.container}>
      <TouchableOpacity
        onPress={async () => {
          await deleteAuthDetails("authToken");
          router.replace("(auth)");
        }}
      >
        <Text>Sign Out</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
