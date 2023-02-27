import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Clipboard,
} from "react-native";
import React from "react";

const CopyToClipboard = ({ item }) => {
  const saveToClipboard = (text) => {
    Clipboard.setString(text);
  };

  return (
    <View
      style={{
        justifyContent: "space-between",
        flexDirection: "row",
        marginTop: 5,
        borderBottomWidth: 2,
        borderColor: "#191919",
      }}
    >
      <Text
        style={{
          color: "white",
          fontSize: 18,
          height: 30,
        }}
      >
        {item}
      </Text>
      <TouchableOpacity
        onPress={() => {
          saveToClipboard(item);
        }}
        style={{
          borderRadius: 5,
          backgroundColor: "#3F3F3F",
          height: 25,
          justifyContent: "center",
          width: 80,
          alignItems: "center",
        }}
        title="copy"
      >
        <Text style={{ color: "white" }}>COPY</Text>
      </TouchableOpacity>
    </View>
  );
};

export default CopyToClipboard;

const styles = StyleSheet.create({
  colourSpecInfo: {
    fontWeight: "bold",

    color: "white",
    marginLeft: 0.5,
    marginRight: 0.5,
    opacity: 0.7,
  },
  flatList: {},
});
