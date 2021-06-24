import { StatusBar } from 'expo-status-bar';
import React, {useState} from 'react';
import { Platform, KeyboardAvoidingView, Text, TextInput, TouchableOpacity, View } from 'react-native';
import {styles} from './styles';
import Task from './components/Task'

export default function App() {
  const [task, setTask] = useState(" ");


  return (
    <View style={styles.container}>
      
      {/* Today's Tasks */}
      <View style={styles.tasksWrapper}>
        <Text style={styles.sectionTitle}>Today's Tasks</Text>

        <View style={styles.items}>
          {/* The items will go in here */}

          <Task text={'Task 1'} />
          <Task text={'Task 2'} />
          <Task text={'Task 3'} />
          <Task text={'Task 4'} />

        </View>

      </View>

      {/* Write a task section */}

      <KeyboardAvoidingView 
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      style={styles.WriteTaskWrapper}>
        <TextInput style={styles.input} placeholder={"Add a new task"}>
        </TextInput>

        <TouchableOpacity>
          <View style={styles.addWrapper}>
            <Text style={styles.addText}>+</Text>

          </View>
        </TouchableOpacity>


      </KeyboardAvoidingView>



    </View>
  );
}


