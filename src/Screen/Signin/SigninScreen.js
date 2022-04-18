import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import {
  Text,
  View,
  Image,
  TextInput,
  TouchableOpacity,
} from "react-native";

import AsyncStorage from '@react-native-async-storage/async-storage';

import styles from "./SigninStyle";
import axios from "../../axios";



export default function Signin({ navigation }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const Login = async () => {
    const {data} = await axios.post('/auth/signin',{
        password: password,
        email: email,
      }
    )
    await AsyncStorage.setItem('token', data.token)
    await AsyncStorage.setItem('user', JSON.stringify(data.user))
    navigation.navigate('Profile')
  }

  navigation.setOptions({headerStyle: {backgroundColor: '#2D9E6F',}})

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
