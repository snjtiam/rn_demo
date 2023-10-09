import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

import Login from './Login';
const WeatherUI = () => {
    
  return (
    <View style={styles.container}>
        <Text>Hello</Text>
      </View>
   
  )
}

export default WeatherUI

const styles = StyleSheet.create({
  container:{
    height:650,
    width:412,
    borderRadius:40,
    backgroundColor:'#fff',
    marginLeft:1
  }})