import React from 'react';
import {Text, View, Image} from 'react-native';
// import CircularProgress from 'react-native-circular-progress-indicator';

const Header = () => {
  return (
    <View
      style={{
        borderWidth: 1,
        marginHorizontal: 5,
        borderColor: '#ffeeda',
        height: '44%',
        backgroundColor: '#ffeeda',
        borderRadius: 25,
      }}>
      <View
        style={{
          justifyContent: 'center',
          flexDirection: 'row',
          paddingHorizontal: 16,
          justifyContent: 'space-between',
          paddingVertical: 8,
        }}>
        {/* border width problem in main view */}

        <View style={{flexDirection: 'row'}}>
          <Image style={{height: 80, width: 80, borderRadius: 100, margin: 10}} source={require('../../assets/Person.jpg')} />
          <View>
            <Text style={{fontSize: 25, marginTop: 20}}>
              Hello,<Text style={{fontWeight: 'bold'}}>Jyoti</Text>
            </Text>
            <Text style={{fontSize: 15, color: 'blue', fontWeight: '700'}}>SUNDAY, APR 9</Text>
          </View>
        </View>
        <Image style={{height: 80, width: 80, borderRadius: 100, margin: 10}} source={require('../../assets/Person.jpg')} />

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
    </View>
  );
};

export default Header;
