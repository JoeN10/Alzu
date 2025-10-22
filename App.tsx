import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './screens/HomeScreen';
import MenuItemScreen from './screens/MenuItemScreen'; 

const Stack = createStackNavigator();

 export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator 
        initialRouteName="Home"
        screenOptions={{
          headerStyle: {
            backgroundColor: '#004D40',
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
        }}
      >
        <Stack.Screen 
          name="Home" 
          component={HomeScreen} 
          options={{ title: 'Alzu Restaurant Menu' }}
        />
        <Stack.Screen 
          name="MenuItem" 
          component={MenuItemScreen}
          options={{ title: 'Add Menu Item' }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

