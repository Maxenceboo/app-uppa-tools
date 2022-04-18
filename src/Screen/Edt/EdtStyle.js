import {StatusBar} from "expo-status-bar";
import React, {useState} from "react";
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
    body: {
        backgroundColor: "rgba(51, 54, 53, 1)",
        height : "100%"
    },
    date: {
        marginTop: "5%",
        marginBottom: "5%",
        textAlign: "center",
        fontSize: "large",
        color: "darkgrey",
    },
    card: {
        fontWeight: "bolder",
        textAlign: "center",
        backgroundColor: "rgb(42, 221, 123)",
        border: "5px solid rgb(42, 180, 123)",
        margin: "0.5rem",
        boxShadow: "0 4px 8px 0 rgba(0,0,0,0.2)"
    },
    edt: {
        backgroundColor: "#252726",
        color: "black",
        marginLeft: "25%",
        marginRight: "25%",
        paddingTop: "2%",
        paddingBottom: "2%",
        border: "10px solid rgb(42, 85, 72)"
    }
})


export default styles;