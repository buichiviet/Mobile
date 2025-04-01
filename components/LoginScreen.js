import React, { useState } from "react";
import { 
  View, Text, TextInput, TouchableOpacity, Image, StyleSheet 
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Ionicons } from "@expo/vector-icons";

const LoginScreen = () => {
  const navigation = useNavigation();
  const [passwordVisible, setPasswordVisible] = useState(false);

  return (
    <View style={styles.container}>
      {/* Logo */}
      <Image source={require("../assets/carot.png")} style={styles.logo} />
      
      {/* Title */}
      <Text style={styles.title}>Login</Text>
      <Text style={styles.subtitle}>Enter your email and password</Text>

      {/* Email Input */}
      <Text style={styles.label}>Email</Text>
      <TextInput style={styles.input} placeholder="Enter your email" />
      
      {/* Password Input */}
      <Text style={styles.label}>Password</Text>
      <View style={styles.passwordContainer}>
        <TextInput 
          style={styles.input}
          placeholder="Enter your password"
          secureTextEntry={!passwordVisible}
        />
        <TouchableOpacity 
          style={styles.eyeIcon} 
          onPress={() => setPasswordVisible(!passwordVisible)}
        >
          <Ionicons name={passwordVisible ? "eye-off" : "eye"} size={24} color="#aaa" />
        </TouchableOpacity>
      </View>
      
      {/* Forgot Password */}
      <TouchableOpacity style={styles.forgotContainer}>
  <Text style={styles.forgotText}>Forgot Password?</Text>
</TouchableOpacity>

      {/* Log In Button */}
      <TouchableOpacity 
        style={styles.loginButton} 
        onPress={() => navigation.navigate("LocationScreen")}
      >
        <Text style={styles.loginText}>Log In</Text>
      </TouchableOpacity>
      
      {/* Sign Up Link */}
      <TouchableOpacity onPress={() => navigation.navigate("SignupScreen")}>
        <Text style={styles.signupText}>
          Don’t have an account? 
          <Text style={styles.signupLink}> Sign up</Text>
        </Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F9F9F9",
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: 20,
  },
  logo: {
    width: 50,
    height: 50,
    marginBottom: 100,
  },
  title: {
    fontSize: 40,
    fontWeight: "bold",
    marginBottom: 5,
    textAlign: "left",  
    alignSelf: "flex-start", 
  },
  subtitle: {
    fontSize: 20,
    color: "#666",
    marginBottom: 60,
    textAlign: "left",  
    alignSelf: "flex-start", 
  },
  label: {
    alignSelf: "flex-start",
    fontSize: 14,
    fontWeight: "bold",
    marginBottom: 5,
  },
  input: {
    width: "100%",
    height: 50,
    borderWidth: 1,
    borderColor: "#ddd",
    borderRadius: 8,
    paddingLeft: 10,
    marginBottom: 15,
    backgroundColor: "#fff",
  },
  passwordContainer: {
    flexDirection: "row",
    alignItems: "center",
    width: "100%",
  },
  eyeIcon: {
    position: "absolute",
    right: 15,
  },
  forgotContainer: {
    width: "100%", 
    alignItems: "flex-end", // Đẩy nội dung sang phải
    marginBottom: 20,
  },
  forgotText: {
    color: "#000000",
    fontSize: 14,
    fontWeight: "bold",
  },
  loginButton: {
    width: "100%",
    backgroundColor: "#6CBF67",
    padding: 15,
    borderRadius: 8,
    alignItems: "center",
    marginBottom: 20,
  },
  loginText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
  },
  signupText: {
    fontSize: 14,
    color: "#666",
  },
  signupLink: {
    color: "#6CBF67",
    fontWeight: "bold",
  },
});

export default LoginScreen;
