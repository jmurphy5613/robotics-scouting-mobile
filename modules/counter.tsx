import { StatusBar } from 'expo-status-bar';
import React, { useState } from "react";
import { ActionSheetIOS, StyleSheet, Text, View, Button} from 'react-native';

const styles = StyleSheet.create({
    add: {
        backgroundColor: '#0f0',
        width: '100%',
        borderTopEndRadius: 10,
        borderTopStartRadius: 10
    },
    contain: {
    },
    countBox: {
        backgroundColor: '#333',
        width: '100%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '45%',
    },
    c: {
        color: '#fff',
    },
    subtract: {
        backgroundColor: '#f00',
        width: '100%',
        borderBottomEndRadius: 10,
        borderBottomStartRadius: 10
    },
    master: {
        width: '20%',
        marginLeft: '4%'
    }
});

export default function Counter(){
    const [count, setCount] = useState(0);
    return (
        <View style={styles.master}>
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