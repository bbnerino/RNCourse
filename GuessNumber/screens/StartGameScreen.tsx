import {
  Alert,
  Dimensions,
  StyleSheet,
  Text,
  TextInput,
  View,
  KeyboardAvoidingView,
  ScrollView,
  useWindowDimensions,
} from "react-native";
import CustomButton from "../components/CustomButton";
import { useState } from "react";
import Colors from "../constants/color";

interface Props {
  pickNumber: (num: number) => void;
}

function StartGameScreen({ pickNumber }: Props) {
  const [value, setValue] = useState("");
  const { width, height } = useWindowDimensions();
  const onsubmit = () => {
    const num = parseInt(value);
    if (isNaN(num)) {
      return Alert.alert("Invalid", "Not a number", [
        {
          text: "Okay",
          style: "destructive",
          onPress: () => setValue(""),
        },
      ]);
    }
    if (num < 1 || num > 99) {
      return Alert.alert("Invalid", "Number must be between 1 and 99", [
        {
          text: "Okay",
          style: "destructive",
          onPress: () => setValue(""),
        },
      ]);
    }
    pickNumber(num);
  };
  return (
    <ScrollView>
      <KeyboardAvoidingView style={styles.screen}>
        <View style={styles.inputContainer}>
          <View style={styles.inputBox}>
            <TextInput
              value={value}
              onChangeText={(text) => setValue(text)}
              style={styles.input}
              maxLength={2}
              keyboardType="number-pad"
              autoCorrect={false}
            />
          </View>
          <View style={styles.btnbox}>
            <View style={styles.btn}>
              <CustomButton onPress={() => setValue("")}>Reset</CustomButton>
            </View>
            <View style={styles.btn}>
              <CustomButton onPress={() => onsubmit()}>Confirm</CustomButton>
            </View>
          </View>
        </View>
      </KeyboardAvoidingView>
    </ScrollView>
  );
}
export default StartGameScreen;

const deviceWidth = Dimensions.get("window").width;
const deviceHeight = Dimensions.get("window").height;

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  inputContainer: {
    marginTop: deviceHeight < 400 ? 20 : 100,
    marginHorizontal: 24,
    padding: 20,
    backgroundColor: Colors.modal,
    borderRadius: 8,
    height: 200,
    elevation: 6, // Android
    shadowColor: Colors.primary600, // iOS
    shadowOffset: { width: 10, height: 10 }, // iOS
    shadowOpacity: 0.25, // iOS
    shadowRadius: 5, // iOS
  },
  inputBox: {
    height: 80,
    alignItems: "center",
  },
  input: {
    height: 50,
    width: 50,
    borderBottomColor: Colors.primary,
    borderBottomWidth: 2,
    marginTop: 16,

    color: Colors.white,
    fontSize: 25,
    fontWeight: "bold",
    textAlign: "center",
  },
  btnbox: {
    flex: 1,
    flexDirection: "row",
    marginTop: 16,
    justifyContent: "space-between",
    height: 100,
  },
  btn: {
    width: "45%",
  },
});
