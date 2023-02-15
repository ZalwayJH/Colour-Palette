import { View, Text, StyleSheet, TouchableOpacity } from "react-native";

import React from "react";

const Colour = ({ colourInfo }) => {
  const colourData = [];
  const luminVal = [];
  let colourCardHeight = 0;

  if (!colourInfo[0].hasOwnProperty("seed")) {
    colourCardHeight = 334;
    colourInfo.map((element) => {
      luminVal.push(element.contrast.value);
      colourData.push({
        [element.name.value]: element.hex.value,
      });
    });
  } else if (colourInfo[0].hasOwnProperty("seed")) {
    colourCardHeight = 70;
    luminVal.push(colourInfo[0].seed.contrast.value);
    colourData.push({
      [colourInfo[0].seed.name.value]: colourInfo[0].seed.hex.value,
    });
    colourInfo.forEach((element) => {
      element.colors.map((item) => {
        luminVal.push(item.contrast.value);
        colourData.push({
          [item.name.value]: item.hex.value,
        });
      });
    });
  }

  return (
    <View style={styles.container}>
      {colourData.map((colour, index) => {
        const colourName = Object.keys(colour);
        const hexVal = Object.values(colour);
        return (
          <View
            key={index}
            style={{
              flex: 1,
            }}
          >
            <View
              style={{
                ...styles.colourCard,
                backgroundColor: hexVal[0],
                height: colourCardHeight,
              }}
            >
              <Text
                style={{
                  ...styles.colourSpec,
                  color: luminVal[index],
                }}
              >
                {colourName}
              </Text>
              <Text
                style={{
                  ...styles.colourSpec,
                  color: luminVal[index],
                }}
              >
                {hexVal}
              </Text>
            </View>
          </View>
        );
      })}
    </View>
  );
};

export default Colour;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: "auto",

    width: 350,
    alignSelf: "center",
    justifyContent: "center",
    alignItems: "center",
    height: 200,
    top: 100,
  },

  colourCard: {
    alignItems: "center",
    alignSelf: "center",
    justifyContent: "center",
    width: 350,
    borderColor: "white",
    borderWidth: 1,
    borderLeftWidth: 0,
    borderRightWidth: 0,
  },
  colourSpec: {
    alignSelf: "center",
    justifyContent: "center",
    alignItems: "center",
    color: "white",
    fontWeight: "500",
  },
  schemeButton: {
    alignSelf: "center",
    color: "#575757",
    fontWeight: "500",
  },
});
