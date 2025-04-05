import React from "react";
import { View, Text, Image, TouchableOpacity, Switch, ScrollView } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

const ProfileScreen = () => {
  const navigation = useNavigation();
  const [isDarkMode, setIsDarkMode] = React.useState(false);

  return (
    <ScrollView style={{ flex: 1, backgroundColor: "#fff", padding: 20 }}>
      {/* Header */}
      <View style={{ flexDirection: "row", alignItems: "center", marginBottom: 20 }}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Ionicons name="arrow-back" size={24} color="black" />
        </TouchableOpacity>
        <Text style={{ flex: 1, textAlign: "center", fontSize: 18, fontWeight: "bold" }}>Profile</Text>
      </View>
      
      {/* Profile Info */}
      <View style={{ alignItems: "center", marginBottom: 20 }}>
        <Image source={require("../assets/avatar.png")} style={{ width: 100, height: 100, borderRadius: 50 }} />
        <Text style={{ fontSize: 20, fontWeight: "bold", marginTop: 10 }}>Rakibul Hasan</Text>
        <Text style={{ color: "gray" }}>rakibhbrand@gmail.com</Text>
      </View>

      {/* Menu Options */}
      <TouchableOpacity onPress={() => navigation.navigate("HomeScreen")} style={{ flexDirection: "row", alignItems: "center", paddingVertical: 10 }}>
        <Ionicons name="home" size={24} color="black" style={{ marginRight: 10 }} />
        <Text style={{ fontSize: 16 }}>Home</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate("ShoppingCartScreen")} style={{ flexDirection: "row", alignItems: "center", paddingVertical: 10 }}>
        <Ionicons name="cart" size={24} color="black" style={{ marginRight: 10 }} />
        <Text style={{ fontSize: 16 }}>My Cart</Text>
      </TouchableOpacity>
      <View style={{ flexDirection: "row", alignItems: "center", justifyContent: "space-between", paddingVertical: 10 }}>
        <View style={{ flexDirection: "row", alignItems: "center" }}>
          <Ionicons name="moon" size={24} color="black" style={{ marginRight: 10 }} />
          <Text style={{ fontSize: 16 }}>Dark Mode</Text>
        </View>
        <Switch value={isDarkMode} onValueChange={setIsDarkMode} />
      </View>
      <TouchableOpacity style={{ flexDirection: "row", alignItems: "center", paddingVertical: 10 }}>
        <Ionicons name="settings" size={24} color="black" style={{ marginRight: 10 }} />
        <Text style={{ fontSize: 16 }}>Settings</Text>
      </TouchableOpacity>
      <TouchableOpacity style={{ flexDirection: "row", alignItems: "center", paddingVertical: 10 }}>
        <Ionicons name="help-circle" size={24} color="black" style={{ marginRight: 10 }} />
        <Text style={{ fontSize: 16 }}>Help Center</Text>
      </TouchableOpacity>

      {/* Logout Button */}
      <TouchableOpacity style={{ backgroundColor: "#4A90E2", padding: 15, borderRadius: 10, alignItems: "center", marginTop: 20 }}>
        <Text style={{ color: "white", fontSize: 18, fontWeight: "bold" }}>Log Out</Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

export default ProfileScreen;