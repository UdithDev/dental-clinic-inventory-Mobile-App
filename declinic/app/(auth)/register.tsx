import React from "react";
import {
  Alert,
  Pressable,
  SafeAreaView,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";

const Register = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>Sign here !</Text>

      <View style={styles.inputView}>
        <Text style={styles.inputTitle}>Username</Text>
        <TextInput
          style={styles.input}
          placeholder="Username"
          placeholderTextColor={"gray"}
        />
        <Text style={styles.inputTitle}>Password</Text>
        <TextInput
          style={styles.input}
          placeholder="Password"
          placeholderTextColor={"gray"}
        />
        <Text style={styles.inputTitle}>Email</Text>
        <TextInput
          style={styles.input}
          placeholder="email"
          placeholderTextColor={"gray"}
        />
      </View>

      <View style={styles.buttonView}>
        <Pressable
          style={styles.button}
          onPress={() => Alert.alert("Sign in Succesfully !")}
        >
          <Text style={styles.buttonText}>Sign in</Text>
        </Pressable>
      </View>
    </SafeAreaView>
  );
};

export default Register;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#b2b9bf",
    alignItems: "center",
    paddingTop: 150,
  },
  title: {
    fontSize: 30,
    fontWeight: "bold",
    textTransform: "uppercase",
    textAlign: "center",
    paddingVertical: 40,
    color: "#265073",
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
    borderColor: "",
    borderWidth: 1,
    borderRadius: 8,
    color: "black",
  },

  inputTitle: {
    fontSize: 18,
    fontWeight: "500",
    color: "black",
  },

  buttonView: {
    width: "100%",
    paddingHorizontal: 50,
    marginTop: 35,
  },
  button: {
    backgroundColor: "#1e608f",
    height: 45,
    borderColor: "#1e608f",
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
});
