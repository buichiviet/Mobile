import React, { useState } from 'react';
import { View, Text, Image, TextInput, TouchableOpacity, ScrollView, StyleSheet, FlatList } from 'react-native';
import { Ionicons, MaterialIcons } from '@expo/vector-icons';

const categoriesData = [
  { id: '1', name: 'PIZZA', icon: 'local-pizza' },
  { id: '2', name: 'BURGER', icon: 'fastfood' },
  { id: '3', name: 'DRINK', icon: 'local-drink' },
  { id: '4', name: 'RICE', icon: 'rice-bowl' },
];

const popularItems = [
  { id: '1', name: 'BURGER', image: '../assets/burger2.png' },
  { id: '2', name: 'PIZZA', image: '../assets/pizza.jpg' },
];

const HomeScreen = () => {
  const [selectedCategory, setSelectedCategory] = useState('1'); // Mặc định chọn PIZZA

  return (
    <ScrollView style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <Image source={require('../assets/avatar.png')} style={styles.profileImage} />
        <View>
          <Text style={styles.locationTitle}>Vị trí của bạn</Text>
          <Text style={styles.location}>Cầu Giấy, Hà Nội</Text>
        </View>
        <TouchableOpacity style={styles.notificationButton}>
          <Ionicons name="notifications-outline" size={24} color="black" />
        </TouchableOpacity>
      </View>

      {/* Search */}
      <View style={styles.searchContainer}>
        <TextInput placeholder="Search your food" style={styles.searchInput} />
        <TouchableOpacity style={styles.filterButton}>
          <Ionicons name="filter" size={24} color="white" />
        </TouchableOpacity>
      </View>

      {/* Danh mục */}
      <FlatList
        horizontal
        data={categoriesData}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => {
          const isActive = item.id === selectedCategory;
          return (
            <TouchableOpacity
              style={[styles.categoryButton, isActive && styles.categoryButtonActive]}
              onPress={() => setSelectedCategory(item.id)}
            >
              <MaterialIcons name={item.icon} size={24} color={isActive ? 'white' : 'black'} />
              <Text style={[styles.categoryText, isActive && styles.categoryTextActive]}>
                {item.name}
              </Text>
            </TouchableOpacity>
          );
        }}
        contentContainerStyle={styles.categoryContainer}
        showsHorizontalScrollIndicator={false}
      />

      {/* Banner */}
      <View style={styles.bannerContainer}>
        <Image source={require('../assets/burger.jpg')} style={styles.burgerBanner} />
      <View style={styles.bannerOverlay}>
      <Text style={styles.bannerText}>BURGER</Text>
      <Text style={styles.bannerSubText}>Today's Hot Offer</Text>
      <View style={styles.discountBadge}>
        <Text style={styles.discountText}>10% OFF</Text>
        </View>
          <Text style={styles.ratingText}>⭐ 4.9 (3k+ Rating)</Text>
        </View>
      </View>

      {/* Popular Items */}
      <View style={styles.popularContainer}>
        <Text style={styles.popularTitle}>Popular Items</Text>
        <TouchableOpacity><Text style={styles.viewAll}>View All</Text></TouchableOpacity>
      </View>

      <FlatList
        horizontal
        data={popularItems}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.foodCard}>
            <Image source={{ uri: item.image }} style={styles.foodImage} />
            <Text style={styles.foodName}>{item.name}</Text>
          </View>
        )}
        contentContainerStyle={styles.popularItems}
        showsHorizontalScrollIndicator={false}
      />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#fff', padding: 20 },
  header: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginBottom: 20 },
  profileImage: { width: 50, height: 50, borderRadius: 25 },
  locationTitle: { fontSize: 12, color: 'gray' },
  location: { fontSize: 16, fontWeight: 'bold' },
  notificationButton: { padding: 5, backgroundColor: '#f9f9f9', borderRadius: 20 },
  searchContainer: { flexDirection: 'row', alignItems: 'center', backgroundColor: '#f0f0f0', borderRadius: 10, padding: 10, marginBottom: 20 },
  searchInput: { flex: 1, fontSize: 16 },
  filterButton: { backgroundColor: '#5c67f2', padding: 10, borderRadius: 10 },
  
  categoryContainer: { flexDirection: 'row', marginBottom: 20 },
  categoryButton: {
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 15,
    backgroundColor: '#f0f0f0',
    borderRadius: 15,
    marginHorizontal: 5,
    width: 100,
    height: 80,
  },
  categoryButtonActive: {
    backgroundColor: '#00c853', // Màu xanh lá khi active
  },
  categoryText: {
    fontSize: 14,
    marginTop: 5,
    color: 'black',
  },
  categoryTextActive: {
    color: 'white', // Màu trắng khi active
  },

  bannerContainer: {position: 'relative', borderRadius: 10, overflow: 'hidden', marginBottom: 20 },
  burgerBanner: { width: '100%', height: 200, resizeMode: 'cover' },
  bannerOverlay: { position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, justifyContent: 'center',paddingLeft: 20, alignItems: 'flex-start', backgroundColor: 'rgba(0,0,0,0.3)' },
  bannerText: { color: 'yellow', fontSize: 30, fontWeight: 'bold' },
  bannerSubText: { color: 'white', fontSize: 20 },
  discountBadge: { backgroundColor: 'blue', padding: 5, borderRadius: 5, marginTop: 5 },
  discountText: { color: 'white', fontSize: 20 },
  ratingText: { color: 'white', fontSize: 20, marginTop: 5 },


  popularContainer: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginBottom: 10 },
  popularTitle: { fontSize: 18, fontWeight: 'bold' },
  viewAll: { color: '#5c67f2', fontSize: 14 },

  popularItems: { flexDirection: 'row' },
  foodCard: { alignItems: 'center', marginHorizontal: 5 },
  foodImage: { width: 100, height: 100, borderRadius: 10 },
  foodName: { marginTop: 5, fontSize: 14, fontWeight: 'bold' },
});

export default HomeScreen;
