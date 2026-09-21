import { createStackNavigator } from '@react-navigation/stack';

import HomeScreen from '../screens/HomeScreen';
import ToolDetailsScreen from '../screens/StackScreens/ToolDetailsScreen';
import OwnerProfileScreen from '../screens/StackScreens/OwnerProfileScreen';

const Stack = createStackNavigator();

// Styrer navigationen mellem Home, Detaljer og Ejerens profil
export default function StackNavigation() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: '#2F6B4F',
        },
        headerTintColor: '#FFFFFF',
        headerTitleStyle: {
          fontWeight: 'bold',
        },
      }}
    >
      <Stack.Screen
        name="Home"
        component={HomeScreen}
        options={{
          title: 'OurTools',
        }}
      />

      <Stack.Screen
        name="Tool Details"
        component={ToolDetailsScreen}
        options={{
          title: 'Tool Details',
        }}
      />

      <Stack.Screen
        name="Owner Profile"
        component={OwnerProfileScreen}
        options={{
          title: 'Owner Profile',
        }}
      />
    </Stack.Navigator>
  );
}