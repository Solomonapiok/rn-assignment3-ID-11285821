import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const TaskItem = ({ task }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.taskText}>{task}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
    backgroundColor: 'white',
    marginBottom: 15,
    borderRadius:14,
  },
  taskText: {
    width: 354,
    height: 128,
    padding: 50,
    fontWeight: '700',
    fontSize: 16
  }
});

export default TaskItem;
