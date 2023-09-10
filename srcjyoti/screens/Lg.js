import React, {useState} from 'react';
import {View, Text, TextInput,Button, TouchableOpacity} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {ROUTES} from '../navigation/routes';


const Login = () => {

    const navigation = useNavigation();
    const [name, setName] = useState('jyoti');

  const onPressLogin=()=>{
    navigation.navigate(ROUTES.DASHBOARD, {firstName: name});
  };

  const onPressWeatherApp=()=>{
    navigation.navigate(ROUTES.WEATHER_APP);
  };

  return (
    <View>
      <Text style={{fontSize:20}}>Home Screen</Text>
      <TextInput
        placeholder="Enter name"
        onChangeText={ntext => {
          setName(ntext);
        }}
      />
      <Button title={'Login  '+ name} onPress={onPressLogin} />

      <TouchableOpacity onPress={onPressWeatherApp}>
        <Text style={{backgroundColor:'skyblue', marginRight:300, marginTop:20, padding:10, color:'black'}}>{'Weather App'}</Text>
      </TouchableOpacity>
    </View>
  );
};
export default Login;
