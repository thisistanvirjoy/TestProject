
import React from 'react'
import {createStackNavigator, TransitionPresets} from '@react-navigation/stack';
import SignInScreen from '../screens/SignInScreen';
import HomeScreen from '../screens/HomeScreen';

const auth =createStackNavigator();

export default function AuthStack(){
    return(
        <auth.Navigator>
            <auth.Screen
                name="SignInScreen"
                component= {SignInScreen}
                options = {{
                    headerShown: false,
                    ...TransitionPresets.RevealFromBottomAndroid
                }}
                />
                <auth.Screen
                name="HomeScreen"
                component= {HomeScreen}
                options = {{
                    headerShown: false,
                    ...TransitionPresets.RevealFromBottomAndroid
                }}
                />
        </auth.Navigator>
    )
}