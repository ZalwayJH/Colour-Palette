import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Pressable,
} from "react-native";
import React, { useState } from "react";
import Modal from "react-native-modal";
import { Ionicons } from "@expo/vector-icons";

const Save = ({ setSaveImage }) => {
  const [saveModal, setSaveModal] = useState(false);
  return (
    <View>
      <TouchableOpacity
        style={styles.saveButton}
        onPress={() => {
          setSaveModal(true);
        }}
      >
        <Ionicons name="ios-save" size={30} color="white" />
      </TouchableOpacity>
      <Modal
        style={{
          flex: 1,
          justifyContent: "center",
          alignItems: "center",
          alignSelf: "center",
        }}
        isVisible={saveModal}
        animationIn="slideInUp"
        animationOut="slideOutDown"
        backdropTransitionOutTiming={0}
        onBackdropPress={() => {
          setSaveModal(false);
        }}
        onBackButtonPress={() => {
          setSaveModal(false);
        }}
        backdropOpacity={0.3}
      >
        <View
          style={{
            backgroundColor: "grey",
            width: 400,
            height: 100,
            top: 350,
            alignItems: "center",
            justifyContent: "center",
            borderRadius: 15,
          }}
        >
          <TouchableOpacity
            onPress={() => {
              setSaveImage(true);
              setSaveModal(false);
            }}
          >
            <Text style={{ color: "white" }}>Save to gallery</Text>
          </TouchableOpacity>
        </View>
      </Modal>
    </View>
  );
};

export default Save;

const styles = StyleSheet.create({
  saveButton: {
    backgroundColor: "#323232",
    width: 60,
    margin: "auto",
    height: 50,
    justifyContent: "center",
    alignItems: "center",

    borderRadius: 15,
    margin: 5,
  },
});
