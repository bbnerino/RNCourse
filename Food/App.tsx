import { StatusBar } from "expo-status-bar";
import { SafeAreaView, StyleSheet, Text, View } from "react-native";
import CategoriesScreen from "./screens/CategoriesScreen";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import MealsOverViewScreen from "./screens/MealsOverViewScreen";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <>
      <StatusBar style="light" />
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Categories" component={CategoriesScreen} />
          <Stack.Screen name="MealsOverView" component={MealsOverViewScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
}
// Navigator 의 첫번째 스크린은 기본적으로 시작 스크린이다.


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});

// sudo npm install @react-navigation/native
// npx expo install react-native-screens react-native-safe-area-context
// sudo npm install @react-navigation/native-stack
