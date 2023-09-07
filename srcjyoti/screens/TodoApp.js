import {View, Text, StyleSheet,Button} from 'react-native';
import React from 'react';
import TodoList from '../components/TodoApp/TodoList';
import {useNavigation} from '@react-navigation/native';
import {ROUTES} from '../navigation/routes';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'


const TodoApp = () => {
  const navigation = useNavigation();

  const forthScreen=()=>{
    navigation.navigate(ROUTES.FORTH_SCREEN);
  }


  return (
    <View style={styles.container}>
      <View style={{flexDirection:'row',justifyContent:'space-between'}}>
      <Text style={styles.txtMyDay}>{'My Day'}</Text>
      <Icon name='arrow-right'  size={30} color='black'onPress={forthScreen}/>
      </View>
      <TodoList />
      {/* <View style={styles.buttom}><Button title='Next-Screen' onPress={forthScreen} color={'black'}/></View> */}

    </View>
  );
};

export default TodoApp;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  txtMyDay: {
    fontSize: 32,
    fontWeight: 'bold',
  },
  buttom:{
    borderWidth:1,
    marginTop:30, 
    padding:4,
    flexDirection:'row',
    alignSelf:'center',
  },
});
