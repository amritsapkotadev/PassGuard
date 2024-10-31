import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Home from '../home';
import Generate from '../generate';
import Notes from '../Notes';
import Profile from '../profile';
import Add from './../Add'; // Import Add screen
import {StyleSheet, View, Image, TouchableOpacity} from 'react-native';
import {useNavigation} from '@react-navigation/native';

const Tab = createBottomTabNavigator();

// Icon component to render tab icons
const TabIcon = ({source, focused}) => (
  <View style={styles.iconContainer}>
    <Image
      source={source}
      style={{
        width: 24,
        height: 24,
        tintColor: focused ? '#F4D03F' : '#B3B3B3',
      }}
    />
  </View>
);

// Custom button for the floating "+" icon
const CustomTabBarButton = ({children, onPress}) => (
  <TouchableOpacity
    style={styles.customButtonContainer}
    onPress={onPress}
    activeOpacity={0.7}>
    <View style={styles.floatingButton}>{children}</View>
  </TouchableOpacity>
);

const tabBarIcon =
  source =>
  ({focused}) =>
    <TabIcon source={source} focused={focused} />;

const Tabs = () => {
  const navigation = useNavigation(); // Using navigation to programmatically navigate to the Add screen

  return (
    <Tab.Navigator
      screenOptions={{
        tabBarStyle: {
          backgroundColor: 'black',
          borderTopColor: 'black',
          height: 70,
          ...styles.shadow,
        },
        tabBarLabelStyle: {
          fontSize: 12,
          fontWeight: 'bold',
        },
        tabBarActiveTintColor: '#F4D03F',
        tabBarInactiveTintColor: '#B3B3B3',
      }}>
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

      {/* Floating "+" button */}
      <Tab.Screen
        name="Add"
        component={Add}
        options={{
          headerShown: false,
          tabBarIcon: () => (
            <Image
              source={require('../../images/plus.png')}
              style={{width: 30, height: 30, tintColor: 'white'}}
            />
          ),
          tabBarButton: props => (
            <CustomTabBarButton
              {...props}
              onPress={() => navigation.navigate('Add')}>
              <Image
                source={require('../../images/plus.png')}
                style={{width: 30, height: 30, tintColor: 'white'}}
              />
            </CustomTabBarButton>
          ),
        }}
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
  customButtonContainer: {
    top: -30,
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 10,
  },
  floatingButton: {
    width: 60,
    height: 60,
    borderRadius: 30,
    backgroundColor: '#F4D03F',
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 4},
    shadowOpacity: 0.3,
    shadowRadius: 8,
    elevation: 5,
  },
});

export default Tabs;
