import React from "react";
import {View,Text} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
import {useNavigation} from '@react-navigation/native';
import {ROUTES} from '../navigation/routes';
import ForthUI from "../components/ForthUI";

const Forthscreen=()=>{

    const navigation = useNavigation();

    const backto_todolist=()=>{
    navigation.navigate(ROUTES.TODO_APP);
  }

    return(
        <View>
            <View style={{flexDirection:'row',}}>
            <Icon name='arrow-left' size={30} color='black'onPress={backto_todolist}/>
            </View>    
            <ForthUI/>
        </View>
    )
};


export default Forthscreen;