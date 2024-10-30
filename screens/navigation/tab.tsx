import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from '../home'; // Ensure this is the correct path
import Generate from '../generate'; // Correct naming conventions for components
import Notes from '../Notes'; 
import Profile from '../profile'; 
import { StyleSheet, View, Image, TouchableOpacity } from 'react-native'; // Necessary imports from 'react-native'

const Tab = createBottomTabNavigator();

// Component for standard tab icons
const TabIcon = ({ source, focused }: { source: any; focused: boolean }) => (
  <View style={styles.iconContainer}>
    <Image
      source={source}
      style={{
        width: 24,
        height: 24,
        tintColor: focused ? '#F4D03F' : '#B3B3B3', // Change color based on focus state
      }}
    />
  </View>
);

// Floating button in the center of the tab bar
const CustomTabBarButton = ({ children, onPress }: { children: any; onPress: () => void }) => (
  <TouchableOpacity
    style={{
      top: -40, // Position the button above the tab bar
      justifyContent: 'center',
      alignItems: 'center',
      ...styles.shadow, // Add shadow for floating effect
    }}
    onPress={onPress}
  >
    <View style={{
      width: 70,
      height: 70,
      borderRadius: 35, // Rounded button
      backgroundColor: '#F4D03F', // Yellow background color for the button
      justifyContent: 'center',
      alignItems: 'center',
    }}>
      {children} 
    </View>
  </TouchableOpacity>
);

// Helper function to generate tab icons
const tabBarIcon = (source: any) => ({ focused }: { focused: boolean }) => (
  <TabIcon source={source} focused={focused} />
);

const Tabs = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarStyle: {
          backgroundColor: 'black', // Background color for the tab bar
          borderTopColor: 'black', // Remove default border color
          borderTopWidth: 1,
          height: 70, // Adjust height to fit the floating button
          ...styles.shadow, // Apply shadow for a floating effect
        },
        tabBarLabelStyle: {
          fontSize: 12,
          fontWeight: 'bold', // Bold text for tab labels
        },
        tabBarActiveTintColor: '#F4D03F', // Active tab icon color
        tabBarInactiveTintColor: '#B3B3B3', // Inactive tab icon color
      }}
    >
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          headerShown: false, // Hide the header for the Home screen
          tabBarIcon: tabBarIcon(require('../../images/home.png')), // Home icon
        }}
      />
      <Tab.Screen
        name="Generate"
        component={Generate}
        options={{
          headerShown: false, // Hide the header for the Generate screen
          tabBarIcon: tabBarIcon(require('../../images/brush.png')), // Generate icon
        }}
      />
      <Tab.Screen
        name="Add" // Center "+" button
        component={Home} // Link to any component (replace Home if needed)
        options={{
          tabBarIcon: () => (
            <Image
              source={require('../../images/plus.png')} // "+" icon image
              style={{ width: 30, height: 30, tintColor: 'white' }} // Customize size and color for the "+" icon
            />
          ),
          tabBarButton: (props) => (
            <CustomTabBarButton {...props} onPress={() => {}}>
              <Image
                source={require('../../images/plus.png')} // "+" icon image for the floating button
                style={{ width: 30, height: 30, tintColor: 'white' }} // Customize size and color
              />
            </CustomTabBarButton>
          ),
        }}
      />
      <Tab.Screen
        name="Notes"
        component={Notes}
        options={{
          headerShown: false, // Hide the header for the Notes screen
          tabBarIcon: tabBarIcon(require('../../images/notes.png')), // Notes icon
        }}
      />
      <Tab.Screen
        name="Profile"
        component={Profile}
        options={{
          tabBarIcon: tabBarIcon(require('../../images/profile-user.png')), // Profile icon
          headerShown: false, // Hide the header for the Profile screen
        }}
      />
    </Tab.Navigator>
  );
};

const styles = StyleSheet.create({
  shadow: {
    shadowColor: '#7F5DF0', // Shadow color
    shadowOffset: {
      width: 0,
      height: 10, // Shadow will fall 10 units below the component
    },
    shadowOpacity: 0.25, // How transparent the shadow is
    shadowRadius: 3.5, // How far the shadow spreads out
    elevation: 5, // For Android shadow effect
  },
  iconContainer: {
    alignItems: 'center', // Center the icon horizontally
    justifyContent: 'center', // Center the icon vertically
  },
});

export default Tabs;
