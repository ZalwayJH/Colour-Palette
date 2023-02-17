import { StyleSheet, Text, View, TouchableOpacity, Switch } from "react-native";
import { useState, useEffect } from "react";
import Modal from "react-native-modal";
import React from "react";
import Switches from "./Switches";

const SchemeOptions = ({ optionsOpen, setOptionsOpen, setSchemeSetting }) => {
  const [monochrome, setMonochrome] = useState(false);
  const [analogic, setAnalogic] = useState(true);
  const [complement, setComplement] = useState(false);
  const [analogicComplement, setAnalogicComplement] = useState(false);
  return (
    <View>
      <Modal
        style={{ justifyContent: "center", alignItems: "center", top: 160 }}
        isVisible={optionsOpen}
        animationIn="slideInRight"
        animationOut="slideOutRight"
        backdropTransitionOutTiming={0}
        onBackButtonPress={() => {
          setOptionsOpen(false);
        }}
        backdropOpacity={0.3}
      >
        <View style={styles.optionsModal}>
          <Switches
            setSchemeSetting={setSchemeSetting}
            monochrome={monochrome}
            setMonochrome={setMonochrome}
            analogic={analogic}
            setAnalogic={setAnalogic}
            complement={complement}
            setComplement={setComplement}
            analogicComplement={analogicComplement}
            setAnalogicComplement={setAnalogicComplement}
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
    backgroundColor: "rgba(75, 75, 75, 1)",
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
    marginTop: 10,
    borderRadius: 15,
  },
});
