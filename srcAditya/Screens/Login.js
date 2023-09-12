import React from 'react'
import {View,Button} from 'react-native'
import { useNavigation } from '@react-navigation/native'
import { ROUTES } from '../Navigation/ROUTES'

const Login = () => {
  const navigation=useNavigation();
  const Next=()=>{
    navigation.navigate(ROUTES.DASHBOARD)
    
    
  }
  return (
    <View style={{flex:1}}>
        <Button title='Click to enter dashboard' onPress={Next}/>
    </View>
  )
}

export default Login;