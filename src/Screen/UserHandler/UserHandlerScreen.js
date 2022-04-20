import { StatusBar } from "expo-status-bar";    // import statusBar from "expo-status-bar";
import React, { useState } from "react";    // import useState from "react";
import {
  Text,
  View,
  Pressable ,
} from "react-native";  
import styles from "./UserHandlerStyle"; // import styles from "./UserHandlerStyle.js"

import AsyncStorage from "@react-native-async-storage/async-storage";   // import the asyncStorage from "@react-native-async-storage/async-storage";

const disconnect = async () => {    // create the disconnect function to disconnect the user
    await AsyncStorage.removeItem('user')
    await AsyncStorage.removeItem('token')
}


export default function UserHandler ({ navigation }) {  // create the UserHandler component
    navigation.setOptions({headerStyle: {backgroundColor: '#2D9E6F',}}) // set the header color to green

    return(
        <View style={styles.container}>
            <StatusBar style="auto" />
            <Pressable  onPress={() => navigation.navigate('Signup')} style={styles.styleBtn}>
                <Text style={styles.textBtn}>Go to signup</Text>
            </Pressable>
            <Pressable onPress={() => navigation.navigate('Signin')} style={styles.styleBtn}> 
                <Text style={styles.textBtn}>Go to signin</Text>
            </Pressable>
            <Pressable  onPress={disconnect} style={styles.styleBtn}>
                <Text style={styles.textBtn}>Go to disconnect</Text>
            </Pressable>
        </View>
    )
}
