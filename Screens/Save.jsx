import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Pressable,
  Alert,
} from "react-native";
import React, { useState } from "react";
import Modal from "react-native-modal";
import { Ionicons, Feather } from "@expo/vector-icons";

const Save = ({ setSaveImage }) => {
  const [saveModal, setSaveModal] = useState(false);

  return (
    <View>
      <TouchableOpacity
        style={styles.saveMenuButton}
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
          top: 30,
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
        backdropOpacity={0.67}
      >
        <View>
          <Pressable
            style={styles.saveToGalleryButton}
            onPress={() => {
              setSaveImage(true);
              setSaveModal(false);
            }}
          >
            <Text style={styles.buttonText}>Save to gallery</Text>
            <Feather name="download" size={30} color="white" />
          </Pressable>
        </View>
        <View>
          <Pressable
            onPress={() => {
              setSaveModal(false);
            }}
            style={styles.cancelButton}
          >
            <Text style={{ ...styles.buttonText, color: "#3483FA" }}>
              Cancel
            </Text>
          </Pressable>
        </View>
      </Modal>
    </View>
  );
};

export default Save;

const styles = StyleSheet.create({
  saveMenuButton: {
    backgroundColor: "#323232",
    width: 60,
    margin: "auto",
    height: 50,
    justifyContent: "center",
    alignItems: "center",

    borderRadius: 15,
    margin: 5,
  },
  saveToGalleryButton: {
    width: 392,
    height: 60,
    margin: 2,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 10,
    backgroundColor: "#3F3F3F",
    flexDirection: "row",
    top: 290,
    borderColor: "#323232",
    borderWidth: 4,
  },
  buttonText: {
    color: "white",
    fontWeight: "bold",
    fontSize: 18,
    margin: 10,
  },
  cancelButton: {
    backgroundColor: "#3F3F3F",
    width: 400,
    height: 50,
    top: 300,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 14,
  },
});
