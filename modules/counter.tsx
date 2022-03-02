import { StatusBar } from 'expo-status-bar';
import React, { useState } from "react";
import { ActionSheetIOS, StyleSheet, Text, View, Button} from 'react-native';


export default function Counter(){
    return (
        <View>
            <Button onPress={e => {console.log('something did it')}} title="+" />
        </View>
    );
}