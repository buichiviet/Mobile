import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { AuthProvider } from './context/AuthContext'; // Đảm bảo đường dẫn đúng
import LoginScreen from './components/LoginScreen';
import HomeScreen from './components/HomeScreen';
import ScanScreen from './components/ScanScreen';

const Stack = createStackNavigator();

export default function App() {
  return (
    <AuthProvider> {/* Bọc toàn bộ ứng dụng */}
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Login" screenOptions={{ headerShown: false }}>
          <Stack.Screen name="Login" component={LoginScreen} />
          <Stack.Screen name="Home" component={HomeScreen} />
          <Stack.Screen name="Scan" component={ScanScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </AuthProvider>
  );
}
