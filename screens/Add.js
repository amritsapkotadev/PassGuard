import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, ScrollView } from 'react-native';

const Add = () => {
  // State to manage passwords for different accounts
  const [emailPassword, setEmailPassword] = useState('');
  const [socialPassword, setSocialPassword] = useState('');
  const [bankPassword, setBankPassword] = useState('');

  const handleSave = () => {
    // You can add your logic to save or handle the passwords here
    console.log('Email Password:', emailPassword);
    console.log('Social Media Password:', socialPassword);
    console.log('Bank Password:', bankPassword);
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.headerText}>Password Manager</Text>

      {/* Email Account Password Input */}
      <View style={styles.inputContainer}>
        <Text style={styles.label}>Email Account:</Text>
        <TextInput
          style={styles.input}
          placeholder="Enter email password"
          secureTextEntry={true}
          value={emailPassword}
          onChangeText={setEmailPassword}
        />
      </View>

      {/* Social Media Account Password Input */}
      <View style={styles.inputContainer}>
        <Text style={styles.label}>Social Media Account:</Text>
        <TextInput
          style={styles.input}
          placeholder="Enter social media password"
          secureTextEntry={true}
          value={socialPassword}
          onChangeText={setSocialPassword}
        />
      </View>

      {/* Bank Account Password Input */}
      <View style={styles.inputContainer}>
        <Text style={styles.label}>Bank Account:</Text>
        <TextInput
          style={styles.input}
          placeholder="Enter bank password"
          secureTextEntry={true}
          value={bankPassword}
          onChangeText={setBankPassword}
        />
      </View>

      {/* Save Button */}
      <TouchableOpacity style={styles.button} onPress={handleSave}>
        <Text style={styles.buttonText}>Save Passwords</Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    padding: 20,
    backgroundColor: '#F4F6F7', // Light background color
  },
  headerText: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333',
    textAlign: 'center',
    marginBottom: 20,
  },
  inputContainer: {
    marginBottom: 20,
  },
  label: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 5,
  },
  input: {
    borderWidth: 1,
    borderColor: '#DDD',
    borderRadius: 8,
    paddingHorizontal: 10,
    paddingVertical: 8,
    fontSize: 16,
    backgroundColor: '#FFF',
  },
  button: {
    backgroundColor: '#3498DB',
    paddingVertical: 12,
    borderRadius: 8,
    alignItems: 'center',
    marginTop: 20,
  },
  buttonText: {
    color: '#FFF',
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default Add;
