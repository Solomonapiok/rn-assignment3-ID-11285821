import React, { useState } from 'react';
import { View, Text, TextInput, Button, ScrollView, FlatList, StyleSheet, Image } from 'react-native';
import TaskItem from './components/TaskItem';
import CategoryItem from './components/CategoryItem';

const categories = [
  { name: 'Exercise', icon: require('./assets/exercise.png') },
  { name: 'Study', icon: require('./assets/study.png') },
  { name: 'Code', icon: require('./assets/code.png') },
  { name: 'Cook', icon: require('./assets/cook.png') },
  { name: 'Read', icon: require('./assets/read.png') },
  { name: 'Sleep', icon: require('./assets/sleep.png') },
  { name: 'Shop', icon: require('./assets/shop.png') },
  { name: 'Clean', icon: require('./assets/clean.png') }
];

const initialTasks = [
  'Finish React Native project', 'Study for exams', 'Complete coding challenge', 
  'Cook dinner', 'Go for a run', 'Read a book', 'Do laundry', 
  'Grocery shopping', 'Clean the house', 'Finish reading documentation', 
  'Practice yoga', 'Prepare presentation', 'Update resume', 
  'Learn a new recipe', 'Plan weekend trip'
];

const App = () => {
  const [tasks, setTasks] = useState(initialTasks);
  const [newTask, setNewTask] = useState('');

  const addTask = () => {
    if (newTask) {
      setTasks([...tasks, newTask]);
      setNewTask('');
    }
  };

  return (
    <ScrollView style={styles.main}>
    <View style={styles.container}>
      <View>
        <Text style={styles.heading}>Hello, Devs</Text>
        <Text>14 tasks today</Text>
      </View>
      <View style={styles.profile}>
        <View>
          <Image source={require('./assets/person.png')} style={styles.person} />
        </View>
      </View>
    </View>
    <View style={styles.search}>
      <View style={styles.searchbox}>
       <View style={styles.search1}>
          <Image source={require('./assets/Vector.png')} style={styles.searchpic}/>
          <Text style={styles.searchtext}>Search</Text>
        </View>
      </View>
      <View style={styles.filter}>
          <Image source={require('./assets/Vector1.png')} style={styles.filterpic}/>
      </View>
      </View>
      <Text style={styles.subtitle}>Categories</Text>
      <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.category1}>
        {categories.map((category, index) => (
          <CategoryItem key={index} category={category} />
        ))}
      </ScrollView>

      <Text style={styles.subtitle}>Ongoing Tasks</Text>
      <FlatList
        data={tasks}
        renderItem={({ item }) => <TaskItem task={item} />}
        keyExtractor={(item, index) => index.toString()}
      />

      <TextInput
        style={styles.input}
        placeholder="New Task"
        value={newTask}
        onChangeText={setNewTask}
      />
      <Button title="Add Task" onPress={addTask} />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  main: {
    flex: 1,
    padding: 20,
    backgroundColor: '#f7f0e8',
  },
  container: {
    flexDirection: 'row',
    justifyContent:'space-between',
  },
  heading: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: -7,
  },
  profile: {
    width: 50,
    height: 52,
  },
  person: {
    width: 46,
    height: 45,
    backgroundColor:'white',
    borderRadius: 25,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  category1:{
    flexDirection: 'row',
  },
  input: {
    height: 40,
    borderColor: '#ccc',
    borderWidth: 1,
    marginBottom: 10,
    paddingHorizontal: 10
  },
  subtitle: {
    fontSize: 20,
    marginTop: 20,
    marginBottom: 10,
    fontWeight: 'bold'
  },
  search: {
    backgroundColor: '#f7f0e8',
    height: 49,
    width: 353,
    marginTop: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  searchbox: {
    backgroundColor: 'white',
    height: 48,
    width:280,
    borderRadius: 15,
  },
  search1: {
    marginTop: 24,
    width: 82,
    marginTop: 12,
    marginLeft: 10,
    flexDirection: 'row',
  },
  searchpic: {
    marginTop: 2.5,
  },
  filter: {
    backgroundColor: '#F0522F',
    width: 50,
    height: 48,
    borderRadius: 14,
  },
  filterpic:{
    width: 28.33,
    height: 25.5,
    marginTop: 10,
    marginLeft: 8.5,
  },
  searchtext:{
    fontSize: 16,
    marginLeft: 5,
    fontWeight: '700',
  },

});

export default App;