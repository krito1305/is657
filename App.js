import { StatusBar } from 'expo-status-bar';
import React, {useState} from 'react';
import { Platform, KeyboardAvoidingView, Text, TextInput, TouchableOpacity, View, Keyboard } from 'react-native';
import {styles} from './styles';
import Task from './components/Task'

export default function App() {
  // Task is the name of the state and setTask is the function we are going to use to set the state of Task
  const [task, setTask] = useState();
  // taskItems is an array of the tasks that have been added
  const [taskItems, setTaskItems] = useState([]);
  

  const handleAddTask = () => {
    Keyboard.dismiss();
    setTaskItems([...taskItems, task]);
    setTask("");
  };

  const deleteTask = (index) => {
    let itemsCopy = [...taskItems];
    itemsCopy.splice(index,1);
    setTaskItems(itemsCopy);
  }

  return (
    <View style={styles.container}>
      
      {/* Today's Tasks */}
      <View style={styles.tasksWrapper}>
        <Text style={styles.sectionTitle}>To-do Items</Text>

        <View style={styles.items}>
          {/* The items will go in here
            The map method creates a new array populated with the results of calling a provided function on every element in the calling array */
            taskItems.map((item,index) => {
            return <Task text={item} key={index} />
            })
                   
          }

        </View>

      </View>

      {/* Write a task section */}

      <KeyboardAvoidingView 
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      style={styles.WriteTaskWrapper}>
        <TextInput style={styles.input} placeholder={"Add a new task"} value={task} onChangeText={text => setTask(text)}>
        </TextInput>

        <TouchableOpacity onPress={() => handleAddTask()}>
          <View style={styles.addWrapper}>
            <Text style={styles.addText}>+</Text>

          </View>
        </TouchableOpacity>


      </KeyboardAvoidingView>



    </View>
  );
};
