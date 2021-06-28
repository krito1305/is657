import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#121B2D'
      
    },
    tasksWrapper:{
        paddingTop: 80,
        paddingHorizontal: 20
    },
    sectionTitle: {
        fontSize: 48, 
        fontFamily: "verdana",
        fontWeight: "bold",
        alignSelf: "center",
        marginBottom: 15,
        color: "#FFFFFF"
    },
    items: {
      marginTop: 30
      
    },
    item: {
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "space-evenly",
      backgroundColor: "#223966",
      padding: 15,
      borderRadius: 10,
      marginBottom: 15,
      opacity: 0.75
    },
    iconLeft: {
     },
    square: {
      width: 26,
      height: 26,
      backgroundColor: '#4CCFF9',
      opacity: 0.75,
      borderRadius: 5,
      marginRight: 15
    },
    taskText: {
      flex: 3,
      fontSize: 14,
      fontFamily: "verdana",
      maxWidth: "80%",
      justifyContent: "flex-start",
      color: "#FFFFFF"
    },
    circleRight: {
      width: 26,
      height: 26,
      borderWidth: 2,
      borderColor: '#FFFFFF',
      backgroundColor: '#FFFFFF',
      cursor: "pointer"
    },
    WriteTaskWrapper: {
      width: "90%",
      flexDirection: "row",
      marginHorizontal: 20,
      marginRight: 20,
      marginTop: 30,
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
      width: 52,
      height: 52,
      justifyContent: "center",
      alignItems: "center",
      backgroundColor: "white",
      borderRadius: 60
    },
    addText: {}

  });