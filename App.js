import React, { useState } from "react";
import { StyleSheet, View } from "react-native";

import Header from "./components/Header";
import StartGameSceen from "./screens/startGameScreen";
import GameScreen from "./screens/GameScreen";
import GameOverScreen from "./screens/GameOverScreen";

export default function App() {
  const [useNumber, setUseNumber] = useState();
  const [guessRounds, setGuessRounds] = useState(0);

  const startGameHandler = (selectedNumber) => {
    setUseNumber(selectedNumber);
    setGuessRounds(0);
  };

  const gameOverHandler = (numberOfRounds) => {
    setGuessRounds(numberOfRounds);
  };

  const newGameHandler = () => {
    setGuessRounds(0);
    setUseNumber(null);
  };

  let content = <StartGameSceen onStartGame={startGameHandler} />;

  if (useNumber && guessRounds <= 0) {
    content = (
      <GameScreen userChoice={useNumber} onGameOver={gameOverHandler} />
    );
  } else if (guessRounds > 0) {
    content = (
      <GameOverScreen
        roundNumber={guessRounds}
        yourNumber={useNumber}
        onRestart={newGameHandler}
      />
    );
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
