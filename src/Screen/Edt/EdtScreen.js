import { StatusBar } from "expo-status-bar";
import React, { useEffect, useRef, useState } from "react";
import {
  Text,
  View,
  Image,
  TextInput,
  TouchableOpacity,
} from "react-native";


import styles from "./EdtStyle.js";
import {useStorage} from "../../hook/useStorage";

import axios from "../../axios";

export default function Edt ({ navigation }) {

    const [user, setUser] = useStorage('user')
    const [edt, setedt] = useState([])


    useEffect(()=>{(async()=>{
        if (user){
            setedt(await axios.get(`edt/get/edt/${user.ressource}`).then(
                (res)=>{
                    return res.data.edt
                }
            ))
        }})()
    },[user])

    console.log(edt)
    navigation.setOptions({headerStyle: {backgroundColor: '#2D9E6F',}})

    return(
        <View style={styles.body}>
            <Text style={styles.date}>Nous sommes le : {new Date().getDate()}/{new Date().getMonth()+1}/{new Date().getFullYear()}</Text>
            <View>
                {edt.map(event=>{
                    return (<View style={styles.card}>
                        <Text>{`${new Date(event.DTSTART).getHours()+2}:${new Date(event.DTSTART).getMinutes()} -/- ${new Date(event.DTEND).getHours()+2}:${new Date(event.DTEND).getMinutes()}`}</Text>
                        <Text>{`${event.SUMMARY}`}</Text>
                        <Text>{`${event.LOCATION.replaceAll("\\","\n").replaceAll(",","")}`}</Text>
                            </View>)
                })}    
            </View>
        </View>
    )
}