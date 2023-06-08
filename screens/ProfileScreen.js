import { Pressable, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { auth } from '../firebase'
import { signOut } from 'firebase/auth';
import { SafeAreaView } from 'react-native-safe-area-context'
import { useNavigation } from '@react-navigation/native';

const ProfileScreen = () => {
    const user = auth.currentUser;
    const navigation = useNavigation();
    const signOutUser = () => {
        signOut(auth).then(() => {
            navigation.replace("Login");
        }).catch(err => {
            console.log(err);
        })
    }
  return (
    <SafeAreaView style={{flex:1,justifyContent:"center",alignItems:"center"}}>
      <Pressable style={{marginVertical:10}}>
        <Text style={{textAlign:"center",fontSize:40,color:"#6CB4EE"}}>welcome</Text>
        <Text style={{fontSize:15,textAlign:"center",marginTop:10,marginBottom:10}}>"{user.email}"</Text>
      </Pressable>

      <Pressable onPress={signOutUser}>
          <Text style={{fontSize:30,color:"#6CB4EE"}}>Sign Out</Text>
      </Pressable>
    </SafeAreaView>
  )
}

export default ProfileScreen

const styles = StyleSheet.create({})