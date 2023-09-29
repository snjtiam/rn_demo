import { View, Text, ActivityIndicator } from 'react-native';
import React, { useState, useEffect } from 'react';
import WeatherApi_jyoti from '../../Apis/WeatherApi_jyoti';

const WeatherDetail = ({ route }) => {
  const [citiesWeatherDetail, setCitiesWeatherDetail] = useState(null);

  const data = route?.params;

  const getCitiesWeatherDetail = async () => {
    try {
      const response = await WeatherApi_jyoti.TopLocationWeatherDetail(
        data.cityCode
      );
      setCitiesWeatherDetail(response);
    } catch (error) {
      console.log('============================', error);
      // Handle error here, e.g., setCitiesWeatherDetail(null) or show an error message.
    }
  };

  useEffect(() => {
    getCitiesWeatherDetail();
  }, []);

  useEffect(() => {
    WeatherApi_jyoti.GeolocationApi();
  }, []);

  if (citiesWeatherDetail === null) {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <ActivityIndicator size="large" color={'blue'} />
      </View>
    );
  }

  return (
    <View>
      <Text
        style={{
          fontSize: 25,
          textAlign: 'center',
          color: '#fff',
          backgroundColor: '#02ccfe',
          marginBottom: 6,
        }}>
        WeatherDetail
      </Text>
      <Text style={{ color: '#000', fontSize: 20 }}>{data?.cityCode}</Text>

      <Text>{citiesWeatherDetail?.Headline?.Text}</Text>
      <Text>
        {'Min temperature: ' +
          citiesWeatherDetail?.DailyForecasts[0]?.Temperature?.Minimum?.Value}
      </Text>
      <Text>
        {'Max temperature: ' +
          citiesWeatherDetail?.DailyForecasts[0]?.Temperature?.Maximum?.Value}
      </Text>
    </View>
  );
};

export default WeatherDetail;
