import React from 'react';
import {Image, Text, TouchableOpacity, View} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import EntypoIcon from 'react-native-vector-icons/Entypo';
const Header = ({name}) => {
  const navigation = useNavigation();
  const onPressBack = () => {
    navigation.goBack();
  };

  return (
    <View
      style={{
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingHorizontal: 16,
        paddingVertical: 8,
      }}>
      <View style={{flexDirection: 'row', alignItems: 'center'}}>
        <TouchableOpacity onPress={onPressBack}>
          <EntypoIcon name="chevron-thin-left" size={24} />
        </TouchableOpacity>
        <Image
          style={{height: 60, width: 60, borderRadius: 100}}
          source={require('../assets/person.jpg')}
        />
        <View style={{marginLeft: 8}}>
          <Text style={{fontSize: 25}}>
            Hello, <Text style={{fontWeight: 'bold'}}>{name}</Text>
          </Text>
          <Text style={{fontSize: 15, color: 'blue', fontWeight: '700'}}>
            SUNDAY, APR 9
          </Text>
        </View>
      </View>

      <Image
        style={{
          height: 60,
          width: 60,
          borderRadius: 100,
        }}
        source={require('../assets/person.jpg')}
      />
    </View>
  );
};

export default Header;
