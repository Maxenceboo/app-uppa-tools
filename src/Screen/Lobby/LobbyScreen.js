import { StatusBar } from "expo-status-bar";
import React, { useEffect } from "react";
import {
  Text,
  View,
  Pressable,
} from "react-native";
import AsyncStorage from '@react-native-async-storage/async-storage';
import styles from "./LobbyStyle";



export default function Lobby ({ navigation }) {

  useEffect(() => {
    AsyncStorage.getItem('token')
      .then(res => {
        if (res === null){
          return
        }else navigation.navigate('User Handler')
      })
  },[])
  navigation.setOptions({headerStyle: {backgroundColor: '#2D9E6F',}})
  return(
      <View style={styles.container}>

        <StatusBar style="auto" />
        
        <Pressable onPress={() => navigation.navigate('User Handler')} style={styles.styleBtn}>
          <Text style={styles.textBtn}>Go to User Handler</Text> 
        </Pressable>
        <Pressable onPress={() => navigation.navigate('Profile')} style={styles.styleBtn}>
          <Text style={styles.textBtn}>Go to Profile</Text>
        </Pressable>
        <Pressable onPress={() => navigation.navigate('Edt')} style={styles.styleBtn}>
          <Text style={styles.textBtn}>Go to edt</Text>
        </Pressable>
    </View>
  )                 
}
