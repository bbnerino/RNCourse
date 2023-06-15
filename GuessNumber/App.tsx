import { ImageBackground, SafeAreaView, StyleSheet } from "react-native";
import StartGameScreen from "./screens/StartGameScreen";
import { LinearGradient } from "expo-linear-gradient";
import { useEffect, useState } from "react";
import GameScreen from "./screens/GameScreen";
import GameOverScreen from "./screens/GameOverScreen";

export default function App() {
  const [num, setNum] = useState<number | null>(null);
  const [gameOver, setGameOver] = useState(false);

  const [screen, setScreen] = useState(
    <StartGameScreen pickNumber={pickNumber} />
  );
  function pickNumber(num: number | null) {
    setNum(num);
    setGameOver(false);
  }
  useEffect(() => {
    if (num)
      return setScreen(
        <GameScreen userNumber={num} gameOverHandler={gameOverHandler} />
      );
    setScreen(<StartGameScreen pickNumber={pickNumber} />);
  }, [num]);

  useEffect(() => {
    if (gameOver && num) {
      setScreen(<GameOverScreen />);
    } else {
      setScreen(<StartGameScreen pickNumber={pickNumber} />);
    }
  }, [gameOver]);

  const gameOverHandler = () => {
    setGameOver(true);
  };
  return (
    <LinearGradient colors={["#d674a5", "#8124c8"]} style={styles.rootScreen}>
      <ImageBackground
        source={require("./assets/images/game.png")}
        resizeMode="cover"
        style={styles.rootScreen}
        imageStyle={styles.backgroundImage}
      >
        <SafeAreaView>{screen}</SafeAreaView>
      </ImageBackground>
    </LinearGradient>
  );
}
const styles = StyleSheet.create({
  rootScreen: {
    flex: 1,
  },
  backgroundImage: {
    opacity: 0.15,
  },
});

// expo install expo-linear-gradient
// LinearGradient
