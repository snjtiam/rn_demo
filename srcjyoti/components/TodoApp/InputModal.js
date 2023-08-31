import {View, Text, Modal, TextInput, StyleSheet, Button} from 'react-native';
import React from 'react';

const InputModal = ({visible, onChangeText, onSave}) => {
  return (
    <Modal visible={visible} animationType="slide" transparent>
      <View style={styles.rootContainer}>
        <View style={styles.container}>
          <TextInput placeholder="Enter task" onChangeText={onChangeText} />
          <Button title="Save" color={'lightgreen'} onPress={onSave} />
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
