import React from "react";
import { View, Text, Image, StyleSheet, TouchableOpacity } from "react-native";

const OnboardingScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Image
        source={require("../assets/devman.jpg")}
        style={styles.backgroundImage}
      />
      <View style={styles.textContainer}>
        <Image source={require("../assets/carot.png")} style={styles.icon} />
        <Text style={styles.title}>Welcome to our store</Text>
        <Text style={styles.subtitle}>Get your groceries in as fast as one hour</Text>
      </View>
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate("SignIn")}
      >
        <Text style={styles.buttonText}>Get Started</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "flex-end",
    alignItems: "center",
  },
  backgroundImage: {
    position: "absolute",
    width: "100%",
    height: "100%",
  },
  textContainer: {
    alignItems: "center",
    marginBottom: 50,
  },
  icon: {
    width: 50,
    height: 50,
    marginBottom: 10,
  },
  title: {
    fontSize: 60,
    fontWeight: "bold",
    color: "white",
    textAlign: "center",
  },
  subtitle: {
    fontSize: 16,
    color: "white",
    textAlign: "center",
    marginTop: 5,
  },
  button: {
    width: "80%",
    backgroundColor: "#6FCF97",
    padding: 20,
    borderRadius: 20,
    alignItems: "center",
    marginBottom: 50,
  },
  buttonText: {
    fontSize: 20,
    color: "white",
    fontWeight: "bold",
  },
});

export default OnboardingScreen;
