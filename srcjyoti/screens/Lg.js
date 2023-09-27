import React, {useState} from 'react';
import {View, Text, TextInput, Button, TouchableOpacity} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {ROUTES} from '../navigation/routes';

const Login = () => {
  const navigation = useNavigation();
  const [name, setName] = useState('jyoti');

  const onPressLogin = () => {
    navigation.navigate(ROUTES.DASHBOARD_TODO_TAB, {firstName: name});
  };

  const onPressWeatherApp = () => {
    navigation.navigate(ROUTES.WEATHER_TAB);
  };

  const Destination = () => {
    navigation.navigate(ROUTES.DESTINATION_UI);
  };

  return (
    <View>
      <Text style={{fontSize: 25, textAlign: 'center', color: '#00ABF0'}}>Home Screen</Text>
      <TextInput
        style={{fontSize: 20}}
        placeholder="Enter name"
        onChangeText={ntext => {
          setName(ntext);
        }}
      />
      <Button title={'Login  ' + name} onPress={onPressLogin} />
      <View style={{flexDirection: 'row'}}>
        <TouchableOpacity onPress={onPressWeatherApp}>
          <Text style={{backgroundColor: 'skyblue', marginRight: 20, marginTop: 20, padding: 10, color: 'black'}}>{'Weather Tab'}</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={Destination}>
          <Text style={{backgroundColor: 'skyblue', marginTop: 20, padding: 10, color: 'black'}}>{'Destination Screen'}</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};
export default Login;
