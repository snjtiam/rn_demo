import React, { useState } from 'react';
import {Text, View,PermissionsAndroid,TouchableOpacity,Linking, Alert} from 'react-native';
import RootStack from './srcShisham/routes/Rootstack';
import WeatherUI from './srcShisham/screens/WeatherUI';
import Drawer from './srcShisham/routes/Drawer';
import Header from './srcShisham/components/Header';
import WeatherApis from './src/apis/WeatherApis';

import Geolocation from 'react-native-geolocation-service';

const App = () => {
  // const Permission = async () => {
  //   try {
  //     const granted = await PermissionsAndroid.request(
  //       PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
  //       {
  //         title: 'Cool Photo App Location Permission',
  //         message:
  //           'Cool Photo App needs access to your Location ' ,
            
  //         buttonNeutral: 'Ask Me Later',
  //         buttonNegative: 'Cancel',
  //         buttonPositive: 'OK',
  //       },
  //     );
  //     if (granted === PermissionsAndroid.RESULTS.GRANTED) {
  //       console.log('You can use the Location');
  //     } else {
  //       console.log('Location permission denied');
  //     }
  //   } catch (err) {
  //     console.warn(err);
  //   }
  // };
  //   const[currentLocation,setCurrentLocation]= useState(null);
  //   const getCurrentLocation=async()=>{
  //     Geolocation.getCurrentPosition(
  //       position=>{
  //         const {latitude,longitude} = position.coords;
  //         setCurrentLocation({latitude,longitude})
  //         console.log(latitude,longitude)
  //       },
  //       error=> alert('Error',error.message),
  //       {enableHighAccuracy:true,timeout:15000,maximumAge:10000}
  //     )
  //   }
  //   const openMaps =()=>{ 
  //     const{latitude,longitude} = currentLocation
  //     if(latitude,longitude){
  //       const url=`https://www.google.com/maps/search/?api=1&query=${latitude},${longitude}`
  //     Linking.openURL(url)
  //     }
  //     else{
  //       Alert('Location not found')
  //     }
  //   }
  return (
    <View style={{flex: 1}}>
      <RootStack />
      <View><Text>
        {/* <WeatherUI/> */}
        {/* Latitude:{currentLocation?currentLocation.latitude:'Loading'}
        Longitude:{currentLocation?currentLocation.longitude:'Loading'} */}
        </Text></View>
      
      
      
    </View>
  );
};

export default App;
