import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import Modal from "react-native-modal";
import React, { useState } from "react";
import ColourCardInfo from "./ColourCardInfo";

const Colour = ({ colourInfo }) => {
  const [infoCardVisibility, setInfoCardVisibility] = useState(false);
  const [selectedCard, setSelectedCard] = useState("");
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
      <Modal
        style={{ justifyContent: "center", alignItems: "center" }}
        isVisible={infoCardVisibility}
        animationIn="fadeIn"
        animationOut="fadeOut"
        backdropTransitionOutTiming={0}
        onBackButtonPress={() => {
          setInfoCardVisibility(false);
        }}
        onBackdropPress={() => {
          setInfoCardVisibility(false);
        }}
        backdropOpacity={0.3}
      >
        <View
          style={{
            flex: 0,
            backgroundColor: "white",
            height: 350,
            width: 350,
            borderRadius: 2,
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <ColourCardInfo selectedCard={selectedCard} colourInfo={colourInfo} />
        </View>
      </Modal>
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
            <TouchableOpacity
              onPress={() => {
                setInfoCardVisibility(true);
                setSelectedCard(hexVal[0]);
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
            </TouchableOpacity>
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
