import { StatusBar } from 'expo-status-bar';
import { Text, StyleSheet } from 'react-native';
import {useRouter} from "expo-router";
import { LinearGradient } from 'expo-linear-gradient';
import { theme } from '../theme';
import { HomeScreenButton } from '../components/homeScreenButoon';




export default function App() {

  const router=useRouter();
  
  return (

    <LinearGradient 
      start={{ x: 0, y: 0 }}
      end={{ x: 1, y: 1 }}
      colors={[theme.colorBlue,theme.colorDarkBlue,theme.colorLightBlue]}
      style={styles.container}>
      <Text style={styles.text}>Welcome!</Text>
      <Text style={styles.text}>Let's Start Regestring</Text>
      <HomeScreenButton title="Regester" onPress={()=>router.push("/login")}/>
      <StatusBar style="auto" />
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text:{
    color:theme.colorWhite,
    fontSize:32,
    textAlign:"center",
    fontWeight:"bold"
  }
});
