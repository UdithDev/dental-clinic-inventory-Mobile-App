import React, {useState} from 'react';
import {Button, StyleSheet, Text, View} from 'react-native';
import LoginPage from './screens/LoginPage';
import RegisterPage from './screens/RegisterPage';

import {NavigationContainer} from '@react-navigation/native';
import LandingPage from './screens/LandingPage';
import AddUser from './screens/AddUser';
import Inventory from './screens/Inventory';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import 'react-native-gesture-handler';
import { createDrawerNavigator } from '@react-navigation/drawer';


const StackNav = () => {
  const Stack = createNativeStackNavigator();
  return (
    <Stack.Navigator
      screenOptions={{
        statusBarColor: '#1e608f',
        headerStyle: {
          backgroundColor: '#1e608f',
        },
        headerTintColor: '#fff',
        headerTitleAlign: 'center',
      }}>
        <Stack.Screen name='Home' component={LandingPage}/>
        <Stack.Screen name='Inventory' component={Inventory}/>
      </Stack.Navigator>
  );
};

function App() {
  const Drawer=createDrawerNavigator();
  return (
    // <RegisterPage />
    // <LoginPage/>

    <NavigationContainer>
      <Drawer.Navigator>
        <Drawer.Screen name='Home' component={LandingPage}/>
      </Drawer.Navigator>
    </NavigationContainer>
  );
}

export default App;
