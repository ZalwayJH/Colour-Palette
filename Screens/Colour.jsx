import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Pressable,
  useWindowDimensions,
  PermissionsAndroid,
  Share,
  Alert,
} from "react-native";
import Modal from "react-native-modal";
import * as MediaLibrary from "expo-media-library";
import React, { useState, useRef } from "react";
import ViewShot from "react-native-view-shot";

import ColourCardInfo from "./ColourCardInfo";

const Colour = ({ colourInfo, saveImage, setSaveImage }) => {
  const { width, height } = useWindowDimensions();
  const [infoCardVisibility, setInfoCardVisibility] = useState(false);
  const [selectedCard, setSelectedCard] = useState("");
  const colourData = [];
  const luminVal = [];
  let colourCardHeight = 0;

  const viewRef = useRef();
  async function captureViewShot() {
    const imageURI = await viewRef.current.capture();
    const res = await MediaLibrary.requestPermissionsAsync();

    if (res.granted) {
      MediaLibrary.saveToLibraryAsync(imageURI);
    }
    setSaveImage(false);
  }
  if (saveImage) {
    captureViewShot();
  }

  if (!colourInfo[0].hasOwnProperty("seed")) {
    colourCardHeight = 385;
    colourInfo.map((element) => {
      luminVal.push(element.contrast.value);
      colourData.push({
        [element.name.value]: element.hex.value,
      });
    });
  } else if (colourInfo[0].hasOwnProperty("seed")) {
    colourCardHeight = 77;
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
    <ViewShot
      ref={viewRef}
      options={{
        fileName: "file",
        format: "jpg",
        quality: 1,
      }}
      style={styles.container}
    >
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
        backdropOpacity={0.7}
      >
        <View
          style={{
            flex: 0,
            backgroundColor: "#2E2E2E",
            height: 400,
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
          <ViewShot key={index}>
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
                  width: width,
                }}
              >
                <Text
                  style={{
                    ...styles.colourSpec,
                    color: luminVal[index],
                  }}
                >
                  {hexVal}
                </Text>
                <Text
                  style={{
                    ...styles.colourSpec,
                    color: luminVal[index],
                    opacity: 0.8,
                  }}
                >
                  {colourName}
                </Text>
              </View>
            </TouchableOpacity>
          </ViewShot>
        );
      })}
    </ViewShot>
  );
};

export default Colour;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: "auto",
    alignSelf: "center",
    justifyContent: "center",
    alignItems: "center",
    top: 40,
  },

  colourCard: {
    alignItems: "center",
    alignSelf: "center",
    justifyContent: "center",
    // borderColor: "rgba(255,255,255, 1)",
    // borderWidth: 1,
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
