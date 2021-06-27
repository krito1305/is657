import { StatusBar } from 'expo-status-bar';
import React, {useState} from 'react';
import { Platform, KeyboardAvoidingView, Text, TextInput, TouchableOpacity, View, Keyboard } from 'react-native';
import {styles} from './styles';
import Task from './components/Task'

export default function App() {
  const [task, setTask] = useState();
  const [taskItems, setTaskItems] = useState([]);

  const handleAddTask = () => {
    Keyboard.dismiss();
    setTaskItems ([...taskItems, task]);
    setTask(null)
    return (
    console.log(task),
    console.log(taskItems))
      };
  
  
  const completedTask = (index) => {
    let itemsCopy = [...taskItems];
    // Removing item with index X from the itemsCopy array and replacing the taskItems array with that one
    itemsCopy.splice(index,1);
    setTaskItems(itemsCopy);
  }

  return (
    <View style={styles.container}>
      
      {/* Today's Tasks */}
      <View style={styles.tasksWrapper}>
        <Text style={styles.sectionTitle}>Today's Tasks</Text>

        <View style={styles.items}>
          {/* The items will go in here
            The map method creates a new array populated with the rsults of calling a provided function on every element in the calling array */}
          <Task text={"Task 1"}></Task>
          <Task text={"Task 2"}></Task>
          <Task text={"Task 3"}></Task>

        </View>

      </View>

      {/* Write a task section */}

      <KeyboardAvoidingView 
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      style={styles.WriteTaskWrapper}>
        <TextInput style={styles.input} placeholder={"Add a new task"}>
        </TextInput>

        <TouchableOpacity onPress={() => handleAddTask()}>
          <View style={styles.addWrapper}>
            <Text style={styles.addText}>+</Text>

          </View>
        </TouchableOpacity>


      </KeyboardAvoidingView>



    </View>
  );
}


