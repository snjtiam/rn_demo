import { StyleSheet, Text, View, Image,onPress,TouchableOpacity } from 'react-native'
import { ImageBackground, StatusBar } from 'react-native';
import React, { useState } from 'react'
import Header from '../assets/Header'
import CircularProgress from 'react-native-circular-progress-indicator';
import App from '../../App';
import BottomNavigator from './BottomNavigator';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
import HomeStack from '../routes/HomeStack';

const Dashboard = () => {
  const [value, setValue] = useState(0);
  const onPress =(val)=>{
    console.warn(val);
    
  
  };
  return (

    <View style={styles.Container}>
      <View style={styles.ProgressBar}>
        {/* <Header/> */}<HomeStack/>
        <StatusBar style="auto" />

          
        {/* <CircularProgress
          radius={100}
          value={65}
          Color='#222'
          fontSize={20}
          valueSuffix={'kcal'}
          inActiveStrokeColor={'#5C5470'}
          inActiveStrokeOpacity={0.2}
          circleBackgroundColor='#fff'
          activeStrokeColor='#000'
          
        /> */}
        {/* <Image style={{}} source={require("../../src/assets/drop.jpg")}/> */}
        {/* <View style={{ flexDirection: 'row', justifyContent: 'space-evenly', marginTop: -50 }}>
          <TouchableOpacity onPress={()=>onPress("Hello user")}>
          <View style={styles.text}>
            <View style={{
              height: 30,
              width: 30,
              borderRadius: 30,
              backgroundColor: '#7A9D54',
              marginRight: 40,
            }}>
              <Icon name="fire" size={25} color={'#fff'} /></View>
            <Text style={{ color: 'crimson' }}>Eaten</Text>
            <View style={{ fontSize: '20', fontWeight: 'bold' }}><Text>2467</Text></View>
          </View></TouchableOpacity>
          <View style={styles.text} >
            <View style={styles.Icondesign}><Icon name="fire" size={25} color={'#fff'} /></View>
            <Text style={{ color: 'crimson' }}>Burned</Text>
            <View style={{ fontSize: 80 }}><Text>764</Text></View>
          </View>
        </View>
        <View style={styles.activity}><Text size={80}>Activity</Text></View>
          <View style={{ flexDirection: 'row', justifyContent: 'space-evenly', marginTop: -20, marginLeft:-500 }}>
          <View style={styles.card}>
          <View style={styles.Icondesign2}><Icon name="walk" size={25} color={'#7A9D54'} /></View>
            <View style={{color:'#fff'}}><Text style={{color:'#fff'}}>Walk</Text></View>
          </View>
          <View style={styles.card2}></View></View> */}
      </View>

    </View>
  );
}

export default Dashboard;


const styles = StyleSheet.create({
  Container: {
    height: 250,
    width: '100%',
    backgroundColor: '#B2BABB',

  },
  ProgressBar: {
    height: 500,
    width: '100%',
    marginVertical: 20,
    marginHorizontal: 100,
  },
  text: {
    borderRadius: 10,
    padding: 30,
    paddingHorizontal: 90,
    marginVertical: 50,
    marginRight: 200,
    backgroundColor: "#fff",
    shadowColor: '#000',
    fontSize: 90, fontWeight: 'bold',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
    elevation: 5,
  },
  Icondesign: {
    height: 30,
    width: 30,
    fontSize: 50,
    borderRadius: 30,
    backgroundColor: 'crimson',
    // marginVertical:50,
    marginRight: 40,
  },
  Icondesign2: {
    height: 30,
    width: 30,
    fontSize: 50,
    borderRadius: 30,
    backgroundColor: '#fff',
    // marginVertical:50,
    marginRight: 40,
  },
  activity: {
    fontWeight: 'bold',
    fontSize: 50,
    marginTop: -30,
    marginLeft: -70,
    

  },
  card:{
    height: 80,
    width: 80,
    marginTop: 30,
    paddingVertical:70,
    paddingLeft:100,
    borderRadius: 10,
    padding: 30,
    paddingHorizontal: 50,
    // marginVertical: 50,
    marginRight: -300,
    backgroundColor: "#7A9D54",
  },

  card2:{
    height: 80,
    width: 80,
    paddingVertical:70,
    marginTop: 30,
    marginRight:60,
    paddingLeft:100,
    // paddingRight:100,
    borderRadius: 10,
    padding: 30,
    fontSize:18,
    paddingHorizontal: 50,
    // marginVertical: 50,
    marginRight: -300,
    backgroundColor: "crimson",
  }
});