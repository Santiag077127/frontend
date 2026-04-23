import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { Ionicons } from '@expo/vector-icons'

import HomeScreen from '../features/home/screens/HomeScreen'
import ProfileScreen from '../features/profile/screens/ProfileScreen'
import ServicesScreen from '../features/services/screens/ServicesScreen'
import TrackingScreen from '../features/tracking/screens/TrackingScreen'

const Tab = createBottomTabNavigator()

export default function TabNavigator() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        headerShown: false,

        tabBarIcon: ({ color, size }) => {
          let iconName: any

          if (route.name === 'Home') iconName = 'home'
          else if (route.name === 'Servicios') iconName = 'car'
          else if (route.name === 'Tracking') iconName = 'location'
          else if (route.name === 'Perfil') iconName = 'person'

          return <Ionicons name={iconName} size={size} color={color} />
        },

        tabBarActiveTintColor: '#1E6FB9',
        tabBarInactiveTintColor: 'gray',

        tabBarStyle: {
          height: 60,
          paddingBottom: 5,
        },
      })}
    >
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Servicios" component={ServicesScreen} />
      <Tab.Screen name="Tracking" component={TrackingScreen} />
      <Tab.Screen name="Perfil" component={ProfileScreen} />
    </Tab.Navigator>
  )
}