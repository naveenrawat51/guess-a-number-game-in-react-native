import React, { useState } from 'react';
import { StyleSheet, View, Text, Button, TouchableWithoutFeedback, Keyboard } from 'react-native';
import Card from '../components/Card';
import Colors from '../constants/colors';
import Input from '../components/Input';

export default function StartGameScreen() {

    const [enteredValue, setEnteredValue] = useState('');
    const [confirmed, setConfirmed] = useState(false);
    const [selectedNumber, setSelectedNumber] = useState('');

    const inputNumberHandler = (inputText) => {
        setEnteredValue(inputText.replace(/[^0-9]/g, ''))
    }

    const resetInputHandler = () => {
        setEnteredValue('');
    }

    const confirmInputHandler = () => {
        const choosenNumber = parseInt(enteredValue);
        if(choosenNumber === NaN || choosenNumber <= 0 | choosenNumber > 99) {
            return;
        }
        setConfirmed(true);
        setSelectedNumber(choosenNumber);
        setEnteredValue('');
    }

    let confirmedOutput;
    if(confirmed) {
        confirmedOutput = <Text>Choosen Number: {selectedNumber}</Text>
    }

    return (
        <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
        <View style={styles.screen}>
            <Text style={styles.title}>Start a New App</Text>
            <Card style={styles.inputContainer}>
                <Text>Select a Number</Text>
                <Input
                style={styles.input}
                value={enteredValue}
                onChangeText={inputNumberHandler}
                />
                <View style={styles.buttonContainer}>
                    <View style={styles.btn}>
                    <Button title="Reset"
                    color={Colors.accent}
                    onPress={resetInputHandler}
                    />
                    </View>
                    <View style={styles.btn}>
                    <Button
                    title="Confirm"
                    color={Colors.primary}
                    onPress={confirmInputHandler}/>
                    </View>
                </View>
            </Card>
            {confirmedOutput}
        </View>
        </TouchableWithoutFeedback>
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