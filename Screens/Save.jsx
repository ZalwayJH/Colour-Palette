import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import React from "react";

const Save = () => {
  return (
    <View>
      <TouchableOpacity style={styles.saveButton}>
        <Text>Save</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Save;

const styles = StyleSheet.create({
  saveButton: {
    backgroundColor: "white",
    width: 60,
    margin: "auto",
    height: 40,
    justifyContent: "center",
    alignItems: "center",
    top: 5,
    borderRadius: 15,
    margin: 5,
  },
});
