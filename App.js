// import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View, Button, ScrollView, FlatList } from 'react-native';
import GoalItem from './components/GoalItem';
import GoalInput from './components/GoalInput';

export default function App() {
  const [ courseGoals, setCourseGoals ] = useState([])
  const [ openModal, setOpenModal ] = useState(false)

  const addGoalHandler = goalTitle => {
    if(goalTitle.length === 0) return
    setCourseGoals(currentGaols => [
      ...courseGoals,
      { id: Math.random().toString(), value: goalTitle } 
    ])
    setOpenModal(false);
  }

  
  const removeGoalHandler = goalId => {
      setCourseGoals(currentGaols => {
        return currentGaols.filter((goal) => goal.id !== goalId)
      })
  }

  const closeHandler = () => {
    setOpenModal(false);
  }

  return (
    <View style={{padding: 50}}>
      <Button title="Add new Goal" onPress={() => setOpenModal(true)} />
      <GoalInput 
        visible={openModal}
        addGoal={addGoalHandler}
        onClose={closeHandler}
      />
      <FlatList
        keyExtractor={(item, index) => item.id}
        data={courseGoals}
        renderItem={itemData => (
          <GoalItem id={itemData.item.id} onDelete={removeGoalHandler} title={itemData.item.value}/>   
        )
      }/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  textInput: {
    borderWidth: 2,
    borderColor: 'black',
    padding: 5,
    width: 200
  },
});
