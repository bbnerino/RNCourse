import { useState } from "react";
import {
  Button,
  FlatList,
  Image,
  StatusBar,
  StyleSheet,
  Text,
  View,
} from "react-native";
import GoalItem from "./components/GoalItem";
import GoalInput from "./components/Goalinput";

export default function App() {
  const [name, setName] = useState("");
  const [goals, setGoals] = useState([
    { content: "Learn React Native", id: 1 },
    { content: "Learn React Native Elements", id: 2 },
  ]);
  const [isAddMode, setIsAddMode] = useState(false);
  const addGoalHandler = () => {
    setGoals((currentGoals) => [
      ...currentGoals,
      { content: name, id: Math.random().toString() },
    ]);
    setName("");
    setIsAddMode(false);
  };
  const deleteGoalHandler = (idx) => {
    console.log(idx, "idx", "DELETE");
    setGoals((currentGoals) => {
      return currentGoals.filter((goal) => goal.id !== idx);
    });
  };
  return (
    <>
      <StatusBar style="dark" />
      <View style={styles.container}>
        <View style={styles.inputBox}>
          <Image
            style={styles.image}
            source={require("./assets/images/js.png")}
          />
          <GoalInput
            addGoalHandler={addGoalHandler}
            name={name}
            setName={setName}
            isAddMode={isAddMode}
            setIsAddMode={setIsAddMode}
          />
          <Button title="Add New Goal" onPress={() => setIsAddMode(true)} />
        </View>
        <View style={styles.goalContainer}>
          <Text>List of Goals</Text>

          <FlatList
            data={goals}
            renderItem={(item) => (
              <GoalItem deleteGoalHandler={deleteGoalHandler} item={item} />
            )}
          />
        </View>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  inputBox: {
    fontSize: 20,
    paddingTop: 50,
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-around",
    width: "100%",
    borderBottomColor: "#ccc",
    borderBottomWidth: 1,
  },
  image: {
    width: 100,
    height: 100,
    margin: 10,
  },
  goalContainer: {
    flex: 5,
    width: "100%",
    padding: 10,
  },
});
