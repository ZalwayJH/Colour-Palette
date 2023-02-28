import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Pressable,
} from "react-native";
import React, { useState } from "react";
import Modal from "react-native-modal";
import { Ionicons, Feather } from "@expo/vector-icons";

const Save = ({ setSaveImage }) => {
  const [saveModal, setSaveModal] = useState(false);
  const [successMessage, setSuccessMessage] = useState(false);

  const timeOutMessage = () => {
    setSuccessMessage(false);
  };

  return (
    <View>
      <Modal
        isVisible={successMessage}
        animationIn="fadeIn"
        animationOut="fadeOut"
        backdropTransitionOutTiming={0}
        backdropOpacity={0}
        onBackdropPress={() => {
          setSuccessMessage(false);
        }}
      >
        <View style={styles.saveMessage}>
          <Text
            style={{
              fontSize: 16,
              color: "white",
            }}
          >
            Image successfully saved to gallery
          </Text>
        </View>
      </Modal>
      <TouchableOpacity
        style={styles.saveMenuButton}
        onPress={() => {
          setSaveModal(true);
        }}
      >
        <Ionicons name="ios-save" size={30} color="white" />
      </TouchableOpacity>
      <Modal
        style={styles.saveModal}
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
        <View style={styles.saveButtonToGallery}>
          <Pressable
            android_ripple={{ color: "white" }}
            style={styles.savePressable}
            onPress={() => {
              setSaveImage(true);
              setSaveModal(false);
              setSuccessMessage(true);
              setTimeout(timeOutMessage, 2000);
            }}
          >
            <Text style={styles.buttonText}>Save to gallery</Text>
            <Feather name="download" size={30} color="white" />
          </Pressable>
        </View>
        <View style={styles.cancelButton}>
          <Pressable
            android_ripple={{ color: "white" }}
            onPress={() => {
              setSaveModal(false);
            }}
            style={{ width: 390, alignItems: "center" }}
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
  saveModal: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    alignSelf: "center",
    top: 30,
  },

  buttonText: {
    color: "white",
    fontWeight: "bold",
    fontSize: 18,
    margin: 10,
  },
  cancelButton: {
    borderRadius: 10,
    overflow: "hidden",
    backgroundColor: "#3f3f3f",
    top: 300,
    width: 390,
    margin: 0,
  },
  saveButtonToGallery: {
    borderRadius: 10,
    overflow: "hidden",
    backgroundColor: "#3f3f3f",
    top: 290,
    width: 390,
    margin: 0,
  },
  savePressable: {
    width: 390,
    height: 60,
    alignItems: "center",
    alignSelf: "center",
    justifyContent: "center",
    flexDirection: "row",
    borderColor: "#323232",
    borderWidth: 3,
    borderRadius: 10,
  },
  saveMessage: {
    backgroundColor: "rgba(50, 50,50, 0.8)",
    width: 320,
    alignSelf: "center",
    alignItems: "center",
    justifyContent: "center",
    height: 50,
    borderRadius: 50,
    bottom: 330,
  },
});
