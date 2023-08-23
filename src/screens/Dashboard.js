import {View, Text} from 'react-native';
import React from 'react';
import Header from '../components/Header';
import CircularProgress from 'react-native-circular-progress-indicator';

const Dashboard = ({route}) => {
  const {params} = route;
  console.log('ROUTE', params);
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
    </View>
  );
};

export default Dashboard;
