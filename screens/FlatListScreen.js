import React from 'react';
import { FlatList, View, Text, Alert, TouchableOpacity, StyleSheet, Button } from 'react-native';

const FlatListScreen = ({ navigation }) => {
  const products = [
    { id: '1', name: 'Laptop Asus', price: '190' },
    { id: '2', name: 'Laptop Acer', price: '215' },
    { id: '3', name: 'Laptop Lenovo', price: '599' },
  ];

  const handlePress = (productName) => {
    Alert.alert('Thông báo', `Bạn đã chọn: ${productName}`);
  };

  const renderItem = ({ item }) => (
    <TouchableOpacity onPress={() => handlePress(item.name)}>
      <View style={styles.item}>
        <Text style={styles.name}>{item.name}</Text>
        <Text style={styles.price}>${item.price}</Text>
      </View>
    </TouchableOpacity>
  );

  return (
    <View style={{ flex: 1 }}>
      <FlatList
        data={products}
        keyExtractor={(item) => item.id}
        renderItem={renderItem}
      />
      <Button title="Chuyển đến SectionList" onPress={() => navigation.navigate('SectionList')} />
    </View>
  );
};

const styles = StyleSheet.create({
  item: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  name: {
    fontSize: 16,
  },
  price: {
    fontSize: 16,
    color: 'green',
  },
});

export default FlatListScreen;