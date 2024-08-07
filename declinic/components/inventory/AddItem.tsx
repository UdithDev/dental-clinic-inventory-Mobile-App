import React from "react";
import { View, Text, StyleSheet } from "react-native";

const AddItem: React.FC = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Add An Item</Text>
      <Text style={styles.description}>
        To add an item to the inventory, it is important to first provide a
        clear and detailed description of the item. This description should
        include the name of the item, its purpose, and any relevant features or
        specifications. It may also be helpful to include the manufacturer or
        brand name, as well as any model or serial numbers associated with the
        item.
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    maxWidth: 600,
    padding: 16,
  },
  title: {
    fontWeight: "bold",
    fontSize: 22,
    paddingVertical: 16,
    color: "#2D9596",
  },
  description: {
    fontSize: 16,
    color: "#000",
  },
});

export default AddItem;
