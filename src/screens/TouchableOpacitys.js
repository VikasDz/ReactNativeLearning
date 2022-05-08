import { StyleSheet, Text, View,Alert, TouchableOpacity, Image } from "react-native";
import React from "react";

const TouchableOpacitys = () => {
  return (
    <View>
      <Text
        style={{
          textAlign: "center",
          marginTop: 5,
          marginBottom: 120,
          color: "gray",
        }}
      >
        TouchableOpacity
      </Text>
      <TouchableOpacity
      onPress={() => {
        Alert.alert("Press Here ...")
      }}
      >
        <Text
        style={{
          textAlign: "center",
          marginTop: 5,
          marginBottom: 120,
          color: "gray",
        }}> Join Here</Text>
        <Image
        style={styles3.imageStyle}
        source={require("../../assets/image1.jpg")}
      />
      </TouchableOpacity>
    </View>
  );
};

export default TouchableOpacitys;

const styles3 = StyleSheet.create({
  imageStyle: {
    width: 300,
    display :"flex",
    marginLeft :40,
    marginTop : 10,
    justifyContent :"center",
    alignItems : "center",
    height: 300,
    margin: 5,
  },
});
