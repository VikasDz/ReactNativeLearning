import { View, Text, Button, Alert } from "react-native";
import React from "react";

const ButtonReact = () => {
  return (
    <View>
      <Text
        style={{
          textAlign: "center",
          marginTop: 5,
          marginBottom :120,
          color: "gray",
        }}
      >
        Button In ReactNative
      </Text>
      <Button
      style = {{
          marginTop: 20,
      }}
        title="Our Button"
        onPress={()=>{
            // console.log("Hello")
            Alert.alert("Press To Btn")
        }}
      />
    </View>
  );
};

export default ButtonReact;
