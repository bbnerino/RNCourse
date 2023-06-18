import React from "react";
import { Image, StyleSheet, Text, View } from "react-native";
import Title from "../components/Title";
import CustomButton from "../components/CustomButton";

interface Props {
  roundsNumber: number;
  userNumber: number;
  onRestart: () => void;
}

const GameOverScreen = ({ roundsNumber, userNumber, onRestart }: Props) => {
  return (
    <View style={styles.root}>
      <Title>GAME OVER</Title>
      <View style={styles.imageContainer}>
        <Image
          style={styles.image}
          source={require("../assets/images/success.png")}
        />
      </View>
      <Text>
        Your phone needed <Text style={styles.summaryText}>{roundsNumber}</Text>{" "}
        rounds to guess the number
        <Text style={styles.summaryText}>{userNumber}</Text>
      </Text>
      <CustomButton onPress={() => onRestart()}>NEW GAME</CustomButton>
    </View>
  );
};

const styles = StyleSheet.create({
  root: {
    // flex: 1,
    padding: 25,
    alignItems: "center",
    justifyContent: "center",
  },

  imageContainer: {
    width: 300,
    height: 300,
    borderRadius: 150,
    borderWidth: 3,
    borderColor: "#9b9b9b",
    overflow: "hidden",
    marginVertical: 30,
    marginHorizontal: 30,
  },
  image: {
    width: "100%",
    height: "100%",
  },
  summaryText: {
    fontFamily: "open-sans-bold",
    color: "#1bc0dd",
    fontSize: 20,
  },
});

export default GameOverScreen;
