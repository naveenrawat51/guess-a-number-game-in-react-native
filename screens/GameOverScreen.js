import React from "react";
import { StyleSheet, View, Text, Button, Image } from "react-native";

import BodyText from "../components/BodyText";

export default function GameOverScreen({ roundNumber, yourNumber, onRestart }) {
  return (
    <View style={styles.screen}>
      <BodyText>You Won!!</BodyText>
      <Image
        source={require("../assets/success.png")}
        style={styles.image}
        resizeMode="cover"
      />
      <BodyText>Number of Rounds: {roundNumber}</BodyText>
      <BodyText>Your Number: {yourNumber}</BodyText>
      <Button title="START NEW GAME" onPress={onRestart} />
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  image: {
    width: "60%",
    height: 300,
    marginBottom: 10,
  },
});
