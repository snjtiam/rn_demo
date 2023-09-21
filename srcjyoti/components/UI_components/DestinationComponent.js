import { View, Text, TouchableOpacity, ImageBackground, Image } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import React from 'react';


const DestinationComponent = ({ imgUrl, country, destination, onPress = () => {} }) => {
  return (
    <TouchableOpacity style={{ marginLeft: 15, marginHorizontal: 10, marginVertical: 10, borderRadius: 20, overflow: 'hidden' }} onPress={onPress}>
      <ImageBackground style={{ height: 255, width: 195, justifyContent: 'flex-end' }} source={imgUrl}>
        <View style={{ backgroundColor: 'rgba(0,0,0,0.3)', paddingHorizontal: 8, padding: 10 }}>
          <Text style={{ color: 'white', fontSize: 17, fontWeight: 'bold', color: '#fff' }}>{country}</Text>
          <View style={{ flexDirection: 'row', marginBottom: 1 }}>
            <Ionicons name="location" size={22} color="white" />
            <Text style={{ color: 'white', fontSize: 17, fontWeight: 'bold', color: '#fff' }}>{destination}</Text>
          </View>
        </View>
      </ImageBackground>
    </TouchableOpacity>
  );
};

export { DestinationComponent};

const SectionTitle = ({ title, title2 }) => {
  return (
    <View style={{ flexDirection: 'row', justifyContent: 'space-between', paddingVertical: 20, paddingHorizontal: 10 }}>
      <Text style={{ fontWeight: 'bold', fontSize: 23, color: 'black' }}>{title}</Text>
      <Text style={{ fontSize: 18, paddingTop: 5.5 }}>{title2}</Text>
    </View>
  );
};

export {SectionTitle};


const Section_Package = ({imgUrl,destination, description, Price}) => {
  return (
    <View style={{ flexDirection: 'row', backgroundColor: '#fff', marginHorizontal: 30, paddingVertical: 3, borderRadius: 20, marginBottom:8 }}>
      <Image style={{ borderRadius: 20, marginLeft: 12, marginHorizontal: 10,marginTop:5,height: 118, width: 105 }} source={imgUrl} />
      <View style={{ width: 200 }}>
        <Text style={{ fontSize: 19, fontWeight: '900' }}>{destination}</Text>
        <Text style={{ fontWeight: 600, paddingVertical: 6 }}>{description}</Text>
        <Text style={{ fontWeight: '900', fontSize: 20, color: '#00CBFE' }}>{Price}</Text>
      </View>
    </View>
  );
};

export {Section_Package};


export const ImageList = ({list}) =>{
    return (
          <Image style={{height:72, width:72, borderRadius:12, marginLeft:16.6,paddingVertical:13,}} source={list}/>
    )
}

