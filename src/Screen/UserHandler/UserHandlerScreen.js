import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import {
  Text,
  View,
  Pressable ,
} from "react-native";
import styles from "./UserHandlerStyle";



export default function UserHandler ({ navigation }) {
    navigation.setOptions({headerStyle: {backgroundColor: '#2D9E6F',}})

    return(
        <View style={styles.container}>
            <StatusBar style="auto" />
            <Text>user handler Screen</Text>
            <Pressable  onPress={() => navigation.navigate('Signup')} style={styles.styleBtn}>
                <Text style={styles.textBtn}>Go to signup</Text>
            </Pressable>
            <Pressable onPress={() => navigation.navigate('Signin')} style={styles.styleBtn}> 
                <Text style={styles.textBtn}>Go to signin</Text>
            </Pressable>
        </View>
    )
}
