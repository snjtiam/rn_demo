import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
import Ionicons from 'react-native-vector-icons/Ionicons'
import WeatherUI from '../screens/WeatherUI'
const Header = () => {
  return (
    
    <View style={styles.container}>
        <Ionicons name='menu-outline' style={styles.menu}/>
    <View ><Text style={styles.Text1}>Los angelos ,USA</Text></View>
    <Text style={styles.Text2}>Today 06:36</Text>
    <Icon name='plus' 
    style={styles.icon} />
    <WeatherUI/>
    </View>
  )
}

export default Header

const styles = StyleSheet.create({
    container:{
        height:300,
        width:420,
        color:'#000',
        borderRadius:50,
        backgroundColor: 'silver'
    },
    menu:{
        fontSize:30,
        top:80
    },
    Text1:{
        width:300,
        top:45,
        marginLeft:90,
        paddingLeft:50,
        fontSize:15,
        color:'#000',
        fontWeight:'bold',
    },
    Text2:{
        width:300,
        top:45,
        marginLeft:95,
        paddingLeft:50,
        fontSize:15,
        color:'#948885'
        // textAlign:'center'
    },
    icon:{
        height:50,
        width:50,
        fontSize:30,
        marginLeft:350,
        top:10,
        color:'#000'

    }
})