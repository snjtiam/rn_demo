import { StyleSheet, Text, View,Image,ImageBackground } from 'react-native'
import React from 'react'


 const logoImg = require("../../src/assets/drop.jpg");
const Header = () => {
  return (
    <View>
        
      <View style={{ flexDirection:'row', backgroundColor:'black'}}>
      <Image style={{height:80,width:80,borderRadius:100, margin:10, marginLeft:13}} source={{uri:'https://wallpapers.com/images/high/cat-with-shades-cool-picture-lkenou4wsqrbib37.webp'}}/>
    {/* <Image style={{height:80,width:80,borderRadius:100, margin:10}} source={logoImg}/> */}
    
    <View>
    <Text style={{fontSize:25, marginTop:20,fontWeight:"bold",color:"#fff"}}>Sam Here</Text>
    <Text style={{fontSize:15,color:"plum",fontWeight:"900"}}>Thursday, August17</Text>
    
    {/* <ImageBackground source={logoImg}></ImageBackground> */}
    </View>
    <Image style={{height:80,width:80,borderRadius:100, marginLeft:80,marginVertical:10,}} source={logoImg}/>
    </View>
    
    </View>
  )
}

export default Header;

const styles = StyleSheet.create({})