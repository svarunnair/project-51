import React from 'react'
import { Text, View ,StyleSheet} from 'react-native'
import { Icon } from '@rneui/themed'

function IconLabel({name,label,color}) {
  return (
    <View style={styles.container}>
   
    <Icon style={styles.iconStyle} name={name} type='ionicon' size={14} color={color}></Icon>
    <Text style={styles.labelStyle}>{label}</Text>
    </View>
  )
}

const styles=StyleSheet.create({
    labelStyle:{
        fontSize:12,
    },
    container:{
        flexDirection:"row",
        marginRight:10,
        alignItems:"center",
        
    },
    iconStyle:{
        marginRight:2
    }
})

export default IconLabel