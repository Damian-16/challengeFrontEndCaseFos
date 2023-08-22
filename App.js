import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from './src/screens/HomeScreen'; 

export default function App() {
  const Tab = createBottomTabNavigator();
  return (
    <NavigationContainer>
      <Tab.Navigator>
      <Tab.Screen name="Home" component={HomeScreen}/>
      <Tab.Screen name="Historial" component={HomeScreen}/>
      <Tab.Screen name="Notificaciones" component={HomeScreen}/>
      <Tab.Screen name="Pendientes" component={HomeScreen}/>
      <Tab.Screen name="Alerta" component={HomeScreen}/>
      </Tab.Navigator>
    </NavigationContainer>
   
  );
}
