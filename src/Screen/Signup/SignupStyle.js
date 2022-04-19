import {
  StyleSheet,
} from "react-native";

const styles = StyleSheet.create({
    container : {
      flex: 1,
      backgroundColor: "rgba(51, 54, 53, 1)",
      alignItems: "center",
      justifyContent: "center",
      width: "100%",
      height: "100%"
    },

    image: {
      marginBottom: 40,
      height: "30%",
      width: "60%",
      resizeMode: 'contain'
    },
    
    inputView: {
      backgroundColor: 'rgb(42, 221, 123)',
      borderRadius: 30,
      width: "70%",
      height: 45,
      marginBottom: 20,
      alignItems: "center",
    },
    
    inputText: {
      width: "100%",
      height: "100%",
      flex: 1,
      padding: 10,
      marginLeft: 0,
      textAlign: "center",
    },

    registerBtn: {
      width: "80%",
      borderRadius: 25,
      height: 50,
      alignItems: "center",
      justifyContent: "center",
      marginBottom: 20,
      backgroundColor: 'rgb(42, 180, 123)',
    },

    checkMdpGood: {
      height: 30,
      marginBottom: 30,
      color: "#32fa00",
      opacity: 0.35,
    },

    checkMdpNotGood: {
      height: 30,
      marginBottom: 30,
      color: "#E93838",
      opacity: 0.35,
    }
    
    
})

export default styles;
