import React from "react";
import { Text, View, StyleSheet, Image } from "react-native";

const CardDetails = (props) => {


  return (
    <View style={styles3.listStyle}>

      <Text> {props.textData} 🙂</Text>

      <Image
        style={styles3.imageStyle}
        source={props.imgSrc}
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

export default CardDetails;
