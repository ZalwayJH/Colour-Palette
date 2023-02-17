import { StyleSheet, Text, View } from "react-native";
import React from "react";

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
        if (item.hex.value === selectedCard) {
          return (
            <View
              key={index}
              style={
                {
                  // alignItems: "center",
                }
              }
            >
              <View
                style={{
                  height: 220,
                  width: 330,
                  backgroundColor: selectedCard,
                  justifyContent: "center",
                  alignItems: "center",
                  alignSelf: "center",
                }}
              >
                <Text
                  style={{
                    color: item.contrast.value,
                    fontWeight: "bold",
                    opacity: 0.8,
                  }}
                >
                  {item.name.value}
                </Text>
              </View>
              <Text style={styles.colourSpecInfo}>
                {`Hex          ${item.hex.value}`}
              </Text>
              <Text style={styles.colourSpecInfo}>
                {`Rgb          ${item.rgb.value}`}
              </Text>
              <Text style={styles.colourSpecInfo}>
                {`Cymk      ${item.cmyk.value}`}
              </Text>
              <Text style={styles.colourSpecInfo}>
                {`Hsv          ${item.hsv.value}`}
              </Text>
              <Text style={styles.colourSpecInfo}>
                {`XYZ         ${item.XYZ.value}`}
              </Text>
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
    // borderColor: "black",
    // borderBottomWidth: 0.2,
    marginLeft: 0.5,
    marginRight: 0.5,
    opacity: 0.7,
  },
});
