import React from "react";
import { StyleSheet, Text, View } from "react-native";
import Colors from "../constants/color";

interface Props {
  children: React.ReactNode;
}

const NumberContainer = ({ children }: Props) => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}> {children}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 25,
    borderWidth: 4,
    borderColor: Colors.accent,
    borderRadius: 10,
    marginVertical: 10,
  },
  text: {
    color: Colors.accent,
    fontSize: 35,
    fontWeight: "bold",
    textAlign: "center",
  },
});

export default NumberContainer;
