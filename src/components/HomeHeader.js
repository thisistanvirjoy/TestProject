import { View, Text, StyleSheet} from 'react-native';
import React from 'react';
import {Icon, withBadge} from '@rneui/themed' 
import {colors, parameters} from '../global/styles'
export default function HomeHeader(){
    const BadgeIcon =withBadge(0)(Icon)
    return(<View style={styles.header}>
        <View style ={{alignItems:"center",justifyContent:"center",marginLeft:30}}>
        <Icon
            type='material-community'
            name ='menu'
            color = {colors.cardBackground}
            size = {30}

        />

    </View>
    <View style= {{alignItems:"center",justifyContent:"center",marginLeft:50}}>
        <Text style={{color:colors.cardBackground, fontSize:25,fontWeight:'bold'}}> Ajker Menu </Text>
    </View>
        <View style= {{alignItems:"center",justifyContent:"center" ,marginLeft:60}}>
            <BadgeIcon
                type ="material-community"
                name = "cart"
                size = {35}
                color = {colors.cardBackground}
            />
        </View>
    </View>
    )
}

const styles = StyleSheet.create({

    header:{
        flexDirection:"row",
        backgroundColor:colors.buttons,
        height:parameters.headerHeight
    }
})