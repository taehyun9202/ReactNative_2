import React from 'react'
import { StyleSheet, Text, View, TouchableNativeFeedback } from 'react-native';
function GoalItem(props) {
    
    return (
        <TouchableNativeFeedback  onPress={props.onDelete.bind(this, props.id)}>
            <View style={styles.listItem}>
                <Text>{props.title}</Text>
            </View>
        </TouchableNativeFeedback>
    )
}

const styles = StyleSheet.create({
    listItem: {
        padding: 10,
        marginVertical: 10,
        backgroundColor: '#ccc',
        borderColor: "black",
        borderWidth: 2
      }
})

export default GoalItem
