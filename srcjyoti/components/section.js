import React from 'react';
import {View, Text, StyleSheet,Image} from 'react-native'; 
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'


const Section = () => {
  return (
    <View > 
    <View style={{flexDirection: 'row', justifyContent: 'space-evenly',marginTop:-50}}>
    <View style={{...style.text,marginLeft:20}}>
    <Icon name='flash'  size={50} color='skyblue'/>
      <View style={{paddingLeft:10}}>
        <Text style={{color:'red', fontSize:18, fontWeight:'600'}}>Eaten</Text>
        <Text style={{fontWeight:'bold',color:'black', fontSize: 25}}>2467</Text>
        </View>
    </View>
    <View style={{...style.text,marginRight:20,}}>
    <Icon name='fire'  size={50} color='darkorange'/>
      <View style={{paddingLeft:10}}>
        <Text style={{color:'red', fontSize:18, fontWeight:'600'}}>Burned</Text>
        <Text style={{fontWeight:'bold',color:'black', fontSize: 25}}>764</Text>
        </View>
    </View>
    </View>
    <View style={{padding: 13, paddingLeft:30}}>
      <Text style={{fontSize: 30, fontWeight: 'bold', color: 'black'}}>Activity</Text>
      
    </View>

    </View>

  )
};


const style = StyleSheet.create({
    text:{
        borderRadius:10,  
        padding: 23,
        paddingHorizontal: 20,
        backgroundColor:"white",
        shadowColor: 'red',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.3,
        shadowRadius: 4,
        elevation: 3,     
        flexDirection:'row'
        

    }
})

export default Section;