import { View, Text, ImageBackground } from 'react-native'
import React from 'react'
import Icon from 'react-native-vector-icons/FontAwesome5'
import { AirbnbRating } from 'react-native-ratings'



const DashboardDetails = ({route}) => {
  const{imgurl,country,city}= route.params;
  
  return (
   
      <View >
      <Text style={{textAlign:"center",fontSize:30,color:"black", fontWeight:"bold"}}>Details</Text>
            <ImageBackground style={{height:255,width:195,justifyContent:"flex-end"}} source={imgurl}>
              <Text style={{color:"white",fontWeight:"bold",fontSize:25,marginLeft:8}}>
                {country}
              </Text>
              <View style={{flexDirection:"row"}}>
                { <Icon name="map-marker" color={"white"} size={14} style={{marginHorizontal:8}}/> /* marginptoblem */}
                <Text style={{color:"white",fontWeight:"bold",fontSize:17, }}>{city}</Text>
              </View>
              <View style={{flexDirection:"row"}}>
                <AirbnbRating showRating={false} size={15} defaultRating={4.5} />
                <Text style={{color:'white'}}>4.8</Text>
              </View>
             
            </ImageBackground>
    
      
    </View>
  )
}

export default DashboardDetails