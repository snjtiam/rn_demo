import React, {useState} from 'react';
import {View, Text, TextInput, Button, TouchableOpacity} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {ROUTES} from '../navigation/routes';
import { useSelector, useDispatch } from 'react-redux' //redux
import { toggleMode } from '../redux/appReducer/appReducer'; //redux

const Login = () => {
  const navigation = useNavigation();
  const [name, setName] = useState('jyoti');
  const {darkMode} = useSelector((state) => state.appReducer) //redux
  const dispatch = useDispatch(); //redux

  console.log('darkmode', darkMode); 

  const onPressToggle = () => {
    dispatch(toggleMode(!darkMode))  //redux
  };

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
    <View style={{flex:1, backgroundColor: darkMode? '#212121':'white'}}> 
      <Text style={{fontSize: 25, textAlign: 'center', color: '#00ABF0'}}>Home Screen</Text> 
  
      <TouchableOpacity style={{backgroundColor: darkMode? 'red':'skyblue', padding:10, alignSelf:'flex-end'}} onPress={onPressToggle}>
          <Text style={{color:darkMode? 'white':'#000', fontSize:15}}>Toggle Theme</Text>
      </TouchableOpacity>

      <TextInput
        style={{fontSize: 20}}
        placeholder="Enter name"
        placeholderTextColor={darkMode? 'white':'#000'}
        onChangeText={ntext => {
          setName(ntext);
        }}
      />
      <Button title={'Login  ' + name} onPress={onPressLogin} />
      <View style={{flexDirection: 'row'}}>
        <TouchableOpacity onPress={onPressWeatherApp}>
          <Text style={{backgroundColor: darkMode? 'beige':'skyblue', marginRight: 20, marginTop: 20, padding: 10, color: 'black'}}>{'Weather Tab'}</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={Destination}>
          <Text style={{backgroundColor: darkMode? 'beige':'skyblue', marginTop: 20, padding: 10, color: 'black'}}>{'Destination Screen'}</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};
export default Login;
