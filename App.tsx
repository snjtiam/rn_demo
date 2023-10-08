import React from 'react';
import {Text, View} from 'react-native';
import RootStack from './srcShisham/routes/Rootstack';
import WeatherUI from './srcShisham/screens/WeatherUI';
import Drawer from './srcShisham/routes/Drawer';
import Header from './srcShisham/components/Header';
const App = () => {
  return (
    <View style={{flex: 0}}>
      {/* <RootStack /> */}
      <Header/>
      <Text>Hi</Text>
      {/* <WeatherUI/> */}
    </View>
  );
};

export default App;
