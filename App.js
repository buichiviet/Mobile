import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import LocationScreen from "./components/LocationScreen";
import LoginScreen from "./components/LoginScreen";
import SignupScreen from "./components/SignupScreen";

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="LocationScreen" screenOptions={{ headerShown: false }}>
        <Stack.Screen name="LocationScreen" component={LocationScreen} />
        <Stack.Screen name="LoginScreen" component={LoginScreen} />
        <Stack.Screen name="SignupScreen" component={SignupScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
