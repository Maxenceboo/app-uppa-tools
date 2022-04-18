import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import {
  StyleSheet,
} from "react-native";


const styles = StyleSheet.create({
  container:{
    flex: 1,
    backgroundColor: "rgba(51, 54, 53, 1)",
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
    height: "100%",
  },
  textBtn:{
    fontSize: 16,
    lineHeight: 21,
    letterSpacing: 0.25,
  },
  styleBtn:{
    width: "20rem",
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: 4,
    elevation: 3,
    backgroundColor: 'rgb(42, 180, 123)',
    marginVertical: "1rem",
    
  },
  
})

export default styles;