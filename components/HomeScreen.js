import React from "react";
import { View, Text, TextInput, ScrollView, Image, TouchableOpacity, StyleSheet, ImageBackground, FlatList } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

const HomeScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Image source={require("../assets/carot.png")} style={styles.icon} />
      {/* Header */}
      <View style={styles.header}>
        <Ionicons name="location-outline" size={24} color="black" style ={{marginLeft:90}}/>
        <Text style={styles.locationText}>Cầu Giấy, Hà Nội</Text>
      </View>
      
      {/* Search Bar */}
      <View style={styles.searchContainer}>
        <Ionicons name="search" size={20} color="#888" style={styles.searchIcon} />
        <TextInput placeholder="Search Store" style={styles.searchInput} />
      </View>
      
      {/* Banner */}
      <View style={styles.banner}>
        <ImageBackground source={require("../assets/fresh.jpg")} style={styles.bannerImage} />
      </View>
      
      {/* Exclusive Offers */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Exclusive Offer</Text>
        <TouchableOpacity onPress={() => navigation.navigate("ExclusiveOffers")}>
          <Text style={styles.seeAll}>See all</Text>
        </TouchableOpacity>
      </View>
      
      <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.productList}>
        <View style={styles.productCard}>
          <Image source={require("../assets/chuoi.png")} style={styles.productImage} />
          <Text>Organic Bananas</Text>
          <Text style ={styles.productPrice}> $4.99</Text>
          <TouchableOpacity style={styles.addButton}>
          <Ionicons name="add" size={20} color="white" />
        </TouchableOpacity>
        </View>
        <View style={styles.productCard}>
          <Image source={require("../assets/tao.jpg")} style={styles.productImage} />
          <Text>Red Apple</Text>
          <Text style = {styles.productPrice}>$4.99</Text>
        <TouchableOpacity onPress={() => navigation.navigate("ProductDetail")}style={styles.addButton}>
          <Ionicons name="add" size={20} color="white" />
        </TouchableOpacity>
        </View>
    
        
      </ScrollView>
    </View>
  );
};

const ProductDetailScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Image source={require("../assets/tao2.jpg")} style={styles.productDetailImage} />
      <Text style={styles.productTitle}>Natural Red Apple</Text>
      <Text style={styles.productPrice}>$4.99</Text>
      
      <Text style={styles.productDescription}>Apples are nutritious and good for health. They are beneficial for weight loss and heart health.</Text>
      <TouchableOpacity style={styles.addToBasketButton}>
        <Text style={styles.buttonText}>Add To Basket</Text>
      </TouchableOpacity>
    </View>
  );
};

const ExploreScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.sectionTitle}>Find Products</Text>
      <ScrollView  >
        <TouchableOpacity style={styles.categoryBox}>
          <Text>Fresh Fruits & Vegetables</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.categoryBox}>
          <Text>Cooking Oil & Ghee</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.categoryBox}>
          <Text>Bakery & Snacks</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.categoryBox}>
          <Text>Beverages</Text>
        </TouchableOpacity>
      </ScrollView>
    </View>
  );
};
const beverages = [
  { id: '1', name: 'Diet Coke', size: '355ml', price: '$1.99', image: require('../assets/diet.jpg') },
  { id: '2', name: 'Sprite Can', size: '325ml', price: '$1.50', image: require('../assets/sprite.jpg') },
  { id: '3', name: 'Apple & Grape Juice', size: '2L', price: '$15.99', image: require('../assets/appleandgrape.jpg') },
  { id: '4', name: 'Orange Juice', size: '2L', price: '$15.99', image: require('../assets/orange.jpg') },
  { id: '5', name: 'Coca Cola Can', size: '325mL', price: '$15.99', image: require('../assets/coca.jpg') },
  { id: '6', name: 'Pepsi Can', size: '330mL', price: '$15.99', image: require('../assets/pepsi.jpg') },
];
const BeveragesScreen = ({ navigation }) => {
  const renderItem = ({ item }) => (
    <View style={styles.beverageCard}>
      <Image source={item.image} style={styles.productImage} />
      <Text style={styles.beverageName}>{item.name}</Text>
      <Text style={styles.beverageSize}>{item.size}, Price</Text>
      <Text style={styles.productPrice}>{item.price}</Text>
      <TouchableOpacity style={styles.addButton}>
        <Ionicons name="add" size={20} color="white" />
      </TouchableOpacity>
    </View>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.sectionTitle}>Beverages</Text>
      <FlatList
        data={beverages}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        numColumns={2}
        columnWrapperStyle={{ justifyContent: 'space-between' }}
        contentContainerStyle={{ paddingVertical: 10 }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, padding: 16, backgroundColor: "#fff" },
  header: { flexDirection: "row", alignItems: "center", marginBottom: 10, },
  locationText: { marginLeft: 10, fontSize: 16, fontWeight: "bold",},
  searchContainer: { flexDirection: "row", alignItems: "center", backgroundColor: "#f0f0f0", borderRadius: 10, paddingHorizontal: 10, marginBottom: 15 },
  searchIcon: { marginRight: 5 },
  searchInput: { flex: 1, paddingVertical: 8 },
  banner: { padding: 15, borderRadius: 10, alignItems: "center", marginBottom: 15 },
  bannerImage: { width: "100%", height: 80, resizeMode: "contain" },
  bannerText: { fontSize: 16, fontWeight: "bold", marginTop: 5 },
  section: { flexDirection: "row", justifyContent: "space-between", alignItems: "center", marginBottom: 10 },
  sectionTitle: { fontSize: 18, fontWeight: "bold" },
  seeAll: { color: "green" },
  productList: { 
    flexDirection: "row",
    borderRadius: 12,
    padding: 10,
    marginBottom: 15,
    position: 'relative',
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
  },
  productCard: { alignItems: "center", backgroundColor: "#fff", padding: 10, borderRadius: 10, marginRight: 10, elevation: 3, width:'60%', height:200 },
 // productImage: { width: 80, height: 80, resizeMode: "contain", marginBottom: 5 },
  productDetailImage: { width: "100%", height: 200, resizeMode: "contain", marginBottom: 10 },
  productTitle: { fontSize: 22, fontWeight: "bold", marginBottom: 5 },
  productPrice: { fontSize: 16, fontWeight: "bold", color: "green", marginBottom: 5 },
  productDescription: { fontSize: 14, color: "gray", marginBottom: 10 },
  addToBasketButton: { backgroundColor: "green", padding: 10, borderRadius: 10, alignItems: "center" },
  buttonText: { color: "white", fontSize: 16, fontWeight: "bold" },
  categoryBox: {  backgroundColor: "#f0f0f0", padding: 15, borderRadius: 10, marginBottom: 10, alignItems: "center" },
  beverageCard: {
    backgroundColor: "#fff",
    borderRadius: 12,
    padding: 10,
    marginBottom: 15,
    width: '48%',
    alignItems: 'center',
    elevation: 3,
    position: 'relative',
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
  },
  
  productImage: {
    width: 70,
    height: 70,
    resizeMode: "contain",
    marginBottom: 8,
    marginTop: 5,
  },
  
  beverageName: {
    fontSize: 14,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 2,
  },
  
  beverageSize: {
    fontSize: 12,
    color: 'gray',
    marginBottom: 2,
  },
  
  productPrice: {
    fontSize: 14,
    fontWeight: 'bold',
    color: "black",
    marginBottom: 25, 
  },
  
  addButton: {
    backgroundColor: 'green',
    borderRadius: 20,
    padding: 6,
    position: 'absolute',
    bottom: 10,
    right: 10,
    elevation: 3,
  },
  icon: {
    width: 40, 
    height: 40,
    marginBottom: 10,
    marginLeft:150 
  },
});

export { HomeScreen, ProductDetailScreen, ExploreScreen, BeveragesScreen };