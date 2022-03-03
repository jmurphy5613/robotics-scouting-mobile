import { StatusBar } from 'expo-status-bar';
import React, { useState } from "react";
import Counter from "./modules/counter";
import { ActionSheetIOS, ScrollView, StyleSheet, Text, View, Button} from 'react-native';

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#0f172a',
    height: '100%',
    width: '100%'
  },
  textMain: {
    color: '#fff',
    marginTop: '15%',
    marginLeft: '15%',
    marginBottom: '4%'
  },
  textMainContain: {
    alignItems: 'center'
  },
  countContain: {
    flexDirection: 'column',
    width: '90%',
    height: '25%',
    marginLeft: '5%',
    marginRight: '5%'
  },
  lite: {
    fontWeight: 'bold',
    color: '#93f',
    fontStyle: 'italic',
    textShadowColor: '#c0c',
    textShadowRadius: 10,
    fontSize: 24
  }
}); //dont ask about the 44.4, i have no clue either

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
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState(null);
  const [items, setItems] = useState([
    {label: 'tes', value: 'tes'},
    {label: 'test', value: 'test'}
  ]);
  return (
    <ScrollView style={styles.container}>
      <Text style={styles.textMain}>Welcome to: <Text style={styles.lite}> Jordan lite (tm)</Text></Text>
      {/*<Button onPress={handleButton} title="click to annoy the hell out of the host :)" color="#8a968a"/>*/}
      <StatusBar style="auto"/>
      <View style={styles.countContain}>
        <Counter title="low goal"/>
        <Counter title="high goal"/>
        <Counter title="other"/>
        <Counter title="other"/>
      </View>

    </ScrollView>
  );
}
