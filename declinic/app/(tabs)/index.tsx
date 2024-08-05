import { initialState, Link, links } from "@/constants/links";
import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  Image,
  TouchableOpacity,
  ScrollView,
} from "react-native";

const HomeScreen = () => {
  const [imageIndex, setImageIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setImageIndex((prevIndex) => (prevIndex + 1) % links.length);
    }, 2000);

    return () => clearInterval(intervalId); // Cleanup on unmount
  }, []);

  const currentImage = links[imageIndex];

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <View style={styles.headerContainer}>
          <Text style={styles.welcomeText}>Welcome to</Text>
          <Text style={styles.clinicName}>Denta Clinic</Text>
        </View>
        <Text style={styles.description}>
          Your premier destination for dental care. We understand that visiting
          the dentist can be a stressful experience, which is why our team of
          highly skilled professionals is dedicated to providing you with
          personalized care in a comfortable and welcoming environment.
        </Text>
        <View style={styles.imageContainer}>
          <Image
            source={{ uri: currentImage.imgUrl }}
            style={styles.image}
            resizeMode="contain"
          />
        </View>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>{currentImage.title}</Text>
        </TouchableOpacity>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f8f9fa",
  },
  scrollContainer: {
    flexGrow: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
  },
  headerContainer: {
    alignItems: "center",
    marginBottom: 20,
  },
  welcomeText: {
    fontSize: 28,
    color: "#2c3e50",
    textAlign: "center",
    fontWeight: "300",
  },
  clinicName: {
    fontSize: 36,
    fontWeight: "bold",
    color: "#2980b9",
    textAlign: "center",
    marginVertical: 10,
  },
  description: {
    fontSize: 18,
    color: "#34495e",
    textAlign: "center",
    marginVertical: 20,
    lineHeight: 26,
  },
  imageContainer: {
    marginTop: 30,
    width: "100%",
    height: 200,
    justifyContent: "center",
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.8,
    shadowRadius: 2,
    elevation: 5,
    backgroundColor: "#fff",
    borderRadius: 15,
  },
  image: {
    width: "100%",
    height: "100%",
    borderRadius: 15,
    objectFit: "cover",
  },
  button: {
    marginTop: 30,
    backgroundColor: "#2980b9",
    paddingVertical: 15,
    paddingHorizontal: 40,
    borderRadius: 25,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.8,
    shadowRadius: 2,
    elevation: 5,
  },
  buttonText: {
    fontSize: 18,
    color: "#fff",
    textAlign: "center",
    fontWeight: "600",
  },
});

export default HomeScreen;
