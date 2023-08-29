import {View, Text, FlatList, StyleSheet, TouchableOpacity} from 'react-native';
import React, {useState} from 'react';
import EntypoIcon from 'react-native-vector-icons/Entypo';
import Ionicons from 'react-native-vector-icons/Ionicons';
import InputModal from './InputModal';

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
  const [tasks, setTasks] = useState([]);
  const [showInput, setShowInput] = useState(false);

  const onPressTaskItem = index => {
    const tempTask = tasks;
    tempTask[index] = {...tempTask[index], isDone: !tempTask[index].isDone};
    setTasks([...tempTask]);
  };

  const addTask = value => {
    const task = {
      task: value,
      isDone: false,
    };
    setTasks([...tasks, task]);
  };

  const onSave = value => {
    setShowInput(prev => !prev);
    addTask(value);
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

  return (
    <View style={styles.container}>
      <View style={styles.containerListLabel}>
        <Text style={styles.txtLabel}>{'TO DO'}</Text>
      </View>
      <InputModal visible={showInput} onSave={onSave} />
      <TouchableOpacity style={{alignSelf: 'flex-end'}} onPress={onPressAdd}>
        <Ionicons name="add-circle-outline" size={26} />
      </TouchableOpacity>
      <FlatList data={tasks} renderItem={renderItem} />
    </View>
  );
};

export default TodoList;

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    elevation: 8,
    marginHorizontal: 16,
    marginVertical: 16,
    padding: 8,
    borderRadius: 8,
  },
  containerTodoItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 6,
  },
  containerListLabel: {
    position: 'absolute',
    backgroundColor: '#EC53B0',
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 4,
    left: 16,
    top: -12,
  },
  txtTodoItem: {
    marginLeft: 8,
  },
  txtLabel: {
    fontSize: 16,
    color: 'white',
    fontWeight: 'bold',
  },
});
