import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Alert } from 'react-native';

const CardDetails = () => {
  const [cardType, setCardType] = useState('');
  const [cardNumber, setCardNumber] = useState('');
  const [expiryDate, setExpiryDate] = useState('');

  const handleSave = () => {
    // Basic validation
    if (!cardType || !cardNumber || !expiryDate) {
      Alert.alert('Error', 'Please fill in all fields');
      return;
    }

    // You can add further processing or API calls here
    Alert.alert('Success', 'Card details saved successfully');
    // Clear fields after saving
    setCardType('');
    setCardNumber('');
    setExpiryDate('');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Enter Card Details</Text>

      <TextInput
        style={styles.input}
        placeholder="Card Type (MasterCard,License,Passport)"
        placeholderTextColor="#888"
        value={cardType}
        onChangeText={setCardType}
      />

      <TextInput
        style={styles.input}
        placeholder="Card Number"
        placeholderTextColor="#888"
        keyboardType="numeric"
        value={cardNumber}
        onChangeText={setCardNumber}
      />

      <TextInput
        style={styles.input}
        placeholder="Expiry Date (MM/YY)"
        placeholderTextColor="#888"
        keyboardType="numeric"
        value={expiryDate}
        onChangeText={setExpiryDate}
      />

      <TouchableOpacity style={styles.button} activeOpacity={0.7} onPress={handleSave}>
        <Text style={styles.buttonText}>Save</Text>
      </TouchableOpacity>
    </View>
  );
};

export default CardDetails;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#000000',
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#fff',
    marginBottom: 30,
    fontFamily: 'Poppins-Bold',
  },
  input: {
    width: '100%',
    padding: 15,
    borderRadius: 10,
    marginBottom: 20,
    backgroundColor: '#1e1e1e',
    color: '#fff',
    fontSize: 16,
  },
  button: {
    backgroundColor: '#3498DB',
    width: '100%',
    paddingVertical: 15,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 8,
    elevation: 5,
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
    fontFamily: 'Poppins-Bold',
  },
});
