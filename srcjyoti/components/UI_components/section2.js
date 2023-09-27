import React from 'react';
import {View, Text, StyleSheet,Button} from 'react-native'; 
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'

const Sectiona = () => {
  return (
    <View >
    <View style={{flexDirection: 'row', justifyContent: 'space-evenly'}}>
    <View style={{...style.text, marginLeft:20}}>
      <View style={{flexDirection:'row'}}>
        <Text style={style.ActivitySection}>Walk</Text> 
        <Icon name='walk'  size={25} color='black'/>
      </View>
        <Text style={style.ActivitySection2}>8965</Text>
        <Text style={{color:'white', fontSize:16, fontWeight:'300'}}>Steps</Text>
    </View>
    <View style={{...style.text, backgroundColor:'orange', marginRight:20}}>
    <View style={{flexDirection:'row'}}>
        <Text style={style.ActivitySection}>Sleep</Text> 
        <Icon name='sleep'  size={25} color='black'/>
      </View>
        <Text style={style.ActivitySection2}>07:34</Text>
        <Text style={{color:'black', fontSize:16, fontWeight:'300'}}>Hours</Text>
    </View>
    </View> 

    
    </View>
   

  )
};


const style = StyleSheet.create({
    text:{
        borderRadius:20,  
        padding:20,
        // paddingRight:75,
        backgroundColor:"#2E8B57", //greencolor
        shadowColor: 'red',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.3,
        shadowRadius: 4,
        elevation: 5,     
    },

    ActivitySection:{
        color:'white',
        fontSize:20,
        fontWeight:'400',
        paddingBottom:40,
        paddingRight:50,
    },

    ActivitySection2:{
      
      fontWeight:'bold',
      color:'white',
       fontSize: 25
    },
})

export default Sectiona;