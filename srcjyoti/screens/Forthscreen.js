import React from 'react';
import {View, Text, Image} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {useNavigation} from '@react-navigation/native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {ROUTES} from '../navigation/routes';
import DestinationUI from '../components/DestinationUI';
const Forthscreen = () => {
  const navigation = useNavigation();

  const backto_todolist = () => {
    navigation.navigate(ROUTES.LOGIN);
  };

  return (
    <View style={{flex: 1}}>
      <View style={{flexDirection: 'row', alignItems: 'center'}}>
        <Icon
          name="arrow-left"
          size={30}
          color="black"
          onPress={backto_todolist}
        />
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            flex: 1,
          }}>
          <View style={{flexDirection: 'row', flex: 1}}>
            <Image
              style={{height: 45, width: 45, borderRadius: 100, margin: 8}}
              source={require('../assets/Person2.jpg')}
            />
            <Text style={{fontSize: 20, marginTop: 20, color: '#111111'}}>
              Hi,
              <Text style={{fontWeight: 'bold', color: 'black'}}>
                Jyoti Gupta
              </Text>
            </Text>
          </View>
          <Text style={{marginTop: '20', alignSelf: 'center'}}>
            <Ionicons name="notifications" size={33} color="black" />
          </Text>
        </View>
      </View>
      <DestinationUI />
    </View>
  );
};

export default Forthscreen;
