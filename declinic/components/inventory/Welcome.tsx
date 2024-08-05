import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import React, { useState } from "react";
import { FontAwesome } from "@expo/vector-icons";

const Welcome: React.FC = () => {
  const [toggle, setToggle] = useState(false);
  return (
    <View style={[styles.container, toggle ? styles.hidden : {}]}>
      <Text style={styles.title}>Welcome!</Text>
      <View style={styles.textContainer}>
        <Text style={{ fontSize: 22 }}>
          Welcome to our dental clinic's inventory page!
        </Text>
        <Text>
          Here you'll find everything you need to know about the dental products
          and equipment we use to ensure the highest level of care for our
          patients. We take great pride in maintaining a comprehensive and
          up-to-date inventory of dental supplies, from state-of-the-art dental
          chairs to the latest in sterilization technology.
        </Text>
        <Text>
          Our team is dedicated to providing you with the best possible dental
          experience, and we believe that starts with using the best tools and
          equipment available. We hope you find our inventory page informative
          and helpful, and we look forward to serving your dental needs soon.
        </Text>
        <TouchableOpacity
          onPress={() => setToggle(!toggle)}
          style={styles.button}
        >
          <Text style={styles.buttonText}>Collapse this.</Text>
          <FontAwesome name="arrow-circle-up" size={24} color="black" />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    maxWidth: 600, // max-w-6xl equivalent
    padding: 16,
    paddingTop: 20,
  },
  hidden: {
    display: "none",
  },

  title: {
    fontWeight: "bold",
    fontSize: 24,
    paddingVertical: 16,
    color: "#2D9596", // text-accent equivalent color
  },
  textContainer: {
    flexDirection: "column",
    gap: 16,
  },
  buttonText: {
    color: "#2D9596", // text-accent equivalent color
    fontWeight: "bold",
    fontSize: 14,
    marginRight: 8,
  },

  button: {
    flexDirection: "row",
    alignItems: "center",
    cursor: "pointer",
    marginTop: 16,
  },
});
export default Welcome;
