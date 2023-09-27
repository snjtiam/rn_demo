import {View, Text, StyleSheet, Button} from 'react-native';
import React from 'react';
import Header from '../../components/UI_components/Header';
import Section from '../../components/UI_components/section';
import Sectiona from '../../components/UI_components/section2';
import {useNavigation} from '@react-navigation/native';
import {ROUTES} from '../../navigation/routes';

const Dashboard1 = () => {
  const navigation = useNavigation();

  const nextScreen = () => {
    navigation.navigate(ROUTES.TODO_APP);
  };

  return (
    <View>
      <Header />
      <Section />
      <Sectiona />

      <View style={style.buttom}>
        <Button title="Next-Screen" onPress={nextScreen} color={'black'} />
      </View>
    </View>
  );
};

export default Dashboard1;

const style = StyleSheet.create({
  buttom: {
    borderWidth: 1,
    marginTop: 30,
    padding: 4,
    flexDirection: 'row',
    alignSelf: 'center',
  },
});
