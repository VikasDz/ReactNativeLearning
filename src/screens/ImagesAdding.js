import React from "react";
import { Text, View } from "react-native";
import CardDetails from "../components/CardDetails";

const ImagesAdding = () => {
  return (
    <View>
      <Text
        style={{
          textAlign: "center",
          marginTop: 6,
          marginEnd: 7,
          marginBottom: 5,
        }}>
        Image In React Native :)
      </Text>
      <CardDetails 
      textData = "This is My 1st Image"
      imgSrc = {require("../../assets/image1.jpg")} />
      <CardDetails 
       textData = "This is My 2nd Image"
       imgSrc = {require("../../assets/image2.jpg")} />
      <CardDetails 
      textData = "This is My 3rd Image"
      imgSrc = {require("../../assets/nodejs.jpg")} 
      />
    </View>
  );
};

export default ImagesAdding;
