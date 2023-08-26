import React from 'react';
import {View,Text} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator} from '@react-navigation/native-stack';


const Stack= createNativeStackNavigator();
const Lg = () => {

  return (
    <NavigationContainer>
     <Stack.Navigator>
        <Stack.Screen  name='Login' component={Login} />
        
       
     </Stack.Navigator>
    </NavigationContainer>
  )
};

const Login=()=>{return(
<View> 
    <Text>Home Screen</Text>
</View>
)}
export default Lg;