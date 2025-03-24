import React, { useState } from "react";
import { View, Text, TextInput, StyleSheet, TouchableOpacity } from "react-native";

const VerificationScreen = ({ navigation }) => {
  const [otp, setOtp] = useState("");

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Enter your 4-digit code</Text>
      <TextInput
        style={styles.input}
        placeholder="----"
        keyboardType="number-pad"
        maxLength={4}
        value={otp}
        onChangeText={setOtp}
      />
      <TouchableOpacity
        style={styles.button}
        onPress={() => console.log("OTP Verified")}
        disabled={otp.length < 4}
      >
        <Text style={styles.buttonText}>→</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => console.log("Resend OTP")}
        style={styles.resendButton}>
        <Text style={styles.resendText}>Resend Code</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "white",
    padding: 20,
  },
  title: {
    fontSize: 30,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 20,
  },
  input: {
    width: "50%",
    borderWidth: 1,
    borderColor: "gray",
    borderRadius: 8,
    padding: 10,
    fontSize: 24,
    textAlign: "center",
    marginBottom: 20,
  },
  button: {
    backgroundColor: "#53B175",
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 50,
    alignItems: "center",
  },
  buttonText: {
    color: "white",
    fontSize: 24,
    fontWeight: "bold",
  },
  resendButton: {
    marginTop: 20,
  },
  resendText: {
    color: "#53B175",
    fontSize: 16,
  },
});

export default VerificationScreen;
