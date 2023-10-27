import { Button, StyleSheet, Text, View ,TextInput } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'
import { ROUTES } from '../routes/ROUTES';
import { useSelector, useDispatch } from 'react-redux' 
import { toggleTheme } from '../redux/app reducer/appReducer';
import appReducer from '../redux/app reducer/appReducer';
import Storage from '../../src/utils/Storage';
const Login = () => {
  const navigation = useNavigation();
  const {darkMode} = useSelector((state) => state.appReducer) 
  const retreive = useDispatch(); 

  console.log('darkmode',darkMode);
  const onClick=()=>{
    navigation.navigate(ROUTES.HEADER);
  }
  const onPressChange=()=>{
    retreive(toggleTheme(!darkMode))
  }

  return (
    <View style={{paddingBottom:'10',
    backgroundColor:darkMode?'#000':'#fff'
    }}>
      <TextInput placeholder='Enter here' 
      placeholderTextColor={darkMode?'#fff':'#000'} 
      style={{color:darkMode?'#fff':'#000'}}/>

      <Button title='Click' onPress={onClick} color={darkMode?'ED7D31':'blue'}/>
      <Button title='ChangeColor' onPress={onPressChange} color={darkMode?'ED7D31':'blue'}/>

    </View>
  )
}

export default Login;

const styles = StyleSheet.create({})