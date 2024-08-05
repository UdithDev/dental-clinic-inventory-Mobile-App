import React, { useState } from "react";
import {
  SafeAreaView,
  Text,
  StyleSheet,
  View,
  TextInput,
  Pressable,
  Alert,
} from "react-native";
import RNPickerSelect from "react-native-picker-select";

interface Role {
  label: string;
  value: string;
}

const roles: Role[] = [
  { label: "Intern", value: "intern" },
  { label: "Manager", value: "manager" },
  { label: "Admin", value: "admin" },
];

const AddUser = () => {
  const [selectedRole, setSelectedRole] = useState<string | null>(null);
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>Add new user!</Text>

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

        <Text style={styles.inputTitle}>Role</Text>
        <RNPickerSelect
          onValueChange={(value: any) => setSelectedRole(value)}
          items={roles}
          placeholder={{ label: "Select a role", value: null }}
          style={pickerSelectStyles}
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

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 40,
    backgroundColor: "white",
  },
  title: {
    fontSize: 30,
    fontWeight: "bold",
    // textTransform: "uppercase",
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
const pickerSelectStyles = StyleSheet.create({
  inputIOS: {
    fontSize: 16,
    paddingVertical: 12,
    paddingHorizontal: 10,
    borderWidth: 1,
    borderColor: "gray",
    borderRadius: 4,
    color: "black",
    paddingRight: 30, // to ensure the text is never behind the icon
  },
  inputAndroid: {
    fontSize: 16,
    paddingHorizontal: 10,
    paddingVertical: 8,
    borderWidth: 0.5,
    borderColor: "purple",
    borderRadius: 8,
    color: "black",
    paddingRight: 30, // to ensure the text is never behind the icon
  },
});
export default AddUser;
