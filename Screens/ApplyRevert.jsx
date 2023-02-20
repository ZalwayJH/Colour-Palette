import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import React from "react";

const ApplyRevert = () => {
  return (
    <View style={styles.buttonContainer}>
      <TouchableOpacity style={styles.revertButton}>
        <Text>Revert</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.applyButton}>
        <Text style={{ color: "white" }}>Apply</Text>
      </TouchableOpacity>
    </View>
  );
};

export default ApplyRevert;

const styles = StyleSheet.create({
  revertButton: {
    backgroundColor: "#444444",
    width: 130,
    margin: "auto",

    justifyContent: "center",
    alignItems: "center",
    height: 40,
    borderRadius: 50,
    margin: 5,
  },
  applyButton: {
    width: 130,
    margin: "auto",
    backgroundColor: "#3A4B87",
    justifyContent: "center",
    alignItems: "center",
    height: 40,
    borderRadius: 50,
    margin: 5,
  },
  buttonContainer: {
    flex: 0,
    width: 280,
    margin: "auto",
    justifyContent: "center",
    alignSelf: "center",
    flexDirection: "row",
    backgroundColor: "#1A1A1A",
    borderRadius: 50,
  },
});
