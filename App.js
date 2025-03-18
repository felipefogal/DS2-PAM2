import { Text, SafeAreaView, StyleSheet } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import Feather from 'react-native-vector-icons/Feather';

import Home from './src/pages/Home/index';
import Profile from './src/pages/Profile/index';

const Tab = createBottomTabNavigator();

// Teste de GIT
export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator screenOptions={{ tabBarShowLabel: true }}>
        <Tab.Screen
          name="Home"
          component={Home}
          options={{
            tabBarIcon: ({ color, size }) => {
              return <Feather name="home" color={'tomato'} size={size} />;
            },
          }}
        />

        <Tab.Screen
          name="Profile"
          component={Profile}
          options={{
            tabBarIcon: ({ color, size }) => {
              return <Feather name="user" color={'tomato'} size={size} />;
            },
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
