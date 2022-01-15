import React, { useState } from 'react';
import { View, StyleSheet } from 'react-native';

import { GoalItem } from './components';
import { GoalInput } from './components';

export default function App() {
  const [enteredGoal, setEnteredGoal] = useState('')
  const [courseGoals, setCourseGoals] = useState([])
  const enteredGoalHandler = (value) => {
    setEnteredGoal(value)
  }
  const addGoalHandler = () => {
    setCourseGoals([...courseGoals, enteredGoal])
    setEnteredGoal('')
  }
  return (
    <View style={styles.screen}>
      <GoalInput enteredGoalHandler={enteredGoalHandler} addGoalHandler={addGoalHandler} enteredGoal={enteredGoal} />
      <GoalItem props={courseGoals} />
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    padding: 50
  }
});
