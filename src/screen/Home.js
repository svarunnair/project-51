import React from 'react'
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Restaurent from './Restaurent';
import Header from '../components/Header';
import { FlatList } from 'react-native';

const restautents=[
    {
        id:1,
        name:"Zather",
        categories:"Biriyani,porotta, coffe,cakes",
        deliveryTime:"30min",
        distance:"6km",
        image:require("../../assets/download.jpeg")
    },
    {
        id:2,
        name:"la arabia",
        categories:"Rice,porotta, coffe,cakes",
        deliveryTime:"20min",
        distance:"3km",
        image:require("../../assets/download.jpeg")
    },
    {
        id:3,
        name:"amis",
        categories:"porotta, coffe,cakes",
        deliveryTime:"40min",
        distance:"16km",
        image:require("../../assets/download.jpeg")
    },
    {
        id:4,
        name:"Ambur",
        categories:"Biriyani,kabab, coffe,cakes",
        deliveryTime:"36min",
        distance:"12km",
        image:require("../../assets/download.jpeg")
    },
    {
        id:5,
        name:"kichuz",
        categories:"juice,porotta, coffe,cakes",
        deliveryTime:"40min",
        distance:"26km",
        image:require("../../assets/download.jpeg")
    },
    {
        id:6,
        name:"paragon",
        categories:"Beef, coffe,cakes",
        deliveryTime:"10min",
        distance:"4km",
        image:require("../../assets/download.jpeg")
    },
]



function Home() {
  
  return (
   <View style={styles.container}>
      <Header label="Food Central"/>
      <Text>Home page....!</Text>
       <StatusBar barStyle="dark-content"/>
       <FlatList 
       data={restautents} 
       renderItem={({item})=>{
        return <Restaurent info={item}/>
       }}
       keyExtractor={(restautents)=>restautents.id.toString()}
       showsVerticalScrollIndicator={false}
      />
    </View>
  )
}




const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#6c5ce7',
    alignItems: 'center',
   
  },
});

export default Home