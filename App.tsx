import React from 'react';
import {Text, View} from 'react-native';
import Dashboard from './src/screens/Dashboard';
import Shisham from './src/screens/Shisham';
import RootStack from './src/navigation/RootStack';

const App = () => {
  return (
    <View style={{flex: 1}}>
      <RootStack />
    </View>
  );
};

export default App;
