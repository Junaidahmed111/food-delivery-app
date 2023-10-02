import { useLayoutEffect } from "react";
import { MEALS, CATEGORIES } from "../data/dummy-data";
import MealItem from "../components/MealItem";
import MealsList from "../components/MealsList/MealsList";
function MealsOverviewScreen({ route, navigation }) {
  const catId = route.params.categoryId;
  const displyMeals = MEALS.filter((mealItem) => {
    return mealItem.categoryIds.indexOf(catId) >= 0;
  });

  useLayoutEffect(() => {
    const categoryTitle = CATEGORIES.find(
      (category) => category.id === catId
    ).title;

    navigation.setOptions({
      title: categoryTitle,
    });
  }),
    [catId, navigation];
  return <MealsList items={displyMeals} />;
}
export default MealsOverviewScreen;
