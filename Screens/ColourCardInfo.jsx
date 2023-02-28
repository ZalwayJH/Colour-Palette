import { StyleSheet, Text, View } from "react-native";
import React from "react";
import CopyToClipboard from "./CopyToClipboard";

const ColourCardInfo = ({ selectedCard, colourInfo }) => {
  const colourCardSpecs = [];
  if (colourInfo[0].hasOwnProperty("seed")) {
    colourInfo[0].colors.forEach((element) => {
      colourCardSpecs.push(element);
    });
  } else if (!colourInfo[0].hasOwnProperty("seed")) {
    colourCardSpecs.push(colourInfo[0]);
  }
  return (
    <View>
      {colourCardSpecs.map((item, index) => {
        const colourSpec = ["hex", "rgb", "cmyk", "hsv"];
        if (item.hex.value === selectedCard) {
          return (
            <View key={index}>
              <View
                style={{ ...styles.colourCard, backgroundColor: selectedCard }}
              >
                <Text
                  style={{
                    color: item.contrast.value,
                    fontWeight: "bold",
                    opacity: 0.8,
                    fontSize: 18,
                  }}
                >
                  {item.name.value}
                </Text>
              </View>
              {colourSpec.map((element, i) => {
                return <CopyToClipboard key={i} item={item[element].value} />;
              })}
            </View>
          );
        }
      })}
    </View>
  );
};

export default ColourCardInfo;

const styles = StyleSheet.create({
  colourSpecInfo: {
    fontWeight: "bold",
    color: "white",
    marginLeft: 0.5,
    marginRight: 0.5,
    opacity: 0.7,
  },
  colourCard: {
    height: 220,
    width: 330,

    justifyContent: "center",
    alignItems: "center",
    alignSelf: "center",
    bottom: 5,
  },
});
