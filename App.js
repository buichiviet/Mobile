import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export default function ScanScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Scan QR Code</Text>
      <TouchableOpacity style={styles.scanButton}>
        <Ionicons name="scan" size={40} color="white" />
        <Text style={styles.buttonText}>Start Scanning</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.backButton} onPress={() => navigation.navigate('Home')}>
        <Text style={styles.backButtonText}>Back to Home</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f8f9fa',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  scanButton: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#28a745',
    padding: 15,
    borderRadius: 10,
    marginBottom: 20,
  },
  buttonText: {
    color: 'white',
    fontSize: 18,
    marginLeft: 10,
  },
  backButton: {
    marginTop: 10,
  },
  backButtonText: {
    fontSize: 16,
    color: '#007bff',
  },
});
