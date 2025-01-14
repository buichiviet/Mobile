import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import FlatListScreen from './screens/FlatListScreen';
import SectionListScreen from './screens/SectionListScreen';

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="FlatList">
        <Stack.Screen name="FlatList" component={FlatListScreen} options={{ title: 'Danh sách sản phẩm' }} />
        <Stack.Screen name="SectionList" component={SectionListScreen} options={{ title: 'Nhóm sản phẩm' }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
