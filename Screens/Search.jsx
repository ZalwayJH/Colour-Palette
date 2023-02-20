import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import React from "react";

const Search = () => {
  return (
    <View>
      <TouchableOpacity style={styles.searchButton}>
        <Text>search</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Search;

const styles = StyleSheet.create({
  searchButton: {
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
