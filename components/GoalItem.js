import { View, Text, StyleSheet, Pressable } from "react-native";

const GoalItem = ({ id, text, onDelete }) => {
  return (
    <View style={styles.goalItem}>
      <Pressable
        android_ripple={{
          color: "#210644",
          borderless: true,
        }}
        style={({ pressed }) => pressed && styles.pressedItem}
        onPress={onDelete.bind(this, id)}
      >
        <Text style={styles.goalText}>{text}</Text>
      </Pressable>
    </View>
  );
};

export default GoalItem;

const styles = StyleSheet.create({
  goalItem: {
    margin: 8,
    borderRadius: 6,
    backgroundColor: "#5e0acc",
  },
  pressedItem: {
    opacity: 0.5,
  },
  goalText: {
    color: "white",
    padding: 8,
  },
});
