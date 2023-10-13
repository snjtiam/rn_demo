import { FlatList, StyleSheet, Text, View ,Dimensions, Button } from 'react-native'
import React from 'react'
import Geolocation from '@react-native-community/geolocation';
import Login from './Login';
import {format} from 'date-fns';
import WeatherApis from '../Apis/WeatherApis';
import MatCom from 'react-native-vector-icons/MaterialCommunityIcons'

const windowHeight= Dimensions.get('window').height;
const windowWidth= Dimensions.get('window').width;

const WeatherUI = () => {
  const FlatListSect=()=>{

  }
  
  const [location, setLocation] = React.useState(null);
  const [currentCondition, setCurrentCondition] = React.useState(null);
  const [currentLocation, setCurrentLocation] = React.useState(null);

  const getLocation =async()=>{
    Geolocation.getCurrentPosition(info => {
      setLocation(info);
    });
  }
  const getWeather = async() => {
    try {
      const {latitude, longitude} = location.coords;
      const currentLocation = await WeatherApis.getWeather({lat: latitude, lon: longitude});
      setCurrentLocation(currentLocation);

      const weatherResponse = await WeatherApis.getCurrentWeather(currentLocation.Key);
      setCurrentCondition(weatherResponse);
    } catch (error) {
      console.log('Error', error);
    }
  };
  const temperature = currentCondition ? currentCondition[0]?.Temperature?.Metric?.Value ?? '--' : '--';
  const condition = currentCondition ? currentCondition[0]?.WeatherText ?? '--' : '--';
  const countrytitle = currentLocation ? currentLocation?.EnglishName ?? '--' : '--';
  const locationDate = currentCondition ? currentCondition[0]?.LocalObservationDateTime ?? new Date() : new Date();
  const date = format(new Date(locationDate), 'EEEE - dd MMM');
  const time = format(new Date(locationDate), 'hh : mm')

  console.log('time:', JSON.stringify(currentCondition));

  React.useEffect(() => {
    if (location !== null) {
      getWeather();
    }
  }, [location]);

  React.useEffect(() => {
    getLocation();
  }, []);

  const dim=()=> {
    console.log(windowHeight+''+windowWidth);
  }
  return (
    <View style={styles.container}>
      <View>  
        <Text style={styles.place}>{countrytitle}</Text>
        <MatCom name='weather-cloudy'  backgroundColor style={styles.MatIcon}/><Text style={styles.weathercondition}>{condition}</Text>
      </View>

        
        <Text style={styles.date}>{date}</Text>
        <Text style={styles.temperature}>{temperature}{'\u00b0'}</Text>
        <Button title='Dimension' onPress={dim}/><FlatListSect/>
      </View>
   
  )
}

export default WeatherUI

const styles = StyleSheet.create({
  container:{
    // flex:1,
    height:windowHeight,
    width:windowWidth,
    borderRadius:40,
    backgroundColor:'#fff',
    top:-25,
    marginLeft:1
  },
  place:{
    height:50,
    width:400,
    fontSize:15,
    top:37,
    marginLeft:35,
    color:'#000',
    fontWeight:"bold"
  },
weathercondition:{
  height:50,
  width:400,
  fontSize:15,
  marginLeft:300,
  top:-26,
  color:'#000',
  fontWeight:"bold"
},
MatIcon:{
  fontSize:15,
  marginLeft:273,
  top:-9,
  color:'#000',
  fontWeight:"bold"
},
date:{
  fontSize:25,
  marginLeft:26,
  top:-40,
  color:'#000',
  fontWeight:"bold"
},
temperature:{
  fontSize:140,
  marginLeft:20,
  top:-60,
  color:'#000',
  fontWeight:'bold'
}
})