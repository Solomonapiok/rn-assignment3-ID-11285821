import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

const CategoryItem = ({ category }) => {
  return (
    <View style={styles.container}>
        <Text style={styles.categoryText}>{category.name}</Text>
        <Text style={styles.categoryText1}>12 tasks</Text>
        <Image source={category.icon } style={styles.icon} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    margin: 10,
    backgroundColor: 'white',
    borderRadius: 14,
    left: -12
  },
  icon: {
    width: 155,
    height: 155,
  },
  categoryText: {
    fontSize: 18,
    marginTop: 5,
    fontWeight: 'bold',
    marginRight: 80,
  },
  categoryText1: {
    fontSize: 14,
    marginRight: 90
  }
});

export default CategoryItem;
