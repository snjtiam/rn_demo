import { Button, StyleSheet, Text, View ,TextInput } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'
import { ROUTES } from '../routes/ROUTES';
import { useSelector, useDispatch } from 'react-redux' 
import { toggleTheme } from '../redux/appReducer/appReducer';
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
  const onPressChange=()={
    retreive(toggleTheme(!darkMode))
  }

  return (
    <View style={{paddingBottom:'10'}}>
      <TextInput placeholder='Enter here'/>
      <Button title='Click' onPress={onClick}/>
      <Button title='ChangeColor' onPress={onClick}/>

    </View>
  )
}

export default Login;

const styles = StyleSheet.create({})