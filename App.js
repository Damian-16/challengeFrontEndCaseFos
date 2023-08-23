import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from './src/screens/HomeScreen'; 
import HistorialScreen from './src/screens/HistorialScreen';

export default function App() {
  const Tab = createBottomTabNavigator();
  return (
    <NavigationContainer>
      <Tab.Navigator>
      <Tab.Screen name="Home" component={HomeScreen}/>
      <Tab.Screen name="Historial" component={HistorialScreen}/>
      <Tab.Screen name="Notificaciones" component={HomeScreen}/>
      <Tab.Screen name="Pendientes" component={HomeScreen}/>
      <Tab.Screen name="Alerta" component={HomeScreen}/>
      </Tab.Navigator>
    </NavigationContainer>
   
  );
}
