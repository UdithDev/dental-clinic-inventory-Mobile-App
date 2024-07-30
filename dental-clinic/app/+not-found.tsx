import React from "react";
import { SafeAreaView, StyleSheet, Text } from "react-native";

const NotFound = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Text>404!</Text>
    </SafeAreaView>
  );
};

export default NotFound;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});
