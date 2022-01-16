import React, { useState } from 'react';
import { View, StyleSheet, Button } from 'react-native';

import { GoalItem } from './components';
import { GoalInput } from './components';

export default function App() {
  const [enteredGoal, setEnteredGoal] = useState('')
  const [courseGoals, setCourseGoals] = useState([])
  const [isModalOpen, setIsModelOpen] = useState(false)
  const enteredGoalHandler = (value) => {
    setEnteredGoal(value)
  }
  const addGoalHandler = () => {
    setCourseGoals([...courseGoals, enteredGoal])
    setEnteredGoal('')
    setIsModelOpen(false)
  }
  const onDelete = (value) => {
    const new_courseGoals = [...courseGoals]
    const index = new_courseGoals.findIndex((item) => item === value)
    new_courseGoals.splice(index, 1)
    setCourseGoals(new_courseGoals)
  }
  const onCancel = () => {
    setIsModelOpen(false)
  }

  return (
    <View style={styles.screen}>
      <Button title='Add new goal' onPress={() => { setIsModelOpen(true) }} />
      <GoalInput enteredGoalHandler={enteredGoalHandler} addGoalHandler={addGoalHandler} enteredGoal={enteredGoal} isModalOpen={isModalOpen} onCancel={onCancel} />
      <GoalItem courseGoals={courseGoals} onDelete={onDelete} />
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    padding: 50
  }
});
