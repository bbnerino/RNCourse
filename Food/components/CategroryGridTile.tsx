import React from "react";
import { Pressable, StyleSheet, Text, View, Platform } from "react-native";

interface Props {
  title: string;
  color: string;
  onPress: () => void;
}

const CategroryGridTile = ({ title, color, onPress }: Props) => {
  return (
    <View
      style={[
        styles.gridItem,
        {
          backgroundColor: color,
        },
      ]}
    >
      <Pressable
        android_ripple={{ color: "#ccc" }}
        style={({ pressed }) =>
          pressed ? [styles.flex, styles.buttonPress] : styles.flex
        }
        onPress={onPress}
      >
        <View style={styles.innerContainer}>
          <Text style={styles.title}>{title}</Text>
        </View>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  flex: {
    flex: 1,
  },
  gridItem: {
    flex: 1,
    margin: 15,
    height: 150,
    borderRadius: 10,
    elevation: 3,
    shadowColor: "black",
    shadowOpacity: 0.26,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 10,
    overflow: Platform.OS === "android" ? "hidden" : "visible",
  },
  buttonPress: {
    opacity: 0.5,
  },
  innerContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 10,
  },
  title: {
    fontWeight: "bold",
    fontSize: 16,
  },
});

export default CategroryGridTile;
