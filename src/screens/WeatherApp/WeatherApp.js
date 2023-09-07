import {View, Text, FlatList, TouchableOpacity} from 'react-native';
import React, {useEffect, useState} from 'react';
import WeatherApis from '../../apis/WeatherApis';
import {ROUTES} from '../../navigation/routes';

const WeatherApp = ({navigation}) => {
  const [cities, setCities] = useState(null);

  const getCities = async () => {
    try {
      const data = await WeatherApis.getTopCities({count: 50});

      setCities(data);
    } catch (error) {
      console.log('ERR', error);
    }
  };

  const onPressCity = data => {
    navigation.navigate(ROUTES.WEATHER_DETAIL, {
      cityCode: data.Key,
      name: data?.EnglishName,
    });
  };

  useEffect(() => {
    getCities();
  }, []);

  return (
    <View>
      <Text>WeatherApp</Text>
      <FlatList
        data={cities ?? []}
        renderItem={({item}) => (
          <TouchableOpacity
            onPress={() => {
              onPressCity(item);
            }}>
            <Text>{item.EnglishName}</Text>
          </TouchableOpacity>
        )}
      />
    </View>
  );
};

export default WeatherApp;
