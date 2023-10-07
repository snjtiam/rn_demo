import {View, Text, FlatList} from 'react-native';
import React from 'react';
import Entypo from 'react-native-vector-icons/Entypo';
import Fontisto from 'react-native-vector-icons/Fontisto';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';
// import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Geolocation from '@react-native-community/geolocation';
import WeatherApi_jyoti from '../../Apis/WeatherApi_jyoti';
import {format} from 'date-fns';

const WeatherAppUi = () => {
  const [location, setLocation] = React.useState(null);
  const [currentCondition, setCurrentCondition] = React.useState(null);
  const [currentLocation, setCurrentLocation] = React.useState(null);

  const getGPSLocation = async () => {
    Geolocation.getCurrentPosition(info => {
      setLocation(info);
    });
  };

  const getGPSWeather = async () => {
    try {
      const {latitude, longitude} = location.coords;
      const currentLocation = await WeatherApi_jyoti.getGPSWeather({lat: latitude, lon: longitude});
      setCurrentLocation(currentLocation);

      const weatherResponse = await WeatherApi_jyoti.getCurrentWeather(currentLocation.Key);
      setCurrentCondition(weatherResponse);
    } catch (error) {
      console.log('API ERR', error);
    }
  };

  const temperature = currentCondition ? currentCondition[0]?.Temperature?.Metric?.Value ?? '--' : '--';
  const condition = currentCondition ? currentCondition[0]?.WeatherText ?? '--' : '--';
  const countrytitle = currentLocation ? currentLocation?.EnglishName ?? '--' : '--';
  const locationDate = currentCondition ? currentCondition[0]?.LocalObservationDateTime ?? new Date() : new Date();
  const date = format(new Date(locationDate), 'EEEE - dd MMM');

  React.useEffect(() => {
    if (location !== null) {
      getGPSWeather();
    }
  }, [location]);

  React.useEffect(() => {
    // Access storage
    //Has data--> Load from storage
    //No data--> Load from API
    getGPSLocation();
  }, []);

  return (
    <View style={{flex: 1, backgroundColor: '#fff1'}}>
      <View style={{flexDirection: 'row', justifyContent: 'space-between', marginVertical: 20, marginHorizontal: 25}}>
        <Entypo name="menu" size={22} color="black" style={{alignSelf: 'center'}} />
        <View>
          <Text style={{fontSize: 17, color: 'black', fontWeight: '800'}}>{countrytitle}</Text>
          <Text style={{fontSize: 13, color: 'black', fontWeight: '400', textAlign: 'center'}}>Today, 08:16</Text>
        </View>
        <Entypo name="plus" size={22} color="black" style={{alignSelf: 'center'}} />
      </View>

      <View style={{flex: 1, backgroundColor: '#fff', borderTopEndRadius: 38, borderTopLeftRadius: 38, alignContent: 'center'}}>
        <View style={{flexDirection: 'row', justifyContent: 'space-between', marginHorizontal: 25, marginVertical: 20}}>
          <View>
            <View style={{flexDirection: 'row'}}>
              <MaterialCommunityIcons name="globe-model" size={25} color="black" style={{marginRight: 5, marginLeft: -5}} />
              <Text style={{fontSize: 15, color: 'black', fontWeight: 'bold', textAlign: 'center'}}>Los Angeles</Text>
            </View>
          </View>
          <View style={{flexDirection: 'row'}}>
            <Ionicons name="sunny-outline" size={25} color="black" style={{marginRight: 5}} />
            <Text style={{fontSize: 15, color: 'black', fontWeight: 'bold', textAlign: 'center'}}>Sunny Day</Text>
          </View>
        </View>
        <Text style={{fontSize: 25, color: 'black', fontWeight: '500', marginHorizontal: 25, marginTop: -4}}>{date}</Text>
        <View style={{flexDirection: 'row'}}>
          <Text style={{fontSize: 140, color: 'black', fontWeight: 'bold', marginLeft: 25}}>{temperature + '\u00b0'}</Text>
          {/* <FontAwesome name="circle-o" size={60} style={{fontWeight: 'bold', justifyContent: 'flex-start', alignSelf: 'flex-start'}} /> */}
        </View>
        <Text style={{fontSize: 40, color: 'black', fontWeight: 'bold', marginLeft: 25}}>{condition}</Text>
      </View>
    </View>
  );
};

export default WeatherAppUi;
