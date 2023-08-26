import {View, Text} from 'react-native'; 
import React from 'react'; 
import Header from '../components/Header'; 
// import CircularProgress from 'react-native-circular-progress-indicator'; 
import Section from '../components/section'; 
import Sectiona from '../components/section2';

const Dashboard1 = () => { 
  return ( 
    <View > 
      <Header name={'Jyoti'} /> 
      <Section/>
      <Sectiona/>
      
      {/* <View style={{alignItems: 'center', marginVertical: 16}}> 
        <CircularProgress 
          progressValueColor={'#272829'} 
          activeStrokeColor={'#FFBA86'} 
          inActiveStrokeColor={'transparent'} 
          value={58} 
          title={'Kcal Over'} 
        /> 
      </View>  */}
    </View> 
  ); 
}; 
 
export default Dashboard1;