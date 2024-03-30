import React from 'react'
import { Dimensions,StyleSheet ,Image, Text, Pressable } from 'react-native'
import { View } from 'react-native'
import IconLabel from '../components/IconLabel'
import { Button } from '@rneui/base'
import { useNavigation } from '@react-navigation/native';
function Menu({data}) {
 const navigation = useNavigation();
  console.log("MenuDataaaaa",data)
 console.log("MenuNav",navigation)


  const navigateToPageX = () => {
    navigation.navigate('Order');
  };



  return (
   
    <View style={styles.outer}>
    <Button onPress={navigateToPageX}>Orderrrr</Button>
    <View  style={styles.cardContainer}>
    <Pressable >
    <Image  style={styles.imageStyle}  source={data.image}/>
    </Pressable>
       <View style={styles.info}>
        <Text style={styles.titleStyle}>{data.name}</Text>
        <Text style={styles.cato}>₹ {data.price}.00</Text>
   </View>
    </View>
    </View>
  )
  
}



const deviceWidth=Math.round(Dimensions.get("window").width)
const styles=StyleSheet.create({
    cardContainer:{
      
        width:deviceWidth-25 ,
        backgroundColor:"#8FBC8F",
    height:200,
    borderRadius:20,
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
    imageStyle:{
      height:130,
      width:deviceWidth-25,
      borderTopRightRadius:20,
      borderTopLeftRadius:20,
      opacity:.9,
      
    },
    outer:{
        width:deviceWidth-25,
        alignItems:"center",
        marginTop:10,
        marginBottom:10,
        
    },
    titleStyle:{

        fontSize:20,
        fontWeight:"800",
    },
    cato:{
      fontSize:15,
        fontWeight:"500",      
    },
    info:{
        marginHorizontal:10,
        marginVertical:5,
    },
    iconStyle:{
        flexDirection:"row",
        marginTop:5,
    }
})

export default Menu