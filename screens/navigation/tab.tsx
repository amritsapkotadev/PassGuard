import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from '../home'; // Ensure the path is correct
import Generate from '../generate'; // Capitalize component names to follow convention
import Setting from '../setting'; // Capitalize component names to follow convention
import { StyleSheet, View, Image } from 'react-native'; // Import View and Image from 'react-native'
import profile from '../profile';

const Tab = createBottomTabNavigator();

// TabIcon Component
const TabIcon = ({ source, focused }: { source: any; focused: boolean }) => (
  <View style={styles.iconContainer}>
    <Image
      source={source}
      style={{
        width: 24,
        height: 24,
        tintColor: focused ? '#F4D03F' : '#B3B3B3', // Change color based on focus
      }} // Adjust the size and color
    />
  </View>
);

// Function to generate the icon
const tabBarIcon = (source: any) => ({ focused }: { focused: boolean }) => (
  <TabIcon source={source} focused={focused} />
);

const Tabs = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarStyle: {
          backgroundColor: 'black',
          borderTopColor: 'black',
          borderTopWidth: 1,
          height: 60,
          ...styles.shadow,
        },
        tabBarActiveTintColor: '#F4D03F', // Active tab icon color
        tabBarInactiveTintColor: '#B3B3B3', // Inactive tab icon color
      }}
    >
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
            headerShown: false,
          tabBarIcon: tabBarIcon(require('../../images/home.png')), // Home icon
          }}
      />
      <Tab.Screen
        name="Generate"
        component={Generate}
        options={{
            headerShown: false,

        }}
      />
      <Tab.Screen
        name="Setting"
        component={Setting}
        options={{
            headerShown: false,

        }}
      />
       <Tab.Screen
        name="Profile"
        component={profile}
        options={{
            headerShown: false,

        }}
      />
    </Tab.Navigator>
  );
};

const styles = StyleSheet.create({
  shadow: {
    shadowColor: '#7F5DF0',
    shadowOffset: {
      width: 0,
      height: 10,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.5,
    elevation: 5,
  },
  iconContainer: {
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default Tabs;
