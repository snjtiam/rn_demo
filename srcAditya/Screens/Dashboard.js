import {View, Text, Image, FlatList, TextInput} from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';
import {Dashboardcomp} from '../components/UI/dashboardcomp';
import {PopularPlace} from '../components/UI/dashboardcomp';
import {useNavigation} from '@react-navigation/native';
import {Routes} from '../Navigation/ROUTES';

const Dashboard = () => {
  const data1 = [
    {
      imgurl: require('../Assets/Ger3.jpeg'),
      country: 'Germany,Berlin',
      city: 'Berlin,Brandenburg Gate',
    },
    {
      imgurl: require('../Assets/Ger2.jpeg'),
      country: 'Germany,Berlin',
      city: 'Berlin,Brandenburg Gate',
    },
    {
      imgurl: require('../Assets/Ger1.jpeg'),
      country: 'Germany,Berlin',
      city: 'Berlin,Brandenburg Gate',
    },
    {
      imgurl: require('../Assets/Ger4.jpeg'),
      country: 'Germany,Berlin',
      city: 'Berlin,Brandenburg Gate',
    },
  ];
  const raj = useNavigation();
  const onpressimg = item => {
    raj.navigate(Routes.DASHBOARDDETAILS, {...item});
  };
  return (
    <View style={{flex: 1}}>
      <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
        <View style={{flexDirection: 'row'}}>
          <Image
            style={{borderRadius: 100, height: 50, width: 50, marginTop: 10}}
            source={require('../Assets/profile.jpeg')}
          />
          <Text
            style={{
              fontSize: 20,
              fontWeight: '500',
              marginTop: 20,
              marginLeft: 10,
            }}>
            Hi,<Text style={{fontSize: 22, fontWeight: '900'}}>John Cena</Text>
          </Text>
        </View>
        <Icon name="bell" size={30} style={{marginTop: 15, marginRight: 20}} />
      </View>

      <TextInput
        placeholder="Search your Place"
        style={{
          paddingLeft: 10,
          borderWidth: 2,
          marginTop: 10,
          borderRadius: 100,
          fontWeight: '900',
          fontSize: 20,
        }}
      />

      <View>
        <FlatList
          horizontal
          data={data1}
          renderItem={({item}) => (
            <Dashboardcomp
              imgurl={item.imgurl}
              country={item.country}
              city={item.city}
              onpress={() => {
                onpressimg(item);
              }}
            />
          )}
        />
      </View>
      <PopularPlace />
    </View>
  );
};

export default Dashboard;
