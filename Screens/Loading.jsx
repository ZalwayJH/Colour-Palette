import { StyleSheet, Text, View, Animated } from "react-native";
import React, { useRef } from "react";
import CircularProgress from "react-native-circular-progress-indicator";

const Loading = ({ loading }) => {
  let loadingVal = 99;
  if (loading === true) {
    loadingVal = 100;
  }
  return (
    <View style={styles.container} accessibilityRole="progressbar">
      <CircularProgress
        value={loadingVal}
        valueSuffix={"%"}
        radius={120}
        duration={500}
        progressValueColor={"#ecf0f1"}
        maxValue={100}
        title={"Loading.."}
        titleColor={"white"}
        titleStyle={{ fontWeight: "bold" }}
      />
    </View>
  );
};

export default Loading;

const styles = StyleSheet.create({
  container: {
    top: 80,
    width: 300,
    height: 300,
    justifyContent: "center",
    alignItems: "center",
    alignSelf: "center",
    marginBottom: 80,
  },
  background: {
    width: "100%",
    height: "100%",
    borderRadius: 300 / 2,
    borderWidth: 4,
    opacity: 0.25,
  },
  progress: {
    width: "100%",
    height: "100%",
    borderRadius: 300 / 2,
    borderLeftColor: "transparent",
    borderRightColor: "transparent",
    borderBottomColor: "transparent",
    borderWidth: 4,
    position: "absolute",
  },
});
