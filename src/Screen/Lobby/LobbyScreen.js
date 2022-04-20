import { StatusBar } from "expo-status-bar"; // import the StatusBar component  
import React, { useEffect } from "react"; // import useEffect
import {
  Text,
  View,
  Pressable,
} from "react-native";  // import Text, View, Pressable
import AsyncStorage from '@react-native-async-storage/async-storage'; // import asyncStorage from '@react-native-async-storage/async-storage';
import styles from "./LobbyStyle";  // import styles from "./LobbyStyle.js"



export default function Lobby ({ navigation }) {  // create the LobbyScreen component

  useEffect(() => { // useEffect to get user data from asyncStorage
    AsyncStorage.getItem('token') // get user data from asyncStorage
      .then(res => {  // if success
        if (res === null){  // if user is not connected
          return
        }else navigation.navigate('User Handler') // navigate to User Handler
      })
  },[])
  navigation.setOptions({headerStyle: {backgroundColor: '#2D9E6F',}}) // set header color to green
  // this return is the screen and print the lobby and button for navigate to the other views
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
