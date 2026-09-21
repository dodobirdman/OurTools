import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import StackNavigation from './components/StackComponent';
import MyToolsScreen from './screens/MyToolsScreen';
import ProfileScreen from './screens/ProfileScreen';

// Opretter bund-navigationen
const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      {/* Fælles styling for overlinjen og fanerne i bunden */}
      <Tab.Navigator
        screenOptions={{
          headerStyle: {
            backgroundColor: '#2F6B4F',
          },
          headerTintColor: '#FFFFFF',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
          tabBarActiveTintColor: '#2F6B4F',
          tabBarInactiveTintColor: '#888888',
        }}
      >
        {/* Stack-navigationen bruges her, så vi kan navigere til detaljesider fra Home */}
        <Tab.Screen
          name="Home"
          component={StackNavigation}
          options={{
            headerShown: false,
          }}
        />

        <Tab.Screen
          name="My Tools"
          component={MyToolsScreen}
        />

        <Tab.Screen
          name="Profile"
          component={ProfileScreen}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}