import { Text, StyleSheet } from "react-native";
import Colors from "../constants/color";

interface Props {
  children: React.ReactNode;
}

function Title({ children }: Props) {
  return <Text style={styles.title}>{children}</Text>;
}

export default Title;

const styles = StyleSheet.create({
  title: {
    fontSize: 24,
    fontWeight: "bold",
    color: Colors.white,
    textAlign: "center",
    borderWidth: 2,
    borderColor: Colors.white,
    padding: 12,
  },
});
