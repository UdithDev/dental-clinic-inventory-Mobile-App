import { View, Text, TextInput, Button, StyleSheet } from "react-native";
import React, { useEffect, useState } from "react";
import axios from "axios";
import useUser from "../../hooks/useUser";
import { useTokenAsBearer } from "../../utils/secureStorage";
const expressUrl = "http://localhost:3000";

const ItemForm: React.FC = () => {
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState<string | null>(null);
  const user = useUser();

  useEffect(() => {
    if (success) {
      setError(null);
    }
  }, [success]);

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

  const handleChange = (item: string) => (value: string) => {
    setState({ ...state, [item]: value });
  };

  const handleSubmit = async () => {
    try {
      const requestUrl = `${expressUrl}/api/inventory/add`;
      const requestBody = {
        ...state,
      };
      const response = await axios.post(requestUrl, requestBody, {
        headers: {
          Authorization: useTokenAsBearer(user?.user?.token!),
        },
      });

      if (response.status !== 201) {
        throw new Error("Backend failure");
      } else {
        const { data } = response;
        setSuccess(data);
        // Assuming navigation is used in React Native for page changes
        // Replace with actual navigation logic if different
        // navigation.navigate("Inventory");
      }
    } catch (err: any) {
      setError(err.response.data.error);
    }
  };
  return (
    <View style={styles.formContainer}>
      <View style={styles.inputGroup}>
        <Text style={styles.label}>Item Name</Text>
        <TextInput
          onChangeText={handleChange("item_name")}
          style={styles.input}
          placeholder="Face Masks"
        />
      </View>
      <View style={styles.inputGroup}>
        <Text style={styles.label}>SKU</Text>
        <TextInput
          onChangeText={handleChange("sku")}
          style={styles.input}
          placeholder="XYZ12345"
        />
      </View>
      <View style={styles.inputGroup}>
        <Text style={styles.label}>Serial No</Text>
        <TextInput
          onChangeText={handleChange("serial_number")}
          style={styles.input}
          placeholder="394857739"
          keyboardType="numeric"
        />
        <Text style={styles.helpText}>
          Serial Number must be a unique set of numbers for each item
        </Text>
      </View>
      <View style={styles.inputGroup}>
        <Text style={styles.label}>Vendor Details</Text>
        <TextInput
          onChangeText={handleChange("vendor_details")}
          style={styles.input}
          placeholder="Aspirin Inc."
        />
      </View>
      <View style={styles.inputGroup}>
        <Text style={styles.label}>Location</Text>
        <TextInput
          onChangeText={handleChange("item_location")}
          style={styles.input}
          placeholder="Colombo"
        />
      </View>
      <View style={styles.inputGroup}>
        <Text style={styles.label}>Expiry</Text>
        <TextInput
          onChangeText={handleChange("expiry_date")}
          style={styles.input}
          placeholder="YYYY-MM-DD"
        />
      </View>
      <View style={styles.inputGroup}>
        <Text style={styles.label}>Quantity Available</Text>
        <TextInput
          onChangeText={handleChange("quantity_available")}
          style={styles.input}
          placeholder="100"
          keyboardType="numeric"
        />
      </View>
      <View style={styles.inputGroup}>
        <Text style={styles.label}>Min Stock</Text>
        <TextInput
          onChangeText={handleChange("minimum_stock")}
          style={styles.input}
          placeholder="10 Packs"
          keyboardType="numeric"
        />
      </View>
      <View style={styles.buttonContainer}>
        <Button title="Add" onPress={handleSubmit} />
      </View>
      {error && (
        <View style={styles.errorContainer}>
          <Text style={styles.errorText}>{error}</Text>
        </View>
      )}
      {success && !error && (
        <View style={styles.successContainer}>
          <Text style={styles.successText}>Item Added</Text>
        </View>
      )}
    </View>
  );
};
const styles = StyleSheet.create({
  formContainer: {
    flex: 1,
    padding: 16,
    backgroundColor: "#f8f8f8",
    borderRadius: 8,
  },
  inputGroup: {
    marginBottom: 12,
  },
  label: {
    fontWeight: "bold",
    fontSize: 14,
    marginBottom: 4,
  },
  input: {
    backgroundColor: "#e0e0e0",
    padding: 8,
    borderRadius: 4,
    fontSize: 16,
  },
  helpText: {
    fontSize: 12,
    color: "#888",
    marginTop: 4,
  },
  buttonContainer: {
    marginTop: 16,
  },
  errorContainer: {
    marginTop: 16,
    padding: 8,
    backgroundColor: "#fee",
    borderRadius: 4,
  },
  errorText: {
    color: "#d00",
    fontWeight: "bold",
  },
  successContainer: {
    marginTop: 16,
    padding: 8,
    backgroundColor: "#e0ffe0",
    borderRadius: 4,
  },
  successText: {
    color: "#0a0",
    fontWeight: "bold",
  },
});

export default ItemForm;
