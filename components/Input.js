import React from 'react';
import { StyleSheet, TextInput } from 'react-native';

export default function Input(props) {

    return(
        <TextInput
        {...props}
        style={{
            ...styles.input,
            ...props.style}}
            placeholder="Number"
            autoCorrect={false}
            keyboardType="numeric"
            maxLength={2}
            />
    )
}

const styles = StyleSheet.create({
    input: {
        height: 30,
        borderBottomWidth: 1,
        borderBottomColor: 'gray',
        marginVertical: 10
    }
})