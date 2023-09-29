import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import Entypo from 'react-native-vector-icons/Entypo';
import Fontisto from 'react-native-vector-icons/Fontisto';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';



const WeatherAppUi = () => {
  return (
    <View style={{ flex: 1, backgroundColor: '#fff1' }}>
      <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginVertical: 20, marginHorizontal:25 }}>
        <Entypo name="menu" size={22} color="black" style={{ alignSelf: 'center' }} />
        <View>
          <Text style={{ fontSize: 17, color: 'black', fontWeight: '800' }}>Los Angeles, USA</Text>
          <Text style={{ fontSize: 13, color: 'black', fontWeight: '400', textAlign: 'center' }}>Today, 08:16</Text>
        </View>
        <Entypo name="plus" size={22} color="black" style={{ alignSelf: 'center' }} />
      </View>

      <View style={{ flex: 1, backgroundColor: '#fff', borderTopEndRadius:38, borderTopLeftRadius:38, alignContent:'center' }}>
        <View style={{ flexDirection: 'row', justifyContent:'space-between', marginHorizontal:25,marginVertical: 20, }}>
          <View>
            <View style={{ flexDirection: 'row' ,}}>
              <MaterialCommunityIcons name="globe-model" size={25} color="black" style={{ marginRight:5, marginLeft:-5 }} />
              <Text style={{ fontSize: 15, color: 'black', fontWeight: 'bold', textAlign: 'center' }}>Los Angeles</Text>
            </View>
          </View >
          <View style={{ flexDirection: 'row' }}>
          <Ionicons name="sunny-outline" size={25} color="black" style={{marginRight:5  }} />
          <Text style={{ fontSize: 15, color: 'black', fontWeight: 'bold', textAlign: 'center' }}>Sunny Day</Text>
          </View>
         </View>
        <Text style={{ fontSize: 25, color: 'black', fontWeight: '500', marginHorizontal:25, marginTop:-4 }}>Saturday <Fontisto name='minus-a' /> 10 Feb</Text>
        <Text style={{ fontSize: 165, color: 'black', fontWeight: 'bold', marginLeft:25}}>17 <FontAwesome name='circle-o' size={30} style={{fontWeight:'bold', justifyContent:'flex-start'}}/></Text>

      </View>
    </View>
  )
}

export default WeatherAppUi;