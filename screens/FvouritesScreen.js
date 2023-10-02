import MealsList from "../components/MealsList/MealsList";
import { View, Text, FlatList, StyleSheet } from "react-native";
import { useContext } from "react";
import { FavoritesContext } from "../store/context/favorites-context";
import { MEALS } from "../data/dummy-data";

function FavouriteScreen() {
  const favoriteMealsCtx = useContext(FavoritesContext);
  const FavoriteMeals = MEALS.filter((meal) =>
    favoriteMealsCtx.ids.includes(meal.id)
  );

  if (FavoriteMeals.length === 0) {
    return (
      <View style={styles.rootContainer}>
        <Text style={styles.text}>You have no Favorites items yet.</Text>
      </View>
    );
  }

  return <MealsList items={FavoriteMeals} />;
}
export default FavouriteScreen;

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  text:{
fontWeight: "bold",
fontSize:18,
color:'#421717',
  }
});
