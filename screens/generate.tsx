import { StyleSheet, Text, View } from 'react-native';
import React from 'react';

const Generate = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Generate Screen</Text>
      <Text style={styles.content}>This is where you can generate content!</Text>
    </View>
  );
};

export default Generate;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#101010', // Dark background color for modern look
  },
  heading: {
    color: '#F4D03F',
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  content: {
    color: '#FFFFFF',
    fontSize: 18,
  },
});
