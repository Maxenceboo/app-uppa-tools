import { StatusBar } from "expo-status-bar";    // import the StatusBar component
import React, { useState } from "react";    // import useState
import {
  Text,
  View,
  Image,
  TextInput,
  TouchableOpacity,
} from "react-native";  // import Text, View, Image, TextInput, TouchableOpacity


import styles from "./ProfileStyle";    // import styles from "./ProfileStyle.js"
import axios from "../../axios";    // import axios
import {useStorage} from "../../hook/useStorage";   // import useStorage from "../../hook/useStorage";


export default function Profile ({ navigation }) {  // create the ProfileScreen component
    
    const [user, setUser] = useStorage('user')  // create useStorage hook to get user data from asyncStorage


    const [Clicked,setClicked] = useState(false)    // create useState hook to know if the user cliked on the button

    
    const [email, setEmail] = useState("")  // create useState hook to get the email
    const [firstname, setFirstname] = useState("")// create useState hook to get the firstname
    const [name, setName] = useState("")    // create useState hook to get the name
    const [username, setusername] = useState("")    // create useState hook to get the username

    const [ressource, setRessource] = useState(0)   // create useState hook to get the ressource

    const [value] = useStorage("token") // create useStorage hook to get the token


    const clickModify = async () => {   // create the clickModify function
        if (!Clicked){  // if the user didn't click on the button yet
            setClicked(true)
        } else {    // if the user clicked on the button

            setClicked(false)
            const {data} = await axios.post('/users/upDate',{   // send the data to the server and get the response in data
                id: user._id, 
                email: email===""?user.email: email,
                username: username===""?user.username:username,
                firstname: firstname===""?user.firstname:firstname,
                name: name===""?user.name:name,
                ressource : ressource===0?user.ressource:ressource,
                },
                {
                    headers: {
                        'Authorization' : "basic "+ value
                    }
                }
            )
            setUser({...user,
                email: email===""?user.email: email,
                username: username===""?user.username:username,
                firstname: firstname===""?user.firstname:firstname,
                name: name===""?user.name:name,
                ressource : ressource===0?user.ressource:ressource,
            })
        }
    }
    navigation.setOptions({headerStyle: {backgroundColor: '#2D9E6F',}}) // set header color to green

    // the return of this function is the screen and print the user data and get the user data from the server and set it in the hooks
    return (
        user ? <View style={styles.container}>
            <StatusBar style="auto" />

            <View style={styles.container_H}>

                    <TextInput
                        style={styles.inputMain}
                        placeholder={user.username===""?"username not defined":user.username}
                        placeholderTextColor="#003f5c"
                        editable={Clicked}
                        selectTextOnFocus={Clicked}
                        onChangeText={(username)=> setusername(username)}
                    />
                
                <Image style={styles.image} source={require("../asset/logo.png")}/>

            </View>



            <View style={styles.container_B}>

                <TextInput
                    style={styles.inputMain}
                    placeholder={user.name===""?"name not definedd":user.name}
                    placeholderTextColor="#003f5c"
                    editable={Clicked}
                    selectTextOnFocus={Clicked}
                    onChangeText={(name)=> setName(name)}
                />
    

            
                <TextInput
                    style={styles.inputMain}
                    placeholder={user.firstname===""?"firstname not defined":user.firstname}
                    placeholderTextColor="#003f5c"
                    editable={Clicked}
                    selectTextOnFocus={Clicked}
                    onChangeText={(firstname)=>setFirstname(firstname)}
                />
            

            
                <TextInput
                    style={styles.inputMain}
                    placeholder={user.email===""?"email is not defined":user.email}
                    placeholderTextColor="#003f5c"
                    editable={Clicked}
                    selectTextOnFocus={Clicked}
                    onChangeText={(email)=>{setEmail(email)}}
                />
            

            
                <TextInput
                    style={styles.inputMain}
                    placeholder={user?.ressource===0?"ressource not defined":user.ressource}
                    placeholderTextColor="#003f5c"
                    editable={Clicked}
                    selectTextOnFocus={Clicked}
                    onChangeText={(ressource)=>{setRessource(ressource)}}
                />
            

            </View>
            

            <View style={styles.modifi}>
                <TouchableOpacity onPress={clickModify}>
                    <Text>{!Clicked? "modifi" : "save"}</Text>
                </TouchableOpacity>
            </View>

        </View> : null
    )
}