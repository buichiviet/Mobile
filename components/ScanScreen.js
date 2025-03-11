import React from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';

export default function ScanScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Scan Screen</Text>
      <Button title="Go to Home" onPress={() => navigation.navigate('Home')} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  text: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 20,
  },
});
