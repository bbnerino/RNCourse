import { Alert, StyleSheet, Text, View } from "react-native";
import CustomButton from "../components/CustomButton";
import Title from "../components/Title";
import { useEffect, useState } from "react";
import NumberContainer from "../components/NumberContainer";
import { Ionicons } from "@expo/vector-icons";
interface Props {
  gameOverHandler: () => void;
  userNumber: number;
}
function generateRandomBetween(min: number, max: number, exclude: number) {
  const rndNum = Math.floor(Math.random() * (max - min)) + min;

  if (rndNum === exclude) {
    return generateRandomBetween(min, max, exclude);
  } else {
    return rndNum;
  }
}

let minBoundary = 1;
let maxBoundary = 100;
const GameScreen = ({ userNumber, gameOverHandler }: Props) => {
  const initialGuess = generateRandomBetween(1, 100, userNumber);
  const [currentGuess, setCurrentGuess] = useState(initialGuess);

  function nextGuessHandler(direction: "lower" | "greater") {
    // direction => 'lower', 'greater'
    if (
      (direction === "lower" && currentGuess < userNumber) ||
      (direction === "greater" && currentGuess > userNumber)
    ) {
      Alert.alert("Don't lie!", "You know that this is wrong...", [
        { text: "Sorry!", style: "cancel" },
      ]);
      return;
    }

    if (direction === "lower") {
      maxBoundary = currentGuess;
    } else {
      minBoundary = currentGuess + 1;
    }

    const newRndNumber = generateRandomBetween(
      minBoundary,
      maxBoundary,
      currentGuess
    );
    setCurrentGuess(newRndNumber);
  }

  useEffect(() => {
    minBoundary = 1;
    maxBoundary = 100;
  }, []);

  useEffect(() => {
    if (currentGuess === userNumber) {
      gameOverHandler();
    }
  }, [currentGuess, userNumber, gameOverHandler]);

  return (
    <View style={styles.container}>
      <Title>GameScreen</Title>
      <NumberContainer>{currentGuess}</NumberContainer>
      <CustomButton onPress={() => nextGuessHandler("lower")}>
        <Ionicons name="md-remove" size={24} color="white" />
      </CustomButton>
      <CustomButton onPress={() => nextGuessHandler("greater")}>
        <Ionicons name="md-add" size={24} color="white" />
      </CustomButton>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 25,
  },
});

export default GameScreen;
