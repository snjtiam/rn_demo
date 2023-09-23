import { View, Text,Button } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'
import { Routes } from '../navigation/routes';

const Login = () => {
    const raj=useNavigation();
    const onPress=()=>{
        raj.navigate(Routes.DASHBOARD);
    }
  return (
    <View>
      <Button title='Login' onPress={onPress}/>
    </View>
  )
}

export default Login