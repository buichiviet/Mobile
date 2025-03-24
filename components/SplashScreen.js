import React, { useEffect } from "react";
import { View, Image, Text, StyleSheet } from "react-native";

const SplashScreen = ({ navigation }) => {
  useEffect(() => {
    setTimeout(() => {
      navigation.replace("Onboarding");
    }, 5000);
  }, []);

  return (
    <View style={styles.container}>
      <Image source={require("../assets/logo.jpg")} style={styles.logo} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#53B175",
  },
  logo: {
    width: 200,
    height: 200,
    resizeMode: "contain",
  },
});

export default SplashScreen;
