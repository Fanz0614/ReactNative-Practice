import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, Button, ScrollView } from 'react-native';

import { GoalItem } from './components';

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
      <View style={styles.inputContainer}>
        <TextInput placeholder="Course Goal" style={styles.input} onChangeText={enteredGoalHandler} value={enteredGoal} />
        <Button title="ADD" onPress={addGoalHandler} />
      </View>
      <GoalItem props={courseGoals} />
      <View />
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    padding: 50
  },
  inputContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  input: {
    width: '80%',
    borderColor: 'black',
    borderWidth: 1,
    padding: 10
  }
});
