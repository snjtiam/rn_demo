import {View, Text, TouchableOpacity} from 'react-native';
import React from 'react';
import Header from '../components/Header';
import CircularProgress from 'react-native-circular-progress-indicator';
import {useNavigation} from '@react-navigation/native';
import {ROUTES} from '../navigation/routes';

const Dashboard = ({route}) => {
  const {params} = route;

  const navigation = useNavigation();

  const onPressTodoApp = () => {
    navigation.navigate(ROUTES.TODO_APP);
  };

  const onPressWeatherApp = () => {
    navigation.navigate(ROUTES.WEATHER_APP);
  };

  return (
    <View style={{flex: 1}}>
      <Header name={params.firstName} />
      <View style={{alignItems: 'center', marginVertical: 16}}>
        <CircularProgress
          progressValueColor={'#272829'}
          activeStrokeColor={'#FFBA86'}
          inActiveStrokeColor={'transparent'}
          value={58}
          title={'Kcal Over'}
        />
      </View>
      <TouchableOpacity onPress={onPressTodoApp}>
        <Text>{'Todo App'}</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={onPressWeatherApp}>
        <Text>{'Weather App'}</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Dashboard;
