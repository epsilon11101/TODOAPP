import { useState } from "react";
import { StyleSheet, View, FlatList, Button } from "react-native";
import { StatusBar } from "expo-status-bar";

import GoalItem from "./components/GoalItem";
import GoalInput from "./components/GoalInput";

import { customAlphabet } from "nanoid/non-secure";

export default function App() {
  const [listOfGoals, setListOfGoals] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const nanoid = customAlphabet("abcdefghijklmnopqrstuvwxyz0123456789", 10);

  const addGoalHandler = (textInput) => {
    setListOfGoals((currentGoal) => [
      ...currentGoal,
      { text: textInput, key: nanoid() },
    ]);
    onCloseModal();
  };

  const deleteGoalHandler = (id) => {
    console.log(id);
    setListOfGoals((currentGoal) => {
      return currentGoal.filter((goal) => goal.key !== id);
    });
  };

  const onShowModal = () => {
    setShowModal(true);
  };

  const onCloseModal = () => {
    setShowModal(false);
  };

  return (
    <>
      <StatusBar style="light" />
      <View style={styles.appContainer}>
        <Button onPress={onShowModal} title="Add New Goal" color="#a065ec" />
        {showModal && (
          <GoalInput
            onAddGoal={addGoalHandler}
            visible={showModal}
            onClose={onCloseModal}
          />
        )}
        <View style={styles.goalsContainer}>
          <FlatList
            data={listOfGoals}
            renderItem={(itemData) => {
              return (
                <GoalItem
                  id={itemData.item.key}
                  text={itemData.item.text}
                  onDelete={deleteGoalHandler}
                />
              );
            }}
            keyExtractor={(item, index) => {
              return item.key;
            }}
          />
        </View>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    paddingTop: 50,
    paddingHorizontal: 16,
    gap: 20,
  },

  goalsContainer: {
    flex: 5,
  },
});
