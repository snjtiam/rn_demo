import {
  View,
  Text,
  ImageBackground,
  TouchableOpacity,
  Image,
} from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/FontAwesome5';
import {AirbnbRating} from 'react-native-ratings';

const Dashboardcomp = ({imgurl, country, city, onpress = () => {}}) => {
  return (
    <TouchableOpacity
      onPress={onpress}
      style={{
        overflow: 'hidden',
        borderRadius: 20,
        marginHorizontal: 10,
        marginVertical: 10,
        height: 255,
        width: 195,
      }}>
      <ImageBackground
        style={{height: 255, width: 195, justifyContent: 'flex-end'}}
        source={imgurl}>
        <Text
          style={{
            color: 'white',
            fontWeight: 'bold',
            fontSize: 25,
            marginLeft: 8,
          }}>
          {country}
        </Text>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
          }}>
          <Icon
            name="map-marker"
            color={'white'}
            size={14}
            style={{marginHorizontal: 8}}
          />
          <Text
            style={{
              color: 'white',
              fontWeight: 'bold',
              fontSize: 17,
            }}>
            {city}
          </Text>
        </View>
        <View style={{flexDirection: 'row'}}>
          <AirbnbRating
            isDisabled
            showRating={false}
            size={15}
            fractions={1}
            defaultRating={4.5}
          />
          <Text style={{color: 'white'}}>4.8</Text>
        </View>
      </ImageBackground>
    </TouchableOpacity>
  );
};

export {Dashboardcomp};

export const PopularPlace = () => {
  return (
    <View style={{flexDirection: 'row'}}>
      <Image
        style={{height: 170, width: 170, borderRadius: 30}}
        source={require('../../Assets/Ger3.jpeg')}
      />
      <View style={{paddingVertical: 20, marginHorizontal: 10}}>
        <Text style={{color: 'black', fontSize: 22, fontWeight: 'bold'}}>
          Munkebu City , Norway
        </Text>
        <Text style={{color: 'grey', fontSize: 16}}>
          Visit the former Tempelhof Airport, which has been transformed into a
          massive urban park where you can walk, cycle, skate, and even fly
          kites.
        </Text>
        <Text style={{color: 'black', fontSize: 25, fontWeight: 'bold'}}>
          $245,00
        </Text>
      </View>
    </View>
  );
};
