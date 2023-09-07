import React from "react";
import {View,Text} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { ROUTES } from "../../navigation/routes";
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'



const Details = () =>{
    const navigation = useNavigation();

    const backto_forthScreen=()=>{
      navigation.navigate(ROUTES.FORTH_SCREEN);
    }

    return(
        <View>
            <View style={{flexDirection:'row',}}>
                 <Icon name='arrow-left'  size={30} color='black'onPress={backto_forthScreen}/>
                 <Text style={{fontSize:30, fontWeight:'bold'}}>Details</Text>
            </View>
        </View>
    )
}


export default Details;