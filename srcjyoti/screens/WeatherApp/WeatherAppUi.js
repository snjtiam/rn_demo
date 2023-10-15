import {View, ScrollView, FlatList} from 'react-native';
import React from 'react';
import Geolocation from '@react-native-community/geolocation';
import WeatherApi_jyoti from '../../Apis/WeatherApi_jyoti';
import {format} from 'date-fns';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {WeatherUiComponent} from '../../components/WeatherUiComponent';
import {WeatherUicity_section} from '../../components/WeatherUiComponent';
import {useNavigation} from '@react-navigation/native';
import {ROUTES} from '../../navigation/routes';
import {it} from 'date-fns/locale';
import {Image} from 'react-native-svg';

const WeatherAppUi = () => {
  const navigation = useNavigation();
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
      console.log('LOCATION FROM API');
      setCurrentLocation(response);

      const weatherResponse = await WeatherApi_jyoti.getCurrentWeather(response.Key);
      console.log('WEATHER FROM API');
      setCurrentCondition(weatherResponse);

      await AsyncStorage.setItem('locationData', JSON.stringify(response));
      await AsyncStorage.setItem('weatherData', JSON.stringify(weatherResponse));
    } catch (error) {
      console.log('API ERR', error);
    }
  };

  React.useEffect(() => {
    if (location !== null && (currentCondition === null || currentLocation === null)) {
      getGPSWeather();
    }
  }, [location]);

  React.useEffect(() => {
    // Access storage // Has data --> Load from storage // No data --> Load from API
    const loadDataFromStorage = async () => {
      try {
        const storedData = await AsyncStorage.getItem('weatherData');
        const storedLocationData = await AsyncStorage.getItem('locationData');

        if (storedData) {
          console.log('LOADED WEATHER FROM STORAGE');
          const data = JSON.parse(storedData);
          setCurrentCondition(data);
        } else {
          getGPSLocation();
        }

        if (storedLocationData) {
          console.log('LOADED LOCATION FROM STORAGE');
          const data = JSON.parse(storedLocationData);
          setCurrentLocation(data);
        } else {
          getGPSLocation();
        }
      } catch (error) {
        getGPSLocation();
        console.log('Error loading data from AsyncStorage:', error);
      }
    };
    loadDataFromStorage();
  }, []);

  let locationDate = currentCondition ? currentCondition[0]?.LocalObservationDateTime ?? new Date() : new Date();

  let temperature = currentCondition ? currentCondition[0]?.Temperature?.Metric?.Value ?? '--' : '--';
  let condition = currentCondition ? currentCondition[0]?.WeatherText ?? '--' : '--';
  let countrytitle = currentLocation ? currentLocation?.EnglishName ?? '--' : '--';
  let date = format(new Date(locationDate), 'EEEE - dd MMM');
  let time = format(new Date(locationDate), 'hh : mm');
  let weatherIconNumber = currentCondition ? currentCondition[0]?.WeatherIcon : 0;

  const getCities = async () => {
    try {
      const weatherResponseofcities = await WeatherApi_jyoti.getCurrentConditionforTopcities({num: 50});
      setcitiesCondition(weatherResponseofcities.slice(0, 4));

      await AsyncStorage.setItem('citydata', JSON.stringify(weatherResponseofcities));
    } catch (error) {
      console.log('============================', error);
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

  const onPressScreen = () => {
    navigation.navigate(ROUTES.WeatherUi_Detail, {
      temperature: temperature,
      condition: condition,
      countrytitle: countrytitle,
      date: date,
      time: time,
    });
  };

  return (
    <ScrollView style={{flex: 1}}>
      <WeatherUiComponent
        temperature={temperature}
        condition={condition}
        countrytitle={countrytitle}
        date={date}
        time={time}
        weatherIconNumber={weatherIconNumber}
        onPress={() => {
          onPressScreen();
        }}
      />

      <FlatList scrollEnabled={false} data={citiesCondition ?? []} renderItem={({item}) => <WeatherUicity_section countryname={item?.Country?.EnglishName} capitalcity={item?.EnglishName} time={format(new Date(item ? item?.LocalObservationDateTime ?? new Date() : new Date()), 'hh : mm')} temperature={item ? item?.Temperature?.Metric?.Value ?? '--' : '--'} weatherIconNumber={item?.WeatherIcon} />} />
    </ScrollView>
  );
};
export default WeatherAppUi;
