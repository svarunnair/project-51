import React, { useState } from 'react'
import { Text, View ,StyleSheet, Dimensions, Pressable, Image, TextInput, Button, Alert} from 'react-native'
import IconLabel from '../../components/IconLabel'
import { useNavigation } from '@react-navigation/native';

function Signin() {
    const [user,setUser]=useState("")
    const [email,setEmail]=useState('')
    const [password,setPassword]=useState("")

     const navigation = useNavigation();

 
    const handleSubmit=()=>{

        if(!email||!password){
            Alert.alert('Please enter data')       
        }
        else{
             let data={
            email:email,
            password:password
        }
        console.log("Dataaa",data)
        navigation.navigate("Restaurants")

        }
       
    }


  return (

    <View style={styles.box} >

     <View style={styles.outer}>
     
    <View  style={styles.cardContainer}  >
   
    <Text style={styles.titleSign}>Signin</Text>
<Pressable onPress={()=>navigation.navigate("Detail",{info,navigation,distance})}>
  
    </Pressable>
    
       <View style={styles.info}>

       <Text style={styles.titleStyle}>Email Id</Text>
        <TextInput
        style={styles.input}
        placeholder="Type here..."
        onChangeText={(e)=>setEmail(e)}
        keyboardType="email-address"
        autoCapitalize="none"
        placeholderTextColor="grey"
      />

       <Text style={styles.titleStyle}>Password</Text>
        <TextInput
        style={styles.input}
        placeholder="Type here..."
        onChangeText={(e)=>setPassword(e)}
      
        autoCapitalize="none"
        placeholderTextColor="grey"
      />

<Pressable style={styles.button} onPress={handleSubmit} >
      <Text style={styles.buttonInner}>Signin</Text>
  </Pressable>
      
   
    <View  style={styles.iconStyle}>
      
       
 
</View>
   </View>
    </View>
    </View>

    </View>
  )
}



const deviceWidth=Math.round(Dimensions.get("window").width)
const deviceHeight=Math.round(Dimensions.get("window").height)
const styles=StyleSheet.create({

    buttonInner:{
        borderRadius:20,
        padding:7,
        backgroundColor:"#008000",
        color:"white",
        shadowOffset:{
        width:5,
        height:5
    },
    shadowOpacity:.75,
    shadowRadius:5,
    elevation:9,     
    },

    button:{
        
        paddingTop:10,
        display:"flex",
        alignItems:"center",
        justifyContent:"center",
        

    
    },
    box:{
        display:"flex",
        alignItems:"center",
        height:deviceHeight,
       backgroundColor:"#FFD700",
    

    },
    input:{
         borderWidth: 1, 
         borderColor: 'grey',
         borderRadius:12,
         
    },
    titleSign:{
        fontSize:20,
      paddingBottom:10
    },
    cardContainer:{
        width:deviceWidth-25 ,
        backgroundColor:"#8FBC8F",
      
    borderColor: 'green',
    justifyContent:"center",
    alignItems:"center",
    height:250,
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
        marginTop:50,
        marginBottom:10,
    },
    titleStyle:{
        fontSize:15,
        
        fontWeight:"400",
    },
    cato:{
        fontWeight:"200",      
    },
    info:{
        marginHorizontal:10,
        marginVertical:5,
   
        width:200
    },
    iconStyle:{
        flexDirection:"row",
        marginTop:5,
    }
})

export default Signin