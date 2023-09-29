import {View, Text, ImageBackground, TouchableOpacity,FlatList, StyleSheet} from 'react-native';
import React, {useState} from 'react';
import Icon from 'react-native-vector-icons/FontAwesome5';
import {AirbnbRating} from 'react-native-ratings';
import { ImageList,ImageListAdditional } from '../components/UI/dashboardcomp';


const DashboardDetails = ({route}) => {
  const [showAdditionalImages, setShowAdditionalImages] = useState(false);
  const {imgurl, country, city} = route.params;

  const onShowAllImages = () => {
    setShowAdditionalImages(prev => !prev);
  };

  return (
    <View style={{alignItems: 'center', flex: 1}}>
      <Text style={{textAlign: 'center', fontSize: 30, color: 'black', fontWeight: 'bold'}}>Details</Text>
      <View style={{backgroundColor: 'black', height: 400, width: 370, overflow: 'hidden', borderRadius: 40}}>
        <ImageBackground style={{height: 400, width: 370, justifyContent: 'flex-end'}} source={imgurl}>
          <Text style={{color: 'white', fontWeight: 'bold', fontSize: 43, marginLeft: 20}}>{country}</Text>
          <View style={{flexDirection: 'row'}}>
            {<Icon name="map-marker-alt" color={'white'} size={23} style={{marginHorizontal: 20}} /> /* marginptoblem */}
            <Text style={{color: 'white', fontWeight: 'bold', fontSize: 23}}>{city}</Text>
          </View>
          <View style={{flexDirection: 'row', marginHorizontal: 20, marginBottom: 15}}>
            <AirbnbRating showRating={false} size={20} defaultRating={4.5} />
            <Text style={{color: 'white', fontSize: 23, marginLeft: 10}}>4.8</Text>
          </View>
        </ImageBackground>
      </View>
      <FlatList
        style={styles.containerImageList}
        contentContainerStyle={{
          paddingHorizontal: 10,
        }}
        initialNumToRender={4}
        horizontal
        showsHorizontalScrollIndicator={false}
        data={showAdditionalImages ? images : images.slice(0, 3)}
        renderItem={({item}) => <ImageList img={item.img} />}
        ListFooterComponent={showAdditionalImages ? null : <ImageListAdditional img={images[3].img} count={images.length} onPress={onShowAllImages} />}
      />
      <View
        style={{
          flexDirection: 'row',
          marginTop: 15,
          justifyContent: 'space-around',
        }}>
        <Text style={{fontSize: 30, fontWeight: 'bold', color: 'black'}}>
          $310<Text style={{fontSize: 18, color: 'grey'}}>/Person</Text>
        </Text>
        <TouchableOpacity
          style={{
            backgroundColor: '#02ccfe',
            padding: 15,
            paddingHorizontal: 40,
            borderRadius: 10,
          }}>
          <Text
            style={{
              color: 'white',
              fontSize: 18,
              fontWeight: 'bold',
              textAlign: 'center',
            }}>
            Continue
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};
 export const images=[
  {
    img :require("../Assets/Ger1.jpeg")
  },
  {
    img :require("../Assets/Ger2.jpeg")
  },
  {
    img :require("../Assets/Ger3.jpeg")
  },
  {
    img :require("../Assets/Ger4.jpeg")
  },
  {
    img :require("../Assets/Ger1.jpeg")
  },
  {
    img :require("../Assets/Ger2.jpeg")
  },
  {
    img :require("../Assets/Ger3.jpeg")
  },
  {
    img :require("../Assets/Ger4.jpeg")
  },
  
]

const styles = StyleSheet.create({
  containerImageList: {
    marginTop: 20,
    borderWidth: 1,
    borderRadius: 10,
    marginHorizontal: 20,
    backgroundColor: '#fff',
    paddingVertical: 12,
  },
});

export default DashboardDetails;
