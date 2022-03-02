import { StatusBar } from 'expo-status-bar';
import React, { useState } from "react";
import { ActionSheetIOS, StyleSheet, Text, View, Button} from 'react-native';

const styles = StyleSheet.create({
    add: {
        backgroundColor: '#0f0',
        width: '10%',
    },
    contain: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
    },
    countBox: {
        backgroundColor: '#aaa',
        marginTop: '10%',
        marginBottom: '10%',
        width: '20%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '45%'
    },
    c: {
        color: '#fff',
    },
    subtract: {
        backgroundColor: '#f00',
        width: '10%',
    }
});

export default function Counter(){
    const [count, setCount] = useState(0);
    return (
        <View>
            {/* this is the button container. im sorry that there are like five view tags, the button doesn't support styles :cryscream:*/}
            <View style={styles.contain}>
                <View style={styles.add}>
                    <Button color="#000" onPress={e => {setCount(count+1)}} title="+" />
                </View>
                <View style={styles.countBox}>
                    <Text style={styles.c}>
                        {count}
                    </Text>
                </View>
                <View style={styles.subtract}>
                    <Button color="#000" onPress={e => {if(count > 0){setCount(count-1)}}} title="-" />
                </View>
            </View>
        </View>
    );
}