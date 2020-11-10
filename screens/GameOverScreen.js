import React from "react";
import { StyleSheet, View, Text, Button } from "react-native";

export default function GameOverScreen({ roundNumber, yourNumber, onRestart }) {
  return (
    <View style={styles.screen}>
      <Text>The Game is Over!!</Text>
      <Text>Number of Rounds: {roundNumber}</Text>
      <Text>Your Number: {yourNumber}</Text>
      <Button title="NEW GAME" onPress={onRestart} />
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
