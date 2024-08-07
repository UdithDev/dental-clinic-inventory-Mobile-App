import AddItem from "@/components/inventory/AddItem";
import ItemForm from "@/components/inventory/ItemForm";
import Welcome from "@/components/inventory/Welcome";
import { useState, useRef } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function Tab() {
  const [toggle, setToggle] = useState(true);
  const printRef = useRef<View>(null);
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={styles.scrollView}>
        <Welcome />
        <AddItem />
        <TouchableOpacity
          onPress={() => setToggle(!toggle)}
          style={styles.button}
        >
          <Text style={styles.buttonText}>Add Item</Text>
        </TouchableOpacity>
        {toggle && (
          <View ref={printRef} style={styles.hiddenContent}>
            <ItemForm />
          </View>
        )}
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    // flex: 1,
  },
  buttonText: {
    color: "white", // text-white equivalent
    fontSize: 14, // text-sm equivalent
    fontWeight: "500", // font-medium equivalent
  },
  button: {
    backgroundColor: "#2D9596", // bg-accent equivalent color
    paddingHorizontal: 8, // px-2 equivalent
    width: 96, // w-24 equivalent
    height: 32, // h-8 equivalent
    borderRadius: 9999, // rounded-full equivalent
    justifyContent: "center",
    alignItems: "center",
    marginVertical: 16, // my-4 equivalent
  },
  scrollView: {
    backgroundColor: "white",
    marginHorizontal: 10,
  },

  hiddenContent: {
    // Style for the content that is conditionally rendered
    // Add your specific styles here if needed
  },
});
