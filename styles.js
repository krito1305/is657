import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#E8EAED',
      
    },
    tasksWrapper:{
        paddingTop: 80,
        paddingHorizontal: 20
    },
    sectionTitle: {
        fontSize: 24, 
        fontWeight: "bold",
        justifyContent: "center",
        marginBottom: 15
    },
    items: {
      marginTop: 30
      
    },
    item: {
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "space-evenly",
      backgroundColor: "white",
      padding: 15,
      borderRadius: 10,
      marginBottom: 15
    },
    iconLeft: {
     },
    square: {
      width: 24,
      height: 24,
      backgroundColor: '#50BDFB',
      opacity: 0.6,
      borderRadius: 5,
      marginRight: 15
    },
    taskText: {
      flex: 3,
      maxWidth: "80%",
      justifyContent: "flex-start"
    },
    circleRight: {
      width: 12,
      height: 12,
      borderWidth: 2,
      borderRadius: 5,
      borderColor: '#50BDFB'
    },
    WriteTaskWrapper: {
      width: "90%",
      flexDirection: "row",
      marginHorizontal: 20,
      marginRight: 20,
      justifyContent: "space-between",
      alignItems: "center"
      },
    input: {
      width: "70%",
      padding: 15,
      backgroundColor: "white",
      borderRadius: 50,
      borderColor: "#E5E5E5",
      borderWidth: 1
    },
    addWrapper: {
      width: 60,
      height: 60,
      justifyContent: "center",
      alignItems: "center",
      backgroundColor: "white",
      borderRadius: 60
    },
    addText: {}

  });