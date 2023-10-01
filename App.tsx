import React from 'react';
import {Text, View} from 'react-native';
// import RootStack from './src/navigation/RootStack';
import RootStack from './srcjyoti/navigation/RootStack';
navigator.geolocation = require('@react-native-community/geolocation');

const App = () => {
  return (
    <View style={{flex: 1}}>
      <RootStack />
    </View>
  );
};

export default App;
