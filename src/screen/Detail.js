import React from 'react'
import { Text, View ,StyleSheet, Image, Dimensions} from 'react-native'
import Menu from './Menu.jsx'
import { FlatList } from 'react-native'
import { Button } from '@rneui/base'


const foodList=[
  {
    name:"Biriyani",
    price:"200",
    image:require("../../assets/biri.jpeg"),
    id:"1"
  },
  {
    name:"Chappathi",
    price:"10",
    image:require("../../assets/chap.jpeg"),
    id:"2"
  },
  {
    name:"Porota",
    price:"20",
     image:require("../../assets/pizz.jpeg"),
     id:"3"
  },
  {
    name:"Rice",
    price:"20",
     image:require("../../assets/rice.jpeg"),
     id:"4"
  },
  {
    name:"Pizza",
    price:"180",
     image:require("../../assets/pizz.jpeg"),
     id:"5"
  },
  {
    name:"Burger",
    price:"90",
     image:require("../../assets/bur.jpeg"),
     id:"6"
  },
  {
    name:"Tea",
    price:"10",
   image:require("../../assets/tea.jpeg"),
   id:"7"
  },
  {
    name:"Ice-Cream",
    price:"150",
     image:require("../../assets/ice.jpeg"),
     id:"8"
  },
]

function Detail(info,{navigation},distance) {

  console.log("infoDetail",info)
  console.log("InfoDDDDDDD.............",distance)

 
   
  return (
    <View style={styles.container}>
   
    <View>
    <Image style={styles.imgStyle} source={info.route.params.info.image}/>
   <Text  style={styles.box}> {info.route.params.info.name} </Text> 
   <Text> {info.route.params.info.categories} </Text> 
    </View>
    
     <FlatList 
       data={foodList} 
       renderItem={({item})=>{
        return <Menu data={item} navigation={navigation} info={info} />
       }}
       showsVerticalScrollIndicator={false}
      />
   
    </View>
  )
}
  const deviceWidth=Math.round(Dimensions.get("window").width)
const styles=StyleSheet.create({
  container:{
    justifyContent:"center",
    alignItems:"center",
    marginBottom:40,
    backgroundColor:"#F0E68C",
    marginBottom:100,
  },
box:{
  fontSize:22,
  fontWeight:"600"
},
imgStyle:{
  width:deviceWidth
}
})
export default Detail