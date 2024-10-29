import { firebase } from "@react-native-firebase/auth";
import { useRouter } from "expo-router";
import { useState } from "react";
import { StyleSheet, TextInput, View } from "react-native";
import { LogInButton } from "../components/logInButton";
import { theme } from "../theme";
import {createUserWithEmailAndPassword} from "firebase/auth";
import {auth} from "../firebaseConfig";


export default function SignUpScreen(){

    const router = useRouter()
    const [email,setEmail] = useState("");
    const [password,setPassword] = useState("")

    const handleSignup = async () => {
        try{
            await createUserWithEmailAndPassword(auth,email,password);
            router.push("/");
        }catch(error){
            console.error(error);
        }
      };
      
      return(

        <View style={styles.container}>
            <TextInput
        placeholder="Enter your Email"
        value={email}
        onChangeText={setEmail}
        style={styles.input}
      />
      <TextInput
        placeholder="Enter Your Password"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
        style={styles.input}
      />
      <View style={styles.btnContainer}>
        <LogInButton title={"Sign Up"} onPress={handleSignup}/>
        <LogInButton title={"Go To Log In"} onPress={()=>router.push("/login")}/>
      </View>
    </View>
      )
}

const styles = StyleSheet.create({
    input:{
        marginBottom: 10, 
        padding: 10,
        height:45,
        borderColor:theme.colorBlack,
        borderWidth:1,
        borderRadius:15,
        width:200,
    },
    container:{
        flex: 1, 
        justifyContent: 'center',
        alignItems:"center",
        padding: 20
    },
    btnContainer:{
        marginTop:20
    }
})