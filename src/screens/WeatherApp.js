import {View, Text, FlatList} from 'react-native';
import React, {useEffect, useState} from 'react';
import WeatherApis from '../apis/WeatherApis';

const WeatherApp = () => {
  const [cities, setCities] = useState(null);

  const getCities = async () => {
    try {
      const data = await WeatherApis.getTopCities({count: 50});

      setCities(data);
    } catch (error) {
      console.log('ERR', error);
    }
  };

  useEffect(() => {
    getCities();
  }, []);

  return (
    <View>
      <Text>WeatherApp</Text>
      <FlatList
        data={cities ?? []}
        renderItem={({item}) => <Text>{item.EnglishName}</Text>}
      />
    </View>
  );
};

export default WeatherApp;
