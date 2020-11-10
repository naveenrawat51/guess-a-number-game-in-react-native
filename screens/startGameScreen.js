import React from 'react';
import { StyleSheet, View, Text, TextInput, Button } from 'react-native';
import Card from '../components/Card';
import Colors from '../constants/colors';
import Input from '../components/Input';

export default function StartGameScreen() {

    return (
        <View style={styles.screen}>
            <Text style={styles.title}>Start a New App</Text>
            <Card style={styles.inputContainer}>
                <Text>Select a Number</Text>
                <Input style={styles.input} />
                <View style={styles.buttonContainer}>
                    <View style={styles.btn}>
                    <Button title="Reset" color={Colors.accent} />
                    </View>
                    <View style={styles.btn}>
                    <Button title="Confirm" color={Colors.primary} />
                    </View>
                </View>
            </Card>
        </View>
    )
};

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        padding: 10,
        alignItems: 'center',

    },
    title: {
        fontSize: 20,
        marginVertical: 10
    },
    inputContainer: {
        width: 300,
        maxWidth: '80%',
        alignItems: 'center'
    },
    buttonContainer: {
        flexDirection: 'row',
        width: '100%',
        justifyContent: 'space-between',
        paddingHorizontal: 15
    },
    btn: {
        width: 100
    },
    input: {
        width: 70,
        textAlign: 'center'
    }
})