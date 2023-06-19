import React from "react";
import { FlatList, Text, View } from "react-native";
import { CATEGORIES } from "../data/dummy-data";
import CategroryGridTile from "../components/CategroryGridTile";

interface Props {
  navigation: any;
}

const CategoriesScreen = ({ navigation }: Props) => {
  const handlePress = () => {
    navigation.navigate("MealsOverView");
  };
  return (
    <FlatList
      data={CATEGORIES}
      renderItem={(category) => {
        return (
          <CategroryGridTile
            title={category.item.title}
            color={category.item.color}
            onPress={handlePress}
          />
        );
      }}
      numColumns={2}
      keyExtractor={(item) => item.id}
    >
      <View>
        <Text>CategoriesScreen</Text>
      </View>
    </FlatList>
  );
};

export default CategoriesScreen;
