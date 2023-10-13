import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
import Ionicons from 'react-native-vector-icons/Ionicons'
import WeatherUI from '../screens/WeatherUI'
import {format} from 'date-fns';
import WeatherApis from '../Apis/WeatherApis';
import Geolocation from '@react-native-community/geolocation'
const Header = () => {
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
    const countrytitle = currentLocation ? currentLocation?.EnglishName ?? '--' : '--';
    const locationDate = currentCondition ? currentCondition[0]?.LocalObservationDateTime ?? new Date() : new Date();
    const time = format(new Date(locationDate), 'hh : mm')
    console.log('Header:', JSON.stringify(currentCondition));

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
        <Ionicons name='menu-outline' style={styles.menu} />
    <View ><Text style={styles.Text1}>{countrytitle}</Text></View>
    <Text style={styles.Text2}>Today 06:36</Text>
    <Icon name='plus' 
    style={styles.icon} />
    <WeatherUI/>
    </View>
  )
}

export default Header

const styles = StyleSheet.create({
    container:{
        height:300,
        width:420,
        color:'#000',
        borderRadius:30,
        backgroundColor: 'silver'
    },
    menu:{
        fontSize:30,
        top:38,
        marginLeft:25
    },
    Text1:{
        width:300,
        top:5,
        marginLeft:90,
        paddingLeft:50,
        fontSize:15,
        color:'#000',
        fontWeight:'bold',
    },
    Text2:{
        width:300,
        top:5,
        marginLeft:95,
        paddingLeft:50,
        fontSize:15,
        color:'#948885'
        // textAlign:'center'
    },
    icon:{
        height:50,
        width:50,
        fontSize:30,
        marginLeft:350,
        top:-30,
        color:'#000'

    }
})