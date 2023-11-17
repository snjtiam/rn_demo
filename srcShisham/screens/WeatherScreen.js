import { StyleSheet, Text, View, Dimensions, onPress, TouchableOpacity } from 'react-native'
import React from 'react'
import Ionicons from 'react-native-vector-icons/Ionicons'
import { format } from 'date-fns';
import { WeatherUI } from './WeatherUI'
import WeatherApis from '../Apis/WeatherApis';
import MatCom from 'react-native-vector-icons/MaterialCommunityIcons'
import Geolocation from '@react-native-community/geolocation'
import { useNavigation } from '@react-navigation/native';
import { ROUTES } from '../routes/ROUTES';
import Login from './Login';

const Height = Dimensions.get('window').height;
const Width = Dimensions.get('window').width;
const WeatherScreen = () => {
  const navigation = useNavigation();

  const [location, setLocation] = React.useState(null);
  const [currentCondition, setCurrentCondition] = React.useState(null);
  const [currentLocation, setCurrentLocation] = React.useState(null);

  const onPressBack = () => {
    navigation.navigate(ROUTES.HEADER);
  }
  const getLocation = async () => {
    Geolocation.getCurrentPosition(info => {
      setLocation(info);
    });
  }
  const getWeather = async () => {
    try {
      const { latitude, longitude } = location.coords;
      const currentLocation = await WeatherApis.getWeather({ lat: latitude, lon: longitude });
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
  const date = format(new Date(locationDate), 'EEEE - dd MMM');
  const condition = currentCondition ? currentCondition[0]?.WeatherText ?? '--' : '--';
  const temperature = currentCondition ? currentCondition[0]?.Temperature?.Metric?.Value ?? '--' : '--';
  
  const Humidity = currentCondition ? currentCondition[0]?.RelativeHumidity?? '--' : '--';
  const Wind = currentCondition ? currentCondition[0]?.Wind?.Speed?.Metric?.Value?? '--' : '--';
  const WindUnit = currentCondition ? currentCondition[0]?.Wind?.Speed?.Metric?.Unit?? '--' : '--';
  const UVIndex = currentCondition ? currentCondition[0]?.UVIndex?? '--' : '--';
  const Water = currentCondition ? currentCondition[0]?.Visibility?.Metric?.Value?? '--' : '--';
  const VisibilityUnit = currentCondition ? currentCondition[0]?.Visibility?.Metric?.Unit?? '--' : '--';  
  const Pressure = currentCondition ? currentCondition[0]?.Pressure?.Metric?.Value?? '--' : '--';  
  const PressureUnit = currentCondition ? currentCondition[0]?.Pressure?.Metric?.Unit?? '--' : '--';  

  React.useEffect(() => {
    if (location !== null) {
      getWeather();
    }
  }, [location]);

  React.useEffect(() => {
    getLocation();
  }, []);

  return (
    <View>
      <View style={styles.container}><TouchableOpacity onPress={onPressBack}>
        <Ionicons name='chevron-back-sharp' style={styles.menu} /></TouchableOpacity>
        <View ><Text style={styles.Text1}>{countrytitle}</Text></View>
        <Text style={styles.Text2}>Today {time}</Text>
      </View>

      <View style={styles.container2}>
        <Text style={styles.place}>{countrytitle}</Text>
        <MatCom name='weather-cloudy' backgroundColor style={styles.MatIcon} /><Text style={styles.weathercondition}>{condition}</Text>
        {/* <Image resizeMode="contain" style={MatCom} source={{uri: ICON_BASE_URL + `${iconNumber}-s.png`}} /> */}

        <Text style={styles.date}>{date}</Text>
        <Text style={styles.temperature}>{temperature}{'\u00b0'}</Text>
        <View style={{ flexDirection: 'row', top: -70, }}>
          <Text style={{
            fontWeight: 'bold',
            fontSize: 18, marginLeft: 25, color: '#000'
          }}>{condition} sky.</Text>
          <Text style={{ fontWeight: 'bold', fontSize: 18, marginLeft: 200, color: '#000', }}>{temperature}{'\u00b0'}</Text>
        </View>
        <View style={{ flexDirection: 'row', top: -50,flexWrap:'wrap' }}>
          <View style={styles.box1}>
            <Text style={{marginLeft:27,fontWeight:'500',color:'#000',fontSize:17,top:17}}>Real Feel</Text>
            <Text style={{marginLeft:27,fontWeight:'800',color:'#000',fontSize:25,top:17}}>{temperature}{'\u2103'}</Text>
            </View>
          <View style={styles.box2}>
            <Text style={{marginLeft:27,fontWeight:'500',color:'#000',fontSize:17,top:17}}>Humidity</Text>
            <Text style={{marginLeft:27,fontWeight:'500',color:'#000',fontSize:17,top:17}}>{Humidity}</Text>
            </View>
          <View style={styles.box3}>
            <Text style={{marginLeft:27,fontWeight:'500',color:'#000',fontSize:17,top:17}}>Pressure</Text>
            <Text style={{marginLeft:27,fontWeight:'500',color:'#000',fontSize:17,top:17}}>{Pressure}</Text>
            </View>
          <View style={styles.box4}>
            <Text style={{marginLeft:27,fontWeight:'500',color:'#000',fontSize:17,top:17}}>Wind</Text>
            <Text style={{marginLeft:27,fontWeight:'500',color:'#000',fontSize:17,top:17}}>{Wind}</Text>
            </View>
          <View style={styles.box5}>
            <Text style={{marginLeft:27,fontWeight:'500',color:'#000',fontSize:17,top:17}}>UV Index</Text>
            <Text style={{marginLeft:27,fontWeight:'500',color:'#000',fontSize:17,top:17}}>{UVIndex}</Text>
            </View>
          <View style={styles.box6}>
            <Text style={{marginLeft:27,fontWeight:'500',color:'#000',fontSize:17,top:17}}>Water</Text>
            <Text style={{marginLeft:27,fontWeight:'500',color:'#000',fontSize:17,top:17}}>{Water}{'\u2103'}</Text>
            </View><Login/>
        </View>
            
      </View>

    </View>
  )
}

export default WeatherScreen

const styles = StyleSheet.create({
  container: {
    // flex:0.2,
    height: 100,
    width: Width,
    color: '#000',
    borderRadius: 30,
    backgroundColor: 'silver'
  },
  container2: {
    height: Height,
    width: Width,
    borderRadius: 40,
    backgroundColor: '#fff',
    top: -55,
    marginLeft: 1

  },
  menu: {
    fontSize: 30,
    top: 38,
    marginLeft: 25
  },
  Text1: {
    width: 300,
    top: 5,
    marginLeft: 90,
    paddingLeft: 50,
    fontSize: 15,
    color: '#000',
    fontWeight: 'bold',
  },
  Text2: {
    width: 300,
    top: 5,
    marginLeft: 95,
    paddingLeft: 50,
    fontSize: 15,
    color: '#948885'
  },
  place: {
    height: 50,
    width: 400,
    fontSize: 15,
    top: 37,
    marginLeft: 35,
    color: '#000',
    fontWeight: "bold"
  },
  weathercondition: {
    height: 50,
    width: 400,
    fontSize: 15,
    marginLeft: 300,
    top: -26,
    color: '#000',
    fontWeight: "bold"
  },
  date: {
    fontSize: 25,
    marginLeft: 26,
    top: -40,
    color: '#000',
    fontWeight: "bold"
  },
  temperature: {
    fontSize: 100,
    marginLeft: 20,
    top: -60,
    color: '#000',
    fontWeight: 'bold'
  },
  box1: {
    height: 100,
    width: Width/2,
    borderTopWidth: .5, 
    borderRightWidth: .5, 
    borderBottomWidth: .5
  },
  box2: {
    height: 100,
    width: Width/2,
    borderTopWidth: .5, 
    borderRightWidth: .5, 
    borderBottomWidth: .5
  },
  box3: {
    height: 100,
    width: Width/2,
    borderTopWidth: .5, 
    borderRightWidth: .5, 
    borderBottomWidth: .5
  },
  box4: {
    height: 100,
    width: Width/2,
    borderTopWidth: .5, 
    borderRightWidth: .5, 
    borderBottomWidth: .5
  },
  box5: {
    height: 100,
    width: Width/2,
    borderTopWidth: .5, 
    borderRightWidth: .5, 
    borderBottomWidth: .5
  },
  box6: {
    height: 100,
    width: Width/2,
    borderTopWidth: .5, 
    borderRightWidth: .5, 
    borderBottomWidth: .5
  }
})