// ProductCard.js
import React from "react";
import { View, Text, Image, StyleSheet, TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons";

const ProductCard = ({ product }) => (
  <View style={styles.card}>
    <Image source={product.image} style={styles.image} />
    <Text style={styles.title}>{product.name}</Text>
    <Text style={styles.subtitle}>{product.details}</Text>
    <View style={styles.footer}>
      <Text style={styles.price}>${product.price}</Text>
      <TouchableOpacity>
        <Ionicons name="add-circle" size={28} color="#32B768" />
      </TouchableOpacity>
    </View>
  </View>
);

const styles = StyleSheet.create({
  card: {
    width: "48%",
    backgroundColor: "#fff",
    borderRadius: 12,
    padding: 10,
    marginBottom: 15,
  },
  image: {
    width: "100%",
    height: 100,
    resizeMode: "contain",
  },
  title: {
    fontWeight: "bold",
    marginTop: 8,
  },
  subtitle: {
    fontSize: 12,
    color: "#777",
    marginVertical: 2,
  },
  footer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: 5,
  },
  price: {
    fontWeight: "bold",
    fontSize: 14,
  },
});

export default ProductCard;