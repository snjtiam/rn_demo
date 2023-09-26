import React, {useEffect, useState} from "react";
import { View,Text,FlatList, TouchableOpacity } from "react-native";
import WeatherApi_jyoti from "../../Apis/WeatherApi_jyoti";
import { ROUTES } from "../../navigation/routes";

const WEATHER_APP = ({navigation}) =>{

    const [cities, setCities] = useState([]);

    const getCities = async ()=>{
        try{
            const data = await WeatherApi_jyoti.TopCityList({count:100});
             setCities(data);
        }catch (error){
            console.log('============================', error)
        }
    };
    
    useEffect(()=>{
        getCities();
    }, []);

    const onPressCity=data=>{
        navigation.navigate(ROUTES.WEATHER_DETAIL, {cityCode: data.Key, name : data?.EnglishName});
    };

    // useEffect(()=>{
        // WeatherApi_jyoti.TopCityList({count:50});
       // WeatherApi_jyoti.TopCityListThen({count:100});

    // },[]);

    return(
        <View style={{flex:1}}>
            <Text style={{fontSize:25, textAlign:'center', color:'#fff', backgroundColor:'#02ccfe', marginBottom:6}}>Welcome to Weather App </Text>
          
            <FlatList 
            data={cities?? []} 
            renderItem={({item, index})=>(<TouchableOpacity onPress={()=>{onPressCity(item)}}><Text style={{color:'#000', fontSize:20}}>{index+1}{'  '}{item.EnglishName}</Text>
            </TouchableOpacity>)}/>

            <Text style={{fontSize:25, textAlign:'center', color:'#fff', backgroundColor:'#02ccfe', marginBottom:6}}>Welcome to Weather App</Text>    
            <FlatList style={{marginBottom:40,}}
            data={cities?? []} 
            renderItem={({item, index})=> <Text style={{color:'#000', fontSize:20}}>{index+1}{'  '}{item.Region.LocalizedName}</Text>}/>

        </View>
    )
}

export default WEATHER_APP;

