import React from 'react';
import { View,Text,Image,TextInput, ScrollView, TouchableOpacity, ImageBackground} from 'react-native';
import Ionicons from "react-native-vector-icons/Ionicons";
import { useNavigation } from '@react-navigation/native';
import {ROUTES} from '../navigation/routes';

const ForthUI = () => {
  
  return (
    <View>
      <View style={{flexDirection:'row',justifyContent:"space-between"}}>
        <View style={{flexDirection:'row', flex:1}}>
         <Image style={{height:45,width:45,borderRadius:100, margin:8}} source={require("../assets/Person2.jpg")}/>
          <Text style={{fontSize:20, marginTop:20, color:'#111111'}}>Hi,<Text style={{fontWeight:"bold",color:'black'}}>Jyoti Gupta</Text></Text>
        </View>
        <Text style={{marginTop:'20',alignSelf:'center'}}>
         <Ionicons name='notifications'  size={33} color='black' />
        </Text>
      </View>
      
        <TextInput placeholder='  Search your place' style={{backgroundColor:'white', marginHorizontal:25, marginTop:2,borderRadius:15}}/>

        <Second/>
        {/* <ScrollView
        horizontal={true} // Enable horizontal scrolling
        contentContainerStyle={{ flexGrow: 1 }}/> */}

        <Third/>
        <Forth/>
        <Fifth/>
    </View>  
    
  )
}

const Second =() =>{
  return (
    <View style={{flexDirection:'row', justifyContent:'space-between', paddingVertical:20,paddingHorizontal:10}}>
      <Text style={{fontWeight:'bold', fontSize:23, color:'black'}}>Special for you</Text>
      <Text style={{fontSize:18, paddingTop:5.5}}>Explore</Text>
    </View>
  ) 
}

const Third =() =>{
  const navigation = useNavigation();

  const firstimg=()=>{
    navigation.navigate(ROUTES.IMAGE1_DETAILS);
  }

  return (
    <View>
      <ScrollView horizontal={true}>

        <TouchableOpacity style={{ marginLeft:15, marginHorizontal:10,borderRadius:60, overflow:'hidden'}} onPress={firstimg}>
        <ImageBackground style={{height:255, width:195, }} source={require("../assets/Person2.jpg")}>
          <Text style={{color:'white'}}>hellobbbbbbb</Text>
        </ImageBackground>
        </TouchableOpacity>

        <Image style={{borderRadius:20, marginHorizontal:10,height:255,     width:195,}} source={require("../assets/Person.jpg")}/>
        <Image style={{borderRadius:20, marginLeft:15,marginHorizontal:10, height:255, width:195}} source={require("../assets/Person2.jpg")}/>
        <Image style={{borderRadius:20, marginLeft:15,marginHorizontal:10, height:255, width:195}} source={require("../assets/Person.jpg")}/>
        
      </ScrollView>
    </View>


  )
}

const Forth =() =>{
  return (
    <View style={{flexDirection:'row', justifyContent:'space-between', padding:25}}>
      <Text style={{fontWeight:'bold', fontSize:23, color:'black'}}>Popular Place</Text>
      <Text style={{fontSize:18, paddingTop:5.5}}>Explore</Text>
    </View>
  ) 
}

const Fifth =() =>{
  return (
    <View style={{flexDirection:'row', backgroundColor:'#fff', marginHorizontal:30, borderRadius:20}}>
      <Image style={{borderRadius:20, marginLeft:15,marginHorizontal:10, height:118, width:105}} source={require("../assets/Person2.jpg")}/>
      <View style={{width:200}}>
        <Text style={{fontSize:20,fontWeight:'900'}}>Moraine lake,Canada</Text>
        <Text style={{fontWeight:600, paddingVertical:6}}>Go hiking and camping by the lake side with gorgeous views...</Text>
        <Text style={{fontWeight:'900', fontSize:20, color:'#00CBFE',}}>$245,00</Text>

      </View>
    </View>

  )
}



export default ForthUI;