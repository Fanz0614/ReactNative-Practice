import React from 'react';
import { StyleSheet, Text, ScrollView } from 'react-native';

export const GoalItem =({props})=>{
    const listGoals = () => {
        return props.map((items, index) => {
          return <Text style={props.length > 0 ? styles.listItems : ''} key={`${items}${index}`}>
            {items}
          </Text>
        })
      }
    return(
        <ScrollView>{listGoals()}</ScrollView>
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