import Footer from "@/components/footer";
import React from "react";
import { SafeAreaView, StyleSheet, Text, View } from "react-native";

const Home = () => {
  return (
    <SafeAreaView style={styles.container}>
      <View>
        <Text>fdfd</Text>
        <Text>CSKLHVHDVH</Text>
      </View>
      <Footer />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    // flex:1,
    backgroundColor: "white",
  },
});

export default Home;
