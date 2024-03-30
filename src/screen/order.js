import React from 'react'
import { Text, View } from 'react-native'

function order(id) {
  console.log("ordIDDD",id.route.params)
  return (
    <View>
    <Text>Orderrrrrr {id.route.params.name}</Text>
    </View>
  )
}

export default order