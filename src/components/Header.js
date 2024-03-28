import React from 'react'
import { StyleSheet, Text, View ,Dimensions} from 'react-native';
import { StatusBar } from 'expo-status-bar';

function Header({label}) {
  // console.log(label)
  return (
    <View style={styles.container} >
      <Text style={styles.label}>{label}</Text>
        <StatusBar style="auto" />
    </View>
   
  )
}

const deviceWidth=Dimensions.get("window").width

const styles = StyleSheet.create({
  container: {
    width:deviceWidth,
    height:100,
    backgroundColor:'#a29fee',
    alignItems:"center",
    justifyContent:"flex-end",
    paddingBottom:20,
    
  },
  label:{
    fontSize:24,
    fontWeight:"500",

  }
});

export default Header