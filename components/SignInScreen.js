import React from "react";
import { View, Text, TextInput, TouchableOpacity, ImageBackground, StyleSheet } from "react-native";
import { useNavigation } from "@react-navigation/native"; // Import useNavigation

const SignInScreen = () => {
  const navigation = useNavigation(); // Khai báo navigation

  return (
    <ImageBackground 
      source={require("../assets/giohang.png")} 
      style={styles.background}
    >
      <View style={styles.container}>
        <Text style={styles.title}>Get your groceries with nectar</Text>
        <TextInput 
          style={styles.input} 
          placeholder="Mobile Number" 
          placeholderTextColor="#aaa"
        />
        
        <TouchableOpacity 
        style={styles.button} 
        onPress={() => navigation.navigate("EnterNumber")}
        >
          <Text style={styles.buttonText}>Continue</Text>
        </TouchableOpacity>

        <Text style={styles.orText}>Or connect with social media</Text>
        <TouchableOpacity style={styles.socialButton}>
          <Text style={styles.socialButtonText}>Continue with Google</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.socialButton}>
          <Text style={styles.socialButtonText}>Continue with Facebook</Text>
        </TouchableOpacity>
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  background: {
    flex: 1,
    width: "100%",
    height: "65%",
    resizeMode: "cover",
    justifyContent: "flex-end", // Đẩy nội dung xuống dưới
  },
  container: {
    backgroundColor: "rgba(255, 255, 255, 0.9)",
    padding: 20,
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
  },
  title: {
    fontSize: 30,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 20,
  },
  input: {
    height: 50,
    borderWidth: 1,
    borderColor: "#ddd",
    borderRadius: 10,
    paddingLeft: 10,
    marginBottom: 20,
    backgroundColor: "#fff",
  },
  button: {
    backgroundColor: "#6CBF67",
    padding: 15,
    borderRadius: 10,
    alignItems: "center",
    marginBottom: 20,
  },
  buttonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
  },
  orText: {
    textAlign: "center",
    marginBottom: 10,
    color: "#666",
  },
  socialButton: {
    backgroundColor: "#E0E0E0",
    padding: 15,
    borderRadius: 10,
    alignItems: "center",
    marginBottom: 10,
  },
  socialButtonText: {
    fontSize: 16,
    color: "#333",
  },
});

export default SignInScreen;
