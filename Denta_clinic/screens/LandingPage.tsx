import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import Footer from '../components/Footer';

export default function LandingPage() {
  return (
    <SafeAreaView style={styles.container}>
      <View>
        <Text>
          fdfd
        </Text>
        <Text>
          CSKLHVHDVH
        </Text>
      </View>
      <Footer/>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container:{
    // flex:1,
    backgroundColor:'white'
  }
});
