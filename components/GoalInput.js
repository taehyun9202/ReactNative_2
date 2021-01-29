import React, { useState } from 'react';
import { StyleSheet, Text, View, Button, TextInput, Modal } from 'react-native';

function GoalInput(props) {
    const [ goal, setGoal ] = useState('')

    const inputHandler = (text) => {
        setGoal(text)
    }

    const addGoalHandler = () => {
        props.addGoal(goal)
        setGoal('')
    }
    
    return (
        <Modal visible={props.visible} animationType="slide">
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center'}}>
            <TextInput 
                placeholder="Course Goal" 
                style={styles.textInput} 
                // onChangeText={setGoal}
                onChangeText={inputHandler}
                value={goal}/>
                <View style={styles.buttons}>
                    <View style={styles.button}>
                        <Button title="ADD" onPress={addGoalHandler}/>
                    </View>
                    <View style={styles.button}>
                        <Button title="CLOSE" color="red" onPress={props.onClose}/>
                    </View>
                </View>
            </View>
        </Modal>
    )
}

const styles = StyleSheet.create({
    textInput: {
        borderWidth: 2,
        borderColor: 'black',
        padding: 5,
        width: '80%',
        marginBottom: 20,
    },
    
    buttons: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        width: '60%'
    },

    button: {
        width: '40%'
    }
})
export default GoalInput
