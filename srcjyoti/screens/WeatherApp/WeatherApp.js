import React, {useEffect} from "react";
import { View,Text,} from "react-native";
import WeatherApi_jyoti from "../../Apis/WeatherApi_jyoti";

const WEATHER_APP = () =>{

    // useEffect(()=>{
    //     WeatherApi_jyoti.TopCityList({count:50});

    // },[]);

    useEffect(()=>{
        WeatherApi_jyoti.TopCityListThen({count:100});

    },[]);

    return(
        <View>
            <Text>welcome to weather app</Text>
        </View>
    )
}

export default WEATHER_APP;