import { StatusBar } from "expo-status-bar";  // import the StatusBar component
import React, { useState } from "react";  // import useState
import {
  Text,
  View,
  Image,
  TextInput,
  TouchableOpacity,
} from "react-native";  // import Text, View, Image, TextInput, TouchableOpacity

import AsyncStorage from '@react-native-async-storage/async-storage'; // import asyncStorage from '@react-native-async-storage/async-storage';

import styles from "./SigninStyle"; // import styles from "./SigninStyle.js"
import axios from "../../axios";  // import axios



export default function Signin({ navigation }) {  // create the SigninScreen component
  const [email, setEmail] = useState(""); // create useState hook to get the email
  const [password, setPassword] = useState(""); // create useState hook to get the password

  const Login = async () => { // create the Login function
    const {data} = await axios.post('/auth/signin',{  // send the data to the server and get the response in data
        password: password,
        email: email,
      }
    )
    await AsyncStorage.setItem('token', data.token) // save the token in asyncStorage
    await AsyncStorage.setItem('user', JSON.stringify(data.user)) // save the user in asyncStorage
    navigation.navigate('Profile')  // navigate to the ProfileScreen
  }

  navigation.setOptions({headerStyle: {backgroundColor: '#2D9E6F',}}) // set the header style to green

  return (
    <View style={styles.container}>
      <Image style={styles.image} source={require("../asset/Logo2.png")} />

{/* statusbar = smooth color top barre */}
      <StatusBar style="auto" />      
                       
      <View style={styles.inputView}>
        <TextInput
          style={styles.TextInput}
          placeholder="Email."
          placeholderTextColor="#003f5c"
          onChangeText={(email) => setEmail(email)}
        />
      </View>

      <View style={styles.inputView}>
        <TextInput
          style={styles.TextInput}
          placeholder="Password."
          placeholderTextColor="#003f5c"
          secureTextEntry={true}
          onChangeText={(password) => setPassword(password)}
        />
      </View>

      <TouchableOpacity>
        <Text style={styles.forgot_button}>Forgot Password?</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={Login} style={styles.loginBtn}>
        <Text style={styles.loginText}>LOGIN</Text>
      </TouchableOpacity>


    </View>
  );
}
