import { useEffect, useState } from "react"
import AsyncStorage from '@react-native-async-storage/async-storage';


function isJson(res) {
    try {
        JSON.parse(res)
        return true
    }
    catch {
        return false
    }
}


export function useStorage (key) {
    const [value, setValue] = useState()

    useEffect(()=>{
        AsyncStorage.getItem(key).then(res => {
            res && setValue(isJson(res)?JSON.parse(res):res)
        })
    },[])

    async function setStorage(data) {
        await AsyncStorage.setItem(key, typeof data === "object"?JSON.stringify(data):data)
        setValue(data)
    }

    async function remove() {
        await AsyncStorage.removeItem(key)
    }

    return [value,setStorage,remove]

}
