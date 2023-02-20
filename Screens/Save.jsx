import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import React from "react";
import { FontAwesome5 } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";

const Save = () => {
  return (
    <View>
      <TouchableOpacity style={styles.saveButton}>
        <Ionicons name="ios-save" size={30} color="white" />
      </TouchableOpacity>
    </View>
  );
};

export default Save;

const styles = StyleSheet.create({
  saveButton: {
    backgroundColor: "#323232",
    width: 60,
    margin: "auto",
    height: 50,
    justifyContent: "center",
    alignItems: "center",

    borderRadius: 15,
    margin: 5,
  },
});
