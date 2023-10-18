import React from 'react';
import {Text, View} from 'react-native';
// import RootStack from './src/navigation/RootStack';
import RootStack from './srcjyoti/navigation/RootStack';
import { Provider } from 'react-redux';
import { store } from './srcjyoti/redux/store';

const App = () => {
  return (
    <Provider store={store} >
      <View style={{flex: 1}}>
        <RootStack />
      </View>
    </Provider>
    
  );
};

export default App;
