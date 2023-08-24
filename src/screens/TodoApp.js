import {View, Text, StyleSheet} from 'react-native';
import React from 'react';
import TodoList from '../components/TodoApp/TodoList';

const TodoApp = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.txtMyDay}>{'My Day'}</Text>
      <TodoList />
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
});
