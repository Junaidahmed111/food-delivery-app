import { View, Text, FlatList, StyleSheet } from "react-native";
import { MEALS } from "../data/dummy-data";
import MealItem from "../components/MealItem";
function MealsOverviewScreen({ route }) {
  const catId = route.params.categoryId;
  const displyMeals = MEALS.filter((mealItem) => {
    return mealItem.categoryIds.indexOf(catId) >= 0;
  });

  function renderMealItem(itemData) {
    return (
      <MealItem title={itemData.item.title} imageUrl={itemData.item.imageUrl} />
    );
  }
  return (
    <View style={styles.container}>
      <FlatList
        data={displyMeals}
        keyExtractor={(item) => item.id}
        renderItem={renderMealItem}
      />
    </View>
  );
}
export default MealsOverviewScreen;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
});
