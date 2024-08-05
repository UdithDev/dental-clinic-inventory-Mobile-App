import { saveAuthDetails } from "@/utils/secureStorage";
import { router } from "expo-router";
import React, { useState } from "react";
import {
  Alert,
  Image,
  Pressable,
  SafeAreaView,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassowrd] = useState("");

  const handleLogin = async () => {
    try {
      const token = "this-is-a-test-token";
      await saveAuthDetails("authToken", token);
      Alert.alert("Login Successful!");
      router.push("/(tabs)");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>
        welcome
        {/* <Image source={welcomIcon} style={styles.icons} /> */}
      </Text>

      <View style={styles.inputView}>
        <TextInput
          style={styles.input}
          placeholder="Username"
          placeholderTextColor={"gray"}
          onChangeText={setUsername}
        />
        <TextInput
          style={styles.input}
          secureTextEntry
          placeholder="Password"
          placeholderTextColor={"gray"}
          onChangeText={setPassowrd}
        />
      </View>

      <View style={styles.buttonView}>
        <Pressable style={styles.button} onPress={async () => handleLogin()}>
          <Text style={styles.buttonText}>LOGIN</Text>
        </Pressable>
      </View>

      <View style={styles.rememberView}>
        <Pressable onPress={() => Alert.alert("Forget Password!")}>
          <Text style={styles.forgetText}>Forget Password?</Text>
        </Pressable>
      </View>

      <View style={styles.buttonViewRegister}>
        <Pressable
          style={styles.buttonRegister}
          onPress={() => router.push("/register")}
        >
          <Text style={styles.buttonText}>Register?</Text>
        </Pressable>
      </View>
    </SafeAreaView>
  );
};

export default Login;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#e1e8ed",
    alignItems: "center",
    paddingTop: 200,
  },

  title: {
    fontSize: 30,
    fontWeight: "bold",
    textTransform: "uppercase",
    textAlign: "center",
    paddingVertical: 40,
    color: "black",
    // position: 'relative',
  },
  inputView: {
    gap: 15,
    width: "100%",
    paddingHorizontal: 40,
    marginBottom: 5,
  },

  input: {
    height: 50,
    paddingHorizontal: 20,
    borderColor: "black",
    borderWidth: 1,
    borderRadius: 7,
    color: "black",
  },

  buttonView: {
    width: "100%",
    paddingHorizontal: 50,
    marginTop: 15,
  },

  button: {
    backgroundColor: "#1e608f",
    height: 45,
    borderColor: "gray",
    borderWidth: 1,
    borderRadius: 8,
    alignItems: "center",
    justifyContent: "center",
  },
  buttonText: {
    color: "white",
    fontSize: 18,
    fontWeight: "bold",
  },

  forgetText: {
    fontSize: 15,
    color: "black",
    marginTop: 30,
    textDecorationLine: "underline",
  },

  rememberView: {
    width: "100%",
    paddingHorizontal: 50,
    alignItems: "center",
    marginBottom: 8,
  },

  buttonViewRegister: {
    width: "100%",
    marginTop: 100,
    alignItems: "center",
  },
  buttonRegister: {
    backgroundColor: "#1e608f",
    height: 45,
    borderColor: "gray",
    borderWidth: 1,
    borderRadius: 25,
    alignItems: "center",
    justifyContent: "center",
    width: 100,
  },

  icons: {
    position: "absolute",
    width: 30,
    height: 30,
    top: 245,
    right: 80,
  },
});
