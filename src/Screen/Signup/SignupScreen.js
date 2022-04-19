import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import {
  Text,
  View,
  Image,
  TextInput,
  TouchableOpacity,
} from "react-native";
import axios from "../../axios";
import styles from "./SignupStyle";


export default function Signup ({ navigation }) {
  const [email, setEmail] = useState("")
  const [password2, setPassword2] = useState("")
  const [password1, setPassword1] = useState("")
  const samePasswords = password1 === password2



  
  const Check = () => {
    if (password1 === "" || password2 === ""){

      return(<View><Text style={styles.checkMdpGood}>            </Text></View>)
    } else if ( password1 === password2){

      return (
        <View><Text style={styles.checkMdpGood}>Passwords are identical</Text></View>
      )
    }

    return (
      <View><Text style={styles.checkMdpNotGood}>Passwords are not identical</Text></View>
      )
  }
  
  
  const Push = () => {
    console.log({samePasswords})
    if (password1 === "" || password2 === ""){
      return;
    }
    if(samePasswords){
      axios.post('/auth/signup', {
        password: password1,
        email: email,
      });
    }
    navigation.navigate('Signin')
  }



  navigation.setOptions({headerStyle: {backgroundColor: '#2D9E6F',}})

  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      
      <Image style={styles.image} source={require("../asset/Logo2.png")}/>

      <StatusBar style="auto" />

      <View style={styles.inputView}>
        <TextInput
          style={styles.inputText}
          placeholder="Email."
          placeholderTextColor="#003f5c"
          onChangeText={(email) => setEmail(email)}
        />
      </View>

      <View style={styles.inputView}>
        <TextInput
          style={styles.inputText}
          placeholder="Password"
          placeholderTextColor="#003f5c"
          secureTextEntry={true}
          onChangeText={(password1) => setPassword1(password1)}
        />
      </View>

      <View style={styles.inputView}>
        <TextInput
          style={styles.inputText}
          placeholder="Comfirm Password"
          placeholderTextColor="#003f5c"
          secureTextEntry={true}
          onChangeText={(password2) => setPassword2(password2)}
        />
      </View>

      <Check/>

      <TouchableOpacity onPress={Push} style={styles.registerBtn}>
        <Text >Register</Text>
      </TouchableOpacity>



    </View>
  );
};



