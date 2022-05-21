import { View, Text, StyleSheet, Dimensions } from 'react-native'
import React from 'react'
import {colors, parameters} from "../global/styles"
import LoginScreen from "react-native-login-screen";
import {Icon} from '@rneui/themed'
import Header from '../src/components/Header'
import { NavigationContainer } from '@react-navigation/native';
export default function SignInScreen({navigation}) {
  return (
    <View style ={styles.container}>
      
    {/* <View style ={{marginLeft:20, marginTop:10}}>
          <Text style ={title}> Sign In</Text>
      </View>
      <View>
          <Text style= {Styles.text1}>Please enter email and password</Text> 
      </View>*/}
      <LoginScreen
  logoImageSource={require("../src/global/logo_primary.png")}
  onLoginPress={() => {
      navigation.navigate("HomeScreen")
  }}
  onHaveAccountPress={() => {}}
  onEmailChange={(email) => {}}
  onPasswordChange={(password) => {}}
/>
  </View> 
  )
}

const styles = StyleSheet.create({
    container :{
        flex:1
    }

    
})
