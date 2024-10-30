import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from '../home';
import Generate from '../generate';
import Notes from '../Notes';
import Profile from '../profile';
import Add from './../Add'; // Import the Add screen component
import { StyleSheet, View, Image, TouchableOpacity } from 'react-native';

const Tab = createBottomTabNavigator();

// Component for standard tab icons
const TabIcon = ({ source, focused }) => (
  <View style={styles.iconContainer}>
    <Image
      source={source}
      style={{
        width: 24,
        height: 24,
        tintColor: focused ? '#F4D03F' : '#B3B3B3', // Color based on focus
      }}
    />
  </View>
);

// Floating button in the center of the tab bar
const CustomTabBarButton = ({ children, onPress }) => (
  <TouchableOpacity
    style={{
      top: -40, // Lift the button above the tab bar
      justifyContent: 'center',
      alignItems: 'center',
      ...styles.shadow, // Shadow effect for a floating look
    }}
    onPress={onPress} // Trigger the onPress function
  >
    <View style={styles.floatingButton}>{children}</View>
  </TouchableOpacity>
);

// Helper function to generate tab icons
const tabBarIcon = (source) => ({ focused }) => <TabIcon source={source} focused={focused} />;

const Tabs = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarStyle: {
          backgroundColor: 'black',
          borderTopColor: 'black',
          borderTopWidth: 1,
          height: 70,
          ...styles.shadow,
        },
        tabBarLabelStyle: {
          fontSize: 12,
          fontWeight: 'bold',
        },
        tabBarActiveTintColor: '#F4D03F',
        tabBarInactiveTintColor: '#B3B3B3',
      }}
    >
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          headerShown: false,
          tabBarIcon: tabBarIcon(require('../../images/home.png')),
        }}
      />
      <Tab.Screen
        name="Generate"
        component={Generate}
        options={{
          headerShown: false,
          tabBarIcon: tabBarIcon(require('../../images/brush.png')),
        }}
      />
      
      {/* Conditionally hide the "+" button in the "Add" screen */}
      <Tab.Screen
        name="Add"
        component={Add}
        options={({ route }) => ({
          tabBarIcon: () => (
            <Image
              source={require('../../images/plus.png')}
              style={{ width: 30, height: 30, tintColor: 'white' }}
            />
          ),
          tabBarButton: (props) => {
            // Hide the "+" button when on the "Add" screen
            return route.name === "Add" ? null : (
              <CustomTabBarButton {...props} onPress={() => {}}>
                <Image
                  source={require('../../images/plus.png')}
                  style={{ width: 30, height: 30, tintColor: 'white' }}
                />
              </CustomTabBarButton>
            );
          },
        })}
      />

      <Tab.Screen
        name="Notes"
        component={Notes}
        options={{
          headerShown: false,
          tabBarIcon: tabBarIcon(require('../../images/notes.png')),
        }}
      />
      <Tab.Screen
        name="Profile"
        component={Profile}
        options={{
          tabBarIcon: tabBarIcon(require('../../images/profile-user.png')),
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
      height: 8,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.5,
    elevation: 5,
  },
  iconContainer: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  floatingButton: {
    width: 60,
    height: 60,
    borderRadius: 35,
    backgroundColor: '#F4D03F',
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default Tabs;
