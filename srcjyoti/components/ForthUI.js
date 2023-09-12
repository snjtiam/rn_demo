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
    navigation.navigate(ROUTES.FirstImgDetails);
  }

  const secondimg=()=>{
    navigation.navigate(ROUTES.SecondImgDetails);
  }

  const thirdimg=()=>{
    navigation.navigate(ROUTES.ThirdImgDetails);
  }

  const forthimg=()=>{
    navigation.navigate(ROUTES.ForthImgDetails);
  }

  const fifthimg=()=>{
    navigation.navigate(ROUTES.FifthImgDetails);
  }
  return (
    <View>
      <ScrollView horizontal={true}>

        {/* ---------------using ImageBackground------------------ */}
        <TouchableOpacity style={{ marginLeft:15, marginHorizontal:10,borderRadius:20, overflow:'hidden'}} onPress={firstimg}>
        <ImageBackground style={{height:255, width:195, justifyContent:'flex-end' }} source={require("../assets/Ktm.jpg")}>
          <Text style={{color:'white', fontSize:17, fontWeight:'bold', color:'#fff', backgroundColor:'skyblue'}}>   Kathmandu,Nepal</Text>
          <View style={{flexDirection:'row',backgroundColor:'skyblue',marginBottom:1}}>
            <Ionicons name='location'  size={22} color='white' style={{marginLeft:10,}}/>
            <Text style={{color:'white', fontSize:17, fontWeight:'bold', color:'#fff'}}>Drubar Square</Text>
            
          </View>
        </ImageBackground>
        </TouchableOpacity>

        {/* ---------------using Image------------------ */}       
        {/* <TouchableOpacity style={{ marginLeft: 15, marginHorizontal: 10, borderRadius: 20, overflow: 'hidden' }}>
          <View style={{ position: 'relative' }}>
            <Image style={{ height: 255, width: 195 }} source={require("../assets/Mt.everest.jpg")} />
            <Text style={{ position: 'absolute', color: 'white', bottom: 10, right: 10 }}>hhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhh</Text>
          </View>
        </TouchableOpacity> */}


        <TouchableOpacity style={{ marginLeft:15, marginHorizontal:10,borderRadius:20, overflow:'hidden'}} onPress={secondimg}>
        <ImageBackground style={{height:255, width:195, justifyContent:'flex-end' }} source={require("../assets/Mt.everest.jpg")}>
          <Text style={{color:'white', fontSize:17, fontWeight:'bold', color:'#fff', backgroundColor:'skyblue'}}>   MT.Everest,Nepal</Text>
          <View style={{flexDirection:'row',backgroundColor:'skyblue',marginBottom:1}}>
            <Ionicons name='location'  size={22} color='white' style={{marginLeft:10,}}/>
            <Text style={{color:'white', fontSize:17, fontWeight:'bold', color:'#fff'}}>Mount Everest</Text>
          </View>
        </ImageBackground>
        </TouchableOpacity>

        <TouchableOpacity style={{ marginLeft:15, marginHorizontal:10,borderRadius:20, overflow:'hidden'}} onPress={thirdimg}>
        <ImageBackground style={{height:255, width:195, justifyContent:'flex-end' }} source={require("../assets/Pokhara.jpg")}>
          <Text style={{color:'white', fontSize:17, fontWeight:'bold', color:'#fff', backgroundColor:'skyblue'}}>   Pokhara,Nepal</Text>
          <View style={{flexDirection:'row',backgroundColor:'skyblue',marginBottom:1}}>
            <Ionicons name='location'  size={22} color='white' style={{marginLeft:10,}}/>
            <Text style={{color:'white', fontSize:17, fontWeight:'bold', color:'#fff'}}>Gateway Annapurna</Text>
          </View>
        </ImageBackground>
        </TouchableOpacity>

        <TouchableOpacity style={{ marginLeft:15, marginHorizontal:10,borderRadius:20, overflow:'hidden'}} onPress={forthimg}>
        <ImageBackground style={{height:255, width:195, justifyContent:'flex-end' }} source={require("../assets/Nagarkot.jpg")}>
          <Text style={{color:'white', fontSize:17, fontWeight:'bold', color:'#fff', backgroundColor:'skyblue'}}>   Nagarkot,Nepal</Text>
          <View style={{flexDirection:'row',backgroundColor:'skyblue',marginBottom:1}}>
            <Ionicons name='location'  size={22} color='white' style={{marginLeft:10,}}/>
            <Text style={{color:'white', fontSize:17, fontWeight:'bold', color:'#fff'}}>28Km from Ktm</Text>
          </View>
        </ImageBackground>
        </TouchableOpacity>

        <TouchableOpacity style={{ marginLeft:15, marginHorizontal:10,borderRadius:20, overflow:'hidden'}} onPress={fifthimg}>
        <ImageBackground style={{height:255, width:195, justifyContent:'flex-end' }} source={require("../assets/Bhaktapur.jpg")}>
          <Text style={{color:'white', fontSize:17, fontWeight:'bold', color:'#fff', backgroundColor:'skyblue'}}>   Bhaktapur,Nepal</Text>
          <View style={{flexDirection:'row',backgroundColor:'skyblue',marginBottom:1}}>
            <Ionicons name='location'  size={22} color='white' style={{marginLeft:10,}}/>
            <Text style={{color:'white', fontSize:17, fontWeight:'bold', color:'#fff'}}>Taumadhi Square</Text>
          </View>
        </ImageBackground>
        </TouchableOpacity>
        
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
    <View style={{flexDirection:'row', backgroundColor:'#fff', marginHorizontal:30,paddingVertical:3, borderRadius:20}}>
      <Image style={{borderRadius:20, marginLeft:12,marginHorizontal:10, height:118, width:105}} source={require("../assets/PhoksundoLake.jpg")}/>
      <View style={{width:200}}>
        <Text style={{fontSize:19,fontWeight:'900'}}>Phoksundo Lake,Nepal</Text>
        <Text style={{fontWeight:600, paddingVertical:6}}>The journey to Shey Phoksundo Lake unfolds as a true adventure...</Text>
        <Text style={{fontWeight:'900', fontSize:20, color:'#00CBFE',}}>$45.00</Text>

      </View>
    </View>

  )
}



export default ForthUI;