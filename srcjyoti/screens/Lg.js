import React, {useState} from 'react';
import {View, Text, TextInput,Button} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {ROUTES} from '../navigation/routes';


const Login = () => {

    const navigation = useNavigation();
    const [name, setName] = useState('jyoti');

  const onPressLogin=()=>{
    navigation.navigate(ROUTES.DASHBOARD, {firstName: name});
  }

  return (
    <View>
      <Text style={{fontSize:20}}>Home Screen</Text>
      <TextInput
        placeholder="Enter name"
        onChangeText={ntext => {
          setName(ntext);
        }}
      />
      <Button title={'Login  '+ name} onPress={onPressLogin} />
    </View>
  );
};
export default Login;
