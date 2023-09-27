import { View, Text , TouchableOpacity} from 'react-native'
import React from 'react'
import Entypo from 'react-native-vector-icons/Entypo';


const WeatherAppUi = () => {
  return (
    <View>
        <TouchableOpacity onPress={()=>{}}>
        <Entypo name="chevron-small-left" size={30} color="black" />
        </TouchableOpacity>
        <Text style={{fontSize:20, color:'black', fontWeight:'600'}}>Los Angeles, USA</Text>
    </View>
  )
}

export default WeatherAppUi