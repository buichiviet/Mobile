import React, { useState } from "react";
import { View, Button, StyleSheet, Dimensions } from "react-native";

const App = () => {
  const [backgroundColor, setBackgroundColor] = useState("#ffffff");

  return (
    <View style={[styles.container, { backgroundColor }]}>
      <View style={styles.buttonContainer}>
        <Button title="Green" color="#28A745" onPress={() => setBackgroundColor("#28A745")} />
      </View>
      <View style={styles.buttonContainer}>
        <Button title="Blue" color="#0000FF" onPress={() => setBackgroundColor("#0000FF")} />
      </View>
      <View style={styles.buttonContainer}>
        <Button title="Brown" color="#8B4513" onPress={() => setBackgroundColor("#8B4513")} />
      </View>
      <View style={styles.buttonContainer}>
        <Button title="Yellow" color="#FFFF00" onPress={() => setBackgroundColor("#FFFF00")} />
      </View>
      <View style={styles.buttonContainer}>
        <Button title="Red" color="#FF5733" onPress={() => setBackgroundColor("#FF5733")} />
      </View>
      <View style={styles.buttonContainer}>
        <Button title="Black" color="#000000" onPress={() => setBackgroundColor("#000000")} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  buttonContainer: {
    width: Dimensions.get("window").width, 
    marginVertical: 5,
    paddingVertical: 5,
    paddingHorizontal: 20,
    borderRadius: 5,
  },

});

export default App;
