import { View, Text, StyleSheet } from "react-native";
import React from "react";

const PositionRelative = () => {
  return (
    <View>
      <View style={[styles.parentView]}>
        <Text style={[styles.childText, styles.commonStyle]}>Position 1</Text>
        <Text style={[styles.childText2, styles.commonStyle]}>Position 2</Text>
        <Text style={[styles.childText3, styles.commonStyle]}>Position 3</Text>
        <Text style={[styles.childText4, styles.commonStyle]}>Position 4</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  parentView: {
    width: "95%",
    height: 500,
    marginTop: 100,
    marginHorizontal: 10,
    borderWidth: 3,
    borderColor: "#101820FF",
    backgroundColor: "aliceblue",
    position: "relative",
  },
  childText: {
    backgroundColor: "#97BC62FF",
    borderColor: "#2C5F2D",
    color: "#2C5F2D",
    right: 0,
    bottom :  0,
  },
  childText2: {
    backgroundColor: "#D4B996FF",
    borderColor: "#A07855FF",
    color: "#A07855FF",
    right: 0,
  },
  childText3: {
    backgroundColor: "#9CC3D5FF",
    borderColor: "#0063B2FF",
    color: "#0063B2FF",
    bottom :  0,
  },
  childText4: {
    backgroundColor: "#9CC3D5FF",
    borderColor: "#0063B2FF",
    color: "#0063B2FF",
    left : 0,

  },
  commonStyle: {
    fontSize: 20,
    width: 60,
    height: 60,
    borderWidth: 1,
    position: "absolute", //Ek Position pe aa Jate Hai..

  },
});

export default PositionRelative;
