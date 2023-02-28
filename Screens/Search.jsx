import {
  StyleSheet,
  TextInput,
  View,
  TouchableOpacity,
  useWindowDimensions,
} from "react-native";
import Modal from "react-native-modal";
import { Foundation } from "@expo/vector-icons";
import React, { useState, useRef } from "react";

const Search = ({ setColour }) => {
  const [searchOpen, setSearchOpen] = useState(false);
  const [text, setText] = useState("");
  const { width } = useWindowDimensions();
  const input = useRef(null);
  const hexHashCheck = /^#([0-9a-f]{3}){1,2}$/i;
  const hexNoHashCheck = /^([0-9a-f]{3}){1,2}$/i;

  const handleSubmit = () => {
    if (
      hexHashCheck.test(text) === true &&
      hexNoHashCheck.test(text) !== true
    ) {
      const hexCode = text.slice(1);

      setColour(hexCode);
      setText("");
      setSearchOpen(false);
    }

    if (
      hexHashCheck.test(text) !== true &&
      hexNoHashCheck.test(text) === true
    ) {
      setColour(text);
      setText("");
      setSearchOpen(false);
    }

    if (
      hexHashCheck.test(text) !== true &&
      hexNoHashCheck.test(text) !== true
    ) {
      alert("invalid hex code");
    }
  };

  return (
    <View>
      <TouchableOpacity
        onPress={() => {
          setSearchOpen(!searchOpen);
        }}
        style={styles.searchButton}
      >
        <Foundation name="magnifying-glass" size={30} color="white" />
      </TouchableOpacity>

      <Modal
        style={styles.searchModal}
        onModalWillShow={() => {
          const timeout = setTimeout(() => {
            input.current.focus();
          }, 100);
          return () => clearTimeout(timeout);
        }}
        isVisible={searchOpen}
        animationIn="slideInLeft"
        animationOut="slideOutLeft"
        backdropTransitionOutTiming={0}
        onBackButtonPress={() => {
          setSearchOpen(false);
        }}
        onBackdropPress={() => {
          setSearchOpen(false);
        }}
        backdropOpacity={0}
      >
        <View style={{ ...styles.searchBar, width: width }}>
          <TextInput
            ref={input}
            style={{ color: "white" }}
            value={text}
            onChangeText={setText}
            maxLength={7}
            allowFontScaling
            autoCapitalize="characters"
            autoFocus={false}
            placeholder="Enter the hex code here"
            placeholderTextColor="white"
            onSubmitEditing={handleSubmit}
          ></TextInput>
        </View>
      </Modal>
    </View>
  );
};

export default Search;

const styles = StyleSheet.create({
  searchButton: {
    backgroundColor: "#323232",
    width: 60,
    margin: "auto",
    height: 50,
    justifyContent: "center",
    alignItems: "center",

    borderRadius: 15,
    margin: 5,
  },
  searchBar: {
    backgroundColor: "#1A1A1A",
    borderColor: "#323232",
    borderTopWidth: 7,
    height: 50,
    justifyContent: "center",
    alignSelf: "center",

    padding: 10,
    color: "white",
    fontWeight: 18,
  },
  searchModal: {
    justifyContent: "center",
    alignItems: "center",
    alignSelf: "center",
    marginTop: 345,
    position: "absolute",
  },
});
