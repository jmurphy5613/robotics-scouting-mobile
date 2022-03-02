import { StatusBar } from 'expo-status-bar';
import React, { useState } from "react";
import Counter from "./modules/counter";
import { ActionSheetIOS, StyleSheet, Text, View, Button} from 'react-native';

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#0f172a',
    height: '100%',
    width: '100%'
  },
  textMain: {
    color: '#fff',
    marginTop: '30%',
    marginLeft: '15%'
  },
  textMainContain: {
    alignItems: 'center'
  }
})

let i = 0;

const handleButton = () => {
  let jstring = "";
  for(let k = 0; k <= i; k++){
    jstring += 'j';
  }
  console.log(jstring);
  i++;
}

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.textMain}>Welcome to: Jordan lite (tm)</Text>
      <Button onPress={handleButton} title="click to annoy the hell out of the host :)" color="#8a968a"/>
      <StatusBar style="auto" />
      <Counter/>
    </View>
  );
}
