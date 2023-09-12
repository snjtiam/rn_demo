import React from 'react'
import {View,Text,Button,Image,TextInput, ImageBackground,ScrollView, Touchable, TouchableOpacity} from 'react-native'
import { useNavigation } from '@react-navigation/native'
// import { ROUTES } from '../../src/navigation/routes';
import { ROUTES } from '../Navigation/ROUTES'
import Icon from 'react-native-vector-icons/MaterialIcons'

const Dashboard = () => {
  

  return (
    <View>
      <View style={{flexDirection:"row",justifyContent:"space-between"}}>
     <View style={{flexDirection:"row",marginTop:4}}>
        <Image style={{height:47,width:47,borderRadius:100,margin:8}} source={require("../Assets/profile.jpeg")}/>
        <Text style={{fontSize:20,fontWeight:400,marginTop:20}}>Hi,<Text style={{fontSize:20,fontWeight:900}}>JOHN CENA</Text></Text>
     </View>
     <View style={{marginRight:10,marginTop:15}}>
        <Icon name="notifications-active" size={35}/>
        </View>
    </View>
    <TextInput style={{borderWidth:1,borderRadius:10,backgroundColor:"white",color:"black",marginTop:10}} placeholder='Search Your Place'/>
    <View style={{flexDirection:"row",marginTop:15,justifyContent:"space-between"}}>
      <Text style={{fontSize:27,fontWeight:"bold",color:"black"}}>Special For You</Text>
      <Text style={{fontSize:27}}>Explore</Text>
    </View>
     <Section/>
     <Section2/>
     <Section3/>

    </View>
  )
}

const Section=()=>{
  const raj =useNavigation();
  const img1=()=>{
    raj.navigate(ROUTES.DETAILS1)
  } 

  return(
    <View>
      <ScrollView horizontal={true}>
      <TouchableOpacity onPress={img1} style={{borderRadius:20,overflow:"hidden",marginHorizontal:10,marginTop:25}}>
    <ImageBackground  style={{height:250, width:195}} source={require('../Assets/Ger1.jpeg')}/>
      </TouchableOpacity>

      <TouchableOpacity style={{borderRadius:20,overflow:"hidden",marginHorizontal:10,marginTop:25}}>
    <ImageBackground style={{height:250, width:195}} source={require('../Assets/Ger2.jpeg')}/>
      </TouchableOpacity>

      <TouchableOpacity style={{borderRadius:20,overflow:"hidden",marginHorizontal:10,marginTop:25}}>
    <ImageBackground style={{height:250, width:195}} source={require('../Assets/Ger3.jpeg')}/>
      </TouchableOpacity>

      <TouchableOpacity style={{borderRadius:20,overflow:"hidden",marginHorizontal:10,marginTop:25}}>
    <ImageBackground style={{height:250, width:195}} source={require('../Assets/Ger4.jpeg')}/>
      </TouchableOpacity>
      </ScrollView>
      



    </View>
  )
};


const Section2=()=>{
  return(
     <View style={{flexDirection:"row",marginTop:25,justifyContent:"space-between"}}>
      <Text style={{fontSize:27,fontWeight:"bold",color:"black"}}> Popular Place</Text>
      <Text style={{fontSize:27}}>Explore</Text>
    </View>
  )
}

const Section3=()=>{
  return(
    <View style={{flexDirection:"row",marginTop:20,marginHorizontal:30,paddingVertical:3,borderRadius:20, backgroundColor:"white"}}>
      <View style={{marginRight:15}}>
       <Image style={{height:118,width:105,borderRadius:20,marginLeft:10}} source={require("../Assets/Ger1.jpeg")}/>
      </View>
      <View style={{width:200}}>
        <Text style={{fontSize:19,fontWeight:900}}>Frankfurt am Main</Text>
        <Text style={{fontWeight:600,paddingVertical:7}}>Frankfurt, a central German city on the river Main, is a major financial hub that's home to the European Central Bank.</Text>
        <Text style={{fontWeight:900,fontSize:20,color:"skyblue"}}>$24552</Text>
      </View>
    </View>
  )
}


export default Dashboard;




// src problem
// touchable opacity
// style use 