import {View, Text, FlatList, StyleSheet, TouchableOpacity} from 'react-native';
import React, {useEffect, useState} from 'react';
import EntypoIcon from 'react-native-vector-icons/Entypo';
import InputModal from './InputModal';

const DATA = [
  {task: 'Clean the room', isDone: false},
  {task: 'Send email to John', isDone: false},
  {task: 'Order new bike', isDone: false},
  {task: 'Create SED account', isDone: false},
];

const TodoItem = ({data, onPress}) => {
  return (
    <TouchableOpacity onPress={onPress} style={styles.containerTodoItem}>
      <EntypoIcon name={data?.isDone ? 'check' : 'circle'} size={16} />
      <Text
        style={{
          ...styles.txtTodoItem,
          textDecorationLine: data?.isDone ? 'line-through' : 'none',
        }}>
        {data?.task}
      </Text>
    </TouchableOpacity>
  );
};

//MAIN COMPONENT
const TodoList = () => {
  const [tasks, setTasks] = useState(DATA);
  const [showInput, setShowInput] = useState(false);

  const onPressTaskItem = index => {
    const tempTask = tasks;
    tempTask[index] = {...tempTask[index], isDone: !tempTask[index].isDone};
    setTasks([...tempTask]);
  };

  const onChangeText = () => {};
  const onSave = () => {
    setShowInput(prev => !prev);
  };

  const onPressAdd = () => {
    setShowInput(prev => !prev);
  };

  const renderItem = ({item, index}) => {
    return (
      <TodoItem
        data={item}
        onPress={() => {
          onPressTaskItem(index);
        }}
      />
    );
  };

  // console.log('TASKS', tasks);
  return (
    <View>
      <InputModal
        visible={showInput}
        onChangeText={onChangeText}
        onSave={onSave}
      />
      <TouchableOpacity style={{alignSelf: 'flex-end'}} onPress={onPressAdd}>
        <Text>Add</Text>
      </TouchableOpacity>
      <FlatList data={tasks} renderItem={renderItem} />
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
