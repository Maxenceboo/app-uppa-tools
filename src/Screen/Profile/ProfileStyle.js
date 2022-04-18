import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  Button,
  TouchableOpacity,
} from "react-native";


const styles = StyleSheet.create({
    container:{
        alignItems: "center",
        backgroundColor: "rgba(51, 54, 53, 1)",
        width: "100%",
        height: "100%"
    },

    container_H: {
        marginTop: 20,
        display: "flex",
        flexDirection: "row",
        alignItems:"center",
        
    },

    container_B: {
        alignItems: "center",
        marginTop: 10,
    },

    container_F: {
        marginTop: 15,
    },
    
    inputMain: {
        width: "130%",
        height: 45,
        marginTop: 15,
        marginBottom: 15,
        textAlign: "center",
        backgroundColor: 'rgb(42, 221, 123)',
        borderRadius: 10,
        
        
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 4,
        },
        shadowOpacity: 0.32,
        shadowRadius: 5.46,

        elevation: 9,
        
    },

    image: {
        width: 130,
        height: 130,
        marginLeft: 20,
        borderRadius: 50,
        borderColor: 'rgb(42, 180, 123)',
        borderWidth: 5,

        
        
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 4,
        },
        shadowOpacity: 0.32,
        shadowRadius: 5.46,

        elevation: 9,

    },

    
    modifi: {
        width: "80%",
        borderRadius: 25,
        height: 50,
        alignItems: "center",
        justifyContent: "center",
        marginTop: 40,
        backgroundColor: 'rgb(42, 180, 123)',

        
        
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 4,
        },
        shadowOpacity: 0.32,
        shadowRadius: 5.46,

        elevation: 9,
    },
})

export default styles;