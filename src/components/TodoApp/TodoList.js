import {View, Text, FlatList, StyleSheet, TouchableOpacity} from 'react-native';
import React, {useEffect, useState} from 'react';
import EntypoIcon from 'react-native-vector-icons/Entypo';

const DATA = [
  'Clean the room',
  'Send email to John',
  'Order new bike',
  'Create SED account',
];

const TodoItem = ({name}) => {
  const [isDone, setIsDone] = useState(false);

  const onPress = () => {
    setIsDone(prev => !prev);
  };

  return (
    <TouchableOpacity onPress={onPress} style={styles.containerTodoItem}>
      <EntypoIcon name={isDone ? 'check' : 'circle'} size={16} />
      <Text
        style={{
          ...styles.txtTodoItem,
          textDecorationLine: isDone ? 'line-through' : 'none',
        }}>
        {name}
      </Text>
    </TouchableOpacity>
  );
};

const TodoList = () => {
  const renderItem = ({item, index}) => {
    return <TodoItem name={item} />;
  };

  return (
    <View>
      <FlatList data={DATA} renderItem={renderItem} />
    </View>
  );
};

export default TodoList;

const styles = StyleSheet.create({
  containerTodoItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 4,
  },
  txtTodoItem: {
    marginLeft: 8,
  },
});
