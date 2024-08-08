import React, { useState, useEffect } from "react";
import { View, Text, TouchableOpacity, Alert, StyleSheet } from "react-native";
import axios from "axios";
import { useNavigation } from '@react-navigation/native';
import { InventoryItem } from "@/app/@types";
import { useTokenAsBearer } from "@/utils/secureStorage";
import useUser from "../../hooks/useUser";
import { PencilIcon, TrashIcon } from "@heroicons/react/24/outline";
import { PiProhibit } from "react-icons/pi";

interface ListItemProps extends InventoryItem {
  collapse: boolean;
}

const ListItem: React.FC<ListItemProps> = ({
  _id,
  item_name,
  sku,
  serial_number,
  vendor_details,
  item_location,
  expiry_date,
  quantity_available,
  minimum_stock,
  collapse,
}) => {
  const [daysUntilExpiration, setDateUntilExpiration] = useState<number>(0);
  const [isDeleted, setIsDeleted] = useState<boolean>(false);
  const user = useUser();
  const navigation = useNavigation();

  const handleDelete = async () => {
    if (window.confirm("Are you sure?")) {
      const response = await axios.delete(
        `${process.env.VITE_API}/inventory/${_id}`,
        {
          headers: {
            Authorization: useTokenAsBearer(user?.user?.token!),
          },
        }
      );
      alert(response.data?.success);
      setIsDeleted(true);
    }
  };

  useEffect(() => {
    const calculateDaysUntilExpiration = () => {
      const today = new Date();
      const expiration = new Date(expiry_date);
      const difference = expiration.getTime() - today.getTime();
      const days = Math.ceil(difference / (1000 * 60 * 60 * 24));
      setDateUntilExpiration(days);
    };

    calculateDaysUntilExpiration();
  }, [expiry_date]);

  const deleteAlert = () => (
    <View style={styles.deleteAlert}>
      <Text style={styles.deleteAlertText}>Item deleted</Text>
    </View>
  );

  const email = "daveudith@gmail.com";

  useEffect(() => {
    const sendEmail = async () => {
      try {
        await axios.post(`${process.env.VITE_API}/inventory/send-email`, {
          item_name,
          sku,
          email,
        });
      } catch (err) {
        console.log("Error sending email", err);
      }
    };

    if (daysUntilExpiration !== null && daysUntilExpiration <= 7) {
      sendEmail();
    }
  }, [daysUntilExpiration, item_name, sku]);

  return (
    <View style={styles.itemContainer}>
      <Text style={[styles.itemText, collapse && styles.hidden]}>{_id}</Text>
      <Text style={styles.itemText}>{item_name}</Text>
      <Text style={styles.itemText}>{sku}</Text>
      <Text style={styles.itemText}>{serial_number}</Text>
      <Text style={styles.itemText}>{vendor_details}</Text>
      <Text style={styles.itemText}>{item_location}</Text>
      <Text style={styles.itemText}>{expiry_date.substring(0, 10)}</Text>
      <Text style={styles.itemText}>
        {daysUntilExpiration < 7 ? (
          <Text style={styles.expiredText}>
            {daysUntilExpiration <= 0 ? "Expired" : `${daysUntilExpiration} Days left`}
          </Text>
        ) : (
          `${daysUntilExpiration} Days Left`
        )}
      </Text>
      <Text style={styles.itemText}>{quantity_available}</Text>
      <Text style={styles.itemText}>{minimum_stock}</Text>
      <View style={styles.actionsContainer}>
        {user?.user?.role !== "INTERN" ? (
          <>
            <TouchableOpacity onPress={() => navigation.navigate('Update', { _id })}>
            <PencilIcon width={24} height={24} color="black" />
            </TouchableOpacity>
            <TouchableOpacity onPress={handleDelete}>
            <TrashIcon width={24} height={24} color="black" />
            </TouchableOpacity>
          </>
        ) : (
          <PiProhibit />
        )}
      </View>
      {isDeleted && deleteAlert()}
    </View>
  );
};

const styles = StyleSheet.create({
  itemContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 8,
    borderBottomWidth: 1,
    borderColor: "#ccc",
  },
  itemText: {
    flex: 1,
    textAlign: "center",
  },
  hidden: {
    display: "none",
  },
  expiredText: {
    color: "red",
    fontWeight: "bold",
  },
  actionsContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  icon: {
    marginHorizontal: 8,
  },
  deleteAlert: {
    position: "absolute",
    bottom: 16,
    left: 16,
    padding: 8,
    backgroundColor: "white",
    borderColor: "red",
    borderWidth: 1,
  },
  deleteAlertText: {
    color: "red",
    fontWeight: "bold",
  },
});

export default ListItem;
