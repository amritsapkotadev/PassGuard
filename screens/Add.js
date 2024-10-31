import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native'; // Import useNavigation

const BasicLayout = () => {
  const navigation = useNavigation(); // Get the navigation object
  const [isPressedCard, setIsPressedCard] = useState(false);
  const [isPressedPassword, setIsPressedPassword] = useState(false);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>What do you want to save?</Text>

      <TouchableOpacity
        style={isPressedCard ? styles.buttonPressed : styles.button}
        activeOpacity={0.7}
        onPress={() => navigation.navigate('CardDetails')} // Navigate to CardDetails screen
        onPressIn={() => setIsPressedCard(true)}
        onPressOut={() => setIsPressedCard(false)}
      >
        <Text style={styles.buttonText}>Personal  Details</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={isPressedPassword ? styles.buttonPressed : styles.button}
        activeOpacity={0.7}
        onPress={() => navigation.navigate('PasswordDetails')} // Navigate to PasswordDetails screen
        onPressIn={() => setIsPressedPassword(true)}
        onPressOut={() => setIsPressedPassword(false)}
      >
        <Text style={styles.buttonText}>Password Details</Text>
      </TouchableOpacity>
    </View>
  );
};

export default BasicLayout;

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
  button: {
    backgroundColor: '#00008B',
    width: '80%',
    paddingVertical: 15,
    borderRadius: 12,
    marginVertical: 20,
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 8,
    elevation: 5,
  },
  buttonPressed: {
    backgroundColor: 'red',
    width: '80%',
    paddingVertical: 15,
    borderRadius: 12,
    marginVertical: 20,
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
    elevation: 3,
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
    fontFamily: 'Poppins-Bold',
  },
});
