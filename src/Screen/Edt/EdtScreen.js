import React, { useEffect, useState } from "react"; // import useEffect, useState
import {
  Text,
  View,
} from "react-native";  // import Text, View


import styles from "./EdtStyle.js"; // import styles from "./EdtStyle.js"
import {useStorage} from "../../hook/useStorage";   //import useStorage from "../../hook/useStorage";

import axios from "../../axios";    //import axios from "../../axios";

export default function Edt ({ navigation }) {  

    const [user, setUser] = useStorage('user')  // create useStorage hook to get user data from asyncStorage 
    const [edt, setedt] = useState([])  // create useState for edt 


    useEffect(()=>{(async()=>{  // useEffect to get edt data from server
        if (user){  // if user is not null
            setedt(await axios.get(`edt/get/edt/${user.ressource}`).then(   // get edt data from server 
                (res)=>{    // if success
                    return res.data.edt // return edt data 
                }
            ))
        }})()
    },[user])   

    navigation.setOptions({headerStyle: {backgroundColor: '#2D9E6F',}}) // set header color to green

    // the return of this function is the screen and print the edt data
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