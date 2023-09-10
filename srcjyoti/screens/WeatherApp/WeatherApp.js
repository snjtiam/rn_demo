import React, {useEffect} from "react";
import { View,Text,} from "react-native";
// import WeatherApi from "../../Apis/WeatherApi"; //problem
import WeatherApi_jyoti from "../../Apis/WeatherApi_jyoti";

const WEATHER_APP = () =>{

    useEffect(()=>{
        WeatherApi_jyoti.getTopCities({count:50});
    },[]);

    return(
        <View>
            <Text>welcome to weather app</Text>
        </View>
    )
}

export default WEATHER_APP;