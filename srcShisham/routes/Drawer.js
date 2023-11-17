import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer'
import Login from '../screens/Login';
const Drawer = () => {
    const Drawer = createDrawerNavigator();
  return (
    <NavigationContainer>
      <Drawer.Navigator initialRouteName='Login'>
        <Drawer.Screen name='login' component={Login}/>
      </Drawer.Navigator>
      </NavigationContainer>
   
  )
}

export default Drawer

const styles = StyleSheet.create({})