import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from './screen/Home';
import Detail from './screen/Detail';
import order from './screen/order';
import Restaurent from './screen/Restaurent';



function Routes({data}) {
    const Stack = createNativeStackNavigator()
  return (
    <NavigationContainer>
        <Stack.Navigator initialRouteName='Home'
        screenOptions={{
          statusBarColor:"black",
          headerStyle:{
            backgroundColor:"#8FBC8F"
          },
          headerTintColor:"black",
          headerTitleAlign:"center"

        }}>
            <Stack.Screen name="Home" component={Home}/>
            {/* <Stack.Screen name="Restaurent" data={data} component={Restaurent}/> */}
             <Stack.Screen name="Detail" component={Detail}/>
              <Stack.Screen name="Order" component={order}/>
        </Stack.Navigator>
    </NavigationContainer>
  )
}

export default Routes