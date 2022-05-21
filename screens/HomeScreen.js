import { View, Image, Text, StyleSheet, TouchableOpacity, ScrollView, FlatList, Pressable, Dimensions} from 'react-native';
import React, {useState} from 'react'  
import { Icon } from '@rneui/themed';
import HomeHeader from '../src/components/HomeHeader';
import {colors, parameters} from '../src/global/styles';
import {filterData, restaurantData} from '../src/global/Data'
import FoodCard from '../src/components/FoodCard';

const SCREEN_WIDTH = Dimensions.get('window').width
 
export default function HomeScreen() {

    const [delivery, setDelivery] = useState(true)
    const [indexCheck, setIndexCheck] = useState("0")
  return (
    <View style = {styles.container}>
      <HomeHeader/>
  <ScrollView
    stickyHeaderIndices={[0]}
    showsVerticalScrollIndicator={true}
  >    
  <View >
      <View style={{marginTop:10,flexDirection:"row", justifyContent:"space-evenly"}}>
        <TouchableOpacity
             onPress={()=>{
             setDelivery(true)
          }}
        
        >
          <View style={{...styles.deliveryButton,backgroundColor:delivery?colors.buttons:colors.grey4}}>
            <Text style={styles.deliverText}> Delivery </Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={()=>{
          setDelivery(false)
        }}
        >
          <View style={{...styles.deliveryButton,backgroundColor:delivery?colors.grey4 :colors.buttons}}>
            <Text style={styles.deliverText}> Pickup </Text>
          </View>
        </TouchableOpacity>
      </View>
      </View>
      <View style={styles.headerTextView}>
            <Text style = {styles.headerText}> Catagories
            </Text>
          </View>
          <View>
            <FlatList 
            horizontal ={true}
            showsHorizontalScrollIndicator ={false}
            data = {filterData}
            keyExtractor = {(item)=>item.id}
            extraData ={indexCheck}
            renderItem= {({item,index})=>(
              <Pressable
              onPress={()=>{
                setIndexCheck(item.id)
              }}
              >
                
                <View style ={indexCheck === item.id ? {...styles.smallCardSelected}:{...styles.smallCard}}>
                  <Image
                  style= {{height:60,width:60,borderRadius:30}}
                  source = {item.image}
                  />
                  <View>
                    <Text style={indexCheck === item.id ? {...styles.smallCardTextSelected}:{...styles.smallCardText}}>
                      {item.name}
                    </Text>
                  </View>
                </View>

              </Pressable>

            )}

            />
          </View>
          <View style={styles.headerTextView}>
            <Text style = {styles.headerText}> Whats Cooking?
            </Text>
          </View>
          <View>
            <FlatList
            style={{marginTop:10,marginBottom:10}}
            horizontal={true}
            data = {restaurantData}
            keyExtractor = {(item,index)=>index.toString()}
            showsHorizontalScrollIndicator ={false}
            renderItem = {({item})=>(
              <View style= {{marginRight:10}}>
                <FoodCard
                  screenWidth={SCREEN_WIDTH*0.8}
                   images = {item.images}
                   restaurantName ={item.restaurantName}
                   location ={item.locaton}
                   distance = {item.distance}

                />
                </View>

            )}

            />
          </View>
      </ScrollView>   
          
    </View>
  )
}
const styles = StyleSheet.create({

    container:{
        flex:1
        
    },
    deliveryButton:{
      paddingHorizontal: 20,
      borderRadius: 20,
      paddingVertical:5

    },

    deliverText:{
      marginLeft: 5,
      fontSize: 16
    },

    headerText:{
      color:colors.grey1,
      fontSize:22,
      fontWeight:"bold",
      paddingLeft: 10
    },
    headerTextView:{
      backgroundColor:colors.greay5,
      paddingVertical:3
    },
    smallCard :{
      borderRadius:30,
      backgroundColor:colors.yellow,
      justifyContent: "center",
      alignItems: "center",
      padding: 5,
      width: 80,
      margin: 10,
      height:90
    },
    smallCardSelected:{
      borderRadius:30,
      backgroundColor:colors.buttons,
      justifyContent: "center",
      alignItems: "center",
      padding: 5,
      width: 80,
      margin: 10,
      height:90

    },
    smallCardText:{
      fontWeight:'bold',
      color:colors.grey1

    },
    smallCardTextSelected:{
      fontWeight:'bold',
      color:colors.cardBackground

    }
})

