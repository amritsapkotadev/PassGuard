import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Tabs from './screens/navigation/tab'; // Your tab navigation
import CardDetails from './screens/CardDetails'; // Correctly import CardDetails component
import PasswordDetails from './screens/navigation/Password'; // Correctly import PasswordDetails component
const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Tabs">
        <Stack.Screen
          name="Tabs"
          component={Tabs}
          options={{ headerShown: false }} // Hide header for tabs
        />
        <Stack.Screen
          name="CardDetails" // Ensure the name is consistent
          component={CardDetails}
          options={{ title: 'Card Details' }} // Title for the CardDetails screen
        />
        <Stack.Screen
          name="PasswordDetails" // Ensure the name is consistent
          component={PasswordDetails}
          options={{ title: 'PasswordDetails' }} // Title for the CardDetails screen
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
