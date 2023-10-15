import { FlatList, StyleSheet, Text, View, Dimensions, Button, ScrollView } from 'react-native'
import React from 'react'
import Geolocation from '@react-native-community/geolocation';
import Login from './Login';
import { format } from 'date-fns';
import WeatherApis from '../Apis/WeatherApis';
import MatCom from 'react-native-vector-icons/MaterialCommunityIcons'
import AsyncStorage from '@react-native-async-storage/async-storage';

const windowHeight = Dimensions.get('window').height;
const windowWidth = Dimensions.get('window').width;

const WeatherUI = () => {

  const FlatListSect = ({ country, capitalcity, time,temperature }) => {
    return (
      <View style={{ borderTopWidth: 1, borderTopColor: '#948885', paddingVertical: 18, paddingHorizontal: 40 }}>
        <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
          <Text style={{ fontSize: 15 }}>{country}</Text>
          <Text style={{ fontSize: 15 }}>{time}</Text>
        </View>
        <View style={{ flexDirection: 'row',justifyContent: 'space-between'}}>
          <Text style={{ fontSize: 35,color:'#000',fontWeight:'bold' }}>{capitalcity}</Text>
          <Text style={{ fontSize: 30,color:'#000',fontWeight:'bold',top:5 }}>{temperature}{'\u00b0'}</Text>
        </View>
      </View>
    );
  };

  const [location, setLocation] = React.useState(null);
  const [currentCondition, setCurrentCondition] = React.useState(null);
  const [currentLocation, setCurrentLocation] = React.useState(null);
  const [cities, setCities] = React.useState([]);
  const [citiesCondition, setcitiesCondition] = React.useState(null);


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

      await AsyncStorage.setItem('locationData', JSON.stringify(currentLocation));
      await AsyncStorage.setItem('weatherData', JSON.stringify(weatherResponse));
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
    const loadDataFromStorage = async () => {
      try {
        const storedData = await AsyncStorage.getItem('weatherData');
        const storedLocationData = await AsyncStorage.getItem('locationData');

        if (storedData) {
          const data = JSON.parse(storedData);
          setCurrentCondition(data);
        } else {
          getLocation();
        }

        if (storedLocationData) {
          console.log('LOADED LOCATION FROM STORAGE');
          const data = JSON.parse(storedLocationData);
          setCurrentLocation(data);
        } else {
          getLocation();
        }
      } catch (error) {
        getLocation();
        console.log('Error loading data from AsyncStorage:', error);
      }
    };
    loadDataFromStorage();
  }, []);

  const getCities = async () => {
    try {
      const data = await WeatherApis.getTopCities({ count: 50 });
      setCities(data.slice(0, 4));

      const weatherResponseofcities = await WeatherApis.getCurrentConditionforTopcities({ num: 50 });
      setcitiesCondition(weatherResponseofcities.slice(0, 4));

      await AsyncStorage.setItem('citydata', JSON.stringify(weatherResponseofcities));
    } catch (error) {
      console.log('CHeck getcities', error);
    }
  };

  React.useEffect(() => {
    loadDatafromcitydata = async () => {
      try {
        const storecitydata = await AsyncStorage.getItem('citydata');

        if (storecitydata) {
          setCities(storecitydata);
        }
      } catch (error) {
        console.log('Error loading data from AsyncStorage:', error);
      }
    };

    loadDatafromcitydata();
    getCities();
  }, []);
  // const dim=()=> {
  //   console.log(windowHeight+''+windowWidth);
  // }
  return (
    
    <View style={styles.container}>
      <View>
        <Text style={styles.place}>{countrytitle}</Text>
        <MatCom name='weather-cloudy' backgroundColor style={styles.MatIcon} /><Text style={styles.weathercondition}>{condition}</Text>
      </View>


      <Text style={styles.date}>{date}</Text>
      <Text style={styles.temperature}>{temperature}{'\u00b0'}</Text>
      {/* <Button title='Dimension' onPress={dim}/> */}

      <View style={{ flexDirection: 'row',top:-70, }}>
        <Text style={{ fontWeight: 'bold', 
        fontSize: 18 ,marginLeft:25,color:'#000' }}>{condition} sky.</Text>
        <Text style={{ fontWeight: 'bold', fontSize: 18 ,marginLeft:240, color:'#000', }}>{temperature}{'\u00b0'}</Text>
      </View>
      
      <FlatList 
      
      style={{fontSize:30,top:-40}} data={citiesCondition ?? []} renderItem={({ item }) => <FlatListSect country={item?.Country?.EnglishName} 
      capitalcity={item?.EnglishName}
      time={format(new Date(item ? item[0]?.LocalObservationDateTime ?? new Date() : new Date()), 'hh : mm')}
      temperature={item ? item?.Temperature?.Metric?.Value ?? '--' : '--' }
      
      />} />
    </View>

  )
}

export default WeatherUI

const styles = StyleSheet.create({
  container: {
    // flex:1,
    height: windowHeight * 2,
    width: windowWidth,
    borderRadius: 40,
    backgroundColor: '#fff',
    top: -25,
    marginLeft: 1
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
  MatIcon: {
    fontSize: 15,
    marginLeft: 273,
    top: -9,
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
    fontSize: 140,
    marginLeft: 20,
    top: -60,
    color: '#000',
    fontWeight: 'bold'
  }
})