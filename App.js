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
  const onDelete = (value) => {
    const new_courseGoals = [...courseGoals]
    const index = new_courseGoals.findIndex((item)=> item === value)
    new_courseGoals.splice(index, 1)
    setCourseGoals(new_courseGoals)
  }
  return (
    <View style={styles.screen}>
      <GoalInput enteredGoalHandler={enteredGoalHandler} addGoalHandler={addGoalHandler} enteredGoal={enteredGoal} />
      <GoalItem courseGoals={courseGoals} onDelete={onDelete} setCourseGoals={setCourseGoals} />
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    padding: 50
  }
});
