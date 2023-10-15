import React from 'react';
import {View, Text, Dimensions} from 'react-native';
import Entypo from 'react-native-vector-icons/Entypo';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';

const {width, height} = Dimensions.get('window');

export const WeatherUi_Detail = ({route}) => {
  const {countrytitle, time, condition, date, temperature} = route.params;
  return (
    <View style={{flex: 1}}>
      <View style={{flexDirection: 'row', justifyContent: 'space-between', marginVertical: 20, marginHorizontal: 30}}>
        <Entypo name="chevron-small-left" size={25} color="black" style={{alignSelf: 'center'}} />
        <View>
          <Text style={{fontSize: 17, color: 'black', fontWeight: '800'}}>{countrytitle}</Text>
          <Text style={{fontSize: 13, color: 'black', fontWeight: '400', textAlign: 'center'}}>Today, {time}</Text>
        </View>
        <View></View>
      </View>
      <View style={{backgroundColor: '#fff', borderTopEndRadius: 38, borderTopLeftRadius: 40, alignContent: 'center'}}>
        <View style={{flexDirection: 'row', justifyContent: 'space-between', marginHorizontal: 40, marginVertical: 20}}>
          <View style={{flexDirection: 'row'}}>
            <MaterialCommunityIcons name="globe-model" size={25} color="black" style={{marginRight: 5, marginLeft: -5}} />
            <Text style={{fontSize: 14, color: 'black', fontWeight: 'bold', textAlign: 'center'}}>{countrytitle}</Text>
          </View>
          <View style={{flexDirection: 'row'}}>
            <Ionicons name="sunny-outline" size={25} color="black" style={{marginRight: 5}} />
            <Text style={{fontSize: 15, color: 'black', fontWeight: 'bold', textAlign: 'center'}}>{condition} Day</Text>
          </View>
        </View>
        <Text style={{fontSize: 20, color: 'black', fontWeight: '500', marginHorizontal: 40, marginTop: -4}}>{date}</Text>
        <View style={{flexDirection: 'row', marginHorizontal: 40}}>
          <Text style={{fontSize: width * 0.3, color: 'black', fontWeight: '700', marginTop: -12}}>{temperature + '\u00b0'}</Text>
        </View>
        <View style={{flexDirection: 'row', justifyContent: 'space-between', marginHorizontal: 40, marginTop: -4, marginBottom: 4}}>
          <Text style={{fontSize: 16, color: 'black', fontWeight: 'bold'}}>{condition}</Text>
          <Text style={{fontSize: 23, color: 'black', fontWeight: 'bold'}}>{temperature + '\u00b0'}</Text>
        </View>
      </View>

      <Sections />

      {/* <FlatList
            style={{backgroundColor:'red'}}
            data={data}
            renderItem={({item})=>{
                <Sections 
                    about={item.about}
                    temp={item.temp}  
                    unit={item.unit}
                />
            }}
            />     */}
    </View>
  );
};

// const data=[
//     {
//         about: 'Real Feel',
//         temp: 859,
//         unit: 'c',
//     },
//     {
//         about: 'Humidity',
//         temp: 859,
//         unit: '%',
//     },
//     {
//         about: 'Pressure',
//         temp: 859,
//         unit: 'mmHG',
//     },
//     {
//         about: 'Wind',
//         temp: 859,
//         unit: 'm/s',
//     },
//     {
//         about: 'UV index',
//         temp: 859,
//         unit: 'c',
//     },
//     {
//         about: 'Water',
//         temp: 859,
//         unit: 'c',
//     },
// ]

const Sections = () => {
  return (
    <View style={{flex: 1, backgroundColor: '#fff'}}>
      <View style={{flexDirection: 'row', flex: 1, borderWidth: 1.5, borderColor: 'lightgrey'}}>
        <View style={{flex: 1, justifyContent: 'center', paddingLeft: 45, borderWidth: 1, borderColor: 'lightgrey', padding: 15}}>
          <Text style={{fontSize: 20, color: 'black', fontWeight: '500'}}>Real Feel</Text>
          <View style={{flexDirection: 'row'}}>
            <Text style={{fontSize: 30, color: 'black', fontWeight: 'bold'}}>859</Text>
            <Text style={{fontSize: 20, color: 'black', fontWeight: '400'}}>{'\u00b0'}C</Text>
          </View>
        </View>
        <View style={{flex: 1, justifyContent: 'center', paddingLeft: 45, borderWidth: 1, borderColor: 'lightgrey', padding: 15}}>
          <Text style={{fontSize: 20, color: 'black', fontWeight: '500'}}>Real Feel</Text>
          <View style={{flexDirection: 'row'}}>
            <Text style={{fontSize: 30, color: 'black', fontWeight: 'bold'}}>859</Text>
            <Text style={{fontSize: 20, color: 'black', fontWeight: '400'}}>{'\u00b0'}C</Text>
          </View>
        </View>
      </View>

      <View style={{flexDirection: 'row', flex: 1, borderWidth: 1.5, borderColor: 'lightgrey'}}>
        <View style={{flex: 1, justifyContent: 'center', paddingLeft: 45, borderWidth: 1, borderColor: 'lightgrey', padding: 15}}>
          <Text style={{fontSize: 20, color: 'black', fontWeight: '500'}}>Real Feel</Text>
          <View style={{flexDirection: 'row'}}>
            <Text style={{fontSize: 30, color: 'black', fontWeight: 'bold'}}>859</Text>
            <Text style={{fontSize: 20, color: 'black', fontWeight: '400'}}>{'\u00b0'}C</Text>
          </View>
        </View>
        <View style={{flex: 1, justifyContent: 'center', paddingLeft: 45, borderWidth: 1, borderColor: 'lightgrey', padding: 15}}>
          <Text style={{fontSize: 20, color: 'black', fontWeight: '500'}}>Real Feel</Text>
          <View style={{flexDirection: 'row'}}>
            <Text style={{fontSize: 30, color: 'black', fontWeight: 'bold'}}>859</Text>
            <Text style={{fontSize: 20, color: 'black', fontWeight: '400'}}>{'\u00b0'}C</Text>
          </View>
        </View>
      </View>

      <View style={{flexDirection: 'row', flex: 1, borderWidth: 1.5, borderColor: 'lightgrey'}}>
        <View style={{flex: 1, justifyContent: 'center', paddingLeft: 45, borderWidth: 1, borderColor: 'lightgrey', padding: 15}}>
          <Text style={{fontSize: 20, color: 'black', fontWeight: '500'}}>Real Feel</Text>
          <View style={{flexDirection: 'row'}}>
            <Text style={{fontSize: 30, color: 'black', fontWeight: 'bold'}}>859</Text>
            <Text style={{fontSize: 20, color: 'black', fontWeight: '400'}}>{'\u00b0'}C</Text>
          </View>
        </View>
        <View style={{flex: 1, justifyContent: 'center', paddingLeft: 45, borderWidth: 1, borderColor: 'lightgrey', padding: 15}}>
          <Text style={{fontSize: 20, color: 'black', fontWeight: '500'}}>Real Feel</Text>
          <View style={{flexDirection: 'row'}}>
            <Text style={{fontSize: 30, color: 'black', fontWeight: 'bold'}}>859</Text>
            <Text style={{fontSize: 20, color: 'black', fontWeight: '400'}}>{'\u00b0'}C</Text>
          </View>
        </View>
      </View>
    </View>
  );
};
