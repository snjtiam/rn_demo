import { View, Text } from 'react-native'
import React, {useState, useEffect} from 'react'
import WeatherApi_jyoti from '../../Apis/WeatherApi_jyoti';

const WeatherDetail = ({route}) => {
    const[citiesWeatherDetail, setCitiesWeatherDetail] = useState([])

    const data = route?.params;

    console.log('details************************', citiesWeatherDetail);

    const getCitiesWeatherDetail = async ()=>{
        try{
            const response = await WeatherApi_jyoti.TopLocationWeatherDetail(data.cityCode);
             setCitiesWeatherDetail(response);
        }catch (error){
            console.log('============================', error)
        }
    };
    
    useEffect(()=>{
        getCitiesWeatherDetail();
    }, []);

    if (citiesWeatherDetail === null) {
        return (
          <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
            <ActivityIndicator size="large" color={'blue'} />
          </View>
        );
      }

  return (
    <View>
      <Text style={{fontSize:25, textAlign:'center', color:'#fff', backgroundColor:'#02ccfe', marginBottom:6}}>WeatherDetail</Text>
      <Text style={{color:'#000', fontSize:20}}>{data?.cityCode}</Text>

      <Text>{citiesWeatherDetail?.Headline?.Text}</Text>
      <Text>
        {'Min temperature: ' +
          citiesWeatherDetail?.DailyForecasts?.Temperature?.Minimum?.Value}
      </Text>
      <Text>
        {'Max temperature: ' +
          citiesWeatherDetail?.DailyForecasts?.Temperature?.Maximum?.Value}
      </Text>
    </View>
  )
}

export default WeatherDetail