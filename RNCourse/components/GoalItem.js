import { Pressable, StyleSheet, Text, View } from "react-native";

const GoalItem = ({ item, deleteGoalHandler }) => {
  return (
    <View style={styles.listItem} key={item.item.id}>
      <Pressable
        android_ripple={{ color: "#eaf323" }}
        style={({ pressed }) => pressed && styles.pressed}
        onPress={() => deleteGoalHandler(item.item.id)}
      >
        <Text>{item.item.content}</Text>
      </Pressable>
    </View>
  );
};
export default GoalItem;

const styles = StyleSheet.create({
  listItem: {
    padding: 10,
    marginVertical: 10,
    backgroundColor: "#eaf3fe",
    borderRadius: 5,
  },
  pressed: {
    backgroundColor: "tomato",
  },
});
