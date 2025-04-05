import React from "react";
import { View, Text, Image, TouchableOpacity, ScrollView, ImageBackground} from "react-native";
import { Ionicons, FontAwesome } from "@expo/vector-icons";

const ShoppingCartScreen = () => {
  return (
    <ScrollView style={{ flex: 1, backgroundColor: "#fff", padding: 20 }}>
      {/* Header */}
      <View style={{ flexDirection: "row", justifyContent: "space-between", alignItems: "center", marginBottom: 20 }}>
        <TouchableOpacity>
          <Ionicons name="arrow-back" size={24} color="black" />
        </TouchableOpacity>
        <Text style={{ fontSize: 18, fontWeight: "bold" }}>Shopping Cart</Text>
        <TouchableOpacity>
          <Ionicons name="trash" size={24} color="black" />
        </TouchableOpacity>
      </View>
      
      {/* Product Section */}
     
      <View style={{ backgroundColor: "#F5F5F5", borderRadius: 10, padding: 10 }}>
      <ImageBackground 
                source={require("../assets/burger.jpg")} 
                style={{ width:"100%" , height: 200, justifyContent: "flex-end", borderRadius: 5  }}
                resizeMode="contain"
              >
        <View style={{ flexDirection: "row", justifyContent: "center", marginTop: -20 }}>
          <Image source={require("../assets/burger.jpg")} style={{ width: 70, height: 70, borderRadius: 10, marginHorizontal: 10 }} />
          <Image source={require("../assets/burger.jpg")} style={{ width: 70, height: 70, borderRadius: 10, marginHorizontal: 10 }} />
          <Image source={require("../assets/burger.jpg")} style={{ width: 70, height: 70, borderRadius: 10, marginHorizontal: 10}} />
        </View>
        </ImageBackground>
      </View>
      
  <View style={{ flexDirection: "row", justifyContent: "space-between", alignItems: "center", marginVertical: 10 }}>
  {/* Product Details */}
  <View>
    <Text style={{ fontSize: 30, fontWeight: "bold" }}>BURGER</Text>
    <Text style={{ color: "gray" }}>⭐ 4.9 (3k+ Rating)</Text>
    <Text style={{ fontSize: 16, fontWeight: "bold", color: "blue" }}>$28</Text>
  </View>

  {/* Quantity Selector */}
  <View style={{ flexDirection: "row", alignItems: "center",marginBottom: 15}}>
    <TouchableOpacity>
      <Text style={{ fontSize: 20, padding: 10, borderWidth: 1, borderRadius: 50}}> - </Text>
    </TouchableOpacity>
    <Text style={{ fontSize: 18, marginHorizontal: 10 }}>02</Text>
    <TouchableOpacity>
      <Text style={{ fontSize: 20, padding: 10, borderWidth: 1, borderRadius: 45  }}> + </Text>
    </TouchableOpacity>
  </View>
</View>

      {/* Delivery Address */}
      <View style={{ flexDirection: "row", alignItems: "center", backgroundColor: "#E3F2FD", padding: 15, borderRadius: 10, marginBottom: 15 }}>
        <Ionicons name="location" size={20} color="#4A90E2" />
        <Text style={{ marginLeft: 10 }}>Dhaka, Bangladesh</Text>
      </View>

      {/* Payment Method */}
      <View style={{ flexDirection: "row", justifyContent: "space-between", alignItems: "center", padding: 15, borderWidth: 1, borderRadius: 10, marginBottom: 15 }}>
      <FontAwesome name="credit-card" size={30} color="blue" />
        <Text style={{fontSize: 16 }}>Payment Method</Text>
        <TouchableOpacity>
          <Text style={{ color: "#4A90E2" }}>Change</Text>
        </TouchableOpacity>
      </View>

      {/* Checkout Summary */}
      <Text style={{ fontSize: 18, fontWeight: "bold", marginBottom: 10 }}>Checkout Summary</Text>
      <View style={{ flexDirection: "row", justifyContent: "space-between", marginBottom: 5 }}>
        <Text>Subtotal (2)</Text>
        <Text>$56</Text>
      </View>
      <View style={{ flexDirection: "row", justifyContent: "space-between", marginBottom: 5 }}>
        <Text>Delivery Fee</Text>
        <Text>$6.20</Text>
      </View>
      <View style={{ flexDirection: "row", justifyContent: "space-between", marginBottom: 15 }}>
        <Text style={{ fontSize: 16, fontWeight: "bold" }}>Payable Total</Text>
        <Text style={{ fontSize: 16, fontWeight: "bold", color: "#4A90E2" }}>$62.2</Text>
      </View>

      {/* Confirm Button */}
      <TouchableOpacity style={{ backgroundColor: "#4A90E2", padding: 15, borderRadius: 10, alignItems: "center" }}>
        <Text style={{ color: "white", fontSize: 18, fontWeight: "bold" }}>Confirm Order</Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

export default ShoppingCartScreen;