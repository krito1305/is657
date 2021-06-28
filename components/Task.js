import { StatusBar } from 'expo-status-bar';
import React, {useState} from 'react';
import { CheckBox, Text, TouchableOpacity, View } from 'react-native';
import { styles } from '../styles';




function Task(props) {
    const [isCompleted, setSelection] = useState(false);

    function markedCompleted() {
    const boxValue = isCompleted
    if (boxValue == 'true') {

    }
    
//Should I pass an index with the prop so I can mark them complete individually?

    };

    return (
        
        <View style={styles.item}>
            <CheckBox value={isCompleted} onValueChange={(isCompleted) =>setSelection(isCompleted)} style={styles.circleRight}></CheckBox>
            {console.log(isCompleted)}
            <Text style={styles.taskText}>{props.text}</Text>
            <View style={styles.iconLeft}>
                <TouchableOpacity style={styles.square}> X </TouchableOpacity>
            </View>
        </View>


    )
};

export default Task
