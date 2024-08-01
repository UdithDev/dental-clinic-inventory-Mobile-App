import React from "react";
import { SafeAreaView, StyleSheet, Text, View } from "react-native";
import hero from ""
const Home = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Text>Welcome to</Text>
      <Text>
        Denta Clinic
      </Text>
      <Text>
        Your premier destination for dental care. We understand that visiting
        hte dentist can be a stressful experience, which is why our team of 
        highly skilled professionals is dedicated to providing you with 
        personalized care in a comfortable and welcomming enviroment.
      </Text>
      <View>
        <Image source={}/>
      </View>
      
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: 10,
    backgroundColor: "white",
  },
});

export default Home;
