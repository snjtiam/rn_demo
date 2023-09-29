import {View, Text, ScrollView, TouchableOpacity, ImageBackground, FlatList, StyleSheet} from 'react-native';
import React, {useState} from 'react';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import ReadMore from 'react-native-read-more-text';
import {useNavigation} from '@react-navigation/native';
import {ImageList, ImageListAdditional} from '../../components/UI_components/DestinationComponent';

const DestnationDetail = ({route}) => {
  const [showAdditionalImages, setShowAdditionalImages] = useState(false);
  const navigation = useNavigation();
  const {description, imgUrl} = route.params;

  const onShowAllImages = () => {
    setShowAdditionalImages(prev => !prev);
  };

  return (
    <ScrollView>
      <View style={{flexDirection: 'row'}}>
        <Icon
          name="arrow-left"
          size={35}
          color="black"
          onPress={() => {
            navigation.goBack();
          }}
        />
        <Text
          style={{
            fontSize: 30,
            fontWeight: 'bold',
            marginLeft: 127,
            color: 'black',
          }}>
          Details
        </Text>
      </View>
      <View
        style={{
          marginHorizontal: 35,
          borderRadius: 20,
          overflow: 'hidden',
          alignSelf: 'center',
        }}>
        <ImageBackground style={{height: 350, width: 320, resizeMode: 'center'}} source={imgUrl}></ImageBackground>
      </View>

      <View style={{marginHorizontal: 20, marginTop: 10}}>
        <ReadMore numberOfLines={4} readMoreText="See More">
          {description}
        </ReadMore>
      </View>

      {/* {images.map((item, index)=>(
       <ImageList images = {images[index]} /> 
      ))} */}

      <FlatList
        style={styles.containerImageList}
        contentContainerStyle={{
          paddingHorizontal: 10,
        }}
        initialNumToRender={4}
        horizontal
        showsHorizontalScrollIndicator={false}
        data={showAdditionalImages ? images : images.slice(0, 3)}
        renderItem={({item}) => <ImageList list={item.list} />}
        ListFooterComponent={showAdditionalImages ? null : <ImageListAdditional list={images[3].list} count={images.length} onPress={onShowAllImages} />}
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
    </ScrollView>
  );
};

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

export const images = [
  {
    list: require('../../assets/images/Ktm.jpg'),
  },
  {
    list: require('../../assets/images/Pokhara.jpg'),
  },
  {
    list: require('../../assets/images/Mt.everest.jpg'),
  },
  {
    list: require('../../assets/images/Nagarkot.jpg'),
  },
  {
    list: require('../../assets/images/Tilicho.png'),
  },
  {
    list: require('../../assets/images/Bhaktapur.jpg'),
  },
  {
    list: require('../../assets/images/PhoksundoLake.jpg'),
  },
  {
    list: require('../../assets/images/Nagarkot.jpg'),
  },
];
export default DestnationDetail;
