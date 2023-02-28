import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import { useState } from "react";
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
        onBackdropPress={() => {
          setOptionsOpen(false);
        }}
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
          <TouchableOpacity
            style={styles.closeButton}
            onPress={() => {
              setOptionsOpen(false);
            }}
          >
            <View>
              <Text style={{ color: "white", fontSize: 18 }}>Back</Text>
            </View>
          </TouchableOpacity>
        </View>
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
    backgroundColor: "#3E3E3E",
    height: 320,
    width: 390,
    borderRadius: 10,
  },
  closeButton: {
    backgroundColor: "#5F5F5F",
    width: 300,
    margin: "auto",
    height: 30,
    justifyContent: "center",
    alignItems: "center",
    alignSelf: "center",
    marginTop: 10,
    marginBottom: 10,
    borderRadius: 5,
  },
});
