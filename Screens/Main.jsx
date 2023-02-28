import React, { useEffect, useState } from "react";
import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  useWindowDimensions,
} from "react-native";
import Save from "./Save";
import ColorPicker, {
  Preview,
  BrightnessSlider,
  HueSlider,
  SaturationSlider,
  colorKit,
} from "reanimated-color-picker";
import Ionicons from "@expo/vector-icons/Ionicons";

import { FontAwesome5 } from "@expo/vector-icons";

import * as API from "../api";
import Colour from "./Colour";
import SchemeOptions from "./SchemeOptions";
import Loading from "./Loading";
import Search from "./Search";
import ApplyRevert from "./ApplyRevert";

const Main = () => {
  const [colour, setColour] = useState("0400FF");
  const [HEX, setHex] = useState("0400FF");
  const [colourInfo, setColourInfo] = useState([]);
  const [loading, setLoading] = useState(true);
  const [openned, setOpenned] = useState(true);
  const [schemeOpenned, setSchemeOpenned] = useState(false);
  const [optionsOpen, setOptionsOpen] = useState(false);
  const [schemeSetting, setSchemeSetting] = useState("&mode=analogic");
  const [randomColour, setRandomColour] = useState(false);
  const [saveImage, setSaveImage] = useState(false);

  const { width } = useWindowDimensions();

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
          alert("Network error, please wait and try again");
        });
    }
  }, [colour, openned]);

  useEffect(() => {
    if (schemeOpenned) {
      API.getSchemes(colour, schemeSetting)
        .then(({ data }) => {
          const schemes = [data];
          setColourInfo(schemes);
        })
        .catch((err) => {
          alert("Network error, please wait and try again");
        });
    }
  }, [schemeOpenned, schemeSetting, randomColour, colour]);

  return (
    <View style={styles.container}>
      {loading ? (
        <Loading loading={loading} />
      ) : (
        <Colour
          colourInfo={colourInfo}
          saveImage={saveImage}
          setSaveImage={setSaveImage}
        />
      )}

      <View style={{ ...styles.buttonContainer, width: width }}>
        <TouchableOpacity
          accessibilityLabel="Random colour button"
          style={styles.randomButton}
          onPress={() => {
            setColour(colorKit.randomRgbColor().hex().slice(1));
            setRandomColour(!randomColour);
          }}
        >
          <FontAwesome5 name="dice" size={30} color="white" />
        </TouchableOpacity>

        <Search setColour={setColour} />

        <TouchableOpacity
          accessibilityLabel="button for viewing schemes"
          style={styles.schemeButton}
          onPress={() => {
            setSchemeOpenned(!schemeOpenned);
            setOpenned(!openned);
          }}
        >
          <Text style={{ color: "white", fontWeight: "bold", fontSize: 15 }}>
            {schemeOpenned === true ? "Scheme" : "Colour"}
          </Text>
        </TouchableOpacity>
        <Save setSaveImage={setSaveImage} />
        <TouchableOpacity
          accessibilityLabel="button for scheme options"
          style={styles.schemeOptionsButton}
          onPress={() => {
            setOptionsOpen(!optionsOpen);
          }}
        >
          <Ionicons name="options" size={30} color="white" />
        </TouchableOpacity>
        <SchemeOptions
          optionsOpen={optionsOpen}
          setOptionsOpen={setOptionsOpen}
          schemeSetting={schemeSetting}
          setSchemeSetting={setSchemeSetting}
        />
      </View>
      <ColorPicker
        style={styles.colourPicker}
        sliderThickness={30}
        thumbSize={40}
        thumbShape="circle"
        value="blue"
        onComplete={onSelectColour}
      >
        <Preview
          style={[styles.previewStyle, styles.shadow]}
          colorFormat="none"
          hideInitialColor
        />

        <HueSlider
          accessibilityLabel="colour slider"
          style={[styles.sliders, styles.shadow]}
        />
        <BrightnessSlider
          accessibilityLabel="brightness slider"
          style={[styles.sliders, styles.shadow]}
        />
        <SaturationSlider
          accessibilityLabel="saturation slider"
          style={[styles.sliders, styles.shadow]}
        />
        <ApplyRevert setColour={setColour} HEX={HEX} />
      </ColorPicker>
    </View>
  );
};

export default Main;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingBottom: 0,
    width: "100%",
    margin: "auto",
    backgroundColor: "#2E2E2E",
  },
  colourPicker: {
    flex: 1,
    top: 20,
    width: 350,
    justifyContent: "center",
    marginBottom: 0,
    paddingBottom: 0,
    marginTop: 20,
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
    borderColor: "white",
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
    backgroundColor: "#677CC9",
    width: 100,
    margin: "auto",

    justifyContent: "center",
    alignItems: "center",
    height: 50,
    borderRadius: 50,
    margin: 5,
  },
  randomButton: {
    backgroundColor: "#323232",
    width: 60,
    margin: "auto",
    top: 0,
    justifyContent: "center",
    alignItems: "center",
    height: 50,
    borderRadius: 15,
    margin: 5,
  },
  schemeOptionsButton: {
    backgroundColor: "#323232",
    width: 60,
    margin: "auto",

    justifyContent: "center",
    alignItems: "center",
    height: 50,
    borderRadius: 15,
    margin: 5,
  },
  buttonContainer: {
    flex: 0,
    height: 60,
    top: 50,

    margin: "auto",
    justifyContent: "center",
    alignSelf: "center",
    flexDirection: "row",
    backgroundColor: "#1A1A1A",
  },
});
