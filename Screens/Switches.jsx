import { StyleSheet, Text, View, Switch } from "react-native";
import React from "react";

const Switches = ({
  setSchemeSetting,
  monochrome,
  setMonochrome,
  analogic,
  setAnalogic,
  complement,
  setComplement,
  analogicComplement,
  setAnalogicComplement,
}) => {
  const toggleAnalogic = () => {
    setAnalogic(true);
    setMonochrome(false);
    setAnalogicComplement(false);
    setComplement(false);
    setSchemeSetting("&mode=analogic");
  };
  const toggleComplement = () => {
    setComplement(true);
    setMonochrome(false);
    setAnalogicComplement(false);
    setAnalogic(false);
    setSchemeSetting("&mode=complement");
  };
  const toggleAnalogicComplement = () => {
    setAnalogicComplement(true);
    setMonochrome(false);
    setAnalogic(false);
    setComplement(false);
    setSchemeSetting("&mode=analogic-complement");
  };
  const toggleMonochrome = () => {
    setMonochrome(true);
    setAnalogic(false);
    setAnalogicComplement(false);
    setComplement(false);
    setSchemeSetting("&mode=monochrome");
  };

  return (
    <View style={styles.switchContainer}>
      <Switch
        style={[
          styles.schemeSwitches,
          {
            transform: [{ scale: 1.3 }],
          },
        ]}
        trackColor={{ false: "#767577", true: "#A9FF8C" }}
        thumbColor={"#f4f3f4"}
        ios_backgroundColor="#3e3e3e"
        onValueChange={toggleMonochrome}
        value={monochrome}
      />
      <Text style={{ ...styles.schemeNames, paddingRight: 125 }}>
        Monochrome
      </Text>
      <View style={styles.separator}></View>
      <Switch
        style={[
          styles.schemeSwitches,
          {
            transform: [{ scale: 1.3 }],
          },
        ]}
        trackColor={{ false: "#767577", true: "#A9FF8C" }}
        thumbColor={"#f4f3f4"}
        ios_backgroundColor="#3e3e3e"
        onValueChange={toggleAnalogic}
        value={analogic}
      />
      <Text style={{ ...styles.schemeNames, paddingRight: 160 }}>Analogic</Text>
      <View style={styles.separator}></View>
      <Switch
        style={[
          styles.schemeSwitches,
          {
            transform: [{ scale: 1.3 }],
          },
        ]}
        trackColor={{ false: "#767577", true: "#A9FF8C" }}
        thumbColor={"#f4f3f4"}
        ios_backgroundColor="#3e3e3e"
        onValueChange={toggleComplement}
        value={complement}
      />
      <Text style={{ ...styles.schemeNames, paddingRight: 130 }}>
        Complement
      </Text>
      <View style={styles.separator}></View>
      <Switch
        style={[
          styles.schemeSwitches,
          {
            transform: [{ scale: 1.3 }],
          },
        ]}
        trackColor={{ false: "#767577", true: "#A9FF8C" }}
        thumbColor={"#f4f3f4"}
        ios_backgroundColor="#3e3e3e"
        onValueChange={toggleAnalogicComplement}
        value={analogicComplement}
      />
      <Text style={{ ...styles.schemeNames, paddingRight: 68 }}>
        Analogic Complement
      </Text>
      <View style={styles.separator}></View>
    </View>
  );
};

export default Switches;

const styles = StyleSheet.create({
  switchContainer: {
    flex: 1,
    flexDirection: "column",
    right: 50,
    top: 5,
  },
  schemeNames: {
    flex: 3,
    alignSelf: "flex-start",
    margin: 0,
    bottom: 20,
    padding: 5,
    // borderRadius: 14,
    paddingLeft: 40,
    color: "white",
    marginLeft: 60,
    fontSize: 18,
  },
  schemeSwitches: {
    flex: 3,
    top: 10,
    right: 30,
  },
  separator: {
    backgroundColor: "#2E2E2E",
    height: 3,
    width: 350,
    alignSelf: "center",
    justifyContent: "center",
    left: 50,
    bottom: 20,
  },
});
