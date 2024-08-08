import { View, Text, ScrollView, TextInput, StyleSheet, Button } from "react-native";
import React, { useEffect, useRef, useState } from "react";
import useUser from "../../hooks/useUser";
import { InventoryItem } from "@/app/@types";
import { useTokenAsBearer } from "@/utils/secureStorage";
import axios from "axios";
import { savePDF } from "@progress/kendo-react-pdf";
import { useNavigation } from "@react-navigation/native";
import ListItem from "./ListItems";

const List: React.FC = () => {
  const user = useUser();
  const [toggle, setToggle] = useState(true);
  const [inventory, setInventory] = useState<Array<InventoryItem>>();
  const [query, setQuery] = useState("");
  const table = useRef(null);
  const navigation = useNavigation();

  const getInventory = async () => {
    const url = `${process.env.VITE_API}/inventory`;
    const { data } = await axios.get(url, {
      headers: {
        Authorization: useTokenAsBearer(user?.user?.token!),
      },
    });

    setInventory(data);
  };

  useEffect(() => {
    if (user?.user && !inventory) {
      getInventory()
        .then(() => {})
        .catch((err) => console.error(err));
    }
  }, [user, inventory]);

  const exportPDF = () => {
    let element = table.current;
    if (element !== null) {
      savePDF(element, {
        paperSize: "a4",
        margin: "2cm",
        landscape: true,
        fileName: "CurrentInventory",
        scale: 0.5,
      });
    }
  };

  const searchItems = (inventory: InventoryItem[], keyword: string) => {
    return inventory.filter((item) =>
      Object.values(item).join("").toLowerCase().includes(keyword.toLowerCase())
    );
  };

  const filteredItems = searchItems(inventory ? inventory : [], query);

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Current Inventory</Text>
        <View style={styles.searchContainer}>
          <Text style={styles.searchLabel}>Search</Text>
          <TextInput
            style={styles.searchInput}
            placeholder="Search..."
            onChangeText={setQuery}
          />
        </View>
      </View>
      <ScrollView style={styles.tableContainer}>
        {filteredItems.map((item) => (
          <ListItem key={item._id} collapse={toggle} {...item} />
        ))}
      </ScrollView>
      <View style={styles.buttonContainer}>
        <Button title="Download as PDF" onPress={exportPDF} />
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 16,
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 16,
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
  },
  searchContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  searchLabel: {
    marginRight: 8,
  },
  searchInput: {
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 4,
    padding: 8,
  },
  tableContainer: {
    maxHeight: 600,
  },
  buttonContainer: {
    marginTop: 16,
    alignItems: "center",
  },
});

export default List;
