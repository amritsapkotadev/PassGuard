import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, Pressable, Alert } from 'react-native';
import Clipboard from '@react-native-clipboard/clipboard'; // Import Clipboard for copying functionality

const Generate = () => {
  const [passwordLength, setPasswordLength] = useState('');
  const [includeUppercase, setIncludeUppercase] = useState(false);
  const [includeLowercase, setIncludeLowercase] = useState(false);
  const [includeNumbers, setIncludeNumbers] = useState(false);
  const [includeSymbols, setIncludeSymbols] = useState(false);
  const [generatedPassword, setGeneratedPassword] = useState(''); // Initialize as empty string

  // Function to toggle checkbox
  const toggleCheckbox = (setter, value) => {
    setter(!value);
  };

  // Characters for password generation
  const uppercaseLetters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  const lowercaseLetters = 'abcdefghijklmnopqrstuvwxyz';
  const numbers = '0123456789';
  const symbols = '!@#$%^&*()_+~`|}{[]:;?><,./-=';

  // Password generation logic
  const generatePassword = () => {
    let characterPool = '';

    if (includeUppercase) characterPool += uppercaseLetters;
    if (includeLowercase) characterPool += lowercaseLetters;
    if (includeNumbers) characterPool += numbers;
    if (includeSymbols) characterPool += symbols;

    // Clear generatedPassword if no options are selected or length is not specified
    if (characterPool.length === 0 || passwordLength === '') {
      setGeneratedPassword(''); // Set password to empty string
      Alert.alert('Error', 'Please select options and specify a length.');
      return;
    }

    let password = '';
    for (let i = 0; i < parseInt(passwordLength); i++) {
      const randomIndex = Math.floor(Math.random() * characterPool.length);
      password += characterPool[randomIndex];
    }

    setGeneratedPassword(password);
  };

  // Function to copy the password to clipboard and show alert
  const copyToClipboard = () => {
    if (generatedPassword) {
      Clipboard.setString(generatedPassword);
      Alert.alert('Copied!', 'Password copied to clipboard.');
    } else {
      Alert.alert('Error', 'No password generated to copy.');
    }
  };

  // Custom button component
  const CustomButton = ({ title, onPress }) => {
    return (
      <Pressable style={styles.button} onPress={onPress}>
        <Text style={styles.buttonText}>{title}</Text>
      </Pressable>
    );
  };

  return (
    <View style={styles.container}>
      <View style={styles.upperContent}>
        <Text style={styles.heading}>Generate Password</Text>
      </View>

      <View style={styles.inputContainer}>
        <TextInput
          style={styles.textInput}
          placeholder="Generated password"
          placeholderTextColor="#B3B3B3"
          value={generatedPassword} // Show generated password here
          editable={false} // Make it non-editable
        />
        <CustomButton title="Copy" onPress={copyToClipboard} />
      </View>

      <View style={styles.optionsContainer}>
        <View style={styles.passwordRow}>
          <Text style={styles.label}>Password Length</Text>
          <TextInput
            style={styles.numberInput}
            value={passwordLength}
            onChangeText={setPasswordLength}
            keyboardType="numeric"
            placeholder="Length"
            placeholderTextColor="#B3B3B3"
          />
        </View>

        <View style={styles.checkboxContainer}>
          <View style={styles.optionRow}>
            <Text style={styles.checkboxLabel}>Include Uppercase Letters</Text>
            <Pressable
              style={[styles.checkbox, includeUppercase && styles.checked]}
              onPress={() => toggleCheckbox(setIncludeUppercase, includeUppercase)}
            >
              {includeUppercase && <Text style={styles.checkmark}>✓</Text>}
            </Pressable>
          </View>

          <View style={styles.optionRow}>
            <Text style={styles.checkboxLabel}>Include Lowercase Letters</Text>
            <Pressable
              style={[styles.checkbox, includeLowercase && styles.checked]}
              onPress={() => toggleCheckbox(setIncludeLowercase, includeLowercase)}
            >
              {includeLowercase && <Text style={styles.checkmark}>✓</Text>}
            </Pressable>
          </View>

          <View style={styles.optionRow}>
            <Text style={styles.checkboxLabel}>Include Numbers</Text>
            <Pressable
              style={[styles.checkbox, includeNumbers && styles.checked]}
              onPress={() => toggleCheckbox(setIncludeNumbers, includeNumbers)}
            >
              {includeNumbers && <Text style={styles.checkmark}>✓</Text>}
            </Pressable>
          </View>

          <View style={styles.optionRow}>
            <Text style={styles.checkboxLabel}>Include Symbols</Text>
            <Pressable
              style={[styles.checkbox, includeSymbols && styles.checked]}
              onPress={() => toggleCheckbox(setIncludeSymbols, includeSymbols)}
            >
              {includeSymbols && <Text style={styles.checkmark}>✓</Text>}
            </Pressable>
          </View>
        </View>
      </View>

      <CustomButton title="Generate Password" onPress={generatePassword} />
    </View>
  );
};

export default Generate;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#101010',
    paddingHorizontal: 20, // Add padding to prevent overflow
  },
  upperContent: {
    marginBottom: 20,
  },
  heading: {
    color: '#F4D03F',
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  inputContainer: {
    width: '100%',
    backgroundColor: '#1E1E1E',
    borderRadius: 10,
    padding: 10,
    flexDirection: 'row', // Align text input and button in the same row
    alignItems: 'center', // Vertically center the text input and button
  },
  textInput: {
    flex: 1, // Allow text input to take remaining space
    color: '#FFFFFF',
    fontSize: 18,
    borderBottomWidth: 1,
    borderBottomColor: '#F4D03F',
    paddingVertical: 10,
  },
  optionsContainer: {
    marginTop: 20,
    width: '100%',
    backgroundColor: '#1E1E1E',
    borderRadius: 10,
    padding: 15,
  },
  passwordRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  label: {
    color: '#FFFFFF',
    fontSize: 16,
    width: '60%', // Adjust width for better alignment
  },
  numberInput: {
    color: '#FFFFFF',
    fontSize: 16,
    width: '30%', // Adjust the width for the input to fit properly
    borderBottomWidth: 1,
    borderBottomColor: '#F4D03F',
    paddingVertical: 5,
    textAlign: 'center',
  },
  checkboxContainer: {
    marginTop: 10,
  },
  optionRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  checkbox: {
    width: 24,
    height: 24,
    borderWidth: 2,
    borderColor: '#F4D03F',
    justifyContent: 'center',
    alignItems: 'center',
  },
  checked: {
    backgroundColor: 'blue',
  },
  checkmark: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 16,
  },
  checkboxLabel: {
    color: '#FFFFFF',
    fontSize: 16,
    width: '80%', // Ensure label fits in row
  },
  button: {
    backgroundColor: '#F4D03F',
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 8,
    alignItems: 'center',
    marginVertical: 10,
    elevation: 3, // For Android shadow
    shadowColor: '#000', // For iOS shadow
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
  },
  buttonText: {
    color: '#101010',
    fontSize: 18,
    fontWeight: 'bold',
  },
});
