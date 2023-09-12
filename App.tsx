import React from 'react';
import {View} from 'react-native';
import RootStack from './src/Navigation/RootStack';
const App = () => {
  console.log('THI IS LOG');

  return (
    <View style={{flex: 1}}>
      <RootStack />
    </View>
  );
};

export default App;
