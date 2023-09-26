import { Text, View, StyleSheet, Image } from "react-native";

function subtitle({ children }) {
  return (
    <View style={styles.subtitleContainer}>
      <Text style={styles.subtitle}>{children}</Text>
    </View>
  );
}
export default subtitle;
const styles = StyleSheet.create({
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
});
