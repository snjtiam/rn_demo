import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'

const Header = () => {
  return (
    
    <View >
    <View style={styles.container}><Text style={styles.Text1}>Los angelos ,USA</Text></View>
    <Text style={styles.Text2}>Today 06:36</Text>
    <Icon name='plus' 
    style={styles.icon} />
    </View>
  )
}

export default Header

const styles = StyleSheet.create({
    container:{
        height:50,
        width:200,
        color:'#000',
        borderRadius:50,
        backgroundColorcolor: '#948885'
    },
    Text1:{
        width:300,
        top:45,
        marginLeft:90,
        paddingLeft:50,
        fontSize:15,
        color:'#000',
        fontWeight:'bold'
        // textAlign:'center'
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