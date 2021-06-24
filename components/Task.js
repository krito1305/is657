import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import { styles } from '../styles';


function Task(props) {
    
    return (
        
        <View style={styles.item}>
            <View style={styles.iconLeft}>
                <TouchableOpacity style={styles.square} ></TouchableOpacity>
            </View>
            <Text style={styles.taskText}>{props.text}</Text>
            <View style={styles.circleRight}></View>
        </View>

    )
};

export default Task
