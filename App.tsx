import React from 'react';
import {Text, View} from 'react-native';
import RootStack from './srcShisham/routes/Rootstack';
import WeatherUI from './srcShisham/screens/WeatherUI';
import Drawer from './srcShisham/routes/Drawer';
import Header from './srcShisham/components/Header';
import WeatherApis from './src/apis/WeatherApis';
const App = () => {
  return (
    <View style={{flex: 1}}>
      <RootStack />
      
      <Text>Hi</Text>
      
      
    </View>
  );
};

export default App;
