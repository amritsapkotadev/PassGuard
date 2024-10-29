import { StyleSheet, Text, View, Image, TextInput, TouchableOpacity } from 'react-native';
import React from 'react';

const Home = () => {
  return (
    <View style={styles.container}>
      <View style={styles.headerContainer}>
        <View style={styles.greetingContainer}>
          <Text style={styles.greetingText}>Hello, Harry</Text>
          <Text style={styles.welcomeText}>Welcome to your home</Text>
        </View>
        <Image source={require('../images/Notification.png')} style={styles.notificationIcon} />
      </View>
      <View style={styles.passwordSearchContainer}>
        <View style={styles.searchContainer}>
          <Image source={require('../images/searchicon.png')} style={styles.searchIcon} />
          <TextInput
            style={styles.passwordSearchInput}
            placeholder="Search password....."
            placeholderTextColor="#B3B3B3"
          />
        </View>
      </View>
      <View style={styles.messageContainer}>
        <Image source={require('../images/handshake.png')} style={styles.messageImage} />
        <Text style={styles.messageText}>
          Attack happens daily. Just be prepared to prevent the attack.
        </Text>
      </View>
      <View style={styles.rowContainer}>
        {/* Saved Password Container */}
        <View style={styles.leftContainer}>
          <Text style={styles.totalPasswordCountText}>Saved Passwords: 28</Text>
        </View>
        {/* Cards and Documents Container */}
        <View style={styles.rightContainer}>
          <TouchableOpacity style={styles.card} activeOpacity={0.7}>
            <Text style={styles.cardText}>Cards</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.document} activeOpacity={0.7}>
            <Text style={styles.documentText}>Documents</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    backgroundColor: '#101010', // Modern dark background
    paddingHorizontal: 20,
  },
  headerContainer: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    marginBottom: 30,
  },
  greetingContainer: {
    marginTop: 20,
  },
  greetingText: {
    color: '#FFFFFF',
    fontSize: 30,
    fontWeight: '700',
    fontFamily: 'Poppins',
  },
  welcomeText: {
    color: '#B3B3B3',
    fontSize: 18,
    fontFamily: 'Poppins-Light',
  },
  notificationIcon: {
    width: 50,
    height: 50,
    tintColor: '#F4D03F',
  },
  passwordSearchContainer: {
    width: '100%',
    marginBottom: 20,
  },
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#1E1E1E',
    borderRadius: 12,
    borderWidth: 1.5,
    borderColor: '#F4D03F',
    elevation: 5,
    paddingHorizontal: 10,
  },
  searchIcon: {
    width: 28,
    height: 28,
    tintColor: '#B3B3B3',
  },
  passwordSearchInput: {
    color: '#FFFFFF',
    fontSize: 16,
    fontFamily: 'Poppins-Regular',
    paddingVertical: 12,
    flex: 1,
  },
  messageContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#0057D9', // Bright blue for emphasis
    alignSelf: 'center',
    padding: 20,
    marginTop: 20,
    borderRadius: 15,
    elevation: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 8,
    width: '100%',
  },
  messageText: {
    color: '#FFFFFF',
    fontSize: 18,
    fontWeight: 'bold',
    fontFamily: 'Poppins-Regular',
    marginLeft: 15,
    lineHeight: 24,
    flex: 1,
  },
  messageImage: {
    width: 80,
    height: 80,
    transform: [{ rotate: '90deg' }],
  },
  rowContainer: {
    flexDirection: 'row',
    width: '100%',
    marginTop: 30,
  },
  leftContainer: {
    width: '50%',
    backgroundColor: '#1ABC9C', // Soft green for "Saved Passwords"
    padding: 30,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1.5,
    borderColor: '#1ABC9C',
    borderRadius: 15,
    marginRight: 10, // Space between left and right containers
    height: 250,
  },
  totalPasswordCountText: {
    color: '#FFFFFF', // White for contrast
    fontSize: 22,
    fontFamily: 'Poppins-Bold',
  },
  rightContainer: {
    width: '50%',
    justifyContent: 'space-between', // Space between Cards and Documents
  },
  card: {
    backgroundColor: '#3498DB', // Bright blue for cards
    borderRadius: 15,
    padding: 25,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1.5,
    borderColor: '#3498DB',
    height: 110, // Increased height for balance
  },
  document: {
    backgroundColor: '#E74C3C', // Bold red for documents
    borderRadius: 15,
    padding: 25,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1.5,
    borderColor: '#E74C3C',
    height: 110, // Increased height for balance
  },
  cardText: {
    color: '#FFFFFF', // Bright text for contrast
    fontSize: 20, // Larger font size for prominence
    fontFamily: 'Poppins-Bold',
  },
  documentText: {
    color: '#FFFFFF', // Bright text for contrast
    fontSize: 20, // Larger font size for prominence
    fontFamily: 'Poppins-Bold',
  },
});
