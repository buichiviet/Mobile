import React from "react";
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Image } from 'react-native';

const SignupScreen = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <Image source={require("../assets/carot.png")} style={styles.logo} />
      <Text style={styles.title}>Sign Up</Text>
      <Text style={styles.subtitle}>Enter your credentials to continue</Text>

      <Text style={styles.label}>Username</Text>
      <TextInput style={styles.input} placeholder="Your Name" />
      
      <Text style={styles.label}>Email</Text>
      <TextInput style={styles.input} placeholder="Your Email" keyboardType="email-address" />
      
      <Text style={styles.label}>Password</Text>
      <TextInput style={styles.input} placeholder="Password" secureTextEntry={true} />

      <Text style={styles.terms}>
        By continuing you agree to our <Text style={styles.link}>Terms of Service</Text> and <Text style={styles.link}>Privacy Policy</Text>.
      </Text>

      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Sign Up</Text>
      </TouchableOpacity>
      
      <Text style={styles.footer}>
        Already have an account? <Text style={styles.link} onPress={() => navigation.navigate("LoginScreen")}>Login</Text>
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#F9F9F9",
    padding: 20,
  },
  logo: {
    width: 50,
    height: 50,
    marginBottom: 100,
  },
  title: {
    fontSize: 40,
    fontWeight: "bold",
    textAlign: "left",  
    alignSelf: "flex-start",
  },
  subtitle: {
    fontSize: 20,
    color: "gray",
    marginBottom: 60,
    textAlign: "left",  
    alignSelf: "flex-start",
  },
  label: {
    alignSelf: "flex-start",
    marginLeft: 10,
    marginBottom: 5,
    fontWeight: "bold",
  },
  input: {
    width: "100%",
    height: 50,
    borderWidth: 1,
    borderColor: "#ddd",
    borderRadius: 10,
    paddingLeft: 10,
    marginBottom: 15,
    backgroundColor: "#fff",
  },
  terms: {
    fontSize: 12,
    color: "gray",
    textAlign: "center",
    marginBottom: 20,
  },
  link: {
    color: "#6CBF67",
    fontWeight: "bold",
  },
  button: {
    backgroundColor: "#6CBF67",
    padding: 15,
    borderRadius: 10,
    alignItems: "center",
    width: "100%",
  },
  buttonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
  },
  footer: {
    marginTop: 20,
    fontSize: 14,
  },
});

export default SignupScreen;