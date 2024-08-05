import AddItem from "@/components/inventory/AddItem";
import Welcome from "@/components/inventory/Welcome";
import { View, Text, StyleSheet } from "react-native";

export default function Tab() {
  return (
    <View style={styles.container}>
     <Welcome/>
     <AddItem/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    // flex: 1,
   
  },
});
