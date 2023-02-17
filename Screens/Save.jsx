import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import React from "react";

const Save = () => {
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.saveButton}>
        <Text>Save</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Save;

const styles = StyleSheet.create({
  container: {
    margin: "auto",
  },
  saveButton: {
    backgroundColor: "white",
    width: 100,
    margin: "auto",
    height: 30,
    justifyContent: "center",
    alignItems: "center",
    alignSelf: "center",
    bottom: 10,
    borderRadius: 15,
  },
});
