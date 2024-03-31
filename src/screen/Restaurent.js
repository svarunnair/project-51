import React from 'react'
import { Text, View ,StyleSheet, Dimensions, Image, Button, Pressable} from 'react-native'
import IconLabel from '../components/IconLabel'

function Restaurent({info,navigation}) {


    console.log("RESInFooo>.....",info.distance)

    const distance=info.distance


console.log("Resnav...",navigation)
  return (
    <View style={styles.outer}>
    <View  style={styles.cardContainer}  >
   
<Pressable onPress={()=>navigation.navigate("Detail",{info,navigation,distance})}>
    <Image style={styles.imageStyle} source={info.image}/>
    </Pressable>
       <View style={styles.info}>
        <Text style={styles.titleStyle}>{info.name}</Text>
        <Text style={styles.cato}>{info.categories}</Text>
      
   
    <View  style={styles.iconStyle}>
    
       
   <IconLabel name="time" label={info.deliveryTime} color="#fff"/>
   <IconLabel name="pin-outline" label={info.distance} color="#000"/>
</View>
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
        fontWeight:"200",      
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

export default Restaurent