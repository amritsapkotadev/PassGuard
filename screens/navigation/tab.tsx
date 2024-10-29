import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from '../home'; // Ensure the path is correct
import Generate from '../generate'; // Capitalize component names to follow convention
import Setting from '../setting'; // Capitalize component names to follow convention

const Tab = createBottomTabNavigator();

const Tabs = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarStyle: { backgroundColor: '#101010' }, // Optional: Customize the tab bar style
        tabBarActiveTintColor: '#F4D03F', // Active tab color
        tabBarInactiveTintColor: '#B3B3B3', // Inactive tab color
      }}
    >
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen name="Generate" component={Generate} />
      <Tab.Screen name="Setting" component={Setting} />
    </Tab.Navigator>
  );
};

export default Tabs;
