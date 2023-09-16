import {View, Text, TouchableOpacity, ImageBackground} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import React from 'react';

const DestinationComponent = ({
  imgUrl,
  country,
  destination,
  onPress = () => {},
}) => {
  return (
    <TouchableOpacity
      style={{
        marginLeft: 15,
        marginHorizontal: 10,
        marginVertical: 10,
        borderRadius: 20,
        overflow: 'hidden',
      }}
      onPress={onPress}>
      <ImageBackground
        style={{
          height: 255,
          width: 195,
          justifyContent: 'flex-end',
        }}
        source={imgUrl}>
        <View
          style={{
            backgroundColor: 'rgba(0,0,0,0.3)',
            paddingHorizontal: 8,
            padding: 10,
          }}>
          <Text
            style={{
              color: 'white',
              fontSize: 17,
              fontWeight: 'bold',
              color: '#fff',
            }}>
            {country}
          </Text>
          <View
            style={{
              flexDirection: 'row',
              marginBottom: 1,
            }}>
            <Ionicons
              name="location"
              size={22}
              color="white"
              //   style={{marginLeft: 10}}
            />
            <Text
              style={{
                color: 'white',
                fontSize: 17,
                fontWeight: 'bold',
                color: '#fff',
              }}>
              {destination}
            </Text>
          </View>
        </View>
      </ImageBackground>
    </TouchableOpacity>
  );
};

export default DestinationComponent;
