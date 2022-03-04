import { StatusBar } from 'expo-status-bar';
import React, { useState } from "react";
import { ScrollView, StyleSheet, Text, View, Button} from 'react-native';
import AppLoading from 'expo-app-loading';
import * as Font from 'expo-font';
import * as ScreenOrientation from 'expo-screen-orientation';
import TypeWriter from 'react-native-typewriter';

const styles = StyleSheet.create({
  root: {
    height: '100%',
    width: '100%',
    backgroundColor: '#0f172a'
  },
  mainContent: {
    width: '90%',
    height: '100%',
    marginTop: '14%',
    marginLeft: '5%'
  },
  welcomeText: {
    color: '#E879F9',
    fontFamily: 'JetBrains'
  },
  mainTitle: {
    color: '#ffffff',
    fontSize: 40,
    fontFamily: 'MediumSNFS'
  }

}); //dont ask about the 44.4, i have no clue either

const loadFonts = async () => {
  await Font.loadAsync({
    'JetBrains': require('./assets/fonts/JetBrainsMonoLight.ttf'),
  });
  await Font.loadAsync({
    'MediumSNFS': require('./assets/fonts/SFNSDisplay-Medium.ttf')
  })
}

const setOrientation = async () => {
  await ScreenOrientation.lockAsync(ScreenOrientation.OrientationLock.LANDSCAPE_RIGHT);
}

export default function App() {


  const [isLoaded, setIsLoaded] = useState(false);

  if(!isLoaded) {
    return (
      <AppLoading
        startAsync={async () => {
          await loadFonts();
          await setOrientation();
        }}
        onFinish={() => setIsLoaded(true)}
        onError={(er) => console.log(er)}
      />

    )
  }

  return (
    // <View style={styles.countContain}>
    //   <ScrollView style={styles.container}>
    //     <Text style={styles.textMain}>Welcome to: <Text style={styles.lite}> Jordan lite (tm)</Text></Text>
    //     {/*<Button onPress={handleButton} title="click to annoy the hell out of the host :)" color="#8a968a"/>*/}
    //     <StatusBar style="auto"/>
        
    //       <Counter title="low goal"/>
    //       <Counter title="high goal"/>
    //       <Counter title="other"/>
    //       <Counter title="other"/>
    //       <Counter title="other"/>
    //       <Counter title="other"/>
    //       <SelectDropdown
    //       data={['almong', 'this is a test']}
    //       onSelect={(selectedItem, index) => {
    //         console.log(selectedItem, index)
    //       }}
    //       buttonTextAfterSelection={(selectedItem, index) => {
    //         // text represented after item is selected
    //         // if data array is an array of objects then return selectedItem.property to render after item is selected
    //         return selectedItem
    //       }}
    //       rowTextForSelection={(item, index) => {
    //         // text represented for each item in dropdown
    //         // if data array is an array of objects then return item.property to represent item in dropdown
    //         return item
    //       }}
    //     />
    //   </ScrollView>
    // </View>

    <View style={styles.root}>
      <StatusBar  style="auto" />
      <ScrollView style={styles.mainContent}>
        <Text style={styles.welcomeText}>Hey there, welcome to</Text>
        <Text style={styles.mainTitle}>Jordan, the robotics scouting software that powers Roboforce</Text>
        <Button title="0. Scout" color="#841584" />
      </ScrollView>
    </View>
  );
}