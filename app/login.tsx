import {useState} from "react";
import {useRouter} from "expo-router";
import { View, TextInput, Text, StyleSheet } from 'react-native'; 
import { LogInButton } from "../components/logInButton";
import { theme } from "../theme";
import { signInWithEmailAndPassword  } from 'firebase/auth';
import {auth} from "../firebaseConfig";
import { storeUser } from "../store/authPersistance";



export default function LoginScreen(){

    const router = useRouter();
    const [email,setEmail] = useState("");
    const [password,setPassword] = useState("");

    const handleLogIn =async ()=>{
        try{
            const userCredential= 
            await signInWithEmailAndPassword(auth,email,password);
            storeUser(userCredential.user);
            router.push("/")
        }catch(error){
            console.error(error);
        }
    }

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
                <LogInButton title={"Log In"} onPress={handleLogIn}/>
                <LogInButton  title={"Go To Sign Up"} onPress={()=>router.push("/signup")}/>
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