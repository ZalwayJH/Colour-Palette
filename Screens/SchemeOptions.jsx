import { StyleSheet, Text, View, TouchableOpacity, Switch } from "react-native";
import { useState, useEffect } from "react";
import Modal from "react-native-modal";
import React from "react";

const SchemeOptions = ({ optionsOpen, setOptionsOpen }) => {
  const [isEnabled, setIsEnabled] = useState(false);
  const toggleSwitch = () => setIsEnabled((previousState) => !previousState);

  return (
    <View>
      <Modal
        style={{ justifyContent: "center", alignItems: "center" }}
        isVisible={optionsOpen}
        animationIn="slideInRight"
        animationOut="slideOutRight"
        backdropTransitionOutTiming={0}
      >
        <View style={styles.optionsModal}>
          <Switch
            trackColor={{ false: "#767577", true: "#81b0ff" }}
            thumbColor={isEnabled ? "blue" : "#f4f3f4"}
            ios_backgroundColor="#3e3e3e"
            onValueChange={toggleSwitch}
            value={isEnabled}
          />
        </View>
        <TouchableOpacity
          style={styles.closeButton}
          onPress={() => {
            setOptionsOpen(false);
          }}
        >
          <View>
            <Text>Close</Text>
          </View>
        </TouchableOpacity>
      </Modal>
    </View>
  );
};

export default SchemeOptions;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  schemeOptionsButton: {
    backgroundColor: "white",
    width: 100,
    margin: "auto",
    height: 30,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 20,
    borderRadius: 15,
  },
  optionsModal: {
    flex: 0,
    backgroundColor: "white",
    height: 250,
    width: 350,
    borderRadius: 15,
  },
  closeButton: {
    backgroundColor: "white",
    width: 75,
    margin: "auto",
    height: 30,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 20,
    borderRadius: 15,
  },
});
