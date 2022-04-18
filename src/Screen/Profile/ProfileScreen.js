import { StatusBar } from "expo-status-bar";
import React, { useEffect, useRef, useState } from "react";
import {
  Text,
  View,
  Image,
  TextInput,
  TouchableOpacity,
} from "react-native";


import styles from "./ProfileStyle";
import axios from "../../axios";
import {useStorage} from "../../hook/useStorage";


export default function Profile ({ navigation }) {
    
    const [user, setUser] = useStorage('user')


    const [Clicked,setClicked] = useState(false)

    
    const [email, setEmail] = useState("")
    const [firstname, setFirstname] = useState("")
    const [name, setName] = useState("")
    const [username, setusername] = useState("")

    const [ressource, setRessource] = useState(0)

    const [value] = useStorage("token")


    const clickModify = async () => {
        if (!Clicked){
            setClicked(true)
        } else {

            setClicked(false)
            const {data} = await axios.post('/users/upDate',{
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
            console.log(data)
            setUser({...user,
                email: email===""?user.email: email,
                username: username===""?user.username:username,
                firstname: firstname===""?user.firstname:firstname,
                name: name===""?user.name:name,
                ressource : ressource===0?user.ressource:ressource,
            })
        }
    }
    navigation.setOptions({headerStyle: {backgroundColor: '#2D9E6F',}})

    console.log(user)
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