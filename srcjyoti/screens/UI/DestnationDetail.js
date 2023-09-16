import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  ImageBackground,
} from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import ReadMore from 'react-native-read-more-text';
import {useNavigation} from '@react-navigation/native';

const DestnationDetail = ({route}) => {
  const navigation = useNavigation();
  const {description, imgUrl} = route.params;

  return (
    <ScrollView>
      <View>
        <View style={{flexDirection: 'row'}}>
          <Icon
            name="arrow-left"
            size={30}
            color="black"
            onPress={() => {
              navigation.goBack();
            }}
          />
          <Text style={{fontSize: 30, fontWeight: 'bold'}}>Details</Text>
        </View>
        <TouchableOpacity
          style={{
            marginHorizontal: 35,
            borderRadius: 20,
            marginHorizontal: 35,
            borderRadius: 20,
            overflow: 'hidden',
          }}>
          <ImageBackground
            style={{height: 400, width: 340, resizeMode: 'center'}}
            source={imgUrl}></ImageBackground>
        </TouchableOpacity>

        <ReadMore numberOfLines={4} readMoreText="See More">
          {description}
        </ReadMore>
      </View>
    </ScrollView>
  );
};

export default DestnationDetail;
