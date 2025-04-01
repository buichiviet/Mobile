import React, { useState } from "react";
import { View, Text, TouchableOpacity, TextInput, StyleSheet, Image } from "react-native";
import { Picker } from "@react-native-picker/picker";
import { useNavigation } from "@react-navigation/native";
import { Ionicons } from "@expo/vector-icons";

const LocationScreen = () => {
  const navigation = useNavigation();
  const [selectedZone, setSelectedZone] = useState("Banasree");
  const [selectedArea, setSelectedArea] = useState("");

  // Hàm điều hướng khi nhấn "Submit"
  const handleSubmit = () => {
    // Chuyển sang màn hình LoginScreen
    navigation.navigate("LoginScreen");
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backButton}>
        <Ionicons name="arrow-back" size={24} color="black" />
      </TouchableOpacity>

        <View style={styles.imageContainer}>
            <Image source={require("../assets/location.png")} style={styles.logo} />
        </View>


      <Text style={styles.title}>Select Your Location</Text>
      <Text style={styles.subtitle}>
        Switch on your location to stay in tune with what’s happening in your area
      </Text>

      <Text style={styles.label}>Your Zone</Text>
      <View style={styles.pickerContainer}>
        <Picker
          selectedValue={selectedZone}
          onValueChange={(itemValue) => setSelectedZone(itemValue)}
          style={styles.picker}
        >
          <Picker.Item label="Vietnam" value="Vietnam" />
          <Picker.Item label="China" value="China" />
          <Picker.Item label="Thailand" value="Thailand" />
        </Picker>
      </View>

      <Text style={styles.label}>Your Area</Text>
      <TextInput
        style={styles.input}
        placeholder="Types of your area"
        value={selectedArea}
        onChangeText={setSelectedArea}
      />

      <TouchableOpacity style={styles.button} onPress={handleSubmit}>
        <Text style={styles.buttonText}>Submit</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: "#F8F8F8",
  },
  logo: {
    width: 300,
    height: 300,
    marginBottom: 10,
    alignSelf: "center",
  },
  backButton: {
    position: "absolute",
    top: 40,
    left: 20,
  },
  iconContainer: {
    alignItems: "center",
    marginTop: 80,
    marginBottom: 20,
  },
  title: {
    fontSize: 22,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 10,
  },
  subtitle: {
    textAlign: "center",
    color: "gray",
    marginBottom: 100,
  },
  label: {
    fontSize: 16,
    fontWeight: "bold",
    marginBottom: 5,
  },
  pickerContainer: {
    backgroundColor: "white",
    borderRadius: 10,
    marginBottom: 20,
  },
  picker: {
    height: 50,
  },
  input: {
    backgroundColor: "white",
    borderRadius: 10,
    padding: 15,
    marginBottom: 30,
  },
  button: {
    backgroundColor: "#6CBF67",
    padding: 15,
    borderRadius: 10,
    alignItems: "center",
  },
  buttonText: {
    color: "white",
    fontSize: 16,
    fontWeight: "bold",
  },
});

export default LocationScreen;