import {View, Text, Modal, TextInput, StyleSheet, Button} from 'react-native';
import React, {useState} from 'react';

const InputModal = ({visible, onSave}) => {
  const [text, setText] = useState('');

  const _onSave = () => {
    onSave(text);
  };

  return (
    <Modal visible={visible} animationType="slide" transparent>
      <View style={styles.rootContainer}>
        <View style={styles.container}>
          <TextInput placeholder="Enter task" onChangeText={setText} />
          <Button title="Save" color={'lightgreen'} onPress={_onSave} />
        </View>
      </View>
    </Modal>
  );
};

export default InputModal;

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    justifyContent: 'flex-end',
    backgroundColor: 'rgba(0,0,0,0.3)',
  },
  container: {
    height: '20%',
    backgroundColor: 'white',
    justifyContent: 'space-around',
  },
});
