import React, { useState } from 'react';
import { StyleSheet, View, TextInput, Text, TouchableOpacity, Alert } from 'react-native';

const Note = () => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');

  const handleSave = () => {
    if (title.trim() === '' || content.trim() === '') {
      Alert.alert('Error', 'Please fill in both fields');
      return;
    }

    // Here you would typically save the note to a database or state management
    Alert.alert('Note Saved', `Title: ${title}\nContent: ${content}`);

    // Reset the form after saving
    setTitle('');
    setContent('');
  };

  return (
    <View style={styles.container}>
      <View style={styles.titleContainer}>
        <Text style={styles.titleText}>Add Note</Text>
      </View>
      <TextInput
        style={styles.input}
        placeholder="Title"
        placeholderTextColor="#B3B3B3"
        value={title}
        onChangeText={setTitle}
      />
      <TextInput
        style={[styles.input, styles.textArea]}
        placeholder="Content"
        placeholderTextColor="#B3B3B3"
        value={content}
        onChangeText={setContent}
        multiline
        numberOfLines={4}
      />
      <TouchableOpacity style={styles.button} onPress={handleSave}>
        <Text style={styles.buttonText}>Save Note</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    justifyContent: 'center',
    backgroundColor: '#121212', // Dark background for better contrast
  },
  titleContainer: {
    marginBottom: 20,
    alignItems: 'center',
  },
  titleText: {
    color: '#F4D03F',
    fontSize: 32, // Increased font size for better visibility
    fontWeight: 'bold',
  },
  input: {
    height: 50,
    borderColor: '#F4D03F',
    borderWidth: 2, // Thicker border for more visibility
    borderRadius: 10,
    marginBottom: 15,
    paddingHorizontal: 15,
    backgroundColor: '#2A2A2A',
    color: '#FFFFFF',
    fontSize: 18,
    elevation: 2, // Slight shadow for depth
  },
  textArea: {
    height: 150,
    textAlignVertical: 'top', // Aligns text to the top of the TextInput
  },
  button: {
    backgroundColor: '#F4D03F', // Match button with title color
    paddingVertical: 15,
    borderRadius: 10,
    alignItems: 'center', // Center text in button
    elevation: 3, // Shadow for depth
  },
  buttonText: {
    color: '#121212', // Dark text for contrast
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default Note;
