import { Button } from "react-native";
import { StyleSheet, Text, View, TextInput, Modal } from "react-native";

function GoalInput({ name, setName, addGoalHandler, setIsAddMode, isAddMode }) {
  return (
    <Modal visible={isAddMode} animationType="fade">
      <View style={styles.conatiner}>
        <TextInput
          style={styles.textInput}
          placeholder="Enter your name"
          onChangeText={(val) => setName(val)}
          value={name}
        />
        <Button color="blue" title="Add" onPress={() => addGoalHandler()} />
        <Button
          color="tomato"
          title="Cancel"
          onPress={() => setIsAddMode(false)}
        />
      </View>
    </Modal>
  );
}
export default GoalInput;

const styles = StyleSheet.create({
  textInput: {
    borderWidth: 1,
    borderColor: "#cccccc",
    padding: 8,
    margin: 10,
    width: 200,
    borderRadius: 5,
    color: "#000",
    width: "70%",
    height: 40,
    alignContent: "center",
    justifyContent: "center",
  },
  conatiner: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
  },
});
