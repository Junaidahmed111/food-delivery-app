import { MEALS } from "../data/dummy-data";
import { Text, View, StyleSheet, Image } from "react-native";
import MealDetails from "../components/MealDetails";
import Subtitle from "../components/MealDetail/Subtitle";
function MealDetailScreen({ route }) {
  const mealId = route.params.mealId;
  const selectedMeal = MEALS.find((meal) => meal.id === mealId);

  return (
    <View>
      <Image style={styles.image} source={{ uri: selectedMeal.imageUrl }} />
      <Text style={styles.title}>{selectedMeal.title}</Text>

      <MealDetails
        duration={selectedMeal.duration}
        complexity={selectedMeal.complexity}
        affordability={selectedMeal.affordability}
      />
<Subtitle>Ingredients</Subtitle>

      {selectedMeal.ingredients.map((ingredient) => (
        <Text key={ingredient}>{ingredient}</Text>
      ))}
  <Subtitle>Steps</Subtitle>
      {selectedMeal.steps.map((step) => (
        <Text key={step}>{step}</Text>
      ))}
    </View>
  );
}
export default MealDetailScreen;

const styles = StyleSheet.create({
  image: {
    width: "100%",
    height: 350,
  },
  title: {
    fontWeight: "bold",
    textAlign: "center",
    fontSize: 24,
    margin: 8,
  },
  subtitle: {
    color:'#5e2525',
    fontWeight: "bold",
    fontSize: 20,
    textAlign: "center",
  },
  subtitleContainer: {
    borderBottomColor: '#5e2525',
    borderBottomWidth: 2,
    marginHorizontal:24,
    marginVertical:4, 
    padding: 6,
  },
});
