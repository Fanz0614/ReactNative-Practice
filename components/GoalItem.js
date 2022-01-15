import React from 'react';
import { StyleSheet, Text, ScrollView, TouchableOpacity } from 'react-native';

export const GoalItem = ({ courseGoals, onDelete }) => {
    const listGoals = () => {
        return courseGoals.map((items, index) => {
            return <Text onPress={()=>onDelete(items)} style={courseGoals.length > 0 ? styles.listItems : ''} key={`${items}${index}`}>
                {items}
            </Text>
        })
    }

    return (
        <TouchableOpacity >
            <ScrollView>{listGoals()}</ScrollView>
        </TouchableOpacity>

    )
}
const styles = StyleSheet.create({
    listItems: {
        width: '80%',
        padding: 10,
        marginVertical: 10,
        backgroundColor: '#ccc',
        borderColor: 'black',
        borderWidth: 1
    }
})