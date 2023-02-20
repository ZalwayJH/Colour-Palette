import React, { useEffect, useState } from "react";
import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  Pressable,
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
import * as API from "../api";
import Colour from "./Colour";
import SchemeOptions from "./SchemeOptions";
import Loading from "./Loading";
import Search from "./Search";
import ApplyRevert from "./ApplyRevert";
import { LinearGradient } from "expo-linear-gradient";

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

  const { width, height } = useWindowDimensions();

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
    if (schemeOpenned === true) {
      API.getSchemes(colour, schemeSetting)
        .then(({ data }) => {
          const schemes = [data];
          setColourInfo(schemes);
        })
        .catch((err) => {
          alert("Network error, please wait and try again");
        });
    }
  }, [schemeOpenned, schemeSetting, randomColour]);

  return (
    <View style={styles.container}>
      <LinearGradient
        style={{
          position: "absolute",
          left: 0,
          right: 0,
          top: 0,
          height: 900,
        }}
        colors={["#242436", "transparent"]}
      />
      {loading ? (
        <Loading loading={loading} />
      ) : (
        <Colour colourInfo={colourInfo} />
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
          <Text>Random</Text>
        </TouchableOpacity>
        <Search />
        <TouchableOpacity
          accessibilityLabel="button for viewing schemes"
          style={styles.schemeButton}
          onPress={() => {
            setSchemeOpenned(!schemeOpenned);
            setOpenned(!openned);
          }}
        >
          <Text>{schemeOpenned === true ? "Scheme" : "Colour"}</Text>
        </TouchableOpacity>
        <Save />
        <TouchableOpacity
          accessibilityLabel="button for scheme options"
          style={styles.schemeOptionsButton}
          onPress={() => {
            setOptionsOpen(!optionsOpen);
          }}
        >
          <Text>Options</Text>
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
        thumbShape="pill"
        value="blue"
        onComplete={onSelectColour}
      >
        <TouchableOpacity
          accessibilityLabel="button for locking in selected colour"
          onPress={() => {
            setColour(HEX);
            setOpenned(true);
            setSchemeOpenned(false);
          }}
        >
          <Preview
            style={[styles.previewStyle, styles.shadow]}
            colorFormat="none"
            hideInitialColor
          />
        </TouchableOpacity>
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
        <ApplyRevert />
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
    top: 20,
    width: "75%",
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
    backgroundColor: "white",
    width: 100,
    margin: "auto",
    top: 5,
    justifyContent: "center",
    alignItems: "center",
    height: 40,
    borderRadius: 50,
    margin: 5,
  },
  randomButton: {
    backgroundColor: "white",
    width: 60,
    margin: "auto",
    top: 5,
    justifyContent: "center",
    alignItems: "center",
    height: 40,
    borderRadius: 15,
    margin: 5,
  },
  schemeOptionsButton: {
    backgroundColor: "white",
    width: 60,
    margin: "auto",
    top: 5,
    justifyContent: "center",
    alignItems: "center",
    height: 40,
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
