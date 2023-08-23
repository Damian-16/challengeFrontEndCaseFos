import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import HomeScreen from "./src/screens/HomeScreen";
import HistorialScreen from "./src/screens/HistorialScreen";
import { Entypo, FontAwesome5, Foundation, Ionicons } from "@expo/vector-icons";
import { darkColors } from "./assets/styles/appStyles";

export default function App() {
  const Tab = createBottomTabNavigator();
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarStyle: { backgroundColor: "black" },
          tabBarLabelStyle: { color: "white" },
          tabBarIcon: ({ color }) => {
            return null;
          },
        })}
      >
        <Tab.Screen
          name="Inicio"
          component={HomeScreen}
          options={{
            headerShown: false,
            tabBarIcon: ({ color }) => (
              <Ionicons
                name="home"
                size={24}
                color={darkColors.buttonBackground}
              />
            ),
          }}
        />
        <Tab.Screen
          name="Historial"
          component={HistorialScreen}
          options={{
            headerShown: false,
            tabBarIcon: ({ color }) => (
              <FontAwesome5
                name="clipboard-list"
                size={24}
                color={darkColors.buttonBackground}
              />
            ),
          }}
        />
        <Tab.Screen
          name="Notificaciones"
          component={HomeScreen}
          options={{
            headerShown: false,
            tabBarIcon: ({ color }) => (
              <Ionicons
                name="notifications-sharp"
                size={24}
                color={darkColors.buttonBackground}
              />
            ),
          }}
        />
        <Tab.Screen
          name="Estadisticas"
          component={HomeScreen}
          options={{
            headerShown: false,
            tabBarIcon: ({ color }) => (
              <Entypo
                name="area-graph"
                size={24}
                color={darkColors.buttonBackground}
              />
            ),
          }}
        />
        <Tab.Screen
          name="Alerta"
          component={HomeScreen}
          options={{
            headerShown: false,
            tabBarIcon: ({ color }) => (
              <Foundation
                name="alert"
                size={24}
                color={darkColors.buttonBackground}
              />
            ),
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
