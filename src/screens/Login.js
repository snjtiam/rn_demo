import {View, Text, Button, TextInput} from 'react-native';
import React, {useEffect, useState} from 'react';
import {useNavigation} from '@react-navigation/native';
import {ROUTES} from '../navigation/routes';
import Storage from '../utils/Storage';

const Login = () => {
  const [name, setName] = useState(null);
  const [hasRecevedFromStorage, setHasReceivedFromStorage] = useState(false);
  const navigation = useNavigation();

  const onPressLogin = async () => {
    try {
      await Storage.store({key: '@username', value: name});
      navigation.navigate(ROUTES.DASHBOARD, {firstName: name});
    } catch (error) {}
  };

  useEffect(() => {
    (async () => {
      try {
        const data = await Storage.fetch({key: '@username'});

        if (data !== null) {
          setHasReceivedFromStorage(true);
          setName(data);
        }
      } catch (error) {}
    })();
  }, []);

  return (
    <View style={{flex: 1, justifyContent: 'center'}}>
      {name !== null && hasRecevedFromStorage && (
        <Text
          style={{
            fontSize: 20,
            fontWeight: 'bold',
          }}>{`Welcome back, ${name}`}</Text>
      )}

      <TextInput
        placeholder="Enter name"
        onChangeText={text => {
          if (hasRecevedFromStorage === false) {
            setName(text);
          }
        }}
      />
      <Button title={'Login '} onPress={onPressLogin} />
    </View>
  );
};

export default Login;
