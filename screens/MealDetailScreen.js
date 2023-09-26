import { MEALS } from "../data/dummy-data";
import { Text, View, StyleSheet, Image, ScrollView } from "react-native";
import MealDetails from "../components/MealDetails";
import Subtitle from "../components/MealDetail/Subtitle";
import List from "../components/MealDetail/List";
function MealDetailScreen({ route }) {
  const mealId = route.params.mealId;
  const selectedMeal = MEALS.find((meal) => meal.id === mealId);

  return (
    <ScrollView style={styles.root}>
      <View style={styles.imageContainer}>
        <Image style={styles.image} source={{ uri: selectedMeal.imageUrl }} />
      </View>
      <Text style={styles.title}>{selectedMeal.title}</Text>

      <MealDetails
        duration={selectedMeal.duration}
        complexity={selectedMeal.complexity}
        affordability={selectedMeal.affordability}
      />
      <View style={styles.listOuterContainer}>
        <View style={styles.listContainer}>
          <Subtitle>Ingredients</Subtitle>
          <List data={selectedMeal.ingredients} />
          <Subtitle>Steps</Subtitle>
          <List data={selectedMeal.steps} />
        </View>
      </View>
    </ScrollView>
  );
}
export default MealDetailScreen;

const styles = StyleSheet.create({
  root: {
    marginBottom: 32,
  },
  image: {
    width: "80%",
    height: 350,
    borderRadius: 15,
    borderWidth: 1,
  },
  imageContainer: {
    alignItems: "center",
    marginTop: 20,
    overflow: "hidden",
  },

  title: {
    fontWeight: "bold",
    textAlign: "center",
    fontSize: 24,
    margin: 8,
  },
  subtitle: {
    color: "#5e2525",
    fontWeight: "bold",
    fontSize: 20,
    textAlign: "center",
  },
  subtitleContainer: {
    borderBottomColor: "#5e2525",
    borderBottomWidth: 2,
    marginHorizontal: 24,
    marginVertical: 4,
    padding: 6,
  },
  listOuterContainer: {
    alignItems: "center",
  },
  listContainer: {
    width: "80%",
  },
});
