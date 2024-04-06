import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from './screen/Home';
import Detail from './screen/Detail';
import Restaurent from './screen/Restaurent';
import Order from './screen/Order';
import Payment from './screen/Payment';
import Signup from './screen/auth/Signup';
import Signin from './screen/auth/Signin';



function Routes({data}) {
    const Stack = createNativeStackNavigator()
  return (
    <NavigationContainer>
        <Stack.Navigator initialRouteName='Signup'
        screenOptions={{
          statusBarColor:"black",
          headerStyle:{
            backgroundColor:"#8FBC8F"
          },
          headerTintColor:"black",
          headerTitleAlign:"center"

        }}>
            <Stack.Screen name="Restaurants" component={Home}/>
             <Stack.Screen name="Signup" component={Signup}/>
              <Stack.Screen name="Signin" component={Signin}/>
            {/* <Stack.Screen name="Restaurent" data={data} component={Restaurent}/> */}
             <Stack.Screen name="Detail" component={Detail}/>
              <Stack.Screen name="Order" component={Order}/>
              <Stack.Screen name="Order List" component={Payment}/>
        </Stack.Navigator>
    </NavigationContainer>
  )
}

export default Routes