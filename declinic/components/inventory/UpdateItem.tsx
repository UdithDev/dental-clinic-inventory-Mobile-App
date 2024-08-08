import React, { useEffect, useState } from "react";
import { View, Text, TextInput, Button, StyleSheet, Alert } from "react-native";
import { useNavigation, useRoute } from "@react-navigation/native";
import axios from "axios";
import { AiOutlineExclamationCircle } from "react-icons/ai";
import { useTokenAsBearer } from "@/utils/secureStorage";
import useUser from "../../hooks/useUser";
import { Picker } from '@react-native-picker/picker';

const UpdateItem = () => {
  const user = useUser();
  const navigation = useNavigation();
  const route = useRoute();
  const { id } = route.params as { id: string };

  const [message, setMessage] = useState<{
    type: "Error" | "Success";
    message: string;
  }>();
  const [hasFetched, setHasFetched] = useState<boolean>(false);

  const [state, setState] = useState({
    item_name: "",
    sku: "",
    serial_number: "",
    vendor_details: "",
    item_location: "",
    expiry_date: "",
    quantity_available: "",
    minimum_stock: "",
  });

  const getItembyId = async () => {
    const response = await axios.get(
      `${process.env.VITE_API}/inventory/${id}`,
      {
        headers: {
          Authorization: useTokenAsBearer(user?.user?.token!),
        },
      }
    );

    setState({
      item_name: response?.data?.item_name,
      sku: response?.data?.sku,
      serial_number: response?.data?.serial_number,
      vendor_details: response?.data?.vendor_details,
      item_location: response?.data?.item_location,
      expiry_date: response?.data?.expiry_date,
      quantity_available: response?.data?.quantity_available,
      minimum_stock: response?.data?.minimum_stock,
    });

    setHasFetched(true);
  };

  useEffect(() => {
    if (user?.user && !hasFetched) {
      getItembyId().catch((err) => console.log(err));
    }
  }, [id, user, hasFetched]);

  const handleChange = (item: string) => (value: string) => {
    setState({ ...state, [item]: value });
  };

  const {
    item_name,
    sku,
    serial_number,
    vendor_details,
    item_location,
    expiry_date,
    quantity_available,
    minimum_stock,
  } = state;

  const handleSubmit = async () => {
    try {
      const response = await axios.put(
        `${process.env.VITE_API}/inventory/${id}`,
        {
          item_name,
          sku,
          serial_number,
          vendor_details,
          item_location,
          expiry_date,
          quantity_available,
          minimum_stock,
        },
        {
          headers: {
            Authorization: useTokenAsBearer(user?.user?.token!),
          },
        }
      );

      setMessage({
        message: response.data,
        type: "Success",
      });
      Alert.alert("Success", "Item Updated");
      navigation.navigate("Inventory");
    } catch (err: any) {
      setMessage({
        message: err.response?.data?.error,
        type: "Error",
      });
      Alert.alert("Error", err.response?.data?.error || "An error occurred");
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.label}>Item Name</Text>
      <TextInput
        style={styles.input}
        onChangeText={handleChange("item_name")}
        value={state.item_name}
        placeholder="Face Masks"
      />

      <Text style={styles.label}>SKU</Text>
      <TextInput
        style={styles.input}
        onChangeText={handleChange("sku")}
        value={state.sku}
        placeholder="XYZ12345"
      />

      <Text style={styles.label}>Serial No</Text>
      <TextInput
        style={styles.input}
        onChangeText={handleChange("serial_number")}
        value={state.serial_number}
        placeholder="394857739"
        keyboardType="numeric"
      />

      <Text style={styles.label}>Vendor Details</Text>
      <TextInput
        style={styles.input}
        onChangeText={handleChange("vendor_details")}
        value={state.vendor_details}
        placeholder="Asprin Inc."
      />

      <Text style={styles.label}>Location</Text>
      <Picker
        selectedValue={state.item_location}
        onValueChange={handleChange("item_location")}
        style={styles.picker}
      >
        <Picker.Item label="Select" value="" />
        <Picker.Item label="Ampara" value="Ampara" />
        <Picker.Item label="Anuradhapura" value="Anuradhapura" />
        <Picker.Item label="Badulla" value="Badulla" />
        <Picker.Item label="Batticaloa" value="Batticaloa" />
        <Picker.Item label="Colombo" value="Colombo" />
        <Picker.Item label="Galle" value="Galle" />
        <Picker.Item label="Gampaha" value="Gampaha" />
        <Picker.Item label="Hambantota" value="Hambantota" />
        <Picker.Item label="Jaffna" value="Jaffna" />
        <Picker.Item label="Kalutara" value="Kalutara" />
        <Picker.Item label="Kandy" value="Kandy" />
        <Picker.Item label="Kegalle" value="Kegalle" />
        <Picker.Item label="Kilinochchi" value="Kilinochchi" />
        <Picker.Item label="Kurunegala" value="Kurunegala" />
        <Picker.Item label="Mannar" value="Mannar" />
        <Picker.Item label="Matale" value="Matale" />
        <Picker.Item label="Matara" value="Matara" />
        <Picker.Item label="Monaragala" value="Monaragala" />
        <Picker.Item label="Mullaitivu" value="Mullaitivu" />
        <Picker.Item label="Nuwara Eliya" value="Nuwara Eliya" />
        <Picker.Item label="Polonnaruwa" value="Polonnaruwa" />
        <Picker.Item label="Puttalam" value="Puttalam" />
        <Picker.Item label="Ratnapura" value="Ratnapura" />
        <Picker.Item label="Trincomalee" value="Trincomalee" />
        <Picker.Item label="Vavuniya" value="Vavuniya" />
      </Picker>

      <Text style={styles.label}>Expiry</Text>
      <TextInput
        style={styles.input}
        onChangeText={handleChange("expiry_date")}
        value={state.expiry_date.substring(0, 10)}
        placeholder="YYYY-MM-DD"
      />

      <Text style={styles.label}>Quantity Available</Text>
      <TextInput
        style={styles.input}
        onChangeText={handleChange("quantity_available")}
        value={state.quantity_available}
        placeholder="100"
        keyboardType="numeric"
      />

      <Text style={styles.label}>Min Stock</Text>
      <TextInput
        style={styles.input}
        onChangeText={handleChange("minimum_stock")}
        value={state.minimum_stock}
        placeholder="10 packs"
        keyboardType="numeric"
      />

      <Button title="Update" onPress={handleSubmit} />

      {message?.type === "Error" && (
        <View style={styles.messageContainer}>
          <AiOutlineExclamationCircle style={styles.icon} />
          <Text style={styles.errorMessage}>{message.message}</Text>
        </View>
      )}
      {message?.type === "Success" && (
        <View style={styles.messageContainer}>
          <AiOutlineExclamationCircle style={styles.successIcon} />
          <Text style={styles.successMessage}>Item Updated</Text>
        </View>
      )}
    </View>
  );
};

export default UpdateItem;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: "#f5f5f5",
  },
  label: {
    fontSize: 14,
    color: "#333",
    fontWeight: "bold",
    marginBottom: 5,
  },
  input: {
    backgroundColor: "#fff",
    borderColor: "#ddd",
    borderWidth: 1,
    padding: 10,
    borderRadius: 5,
    marginBottom: 15,
  },
  picker: {
    backgroundColor: "#fff",
    borderColor: "#ddd",
    borderWidth: 1,
    borderRadius: 5,
    marginBottom: 15,
  },
  messageContainer: {
    flexDirection: "row",
    alignItems: "center",
    padding: 10,
    borderRadius: 5,
    marginTop: 10,
  },
  errorMessage: {
    color: "#e74c3c",
    marginLeft: 10,
  },
  successMessage: {
    color: "#2ecc71",
    marginLeft: 10,
  },
  icon: {
    color: "#e74c3c",
    fontSize: 20,
  },
  successIcon: {
    color: "#2ecc71",
    fontSize: 20,
  },
});
