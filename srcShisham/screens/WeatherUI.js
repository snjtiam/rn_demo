import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Geolocation from '@react-native-community/geolocation';
import Login from './Login';
import {format} from 'date-fns';
import WeatherApis from '../Apis/WeatherApis';

const WeatherUI = () => {
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

  return (
    <View style={styles.container}>
        <Text style={{height:50,width:400,fontSize:30}}>{date}</Text>
        <Text style={{height:50,width:400,fontSize:30}}>{time}</Text>
        <Text style={{height:50,width:400,fontSize:30}}>{countrytitle}</Text>
      </View>
   
  )
}

export default WeatherUI

const styles = StyleSheet.create({
  container:{
    height:650,
    width:412,
    borderRadius:40,
    backgroundColor:'#fff',
    // flex:1,
    marginLeft:1
  }})