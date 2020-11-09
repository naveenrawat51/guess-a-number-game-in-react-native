import React from 'react';
import { StyleSheet, View, Text } from 'react-native';

export default function StartGameScreen() {

    return (
        <View style={styles.screen}>
            <Text>The Number Guissing App</Text>
        </View>
    )
};

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        padding: 10,
        alignItems: 'center',

    }
})