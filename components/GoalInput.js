import React from 'react';
import { StyleSheet, View, TextInput, Button } from 'react-native';

export const GoalInput = ({ enteredGoalHandler, addGoalHandler, enteredGoal }) => {
    return (
        < View style={styles.inputContainer} >
            <TextInput placeholder="Course Goal" style={styles.input} onChangeText={enteredGoalHandler} value={enteredGoal} />
            <Button title="ADD" onPress={addGoalHandler} />
        </View >)
}

const styles = StyleSheet.create({
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