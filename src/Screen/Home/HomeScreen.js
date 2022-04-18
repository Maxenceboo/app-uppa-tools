import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import {
  Text,
  View,
  Image,
  TextInput,
  Button,
  TouchableOpacity,
} from "react-native";
import styles from "./HomeStyle";
import AsyncStorage from '@react-native-async-storage/async-storage';



export default function Home ({ navigation }) {
    return(
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <StatusBar style="auto" />
            <Text>Home Screen</Text>
        </View>
    )
}
