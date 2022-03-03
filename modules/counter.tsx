import { StatusBar } from 'expo-status-bar';
import React, { useState } from "react";
import { ActionSheetIOS, StyleSheet, Text, View, Button} from 'react-native';

const styles = StyleSheet.create({
    add: {
        backgroundColor: '#0f0',
        width: '25%',
        height: '100%',
        borderTopStartRadius: 10,
        borderBottomStartRadius: 10,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
    },
    contain: {
        flexDirection: 'row'
    },
    countBox: {
        backgroundColor: '#333',
        width: '50%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100%',
    },
    c: {
        color: '#fff',
    },
    subtract: {
        backgroundColor: '#f00',
        width: '25%',
        height: '100%',
        borderBottomEndRadius: 10,
        borderTopEndRadius: 10,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
    },
    master: {
        width: 'auto',
        height: '100%',
        marginLeft: '0%',
        flexDirection: 'column',
        marginBottom: '2%'
    },
    title: {
        color: '#fff',
        fontWeight: 'bold',
        textAlign: 'center',
        marginBottom: '1%'
    }
});

export default function Counter(props:any){
    const [count, setCount] = useState(0);
    return (
        <View style={styles.master}>
            {/* this is the button container. im sorry that there are like five view tags, the button doesn't support styles :cryscream:*/}
            <Text style={styles.title}>{props.title}</Text>
            <View style={styles.contain}>
                
                <View style={styles.add}>
                    <Button color="#000" onPress={e => {setCount(count+1)}} title="add" />
                </View>
                <View style={styles.countBox}>
                    <Text style={styles.c}>
                       {count}
                    </Text> 
                </View>
                <View style={styles.subtract}>
                    <Button color="#000" onPress={e => {if(count > 0){setCount(count-1)}}} title="sub" />
                </View>
            </View>
        </View>
    );
}