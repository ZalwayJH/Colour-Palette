import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import { Foundation } from "@expo/vector-icons";
import React from "react";

const Search = () => {
  return (
    <View>
      <TouchableOpacity style={styles.searchButton}>
        <Foundation name="magnifying-glass" size={30} color="white" />
      </TouchableOpacity>
    </View>
  );
};

export default Search;

const styles = StyleSheet.create({
  searchButton: {
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
