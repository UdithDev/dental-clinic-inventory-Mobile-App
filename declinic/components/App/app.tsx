import { StyleSheet, Text, View,Button, } from 'react-native'
import React,{useState} from 'react'
import ItemForm from '../inventory/ItemForm';

const app:React.FC = () => {
    const [modalVisible, setModalVisible] = useState(false);
  return (
    <View style={styles.container}>
    <Button title="Add Item" onPress={() => setModalVisible(true)} />
    <ItemForm visible={modalVisible} onClose={() => setModalVisible(false)} />
  </View>
  )
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#f8f8f8",
      },
})

export default app

