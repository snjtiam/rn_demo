import React, {useEffect, useState} from "react";
import { View,Text,FlatList} from "react-native";
import WeatherApi_jyoti from "../../Apis/WeatherApi_jyoti";

const WEATHER_APP = () =>{

    const [cities, setCities] = useState([]);

    const getCities = async ()=>{
        try{
            const data = await WeatherApi_jyoti.TopCityList({count:50});
             setCities(data);
             return data;
        }catch (error){
            console.log('============================', error)
        }
    };

    useEffect(()=>{
        getCities();
    }, []);

    // useEffect(()=>{
        // WeatherApi_jyoti.TopCityList({count:50});
       // WeatherApi_jyoti.TopCityListThen({count:100});

    // },[]);

    return(
        <View>
            <Text>welcome to weather app</Text>
            <FlatList data={cities?? []} renderItem={({item})=> <Text>{item.EnglishName}</Text>}/>
        </View>
    )
}

export default WEATHER_APP;

