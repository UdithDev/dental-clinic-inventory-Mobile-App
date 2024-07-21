import {
  View,
  TextInput,
  StyleSheet,
  Text,
  SafeAreaView,
  Pressable,
  Alert,
  Image,
} from 'react-native';

import React from 'react';
const welcomIcon = require('../../Denta_clinic/assets/ghost.png');

export default function LoginPage() {
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>
        welcome <Image source={welcomIcon} style={styles.icons} />
      </Text>

      <View style={styles.inputView}>
        <TextInput style={styles.input} placeholder="Username" />
        <TextInput style={styles.input} placeholder="Password" />
      </View>

      <View style={styles.buttonView}>
        <Pressable
          style={styles.button}
          onPress={() => Alert.alert('Login Succesfully!')}>
          <Text style={styles.buttonText}>LOGIN</Text>
        </Pressable>
      </View>

      <View style={styles.rememberView}>
        <Pressable onPress={() => Alert.alert('Forget Password!')}>
          <Text style={styles.forgetText}>Forget Password?</Text>
        </Pressable>
      </View>

      <View style={styles.buttonViewRegister}>
        <Pressable
          style={styles.buttonRegister}
          onPress={() => Alert.alert('Login Succesfully!')}>
          <Text style={styles.buttonText}>Register?</Text>
        </Pressable>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#e1e8ed',
    alignItems: 'center',
    paddingTop: 200,
  },

  title: {
    fontSize: 30,
    fontWeight: 'bold',
    textTransform: 'uppercase',
    textAlign: 'center',
    paddingVertical: 40,
    color: 'black',
    // position: 'relative',
  },
  inputView: {
    gap: 15,
    width: '100%',
    paddingHorizontal: 40,
    marginBottom: 5,
  },

  input: {
    height: 50,
    paddingHorizontal: 20,
    borderColor: 'black',
    borderWidth: 1,
    borderRadius: 7,
    color: 'black',
  },

  buttonView: {
    width: '100%',
    paddingHorizontal: 50,
    marginTop: 15,
  },

  button: {
    backgroundColor: '#1e608f',
    height: 45,
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },

  forgetText: {
    fontSize: 15,
    color: 'black',
    marginTop: 30,
  },

  rememberView: {
    width: '100%',
    paddingHorizontal: 50,
    alignItems: 'center',
    marginBottom: 8,
  },

  buttonViewRegister: {
    width: '100%',
    marginTop: 100,
    alignItems: 'center',
  },
  buttonRegister: {
    backgroundColor: '#1e608f',
    height: 45,
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 25,
    alignItems: 'center',
    justifyContent: 'center',
    width: 100,
  },

  icons: {
    position: 'absolute',
    width: 30,
    height: 30,
    top: 245,
    right: 80,
  },
});