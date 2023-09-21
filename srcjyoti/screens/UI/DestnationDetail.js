import { View, Text, ScrollView, TouchableOpacity, ImageBackground, FlatList,} from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import ReadMore from 'react-native-read-more-text';
import { useNavigation } from '@react-navigation/native';
import { ImageList } from '../../components/UI_components/DestinationComponent';

const DestnationDetail = ({ route }) => {
  const navigation = useNavigation();
  const { description, imgUrl } = route.params;

  return (
    <ScrollView>
        <View style={{ flexDirection: 'row'}}>
          <Icon name="arrow-left" size={35} color="black" onPress={() => { navigation.goBack(); }} />  
          <Text style={{ fontSize: 30, fontWeight: 'bold', marginLeft:127,color:'black'}}>Details</Text>
        </View>
        <TouchableOpacity style={{ marginHorizontal: 35, borderRadius: 20, overflow: 'hidden', alignSelf:'center' }}>
          <ImageBackground style={{ height: 350, width: 320, resizeMode: 'center' }} source={imgUrl}></ImageBackground>
        </TouchableOpacity>

        <TouchableOpacity style={{marginHorizontal:20, marginTop:10}}>
        <ReadMore numberOfLines={4} readMoreText="See More">
          {description}
        </ReadMore>
        </TouchableOpacity>

      {/* {images.map((item, index)=>(
       <ImageList images = {images[index]} />
      ))} */}

      <FlatList style={{borderWidth:1, paddingVertical:12,marginTop:20,marginHorizontal:20, borderRadius:10, backgroundColor:'#fff',}}
        initialNumToRender={4}
        horizontal
        showsHorizontalScrollIndicator={false}
        data={images}
        renderItem={({item,index})=>(
          <ImageList list={item.list}/>
        )}
      />

      <View style={{flexDirection:'row', marginTop:15, justifyContent:'space-around'}}>
        <Text style = {{fontSize:30, fontWeight:'bold', color:'black'}}>$310<Text style={{fontSize:18, color:'grey'}}>/Person</Text></Text>
        <TouchableOpacity style={{backgroundColor: '#02ccfe',padding: 15,paddingHorizontal:40,borderRadius: 10,}}>
          <Text style={{color: 'white',fontSize: 18,fontWeight: 'bold',textAlign: 'center',}}>Continue</Text>
        </TouchableOpacity>
      </View>

    </ScrollView>
  );
};

export const images=[
    {
      list : require('../../assets/Ktm.jpg'),
    },
    {
      list : require('../../assets/Pokhara.jpg'),
    },
    {
      list : require('../../assets/Mt.everest.jpg'),
    },
    {
      list : require('../../assets/Nagarkot.jpg'),
    },
    {
      list : require('../../assets/Tilicho.png'),
    },
    {
      list : require('../../assets/Bhaktapur.jpg'),
    },
    {
      list : require('../../assets/PhoksundoLake.jpg'),
    },
    {
      list : require('../../assets/Nagarkot.jpg'),
    },
]
export default DestnationDetail;
