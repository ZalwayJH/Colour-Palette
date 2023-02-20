import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import React, { useState } from "react";

const ApplyRevert = ({ setColour, HEX }) => {
  const [cache, setCache] = useState([]);
  const [revertDisabled, setRevertDisabled] = useState(true);

  return (
    <View style={styles.buttonContainer}>
      <TouchableOpacity
        style={styles.revertButton}
        disabled={revertDisabled}
        onPress={() => {
          cache.pop();
          setColour(cache[cache.length - 1]);
          if (cache.length === 1) {
            setRevertDisabled(true);
          }
        }}
      >
        <Text style={{ color: revertDisabled ? "grey" : "white" }}>Revert</Text>
      </TouchableOpacity>
      <TouchableOpacity
        accessibilityLabel="button for locking in selected colour"
        onPress={() => {
          setColour(HEX);
          setRevertDisabled(false);
          setCache((currentCache) => {
            const copyCache = [...currentCache];
            copyCache.push(HEX);
            return copyCache;
          });
        }}
        style={styles.applyButton}
      >
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
