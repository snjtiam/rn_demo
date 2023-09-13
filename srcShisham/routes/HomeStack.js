import { StyleSheet, Text, View ,Button} from 'react-native'
import React from 'react'
import {NavigationContainer} from '@react-navigation/native'
import {createNativeStackNavigator} from "@react-navigation/native-stack";

const Stack= createNativeStackNavigator();
const HomeStack = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name='Home' component={Home}/>
        <Stack.Screen name='Login' component={Login}/>

      </Stack.Navigator>

    </NavigationContainer>
  )
}

const Home= (props) =>{
  return(
    <View>
      <Text>HomeScreen</Text>
      <Button title='login' onPress={()=>props.navigation.navigate("Login")} />
    </View>
  )
}
const Login= () =>{
  return(
    <View>
      <Text>Login</Text>
    </View>
  )
}
export default HomeStack

const styles = StyleSheet.create({})