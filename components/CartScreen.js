import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';

const CartScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Shopping Cart</Text>
      <View style={styles.itemCard}>
        <Image source={{ uri: 'https://via.placeholder.com/150' }} style={styles.itemImage} />
        <View style={styles.itemDetails}>
          <Text style={styles.itemName}>BURGER</Text>
          <Text style={styles.itemPrice}>$28</Text>
          <View style={styles.quantityControl}>
            <TouchableOpacity style={styles.quantityButton}><Text>-</Text></TouchableOpacity>
            <Text style={styles.quantity}>02</Text>
            <TouchableOpacity style={styles.quantityButton}><Text>+</Text></TouchableOpacity>
          </View>
        </View>
      </View>
      <View style={styles.checkoutSummary}>
        <Text>Subtotal: $56</Text>
        <Text>Delivery Fee: $6.20</Text>
        <Text style={styles.total}>Total: $62.20</Text>
      </View>
      <TouchableOpacity style={styles.confirmButton}>
        <Text style={styles.confirmText}>Confirm Order</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, backgroundColor: '#fff' },
  title: { fontSize: 24, fontWeight: 'bold', marginBottom: 20 },
  itemCard: { flexDirection: 'row', marginBottom: 20, alignItems: 'center' },
  itemImage: { width: 100, height: 100, borderRadius: 10 },
  itemDetails: { marginLeft: 10 },
  itemName: { fontSize: 18, fontWeight: 'bold' },
  itemPrice: { fontSize: 16, color: 'gray' },
  quantityControl: { flexDirection: 'row', alignItems: 'center', marginTop: 5 },
  quantityButton: { padding: 5, backgroundColor: '#ddd', borderRadius: 5 },
  quantity: { marginHorizontal: 10, fontSize: 16 },
  checkoutSummary: { marginTop: 20 },
  total: { fontSize: 18, fontWeight: 'bold', marginTop: 10 },
  confirmButton: { marginTop: 20, backgroundColor: 'purple', padding: 15, borderRadius: 10, alignItems: 'center' },
  confirmText: { color: '#fff', fontSize: 16, fontWeight: 'bold' }
});

export default CartScreen;
