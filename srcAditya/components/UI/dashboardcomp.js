import {View, Text, ImageBackground, TouchableOpacity, Image, StyleSheet} from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/FontAwesome5';
import {AirbnbRating} from 'react-native-ratings';

export const SectionTitle = ({title}) => {
  return (
    <View style={{justifyContent: 'space-between', flexDirection: 'row'}}>
      <Text style={styles.heading}>{title}</Text>
      <Text style={styles.title}>Explore</Text>
    </View>
  );
};

const Dashboardcomp = ({imgurl, country, city, onpress = () => {}}) => {
  return (
    <TouchableOpacity onPress={onpress} style={styles.TouchableOpacity}>
      <ImageBackground style={styles.image} source={imgurl}>
        <Text style={styles.country}>{country}</Text>
        <View style={{flexDirection: 'row', alignItems: 'center'}}>
          <Icon name="map-marker-alt" color={'white'} size={14} style={{marginHorizontal: 8}} />
          <Text style={styles.city}>{city}</Text>
        </View>
        <View
          style={{
            flexDirection: 'row',
          }}>
          <AirbnbRating isDisabled showRating={false} size={15} fractions={1} defaultRating={4.5} />
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
      <Image style={{height: 170, width: 170, borderRadius: 30}} source={require('../../Assets/Ger3.jpeg')} />
      <View style={{paddingVertical: 20, marginHorizontal: 10}}>
        <Text style={{color: 'black', fontSize: 22, fontWeight: 'bold'}}>Munkebu City , Norway </Text>
        <Text style={{color: 'grey', fontSize: 16}}>Visit the former Tempelhof Airport, which has been transformed into a massive urban park where you can walk, cycle, skate, and even fly kites.</Text>
        <Text style={{color: 'black', fontSize: 25, fontWeight: 'bold'}}>$245,00</Text>
      </View>
    </View>
  );
};

// StyleSheet Section

const styles = StyleSheet.create({
  TouchableOpacity: {
    overflow: 'hidden',
    borderRadius: 20,
    marginHorizontal: 10,
    marginVertical: 10,
    height: 255,
    width: 195,
  },
  image: {
    height: 255,
    width: 195,
    justifyContent: 'flex-end',
  },
  country: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 25,
    marginLeft: 8,
  },
  city: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 17,
  },
  heading: {
    fontSize: 30,
    color: 'red',
  },
  title: {
    fontSize: 20,
    color: 'black',
    marginVertical: 10,
    fontWeight: 'bold',
  },
});

export const ImageList = ({img}) => {
  return (
    <Image
      style={{
        height: 72,
        width: 72,
        borderRadius: 12,
        paddingVertical: 13,
        marginHorizontal: 8,
      }}
      source={img}
    />
  );
};

export const ImageListAdditional = ({img, count, onPress}) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <Image
        style={{
          height: 72,
          width: 72,
          borderRadius: 12,
          paddingVertical: 13,
          marginHorizontal: 8,
        }}
        source={img}
      />
      <View
        style={{
          position: 'absolute',
          height: 72,
          width: 72,
          borderRadius: 12,
          marginHorizontal: 8,
          backgroundColor: 'rgba(255,255,255,0.2)',
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <Text style={{fontSize: 22, fontWeight: 'bold', color: 'white'}}>
          +{count - 3}
        </Text>
      </View>
    </TouchableOpacity>
  );
};
