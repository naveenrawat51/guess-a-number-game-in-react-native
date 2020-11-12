import React from "react";
import { StyleSheet, View, Image, ScrollView } from "react-native";

import BodyText from "../components/BodyText";
import MainButton from "../components/MainButton";

export default function GameOverScreen({ roundNumber, yourNumber, onRestart }) {
  return (
    <ScrollView>
      <View style={styles.screen}>
        <BodyText>You Won!!</BodyText>
        <Image
          source={require("../assets/success.png")}
          style={styles.image}
          resizeMode="cover"
        />
        <BodyText>Number of Rounds: {roundNumber}</BodyText>
        <BodyText>Your Number: {yourNumber}</BodyText>
        <MainButton onClickNext={onRestart}>START NEW GAME</MainButton>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    paddingVertical: 20,
  },
  image: {
    width: "60%",
    height: 300,
    marginBottom: 10,
  },
});
