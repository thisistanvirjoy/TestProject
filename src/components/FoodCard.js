import { View, Text, TouchableOpacity, Image, StyleSheet,Dimensions, ImageBase } from 'react-native'
import React from 'react'

import { Icon } from '@rneui/themed'

import{colors, parameters} from '../global/styles';

export default function FoodCard({
    onPressedFoodCard,
    restaurantName,
    distance,
    location,
    images,
    averageReview,
    screenWidth

})  {
  return (
   
        <TouchableOpacity>
            <View style={{...styles.cardView,width:screenWidth}}>
                <Image
                style={{...styles.image,width:screenWidth}} 
                source = {{item:images}}
                />
            </View>

            <View>
                <Text style={styles.restaurantName}>{restaurantName} </Text>
            </View>
            <View style={{flex:1,flexDirection:"row"}}>
            <View style={styles.location}>
            <Icon
            type ='material'
            name = "place"
            color = {colors.grey1}
            size ={18}
            iconStyle={{
                marginTop:3
            }}


           
            />
            <Text style={styles.distance}>
                {distance} KM
            </Text>
            </View>
            </View>

        </TouchableOpacity>

    
        )
}

const styles = StyleSheet.create({
    cardView:{
        marginHorizontal:9,
        borderTopRightRadius:5,
        borderTopLeftRadius: 5,
        borderWidth:1,
        borderColor:colors.grey4,
        borderBottomLeftRadius:5,
        borderBottomRightRadius:5,

  

    },
    image:{
        borderTopLeftRadius:5,
        borderBottomRightRadius:5,
        height:150,
    },
    restaurantName:{
        fontSize:17,
        fontWeight:"bold",
        color:colors.grey1,
        marginTop:5,
        marginLeft:10,
    },
    location:{
        flex:4, flexDirection:"row",
        borderRightColor:colors.grey4,
        paddingHorizontal:5,
        borderRightWidth:1,

    },
    distance:{
        fontSize:12,
        fontWeight:'bold',
        color:colors.grey2,
        paddingHorizontal:5,
        borderRightWidth:1,
    }
})