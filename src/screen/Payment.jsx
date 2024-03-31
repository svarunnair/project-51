import { useNavigation, useRoute } from '@react-navigation/native';
import { Icon } from '@rneui/base';
import React from 'react'
import { Button } from 'react-native';
import { Text, View,StyleSheet, Image, Dimensions } from 'react-native'
import IconLabel from '../components/IconLabel';

function Payment(mainData,{total}) {

    const navigate=useNavigation()

    const route = useRoute();
    console.log("MAIINNNNNN]]]]]]]]",mainData.route.params.mainData)

    const data= mainData.route.params.mainData
    console.log("paymnttTotal",mainData.route.params.total)

    console.log("testrData.......", route.params)

    const grandTotal=mainData.route.params.total


    const handleHome=()=>{
        navigate.navigate("Restaurants")
    }

  return (
    <View style={styles.outer}>
    <View style={styles.container}>
    <Text></Text>
    <Image style={styles.imgstyle} source={data.image}/>
    <Text>Item: {data.name}</Text>
    <Text>Total Amount : ₹{grandTotal}.00</Text>
        </View>
        <Text style={styles.bottom}>Food is being prepared.Your order will arrive shortly...</Text>
        <IconLabel style={styles.icon}  name="restaurant-outline"  color="#000"/>
       

        <View style={styles.bottom} >
            <Button onPress={handleHome} title='Return Home'/>
        </View>
        
    </View>
  )
}

const deviceWidth=Math.round(Dimensions.get("window").width)

const styles=StyleSheet.create({
    container:{
        alignItems:"center",
        backgroundColor:"#FFD700",
        borderRadius:30,
        padding:30,
        shadowColor:"#000",
    marginTop:10,
    shadowOffset:{
        width:5,
        height:5
    },
    shadowOpacity:.75,
    shadowRadius:5,
    elevation:9,
    },
    outer:{
        alignContent:"center",
        alignItems:"center",
        justifyContent:"center",
        padding:30,
    },
    imgstyle:{
        borderRadius:30,    
    },
    icon:{
       
    },
    bottom:{
        marginTop:30,
    }
})

export default Payment