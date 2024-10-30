import React from 'react';
import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  ScrollView,
  Image,
} from 'react-native';
const Profile = () => {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <Image
          source={require('../images/profilepic.png')}
          style={styles.profileImage}
        />
        <Text style={styles.profilename}> John Doe</Text>
        <Text style={styles.profileemail}> Johndoe@gmail.com </Text>
      </View>

      <TouchableOpacity
        style={styles.option}
        onPress={() => {
          /* Handle Edit Profile */
        }}>
        <Text style={styles.optionText}>Edit Profile</Text>{' '}
        <Image source={require('../images/edit.png')} style={styles.icons} />
        <Text style={styles.subOptionText}>
          Update your personal information
        </Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.option}
        onPress={() => {
          /* Handle Change Language */
        }}>
        <Text style={styles.optionText}>Language</Text>{' '}
        <Image
          source={require('../images/language.png')}
          style={styles.icons}
        />
        <Text style={styles.subOptionText}>Select your preferred language</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.option}
        onPress={() => {
          /* Handle Change Password */
        }}>
        <Text style={styles.optionText}>Change Password</Text>{' '}
        <Image source={require('../images/padlock.png')} style={styles.icons} />
        <Text style={styles.subOptionText}>Update your account password</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.option}
        onPress={() => {
          /* Handle Help */
        }}>
        <Text style={styles.optionText}>Help</Text>{' '}
        <Image source={require('../images/help.png')} style={styles.icons} />
        <Text style={styles.subOptionText}>
          Get assistance with your account
        </Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.option}
        onPress={() => {
          /* Handle Privacy Policy */
        }}>
        <Text style={styles.optionText}>Privacy Policy</Text>{' '}
        <Image
          source={require('../images/privacypolicy.png')}
          style={styles.icons}
        />
        <Text style={styles.subOptionText}>Review our privacy practices</Text>
      </TouchableOpacity>

      <View style={styles.footer}>
        <Text style={styles.footerText}>Version 1.0.0</Text>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#121212', // Slightly lighter dark background for better contrast
    padding: 20,
  },
  header: {
    marginBottom: 20,
    alignItems: 'center',
  },
  profileImage: {
    width: 100,
    height: 100,
    borderRadius: 50,
    marginBottom: 10,
    borderWidth: 2,
    borderColor: '#F4D03F', // Border around profile image for emphasis
  },
  profilename: {
    color: '#FFFFFF',
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  profileemail: {
    color: '#B3B3B3',
    fontSize: 14,
  },
  option: {
    padding: 15,
    marginVertical: 5,
    height: 80, // Increased height to accommodate subheading
    width: '100%',
    backgroundColor: '#1E1E1E',
    borderRadius: 12,
    justifyContent: 'flex-start', // Aligns content to the top
    elevation: 3,
  },
  optionText: {
    color: '#FFFFFF',
    fontSize: 18,
    fontWeight: '500', // Slightly bolder text for better visibility
  },
  subOptionText: {
    color: '#B3B3B3',
    fontSize: 14,
    marginTop: 5, // Space between main option and subheading
  },
  footer: {
    marginTop: 20,
    alignItems: 'center',
  },
  footerText: {
    color: '#B3B3B3',
    fontSize: 13,
  },
  icons: {
    width: 24, // Slightly larger icons for better visibility
    height: 24,
    tintColor: '#FFFFFF', // Consistent icon color
    position: 'absolute',
    right: 15, // Align icons to the right
    top: 20, // Center icons vertically within the option
  },
});

export default Profile;
