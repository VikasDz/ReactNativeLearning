import React from "react";
import { Text, View, StyleSheet, Image } from "react-native";

const ImagesAdding = () => {


  return (
    <View style={styles3.listStyle}>
      <Text style={styles3.textStyle}> Hello Duniya :) </Text>
      <Image
        style={styles3.imageStyle}
        source={require("../../assets/image1.jpg")}
      />
      <Image
        style={styles3.imageStyle}
        source={require("../../assets/image1.jpg")}
      />
      <Image
        style={styles3.imageStyle}
        source={require("../../assets/image1.jpg")}
      />
      
    </View>
  );
};
const styles3 = StyleSheet.create({
  textStyle: {
    fontSize: 20,
    margin: 10,
  },
  listStyle: {
    display: "flex",
    justifyContent: "center",
    alignItems : "center",
  },
  imageStyle: {
    width: 300,
    height: 300,
    margin: 5,
  },
});

export default ImagesAdding;
