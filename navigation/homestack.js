import { View, Text } from 'react-native';
import React from 'react';
import {createStackNavigator, TransitionPresets} from '@react-navigation/stack';
import HomeScreen from '../screens/HomeScreen';

const auth = createStackNavigator();

export function homestack() {
  return (
      <auth.Navigator>
          <auth.Screen
                    name= "HomeScreen"
                    component={HomeScreen}
                    options = {{
                       headershown: false,
                        ...TransitionPresets.RevealFromBottomAndroid
                    }}
                 />
                    
      </auth.Navigator>


  
  )
}