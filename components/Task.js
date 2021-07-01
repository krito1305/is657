import { StatusBar } from 'expo-status-bar';
import React, {useState} from 'react';
import { CheckBox, Text, TouchableOpacity, View } from 'react-native';
import { styles } from '../styles';



function Task(props, index, item) {
    const [isCompleted, setSelection] = useState(false);


      const deleteTask = (index) => {
        console.log(index)

      };
    
    return (
        
        <View style={styles.item}>
            <CheckBox value={isCompleted} onValueChange={isCompleted => setSelection(isCompleted)} style={styles.circleRight}></CheckBox>
            <Text style={isCompleted ? (styles.taskText2) : (styles.taskText) }>{props.text}</Text>
            {//<View style={styles.iconLeft}>}
            }
            <TouchableOpacity style={styles.square} >
              <Text> X </Text>
            </TouchableOpacity>
            {//</View> 
            }
        </View>


    )
};

export default Task
