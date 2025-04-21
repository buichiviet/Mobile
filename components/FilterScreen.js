import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const FilterScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Filter Screen</Text>
      {/* Thêm UI như hình sau */}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 50,
    paddingHorizontal: 20,
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
  },
});

export default FilterScreen;
