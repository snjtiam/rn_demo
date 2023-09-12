import {View, Text, ActivityIndicator} from 'react-native';
import React, {useEffect, useState} from 'react';
import WeatherApis from '../../apis/WeatherApis';

const WeatherDetail = ({route}) => {
  const [cityWeatherDetail, setCityWeatherDetail] = useState(null);

  const data = route?.params;

  const getCityWeatherDetail = async () => {
    try {
      const response = await WeatherApis.getLocationWeatherDetail(
        data.cityCode,
      );

      setCityWeatherDetail(response);
    } catch (error) {
      console.log('ERR', error);
    }
  };

  useEffect(() => {
    getCityWeatherDetail();
  }, []);

  if (cityWeatherDetail === null) {
    return (
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <ActivityIndicator size="large" color={'blue'} />
      </View>
    );
  }

  return (
    <View>
      <Text>{data?.name}</Text>
      <Text>{cityWeatherDetail?.Headline?.Text}</Text>
      <Text>
        {'Min temperature: ' +
          cityWeatherDetail?.DailyForecasts[0]?.Temperature?.Minimum?.Value}
      </Text>
      <Text>
        {'Max temperature: ' +
          cityWeatherDetail?.DailyForecasts[0]?.Temperature?.Maximum?.Value}
      </Text>
    </View>
  );
};

export default WeatherDetail;
