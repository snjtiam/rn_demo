import {View, Text, Button, TextInput} from 'react-native';
import React, {useState} from 'react';
import {useNavigation} from '@react-navigation/native';

const Login = () => {
  const [name, setName] = useState('');
  const navigation = useNavigation();

  const onPressLogin = () => {
    navigation.navigate('Dashboard', {firstName: name});
  };

  return (
    <View style={{flex: 1, justifyContent: 'center'}}>
      <Text>Login</Text>

      <TextInput
        placeholder="Enter name"
        onChangeText={text => {
          setName(text);
        }}
      />
      <Button title={'Login ' + name} onPress={onPressLogin} />
    </View>
  );
};

export default Login;
