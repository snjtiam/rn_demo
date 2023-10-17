import {View, Text, TouchableOpacity, Image} from 'react-native';
import React from 'react';
import Entypo from 'react-native-vector-icons/Entypo';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';


const ICON_BASE_URL = `https://developer.accuweather.com/sites/default/files/`;
const WeatherUiComponent = ({temperature, condition, countrytitle, date, time, onPress = () => {}, weatherIconNumber}) => {
  const iconNumber = weatherIconNumber.toString().length === 1 ? `0${weatherIconNumber}` : weatherIconNumber;
  return (
    <View >
      <View style={{flexDirection: 'row', justifyContent: 'space-between', marginVertical: 20, marginHorizontal: 30}}>
        <Entypo name="menu" size={25} color="black" style={{alignSelf: 'center'}} />
        <View>
          <Text style={{fontSize: 17, color: 'black', fontWeight: '800'}}>{countrytitle}</Text>
          <Text style={{fontSize: 13, color: 'black', fontWeight: '400', textAlign: 'center'}}>Today, {time}</Text>
        </View>
        <Entypo name="plus" size={25} color="black" style={{alignSelf: 'center'}} />
      </View>

      <View style={{backgroundColor: '#fff', borderTopEndRadius: 38, borderTopLeftRadius: 40, alignContent: 'center'}}>
        <View style={{flexDirection: 'row', justifyContent: 'space-between', marginHorizontal: 40, marginVertical: 20}}>
          <View style={{flexDirection: 'row'}}>
            <MaterialCommunityIcons name="globe-model" size={25} color="black" style={{marginRight: 5, marginLeft: -5}} />
            <TouchableOpacity onPress={onPress}><Text style={{fontSize: 14, color: 'black', fontWeight: 'bold', textAlign: 'center'}}>{countrytitle}</Text></TouchableOpacity>
          </View>
          <View style={{flexDirection: 'row'}}>
            <Image resizeMode="contain" style={{width: 50}} source={{uri: ICON_BASE_URL + `${iconNumber}-s.png`}} />
            <Text style={{fontSize: 15, color: 'black', fontWeight: 'bold', textAlign: 'center'}}>{condition} Day</Text>
          </View>
        </View>
        <Text style={{fontSize: 20, color: 'black', fontWeight: '500', marginHorizontal: 40, marginTop: -4}}>{date}</Text>
        <View style={{flexDirection: 'row', marginHorizontal: 40}}>
          <Text style={{fontSize: 120, color: 'black', fontWeight: '700', marginTop: -12}}>{temperature + '\u00b0'}</Text>
        </View>
        <View style={{flexDirection: 'row', justifyContent: 'space-between', marginHorizontal: 40, marginTop: -4, marginBottom: 4}}>
          <Text style={{fontSize: 16, color: 'black', fontWeight: 'bold'}}>{condition}</Text>
          <Text style={{fontSize: 23, color: 'black', fontWeight: 'bold'}}>{temperature + '\u00b0'}</Text>
        </View>
      </View>
    </View>
  );
};

export {WeatherUiComponent};

export const WeatherUicity_section = ({countryname, capitalcity, time, temperature, weatherIconNumber}) => {
  const iconNumber = weatherIconNumber.toString().length === 1 ? `0${weatherIconNumber}` : weatherIconNumber;
  return (
    <View style={{borderTopWidth: 1, backgroundColor: '#fff', borderTopColor: 'lightgrey', paddingVertical: 12, paddingHorizontal: 40}}>
      <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
        <Text style={{fontSize: 15}}>{countryname}</Text>
        <Text style={{fontSize: 15}}>{time}</Text>
      </View>
      <View style={{flexDirection: 'row', justifyContent: 'space-between', paddingHorizontal: 3}}>
        <Text style={{fontSize: 27, fontWeight: 'bold', color: 'black'}}>{capitalcity}</Text>
        <View style={{flexDirection: 'row'}}>
          <Text style={{fontSize: 22, fontWeight: 500, color: 'black'}}>
            {temperature}
            {'\u00b0'}
          </Text>
          <Image resizeMode="contain" style={{width: 50}} source={{uri: ICON_BASE_URL + `${iconNumber}-s.png`}} />
        </View>
      </View>
    </View>
  );
};
