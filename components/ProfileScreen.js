import React from 'react';
import { View, Text, Image, TouchableOpacity, Switch, StyleSheet } from 'react-native';

const ProfileScreen = () => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image source={{ uri: 'https://via.placeholder.com/100' }} style={styles.profileImage} />
        <Text style={styles.name}>Rakibul Hasan</Text>
        <Text style={styles.email}>rakibhrbrand@gmail.com</Text>
      </View>
      <View style={styles.menu}>
        <TouchableOpacity style={styles.menuItem}><Text>Home</Text></TouchableOpacity>
        <TouchableOpacity style={styles.menuItem}><Text>My Card</Text></TouchableOpacity>
        <View style={styles.menuItemRow}>
          <Text>Dark Mode</Text>
          <Switch value={false} />
        </View>
        <TouchableOpacity style={styles.menuItem}><Text>Track Your Order</Text></TouchableOpacity>
        <TouchableOpacity style={styles.menuItem}><Text>Settings</Text></TouchableOpacity>
        <TouchableOpacity style={styles.menuItem}><Text>Help Center</Text></TouchableOpacity>
      </View>
      <TouchableOpacity style={styles.logoutButton}>
        <Text style={styles.logoutText}>Log Out</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, backgroundColor: '#fff' },
  header: { alignItems: 'center', marginBottom: 20 },
  profileImage: { width: 100, height: 100, borderRadius: 50, marginBottom: 10 },
  name: { fontSize: 20, fontWeight: 'bold' },
  email: { fontSize: 14, color: 'gray' },
  menu: { marginBottom: 20 },
  menuItem: { padding: 15, borderBottomWidth: 1, borderBottomColor: '#ddd' },
  menuItemRow: { flexDirection: 'row', justifyContent: 'space-between', padding: 15, borderBottomWidth: 1, borderBottomColor: '#ddd' },
  logoutButton: { backgroundColor: 'purple', padding: 15, borderRadius: 10, alignItems: 'center' },
  logoutText: { color: '#fff', fontSize: 16, fontWeight: 'bold' }
});

export default ProfileScreen;
