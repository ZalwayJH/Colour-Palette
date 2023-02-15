import React, { useEffect, useState } from "react";
import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  Pressable,
} from "react-native";
import Save from "./Save";
import ColorPicker, {
  Preview,
  BrightnessSlider,
  HueSlider,
  SaturationSlider,
} from "reanimated-color-picker";
import * as API from "../api";
import Colour from "./Colour";

const Main = () => {
  const [colour, setColour] = useState("0400FF");
  const [HEX, setHex] = useState("0400FF");
  const [colourInfo, setColourInfo] = useState([]);
  const [loading, setLoading] = useState(true);
  const [openned, setOpenned] = useState(true);
  const [schemeOpenned, setSchemeOpenned] = useState(false);

  const onSelectColour = ({ hex }) => {
    setHex(hex.slice(1));
  };

  useEffect(() => {
    if (openned) {
      API.getColours(colour)
        .then(({ data }) => {
          const singleColour = [data];
          setColourInfo(singleColour);
          setLoading(false);
        })
        .catch((err) => {
          alert("Error: Network error, please wait and try again");
        });
    }
  }, [colour, openned]);

  useEffect(() => {
    if (schemeOpenned === true) {
      API.getSchemes(colour)
        .then(({ data }) => {
          const schemes = [data];
          setColourInfo(schemes);
        })
        .catch((err) => {
          alert("Error: Server error, please wait and try again");
        });
    }
  }, [schemeOpenned]);

  return (
    <View style={styles.container}>
      {loading ? <Text>Loading</Text> : <Colour colourInfo={colourInfo} />}
      <TouchableOpacity
        style={styles.schemeButton}
        onPress={() => {
          setSchemeOpenned(!schemeOpenned);
          setOpenned(!openned);
        }}
      >
        <Text>Schemes</Text>
      </TouchableOpacity>
      <ColorPicker
        style={styles.colourPicker}
        sliderThickness={30}
        thumbSize={40}
        thumbShape="pill"
        value="blue"
        onComplete={onSelectColour}
      >
        <TouchableOpacity
          onPress={() => {
            setColour(HEX);
            setOpenned(true);
            setSchemeOpenned(false);
          }}
        >
          <Text style={{ alignSelf: "center", color: "white" }}>
            Press Here to lock in colour
          </Text>
          <Preview
            style={[styles.previewStyle, styles.shadow]}
            colorFormat="none"
            hideInitialColor
          />
        </TouchableOpacity>
        <HueSlider style={[styles.sliders, styles.shadow]} />
        <BrightnessSlider style={[styles.sliders, styles.shadow]} />
        <SaturationSlider style={[styles.sliders, styles.shadow]} />
      </ColorPicker>

      <Save />
    </View>
  );
};

export default Main;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#383454",
    paddingBottom: 0,
    width: "100%",
    maxWidth: 500,
    margin: "auto",
  },
  colourPicker: {
    width: "75%",
    justifyContent: "center",
    marginBottom: 0,
    paddingBottom: 0,
  },
  sliders: {
    borderRadius: 15,
    marginBottom: 25,
  },
  sliderLabel: {
    fontSize: 20,
    color: "#000",
    marginBottom: 10,
  },
  previewStyle: {
    height: 55,
    borderRadius: 50,
    marginBottom: 30,
  },
  shadow: {
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },

  colourSpec: {
    color: "#575757",
    margin: "auto",
    fontWeight: "500",
  },
  schemeButton: {
    backgroundColor: "white",
    width: 100,
    margin: "auto",
    height: 30,
    justifyContent: "center",
    alignItems: "center",
    alignSelf: "center",
    marginTop: 120,
    borderRadius: 15,
  },
});
