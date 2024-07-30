import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import { Link } from "@react-navigation/native";
import Logo from "./UI/logo";

export default function Footer() {
  return (
    <View style={styles.footer}>
      <View style={styles.container}>
        <View style={styles.flexContainer}>
          <Link to="/" style={styles.logoLink}>
            <Logo style={styles.logo} />
          </Link>
          <View style={styles.linksContainer}>
            <TouchableOpacity>
              <Text style={styles.link}>About</Text>
            </TouchableOpacity>
            <TouchableOpacity>
              <Text style={styles.link}>Contact</Text>
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.separator} />
        <Text style={styles.copyRight}>
          © 2023 <Text style={styles.dentalLink}>Dental Clinic™</Text>. All
          Right Reseved.
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  footer: {
    backgroundColor: "white",
    borderTopWidth: 2,
    borderTopColor: "rgba(0, 0, 0, 0.2)",
    paddingVertical: 8,
  },
  container: {
    width: "100%",
    maxWidth: "100%",
    marginHorizontal: "auto",
    padding: 16,
  },
  flexContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  logoLink: {
    height: 32,
    width: 96,
  },
  logo: {
    height: "100%",
    width: "100%",
  },
  linksContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    alignItems: "center",
    marginBottom: 16,
  },
  link: {
    marginRight: 16,
    fontSize: 14,
    color: "black",
    textDecorationLine: "underline",
  },
  separator: {
    height: 1,
    backgroundColor: "rgba(0, 0, 0, 0.2)",
    marginVertical: 16,
  },
  copyRight: {
    textAlign: "center",
    fontSize: 14,
    color: "black",
  },
  dentalLink: {
    // textDecorationLine: 'underline',
  },
});
