import React from 'react'
import { Text, View ,StyleSheet, Image, Dimensions, Button} from 'react-native'
import { useNavigation } from '@react-navigation/native';

function Order(id,{info}) {
  console.log("ordIDDD",id.route.params)

  const navigation = useNavigation();

  console.log("Distttt",info)

  const mainData=id.route.params
  const price = parseFloat(mainData.price);
  const tax = price/20
  const total= price+tax+20
  

  const handleOrder=()=>[
    navigation.navigate("Order List",{mainData,total})
  ]

 
  console.log("tax",tax)
  console.log("Price Check:::",mainData)
 
  return (
    <View style={styles.container}>
    <View style={styles.box}>
    <Image style={styles.imgStyle} source={id.route.params.image}/>

    <View style={styles.table}>
    <Text style={styles.total} > {id.route.params.name}</Text>
    <Text>Price : ₹{id.route.params.price}.00</Text>
    <Text>Tax : ₹{tax}.00</Text>
    <Text>Delivery Charge : ₹20.00</Text>
    <Text style={styles.total}>Total Amount : ₹{total}.00</Text>
    </View>
    <Button onPress={handleOrder} title='PLACE ORDER'/>
        </View>
    </View>
    
  )
}
const deviceWidth=Math.round(Dimensions.get("window").width)
const styles=StyleSheet.create({
container:{
  alignItems:"center",
 
},
total:{
  fontSize:18,
  fontWeight:"500"

},
imgStyle:{
  borderRadius:0,
  width:deviceWidth,
},
box:{
  alignItems:"center",
  justifyContent:"center"
},
table:{
backgroundColor:'#FAEBD7',
width:deviceWidth,
padding:10,
gap:20,
  
}
})

export default Order