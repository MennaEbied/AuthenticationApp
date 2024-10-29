import { StatusBar } from 'expo-status-bar';
import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, Button, StyleSheet, ScrollView, Pressable } from 'react-native';
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged, signOut } from '@firebase/auth';
import { LogInButton } from '../components/logInButton';
import {useRouter} from "expo-router"




export default function App() {
  const router=useRouter()
  return (
    <View style={styles.container}>
      <Pressable onPress={()=>router.push("/login")}><Text>Open up App.tsx to start working on your app!</Text></Pressable>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
