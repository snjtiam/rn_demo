import {View, ScrollView, FlatList} from 'react-native';
import React from 'react';
import Geolocation from '@react-native-community/geolocation';
import WeatherApi_jyoti from '../../Apis/WeatherApi_jyoti';
import {format} from 'date-fns';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {WeatherUiComponent} from '../../components/WeatherUiComponent';
import { WeatherUicity_section } from '../../components/WeatherUiComponent';
import { useNavigation } from '@react-navigation/native';
import { ROUTES } from '../../navigation/routes';

const WeatherAppUi = () => {
  const navigation=useNavigation();
  const [location, setLocation] = React.useState(null);
  const [currentCondition, setCurrentCondition] = React.useState(null);
  const [currentLocation, setCurrentLocation] = React.useState(null);
  const [cities, setCities] = React.useState([]);
  const [citiesCondition, setcitiesCondition] = React.useState(null);



  const getGPSLocation = async () => {
    Geolocation.getCurrentPosition(info => {
      setLocation(info);
    });
  };

  const getGPSWeather = async () => {
    try {
      const {latitude, longitude} = location.coords;
      const response = await WeatherApi_jyoti.getGPSWeather({lat: latitude, lon: longitude});
      setCurrentLocation(response);

      const weatherResponse = await WeatherApi_jyoti.getCurrentWeather(response.Key);
      setCurrentCondition(weatherResponse);

      await AsyncStorage.setItem('weatherData', JSON.stringify(weatherResponse));

    } catch (error) {
      console.log('API ERR', error);
    }
  };

  React.useEffect(() => {
    if (location !== null) {
      getGPSWeather();
    }
  }, [location]);

  React.useEffect(() => {
     // Access storage // Has data --> Load from storage // No data --> Load from API
    const loadDataFromStorage = async () => {
      try {
        const storedData = await AsyncStorage.getItem('weatherData');
        if (storedData) {
          setCurrentCondition(storedData);
          console.log('Data loaded from AsyncStorage:', storedData);
        }
      } catch (error) {
        console.log('Error loading data from AsyncStorage:', error);
      }
    };
    loadDataFromStorage();
    getGPSLocation();
  }, []);

  const locationDate = currentCondition ? currentCondition[0]?.LocalObservationDateTime ?? new Date() : new Date();
  const data = [
    {
      temperature : currentCondition ? currentCondition[0]?.Temperature?.Metric?.Value ?? '--' : '--',
      condition : currentCondition ? currentCondition[0]?.WeatherText ?? '--' : '--',
      countrytitle : currentLocation ? currentLocation?.EnglishName ?? '--' : '--',
      date : format(new Date(locationDate), 'EEEE - dd MMM'),
      time : format(new Date(locationDate), 'hh : mm'),
    },
  ]

  const getCities = async () => {
    try {
      const data = await WeatherApi_jyoti.TopCityList({count: 50});
      setCities(data.slice(0, 4));
      
      const weatherResponseofcities = await WeatherApi_jyoti.getCurrentConditionforTopcities({num:50});
      setcitiesCondition(weatherResponseofcities.slice(0, 4));

      await AsyncStorage.setItem('citydata',JSON.stringify(weatherResponseofcities))

    } catch (error) {
      console.log('============================', error);
    }
  };

  console.log('the result is', JSON.stringify(citiesCondition));

  React.useEffect(() => {
    // loadDatafromcitydata= async()=>{
    //   try{
    //     const storecitydata= await AsyncStorage.getItem('citydata');

    //     if(storecitydata){
    //         setCities(storecitydata)
    //         console.log('cityData loaded from AsyncStorage:', storecitydata);
    //     }
    //   } catch (error) {
    //     console.log('Error loading data from AsyncStorage:', error);
    //   }
    //   };
    // loadDatafromcitydata();
    getCities();                                 
  }, []);

  
  const onPressScreen = item =>{
    navigation.navigate(ROUTES.WeatherUi_Detail, {...item})
  }

  time=format(new Date(citiesCondition?citiesCondition[0]?.LocalObservationDateTime?? new Date():new Date()), 'hh : mm')
  temperature = citiesCondition ? citiesCondition[0]?.Temperature?.Metric?.Value ?? '--' : '--';
  
  return (
    <ScrollView style={{flex: 1}}>
      
      <FlatList
        scrollEnabled={false}
        data={data}
        renderItem={({item})=>
          <WeatherUiComponent 
          temperature={item.temperature}
          condition={item.condition}
          countrytitle={item.countrytitle}
          date={item.date}
          time={item.time}
          onPress={()=>{onPressScreen(item)}}
          />
        }
      />  
      <FlatList
        scrollEnabled={false}
        data={cities?? [] }
        renderItem={({item})=>
          <WeatherUicity_section
          countryname={item.Country.EnglishName}
          capitalcity={item.EnglishName}
          
          />
          }
      />

   </ScrollView>
  );
}
export default WeatherAppUi;
