import { View, Text, FlatList, StyleSheet } from "react-native";
function MealItem({ title }) {
  return (
    <View>
      <Text>{title}</Text>
    </View>
  );
}
export default MealItem;
