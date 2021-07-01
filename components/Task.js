import { StatusBar } from 'expo-status-bar';
import React, {useState} from 'react';
import { CheckBox, Text, TouchableOpacity, View } from 'react-native';
import { styles } from '../styles';



function Task(props) {
    const [isCompleted, setSelection] = useState(false);

    
    return (
        
        <View style={styles.item}>
            <CheckBox value={isCompleted} onValueChange={isCompleted => setSelection(isCompleted)} style={styles.circleRight}></CheckBox>
            <Text style={isCompleted ? (styles.taskText2) : (styles.taskText) }>{props.text}</Text>
            <TouchableOpacity style={styles.square} >
              <Text> X </Text>
            </TouchableOpacity> 
        </View>


    )
};

export default Task
