import React from 'react';
import {View, Text, Dimensions, StyleSheet} from 'react-native';
import Entypo from 'react-native-vector-icons/Entypo';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { useNavigation } from '@react-navigation/native';
import { ROUTES } from '../../navigation/routes';

const {width, height} = Dimensions.get('window');

export const WeatherUi_Detail = ({route}) => {
  const {countrytitle, time, condition, date, temperature,RealFeel,RealFeelUnit,Humidity,Wind,WindUnit,UVIndex,Visibility,VisibilityUnit,Pressure,PressureUnit} = route.params;

  const navigation = useNavigation();
  const goback = ()=>{
    navigation.navigate(ROUTES.WEATHERAPP_UI)
  }

  return (
    <View style={{flex: 1}}>
      <View style={{flexDirection: 'row', justifyContent: 'space-between', marginVertical: 20, marginHorizontal: 30}}>
        <Entypo name="chevron-small-left" size={30} color="black" style={{alignSelf: 'center'}} onPress={goback} />
        <View>
          <Text style={{fontSize: width*0.036, color: 'black', fontWeight: '800'}}>{countrytitle}</Text>
          <Text style={{fontSize: 13, color: 'black', fontWeight: '400', textAlign: 'center'}}>Today, {time}</Text>
        </View>
        <View></View>
      </View>
      <View style={{backgroundColor: '#fff', borderTopEndRadius: 38, borderTopLeftRadius: 40, alignContent: 'center'}}>
        <View style={{flexDirection: 'row', justifyContent: 'space-between', marginHorizontal: 40, marginVertical: 20}}>
          <View style={{flexDirection: 'row'}}>
            <MaterialCommunityIcons name="globe-model" size={25} color="black" style={{marginRight: 5, marginLeft: -5}} />
            <Text style={{fontSize: 14, color: 'black', fontWeight: 'bold', textAlign: 'center'}} >{countrytitle}</Text>
          </View>
          <View style={{flexDirection: 'row'}}>
            <Ionicons name="sunny-outline" size={25} color="black" style={{marginRight: 5}} />
            <Text style={{fontSize: 15, color: 'black', fontWeight: 'bold', textAlign: 'center'}}>{condition} Day</Text>
          </View>
        </View>
        <Text style={{...styles.sectioncontainerTitle, marginHorizontal: 40, marginTop: -4}}>{date}</Text>
        <View style={{flexDirection: 'row', marginHorizontal: 40}}>
          <Text style={{fontSize: width * 0.28, color: 'black', fontWeight: '700', marginTop: -12}}>{temperature + '\u00b0'}</Text>
        </View>
        <View style={{flexDirection: 'row', justifyContent: 'space-between', marginHorizontal: 40, marginTop: -4, marginBottom: 4}}>
          <Text style={{fontSize: 16, color: 'black', fontWeight: 'bold'}}>{condition}</Text>
          <Text style={{fontSize: 23, color: 'black', fontWeight: 'bold'}}>{temperature + '\u00b0'}</Text>
        </View>
      </View>

      {/* <Sections /> */}

      <View style={{flex: 1, backgroundColor: '#fff', borderTopWidth:1, borderBlockColor:'lightgrey' }}>
      <View style={styles.sectioncontainer}>
        <View style={{flex: 1, justifyContent: 'center', paddingLeft: width*0.11, borderRightWidth: 1,borderBottomWidth:1, borderColor: 'lightgrey',}}>
          <Text style={styles.sectioncontainerTitle}>Real Feel</Text>
          <View style={{flexDirection: 'row'}}>
            <Text style={styles.sectioncontainerTitleValue}>{RealFeel}</Text>
            <Text style={styles.sectioncontainerTitle}>{'\u00b0'}{RealFeelUnit}</Text>
          </View>
        </View>
        <View style={{flex: 1, justifyContent: 'center', paddingLeft: width*0.11,borderBottomWidth: 1, borderColor: 'lightgrey'}}>
          <Text style={styles.sectioncontainerTitle}>Humidity</Text>
          <View style={{flexDirection: 'row'}}>
            <Text style={styles.sectioncontainerTitleValue}>{Humidity}</Text>
            <View style={{justifyContent:'flex-end'}}>
            <Text style={styles.setcontainerUnit}> %</Text>
            </View>
          </View>
        </View>
      </View>

      <View style={styles.sectioncontainer}>
        <View style={{flex: 1, justifyContent: 'center', paddingLeft: width*0.11, borderRightWidth: 1,borderBottomWidth:1, borderColor: 'lightgrey'}}>
          <Text style={styles.sectioncontainerTitle}>Pressure</Text>
          <View style={{flexDirection: 'row'}}>
            <Text style={styles.sectioncontainerTitleValue}>{Pressure}</Text>
            <View style={{justifyContent:'flex-end'}}>
            <Text style={styles.setcontainerUnit}> {PressureUnit}</Text>
            </View>
          </View>
        </View>
        <View style={{flex: 1, justifyContent: 'center', paddingLeft: width*0.11, borderBottomWidth: 1, borderColor: 'lightgrey'}}>
          <Text style={styles.sectioncontainerTitle}>Wind</Text>
          <View style={{flexDirection: 'row'}}>
            <Text style={styles.sectioncontainerTitleValue}>{Wind}</Text>
            <View style={{justifyContent:'flex-end'}}>
            <Text style={styles.setcontainerUnit}> {WindUnit}</Text>
            </View>
          </View>
        </View>
      </View>

      <View style={styles.sectioncontainer}>
        <View style={{flex: 1, justifyContent: 'center', paddingLeft: width*0.11, borderRightWidth: 1, borderColor: 'lightgrey'}}>
          <Text style={styles.sectioncontainerTitle}>UV Index</Text>
          <View style={{flexDirection: 'row'}}>
            <Text style={styles.sectioncontainerTitleValue}>{UVIndex}</Text>
          </View>
        </View>
        <View style={{flex: 1, justifyContent: 'center', paddingLeft: width*0.11}}>
          <Text style={styles.sectioncontainerTitle}>Visibility</Text>
          <View style={{flexDirection: 'row'}}>
            <Text style={styles.sectioncontainerTitleValue}>{Visibility}</Text>
          <View style={{justifyContent:'flex-end',}}>
            <Text style={styles.setcontainerUnit}> {VisibilityUnit}</Text>
          </View>
          </View>
        </View>
      </View>
    </View>

    </View>
  );
};

const styles = StyleSheet.create({
  sectioncontainer:{
    flexDirection: 'row',
    flex: 1,
    

  },
  
  sectioncontainerTitle:{
    fontSize: 20, 
    color: 'black', 
    fontWeight: '500',
    paddingBottom: 3,
  },
  sectioncontainerTitleValue:{
    fontSize: width*0.085,
    color: 'black', 
    fontWeight: 'bold',
  },
  setcontainerUnit:{
      fontSize: 18, 
      color: 'black', 
      fontWeight: '500'
  },
  
})


// const Sections = ({route}) => {
//   const {RealFeel,RealFeelUnit,Humidity,Wind,WindUnit,UVIndex,Visibility,VisibilityUnit,Pressure,PressureUnit} = route.params;
//   return (
//     <View style={{flex: 1, backgroundColor: '#fff'}}>
//       <View style={styles.sectioncontainer}>
//         <View style={{flex: 1, justifyContent: 'center', paddingLeft: width*0.11, borderWidth: 1, borderColor: 'lightgrey',}}>
//           <Text style={styles.sectioncontainerTitle}>Real Feel</Text>
//           <View style={{flexDirection: 'row'}}>
//             <Text style={styles.sectioncontainerTitleValue}>{RealFeel}</Text>
//             <Text style={{fontSize: 20, color: 'black', fontWeight: '400'}}>{'\u00b0'}{RealFeelUnit}</Text>
//           </View>
//         </View>
//         <View style={{flex: 1, justifyContent: 'center', paddingLeft: width*0.11, borderWidth: 1, borderColor: 'lightgrey',}}>
//           <Text style={styles.sectioncontainerTitle}>Humidity</Text>
//           <View style={{flexDirection: 'row'}}>
//             <Text style={styles.sectioncontainerTitleValue}>{Humidity}</Text>
//             <Text style={{fontSize: 20, color: 'black', fontWeight: '400'}}>%</Text>
//           </View>
//         </View>
//       </View>

//       <View style={styles.sectioncontainer}>
//         <View style={{flex: 1, justifyContent: 'center', paddingLeft: width*0.11, borderWidth: 1, borderColor: 'lightgrey',}}>
//           <Text style={styles.sectioncontainerTitle}>Wind</Text>
//           <View style={{flexDirection: 'row'}}>
//             <Text style={styles.sectioncontainerTitleValue}>{Wind}</Text>
//             <Text style={{fontSize: 20, color: 'black', fontWeight: '400'}}>{'\u00b0'}{WindUnit}</Text>
//           </View>
//         </View>
//         <View style={{flex: 1, justifyContent: 'center', paddingLeft: width*0.11, borderWidth: 1, borderColor: 'lightgrey',}}>
//           <Text style={styles.sectioncontainerTitle}>UV Index</Text>
//           <View style={{flexDirection: 'row'}}>
//             <Text style={styles.sectioncontainerTitleValue}>{UVIndex}</Text>
//           </View>
//         </View>
//       </View>

//       <View style={styles.sectioncontainer}>
//         <View style={{flex: 1, justifyContent: 'center', paddingLeft: width*0.11, borderWidth: 1, borderColor: 'lightgrey',}}>
//           <Text style={styles.sectioncontainerTitle}>Visibility</Text>
//           <View style={{flexDirection: 'row'}}>
//             <Text style={styles.sectioncontainerTitleValue}>{Visibility}</Text>
//             <Text style={{fontSize: 20, color: 'black', fontWeight: '400'}}>{'\u00b0'}{VisibilityUnit}</Text>
//           </View>
//         </View>
//         <View style={{flex: 1, justifyContent: 'center', paddingLeft: width*0.11, borderWidth: 1, borderColor: 'lightgrey',}}>
//           <Text style={styles.sectioncontainerTitle}>Pressure</Text>
//           <View style={{flexDirection: 'row'}}>
//             <Text style={styles.sectioncontainerTitleValue}>{Pressure}</Text>
//             <Text style={{fontSize: 20, color: 'black', fontWeight: '400'}}>{'\u00b0'}{PressureUnit}</Text>
//           </View>
//         </View>
//       </View>
//     </View>
//   );
// };
