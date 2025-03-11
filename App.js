import React from 'react';
import { View, Text, Image, TouchableOpacity, FlatList, StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import { Ionicons } from '@expo/vector-icons';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

const insights = [
  { id: '1', title: 'Scan new', icon: 'scan', count: 483, color: '#E3EDFC' },
  { id: '2', title: 'Counterfeits', icon: 'alert-circle', count: 32, color: '#FCE3E3' },
  { id: '3', title: 'Success', icon: 'checkmark-circle', count: 8, color: '#E3FCEC' },
  { id: '4', title: 'Directory', icon: 'calendar', count: 26, color: '#E3E3FC' },
];

function HomeScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
      <Text style={styles.title}>{["Hello 👋", "Bùi Chí Việt"].join("\n")}</Text>
        <Image source={require('./assets/avatar.png')} style={styles.avatar} />
      </View>
      <Text style={styles.sectionTitle}>Your Insights</Text>
      <FlatList
        data={insights}
        numColumns={2}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <TouchableOpacity style={[styles.insightBox, { backgroundColor: item.color }]}>  
            <Ionicons name={item.icon} size={28} color="#333" />
            <Text style={styles.insightText}>{item.title}</Text>
            <Text style={styles.insightCount}>{item.count}</Text>
          </TouchableOpacity>
        )}
      />
    </View>
  );
}

function ScanScreen() {
  return (
    <View style={styles.scanContainer}>
      <TouchableOpacity style={styles.backButton}>
        <Ionicons name="arrow-back" size={30} color="#000" />
      </TouchableOpacity>
      <View style={styles.scanOverlay}>
        <Image source={require('./assets/juice.jpg')} style={styles.scanImage} />
      </View>
      <View style={styles.productInfo}>
        <Image source={require('./assets/juicet.jpg')} style={styles.productImage} />
        <Text style={styles.productText}> {["Lauren’s", "Orange Juice"].join("\n")} </Text>
        <TouchableOpacity style={styles.addButton}>
          <Ionicons name="add" size={24} color="#fff" />
        </TouchableOpacity>
      </View>
    </View>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator screenOptions={{ headerShown: false, tabBarStyle: styles.tabBar }}>
        <Tab.Screen name="Home" component={HomeScreen} options={{ tabBarIcon: ({ color }) => <Ionicons name="home" size={24} color={color} /> }} />
        <Tab.Screen name="Scan" component={ScanScreen} options={{ tabBarIcon: ({ color }) => <Ionicons name="scan" size={24} color={color} /> }} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, backgroundColor: '#F8F9FC' },
  header: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginTop: 50 },
  title: { fontSize: 24, fontWeight: 'bold', color: '#333' },
  avatar: { width: 50, height: 50, borderRadius: 25 },
  sectionTitle: { marginTop: 20, fontSize: 18, fontWeight: 'bold', color: '#333' },
  insightBox: { flex: 1, padding: 20, margin: 10, borderRadius: 15, alignItems: 'center', shadowColor: '#000', shadowOpacity: 0.1, shadowRadius: 5 },
  insightText: { marginTop: 5, fontWeight: 'bold', color: '#333' },
  insightCount: { marginTop: 3, fontSize: 16, fontWeight: '600', color: '#555' },
  scanContainer: { flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: '#F8F1E7' },
  backButton: { position: 'absolute', top: 50, left: 20 },
  scanOverlay: { borderWidth: 2, borderColor: '#fff', borderRadius: 10, padding: 10, shadowColor: '#000', shadowOpacity: 0.1, shadowRadius: 5 },
  scanImage: { width: 300, height: 400, borderRadius: 15 },
  productInfo: { flexDirection: 'row', alignItems: 'center', marginTop: 20, backgroundColor: '#fff', padding: 15, borderRadius: 15, shadowColor: '#000', shadowOpacity: 0.1, shadowRadius: 5 },
  productImage: { width: 50, height: 50, borderRadius: 10 },
  productText: { marginLeft: 10, fontWeight: 'bold', color: '#333', fontSize: 16 },
  addButton: { marginLeft: 'auto', backgroundColor: '#007AFF', padding: 10, borderRadius: 10 },
  tabBar: { height: 70, backgroundColor: '#fff', borderTopWidth: 0, paddingBottom: 10, shadowColor: '#000', shadowOpacity: 0.1, shadowRadius: 5 },
});
