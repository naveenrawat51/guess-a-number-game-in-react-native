import React, { useState } from "react";
import { StyleSheet, View } from "react-native";

import Header from "./components/Header";
import StartGameSceen from "./screens/startGameScreen";
import GameScreen from "./screens/GameScreen";

export default function App() {
  const [useNumber, setUseNumber] = useState();

  const startGameHandler = (selectedNumber) => {
    setUseNumber(selectedNumber);
  };

  let content = <StartGameSceen onStartGame={startGameHandler} />;

  if (useNumber) {
    content = <GameScreen userChoice={useNumber} />;
  }

  return (
    <View style={styles.screen}>
      <Header title={"Guess a number"} />
      {content}
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
  },
});
