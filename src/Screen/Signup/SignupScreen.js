import { StatusBar } from "expo-status-bar";  // import the StatusBar component
import React, { useState } from "react";  // import useState
import {
  Text,
  View,
  Image,
  TextInput,
  TouchableOpacity,
} from "react-native";  // import Text, View, Image, TextInput, TouchableOpacity
import axios from "../../axios";  // import axios
import styles from "./SignupStyle"; // import styles from "./SignupStyle.js"


export default function Signup ({ navigation }) { // create the SignupScreen component
  const [email, setEmail] = useState("")  // create useState hook to get the email
  const [password2, setPassword2] = useState("")  // create useState hook to get the password
  const [password1, setPassword1] = useState("")    // create useState hook to get the password
  const samePasswords = password1 === password2 // create a boolean to know if the passwords are the same



  
  const Check = () => { // create the Check function
    if (password1 === "" || password2 === ""){  // if the password is empty

      return(<View><Text style={styles.checkMdpGood}>            </Text></View>)  // return a text saying that the password is empty
    } else if ( password1 === password2){ // if the password is the same

      return (
        <View><Text style={styles.checkMdpGood}>Passwords are identical</Text></View>
      )
    }

    return (
      <View><Text style={styles.checkMdpNotGood}>Passwords are not identical</Text></View>
      )
  }
  
  
  const Push = () => {  // create the Push function
    if (password1 === "" || password2 === ""){  // if the password is empty
      return;
    }
    if(samePasswords){  // if the passwords are the same
      axios.post('/auth/signup', {  // send the data to the server and get the response in data
        password: password1,
        email: email,
      });
    }
    navigation.navigate('Signin') // navigate to the SigninScreen
  }



  navigation.setOptions({headerStyle: {backgroundColor: '#2D9E6F',}}) // set the header style to green

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



