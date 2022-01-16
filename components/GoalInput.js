import React from 'react';
import { StyleSheet, View, TextInput, Button, Modal } from 'react-native';

export const GoalInput = ({ enteredGoalHandler, addGoalHandler, enteredGoal, isModalOpen, onCancel }) => {
    return (
        <Modal visible={isModalOpen} animationType='slide'>
            < View style={styles.inputContainer} >
                <TextInput placeholder="Course Goal" style={styles.input} onChangeText={enteredGoalHandler} value={enteredGoal} />
                <View style={styles.buttonContainer}>
                    <Button title="Cancel" onPress={onCancel} color='red' />
                    <Button title="ADD" onPress={addGoalHandler} />
                </View>
            </View >
        </Modal>
    )
}

const styles = StyleSheet.create({
    inputContainer: {
        flexDirection: 'column',
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        margin: 10
    },
    input: {
        width: '80%',
        borderColor: 'black',
        borderWidth: 1,
        padding: 10
    },
    buttonContainer: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        width: '60%'
    }
});