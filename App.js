import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, Button } from 'react-native';

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

  const listGoals = () => {
    return courseGoals.map((items, index) => {
      return <Text style={courseGoals.length > 0 ? styles.listItems : ''} key={`${items}${index}`}>
        {items}
      </Text>
    })
  }
  return (
    <View style={styles.screen}>
      <View style={styles.inputContainer}>
        <TextInput placeholder="Course Goal" style={styles.input} onChangeText={enteredGoalHandler} value={enteredGoal} />
        <Button title="ADD" onPress={addGoalHandler} />
      </View>
      <View>{listGoals()}</View>
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
  },
  listItems: {
    width: '80%',
    padding: 10,
    marginVertical: 10,
    backgroundColor: '#ccc',
    borderColor: 'black',
    borderWidth: 1
  }
});
