import { StyleSheet, Text, View,TouchableOpacity } from 'react-native'
import React from 'react'

import { createBottomTabNavigation } from '@react-navigation/bottom-tabs'
import {
  //createAppContainer,
  createStackNavigator,
  createBottomTabNavigator,
} from 'react-navigation-stack';
// import { Icon } from '@rneui/themed'; 
import Icon from 'react-native-vector-icons/MaterialIcons'
import { NavigationContainer } from '@react-navigation/native';
import HomeStack from '../routes/HomeStack';

const BottomNavigator = () => {
  // const Tab = createBottomTabNavigation();
  return (
    <NavigationContainer>
    {/* <Tab.Navigator tabBarOption={{
      style: {
        height: 55,
        borderTopWidth: 0,
        elevation:0
      },
      showLabel:false,
      activeIntColor: '#000'
    }}> */}
      
      {/* <Tab.Screen name="Home"
        component={HomeScreen}
        options={{
          tabBarIcon: ({ color }) => (
            
            <Icon name="home-filled" color={color}
              size={28}

            />),
        }}
      />
    </Tab.Navigator>*/}
    <TouchableOpacity onPress={HomeStack}></TouchableOpacity><Text>HEllo</Text>
    </NavigationContainer> 
  )
}

export default BottomNavigator

const styles = StyleSheet.create({})