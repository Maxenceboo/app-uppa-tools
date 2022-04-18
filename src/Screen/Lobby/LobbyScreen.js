import { StatusBar } from "expo-status-bar";
import React, { useEffect, useState } from "react";
import {
  Text,
  View,
  Image,
  TextInput,
  Button,
  TouchableOpacity,
} from "react-native";
import AsyncStorage from '@react-native-async-storage/async-storage';
import styles from "./LobbyStyle";



export default function Lobby ({ navigation }) {

  useEffect(() => {
    AsyncStorage.getItem('token')
      .then(res => {
        if (res === null){
          return
        }else navigation.navigate('Home')
      })
  },[])

  return(
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>

        <StatusBar style="auto" />

        <Text>Lobby Screen</Text>
        <Button
        title="Go to Signup"
        onPress={() => navigation.navigate('Signup')}
        />
        <Button
        title="Go to Signin"
        onPress={() => navigation.navigate('Signin')}
        />
        <Button
        title="Go to Home"
        onPress={() => navigation.navigate('Home')}
        />
        <Button
        title="Go to Profile"
        onPress={() => navigation.navigate('Profile')}
        />
        <Button
        title="Go to edt"
        onPress={() => navigation.navigate('Edt')}
        />
    </View>
  )                 
}
